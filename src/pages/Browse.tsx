
import { useState } from "react";
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
import { Heart, Search, Filter, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Mock data for content
const contentItems = [
  {
    id: 1,
    title: "Summer Collection",
    price: 19.99,
    username: "FootGoddess",
    image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    likes: 124,
    isNew: true,
    isFeatured: true,
    tags: ["summer", "outdoors", "beach"],
  },
  {
    id: 2,
    title: "Beach Day Photos",
    price: 14.99,
    username: "SoleMate",
    image: "https://images.unsplash.com/photo-1622633968683-ce0d0b611ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    likes: 88,
    isNew: false,
    isFeatured: true,
    tags: ["beach", "summer", "sand"],
  },
  {
    id: 3,
    title: "Exclusive Set",
    price: 29.99,
    username: "ToesTellAll",
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    likes: 210,
    isNew: true,
    isFeatured: false,
    tags: ["exclusive", "premium"],
  },
  {
    id: 4,
    title: "Weekly Photos",
    price: 9.99,
    username: "FeetLover",
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    likes: 76,
    isNew: false,
    isFeatured: false,
    tags: ["weekly", "casual"],
  },
  {
    id: 5,
    title: "Studio Photoshoot",
    price: 24.99,
    username: "StudioFeet",
    image: "https://images.unsplash.com/photo-1604168612704-edf7120be425?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    likes: 142,
    isNew: true,
    isFeatured: false,
    tags: ["studio", "professional", "highquality"],
  },
  {
    id: 6,
    title: "Winter Collection",
    price: 17.99,
    username: "SnowToes",
    image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    likes: 98,
    isNew: false,
    isFeatured: true,
    tags: ["winter", "cozy", "socks"],
  },
  {
    id: 7,
    title: "Pedicure Special",
    price: 12.99,
    username: "NailArtist",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    likes: 156,
    isNew: true,
    isFeatured: false,
    tags: ["pedicure", "nailart", "polish"],
  },
  {
    id: 8,
    title: "Yoga Poses",
    price: 15.99,
    username: "YogaFeet",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    likes: 112,
    isNew: false,
    isFeatured: true,
    tags: ["yoga", "fitness", "wellness"],
  },
];

// Categories and tags for filters
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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortOption, setSortOption] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 50]); // Min, Max
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

  // Filter and sort content based on user selections
  const filteredContent = contentItems
    .filter((item) => {
      // Search term filter
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.username.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategory === "All Categories" || 
                             (selectedCategory === "Premium" && item.price > 20);
      
      // Price range filter
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
      
      // Tags filter
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => item.tags.includes(tag));
      
      return matchesSearch && matchesCategory && matchesPrice && matchesTags;
    })
    .sort((a, b) => {
      // Sort based on selected option
      if (sortOption === "newest") {
        return a.isNew ? -1 : 1;
      } else if (sortOption === "popular") {
        return b.likes - a.likes;
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
            <h1 className="text-3xl font-bold mb-2">Browse <span className="gold-text">Content</span></h1>
            <p className="text-gray-600">
              Discover and purchase high-quality content from our verified sellers
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search and filters section */}
            <div className="w-full lg:w-1/4 space-y-6">
              {/* Search */}
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
              
              {/* Mobile filters toggle */}
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
              
              {/* Filters - hidden on mobile unless toggled */}
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
            
            {/* Content grid */}
            <div className="w-full lg:w-3/4">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-gray-600">
                  Showing {filteredContent.length} results
                </p>
              </div>
              
              {filteredContent.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                  <h3 className="text-xl font-medium mb-2">No content found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters or search term to find what you're looking for.
                  </p>
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
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredContent.map((item) => (
                    <Link to={`/content/${item.id}`} key={item.id}>
                      <Card className="overflow-hidden hover-scale">
                        <div className="relative">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-64 object-cover"
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
                            <div className="flex justify-between items-center">
                              <span className="text-white text-sm">@{item.username}</span>
                              <span className="text-white font-bold">${item.price}</span>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-3 flex justify-between items-center">
                          <div className="flex items-center gap-1 text-gray-600">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm">{item.likes}</span>
                          </div>
                          <div className="flex gap-1">
                            {item.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {item.tags.length > 2 && (
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
