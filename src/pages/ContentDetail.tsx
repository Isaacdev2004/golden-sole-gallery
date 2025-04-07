
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Heart,
  MessageSquare,
  CheckCircle,
  Share2,
  Lock,
  Eye,
  ShieldAlert,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Mock data for the content detail
const contentDetails = {
  id: "1",
  title: "Summer Collection",
  description: "A beautiful collection of summer-themed foot content, featuring beach settings, sandals, and natural lighting. Includes 25 high-resolution photos.",
  price: 19.99,
  seller: {
    id: 1,
    name: "Amber Rose",
    username: "FootGoddess",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
    verified: true,
    rating: 4.9,
    totalSales: 352,
  },
  mainImage: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  thumbnails: [
    "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1622633968683-ce0d0b611ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  ],
  tags: ["summer", "beach", "outdoors", "sandals", "natural light"],
  likes: 124,
  views: 1892,
  createdAt: "2023-06-15",
  contentType: "photo",
  photoCount: 25,
  reviews: [
    {
      id: 1,
      user: "BeachLover",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      comment: "Absolutely gorgeous photos! High quality and exactly what I was looking for.",
      date: "2023-08-10",
    },
    {
      id: 2,
      user: "FootFan22",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      rating: 4,
      comment: "Great collection, would have liked a couple more closeups but overall very satisfied!",
      date: "2023-07-22",
    },
  ],
  relatedContent: [
    {
      id: 2,
      title: "Beach Day Photos",
      price: 14.99,
      username: "SoleMate",
      image: "https://images.unsplash.com/photo-1622633968683-ce0d0b611ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      title: "Winter Collection",
      price: 17.99,
      username: "SnowToes",
      image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      title: "Yoga Poses",
      price: 15.99,
      username: "YogaFeet",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
  ],
};

const ContentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(contentDetails.mainImage);
  const [liked, setLiked] = useState(false);

  // In a real application, we would fetch the content details based on the ID
  const content = contentDetails; // Placeholder for demonstration

  const handleLike = () => {
    setLiked(!liked);
  };

  const handlePurchase = () => {
    // Handle the purchase logic - to be implemented with payment system
    console.log("Purchase initiated for:", content);
  };

  const handleMessage = () => {
    // Handle the messaging logic - to be implemented with messaging system
    console.log("Message to seller:", content.seller);
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column - Images */}
            <div className="w-full lg:w-3/5">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-md">
                    <img
                      src={selectedImage}
                      alt={content.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Purchase overlay */}
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                      <Lock className="h-12 w-12 text-white mb-4" />
                      <h3 className="text-white text-xl font-bold mb-2">Premium Content</h3>
                      <p className="text-white/80 text-center mb-4 max-w-xs">
                        Purchase this content to access all {content.photoCount} high-resolution photos
                      </p>
                      <Button 
                        className="bg-gold hover:bg-gold-dark text-white" 
                        onClick={handlePurchase}
                      >
                        Unlock for ${content.price}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  {content.thumbnails.map((thumbnail, index) => (
                    <div 
                      key={index} 
                      className={`relative cursor-pointer rounded-md overflow-hidden border-2 ${
                        selectedImage === thumbnail ? "border-gold" : "border-transparent"
                      }`}
                      onClick={() => setSelectedImage(thumbnail)}
                    >
                      <div className="w-20 h-20">
                        <img
                          src={thumbnail}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <Lock className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Tabs defaultValue="details" className="bg-white rounded-lg shadow-sm p-4">
                <TabsList className="w-full">
                  <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                  <TabsTrigger value="reviews" className="flex-1">Reviews ({content.reviews.length})</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="pt-4">
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-gray-700 mb-6">{content.description}</p>
                  
                  <h3 className="font-medium mb-2">Content Details</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-gray-600 text-sm">Content Type</p>
                      <p className="font-medium">{content.contentType === "photo" ? "Photos" : "Videos"}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Items</p>
                      <p className="font-medium">{content.photoCount} items</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Published</p>
                      <p className="font-medium">{content.createdAt}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Views</p>
                      <p className="font-medium">{content.views}</p>
                    </div>
                  </div>
                  
                  <h3 className="font-medium mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {content.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="pt-4 space-y-6">
                  {content.reviews.map((review) => (
                    <div key={review.id} className="pb-4 border-b border-gray-100 last:border-0">
                      <div className="flex items-center mb-2">
                        <img 
                          src={review.avatar}
                          alt={review.user}
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <div className="flex items-center">
                            <p className="font-medium">{review.user}</p>
                            <div className="ml-2 flex">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-sm ${i < review.rating ? "text-gold" : "text-gray-300"}`}>★</span>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-500 text-xs">{review.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                  
                  {content.reviews.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No reviews yet for this content.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Right column - Info and actions */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-2xl font-bold">{content.title}</h1>
                  <div className="flex items-center gap-2">
                    <button
                      className={`p-2 rounded-full ${
                        liked ? "bg-pink-100" : "bg-gray-100"
                      }`}
                      onClick={handleLike}
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          liked ? "text-pink-500 fill-pink-500" : "text-gray-600"
                        }`}
                      />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full">
                      <Share2 className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-2 items-center text-gray-600 text-sm">
                    <Eye className="h-4 w-4" />
                    <span>{content.views} views</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-600 text-sm">
                    <Heart className="h-4 w-4" />
                    <span>{content.likes} likes</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-bold text-gold">${content.price}</h2>
                    <Badge className="bg-green-50 text-green-600 hover:bg-green-50 hover:text-green-600">
                      Instant Access
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    One-time purchase, lifetime access to all {content.photoCount} items
                  </p>
                </div>
                
                <Button
                  className="w-full bg-gold hover:bg-gold-dark mb-3 py-6 text-lg"
                  onClick={handlePurchase}
                >
                  Purchase Now
                </Button>
                
                <div className="text-center text-sm text-gray-600 mb-6">
                  <p className="flex items-center justify-center gap-1">
                    <ShieldAlert className="h-4 w-4" />
                    <span>Secure payment, instant delivery</span>
                  </p>
                </div>
              </div>
              
              {/* Seller info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Link to={`/seller/${content.seller.id}`} className="block">
                      <img 
                        src={content.seller.avatar}
                        alt={content.seller.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </Link>
                    <div>
                      <Link to={`/seller/${content.seller.id}`} className="block">
                        <div className="flex items-center gap-1">
                          <h3 className="font-bold">{content.seller.name}</h3>
                          {content.seller.verified && (
                            <CheckCircle className="h-4 w-4 text-gold fill-gold" />
                          )}
                        </div>
                      </Link>
                      <p className="text-gray-500 text-sm">@{content.seller.username}</p>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-gold">★</span>
                        <span>{content.seller.rating}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">{content.seller.totalSales} sales</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link to={`/seller/${content.seller.id}`} className="flex-1">
                      <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-white">
                        View Profile
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="flex-1 flex items-center justify-center gap-2"
                      onClick={handleMessage}
                    >
                      <MessageSquare className="h-4 w-4" />
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Related content */}
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4">You May Also Like</h3>
                <div className="grid grid-cols-1 gap-4">
                  {content.relatedContent.map((item) => (
                    <Link to={`/content/${item.id}`} key={item.id}>
                      <div className="flex bg-white rounded-lg overflow-hidden shadow-sm hover-scale">
                        <div className="w-24 h-24">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3 flex flex-col justify-center flex-1">
                          <h4 className="font-medium">{item.title}</h4>
                          <div className="flex justify-between items-center">
                            <p className="text-gray-600 text-sm">@{item.username}</p>
                            <p className="text-gold font-bold">${item.price}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContentDetail;
