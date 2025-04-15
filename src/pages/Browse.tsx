import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Search, Filter, ChevronDown, Loader2 } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ContentItem {
  id: string;
  title: string;
  price: number;
  thumbnail_url: string | null;
  type: string;
  seller_id: string;
  created_at: string;
  seller?: {
    username: string | null;
    profile_image: string | null;
  };
  likes_count?: number;
  tags?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

const categories = [
  "All Categories",
  "Photos",
  "Videos",
  "Collections",
  "Premium",
];

const popularTags = [
  "summer",
  "beach",
  "studio",
  "pedicure",
  "yoga",
  "winter",
  "exclusive",
  "socks",
];

const Browse = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortOption, setSortOption] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 50]); // Min, Max
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      setLoading(true);
      try {
        const { data: contentData, error } = await supabase
          .from('content')
          .select(`
            *,
            seller:profiles!inner(username, profile_image)
          `);

        if (error) {
          console.error("Error fetching content:", error);
          toast({
            title: "Error fetching content",
            description: "There was a problem loading the content. Please try again.",
            variant: "destructive",
          });
          setContentItems([]);
        } else {
          const processedContent = await Promise.all((contentData || []).map(async (item) => {
            const { count: likesCount } = await supabase
              .from('likes')
              .select('*', { count: 'exact', head: true })
              .eq('content_id', item.id);

            const creationDate = new Date(item.created_at);
            const now = new Date();
            const daysDifference = Math.floor((now.getTime() - creationDate.getTime()) / (1000 * 60 * 60 * 24));
            const isNew = daysDifference < 7;

            const isFeatured = item.price > 20;

            let tags: string[] = [];
            if (item.type === "photo") {
              tags.push("photo");
              tags.push(item.price > 20 ? "premium" : "standard");
            } else {
              tags.push("video");
              tags.push(item.price > 25 ? "premium" : "standard");
            }

            if (popularTags.length > 0) {
              const randomTag = popularTags[Math.floor(Math.random() * popularTags.length)];
              if (!tags.includes(randomTag)) {
                tags.push(randomTag);
              }
            }

            return {
              ...item,
              seller: {
                username: item.seller?.username || "Anonymous",
                profile_image: item.seller?.profile_image || "/placeholder.svg"
              },
              likes_count: likesCount || 0,
              tags,
              isNew,
              isFeatured
            };
          }));

          setContentItems(processedContent);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        toast({
          title: "Error",
          description: "An unexpected error occurred.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [toast]);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const filteredContent = contentItems
    .filter((item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.seller?.username?.toLowerCase().includes(searchTerm.toLowerCase()) || false);
      
      const matchesCategory = 
        selectedCategory === "All Categories" || 
        (selectedCategory === "Photos" && item.type === "photo") ||
        (selectedCategory === "Videos" && item.type === "video") ||
        (selectedCategory === "Premium" && item.price > 20);
      
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
      
      const matchesTags = 
        selectedTags.length === 0 || 
        selectedTags.some(tag => item.tags?.includes(tag));
      
      return matchesSearch && matchesCategory && matchesPrice && matchesTags;
    })
    .sort((a, b) => {
      if (sortOption === "newest") {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      } else if (sortOption === "popular") {
        return (b.likes_count || 0) - (a.likes_count || 0);
      } else if (sortOption === "price_low") {
        return a.price - b.price;
      } else if (sortOption === "price_high") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Browse <span className="text-gold">Content</span></h1>
            <p className="text-gray-600">
              Discover and purchase high-quality content from our verified sellers
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="w-full lg:w-1/4 space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search content or creator..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="block lg:hidden">
                <Button 
                  variant="outline" 
                  className="w-full flex justify-between items-center"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </Button>
              </div>
              
              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div>
                  <h3 className="font-medium mb-2">Category</h3>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Sort By</h3>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="price_low">Price: Low to High</SelectItem>
                      <SelectItem value="price_high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="pt-4 px-2">
                    <Slider
                      min={0}
                      max={50}
                      step={1}
                      value={priceRange}
                      onValueChange={handlePriceChange}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedTags.includes(tag)
                            ? "bg-gold hover:bg-gold-dark"
                            : "hover:bg-gold/10 hover:text-gold"
                        }`}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {(selectedCategory !== "All Categories" || 
                 priceRange[0] > 0 || 
                 priceRange[1] < 50 || 
                 selectedTags.length > 0) && (
                  <Button 
                    variant="outline" 
                    className="w-full text-gray-600"
                    onClick={() => {
                      setSelectedCategory("All Categories");
                      setPriceRange([0, 50]);
                      setSelectedTags([]);
                    }}
                  >
                    Clear All Filters
                  </Button>
                )}
              </div>
            </div>
            
            <div className="w-full lg:w-3/4">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-gray-600">
                  {loading ? (
                    <span className="flex items-center">
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Loading content...
                    </span>
                  ) : (
                    `Showing ${filteredContent.length} results`
                  )}
                </p>
              </div>
              
              {loading ? (
                <div className="flex justify-center items-center py-20">
                  <Loader2 className="h-10 w-10 animate-spin text-gold" />
                </div>
              ) : filteredContent.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                  <h3 className="text-xl font-medium mb-2">No content found</h3>
                  <p className="text-gray-600 mb-4">
                    {contentItems.length === 0 
                      ? "There is no content available at the moment. Check back soon!"
                      : "Try adjusting your filters or search term to find what you're looking for."
                    }
                  </p>
                  {contentItems.length > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("All Categories");
                        setPriceRange([0, 50]);
                        setSelectedTags([]);
                      }}
                    >
                      Reset All Filters
                    </Button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredContent.map((item) => (
                    <Link to={`/content/${item.id}`} key={item.id}>
                      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="relative">
                          <img 
                            src={item.thumbnail_url || "/placeholder.svg"} 
                            alt={item.title} 
                            className="w-full h-64 object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/placeholder.svg";
                            }}
                          />
                          <div className="absolute top-2 right-2 flex gap-2">
                            {item.isNew && (
                              <Badge className="bg-gold text-white hover:bg-gold-dark">New</Badge>
                            )}
                            {item.isFeatured && (
                              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-gold text-gold">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <p className="text-white font-medium">{item.title}</p>
                            <div className="flex justify-between items-center mt-2">
                              <div className="flex items-center gap-2">
                                <Avatar className="w-8 h-8 border-2 border-white">
                                  <AvatarImage 
                                    src={item.seller.profile_image} 
                                    alt={`${item.seller.username}'s avatar`}
                                  />
                                  <AvatarFallback className="bg-gold text-white">
                                    {item.seller.username.charAt(0).toUpperCase()}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-white text-sm">@{item.seller.username}</span>
                              </div>
                              <span className="text-white font-bold">${item.price.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-3 flex justify-between items-center">
                          <div className="flex items-center gap-1 text-gray-600">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm">{item.likes_count || 0}</span>
                          </div>
                          <div className="flex gap-1">
                            {item.tags?.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {item.tags && item.tags.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{item.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Browse;
