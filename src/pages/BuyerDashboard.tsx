
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Clock, User } from "lucide-react";

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState("purchases");
  
  // Mock data for buyer dashboard
  const recentPurchases = [
    { id: 1, name: "Summer Collection", seller: "GoldenSteps", price: "$15.00", date: "April 3, 2025", image: "https://images.unsplash.com/photo-1613677135865-3e7f85ad94b1?w=400&h=400&auto=format&q=80" },
    { id: 2, name: "Beach Day Set", seller: "ArtsyToes", price: "$12.50", date: "April 1, 2025", image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&auto=format&q=80" },
  ];
  
  const favorites = [
    { id: 1, name: "SoleFocus", displayName: "Emma Johnson", rating: 4.9, content: { photos: 98, videos: 34 }, image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&auto=format&q=80" },
    { id: 2, name: "WalkThis_Way", displayName: "Alexander Smith", rating: 4.7, content: { photos: 104, videos: 27 }, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&q=80" },
  ];
  
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "March 2025",
    credits: 50,
  };

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Buyer Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Profile Summary */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-4">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback className="bg-gold text-white text-xl">{userData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{userData.name}</h3>
                <p className="text-gray-500">{userData.email}</p>
                <Badge className="mt-2 bg-gold">Buyer</Badge>
              </div>
              
              <div className="space-y-3 mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Member since:</span>
                  <span className="font-medium">{userData.memberSince}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Credits:</span>
                  <span className="font-medium text-gold">{userData.credits}</span>
                </div>
                <Button className="w-full mt-4 bg-gold hover:bg-gold-dark">
                  Add Credits
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="purchases" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="purchases" className="text-center">Recent Purchases</TabsTrigger>
                <TabsTrigger value="favorites" className="text-center">Favorites</TabsTrigger>
                <TabsTrigger value="account" className="text-center">Account</TabsTrigger>
              </TabsList>
              
              <TabsContent value="purchases">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Purchases</CardTitle>
                      <Button variant="outline" size="sm">
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {recentPurchases.length > 0 ? (
                      <div className="space-y-4">
                        {recentPurchases.map((purchase) => (
                          <div key={purchase.id} className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="h-16 w-16 rounded-md overflow-hidden">
                              <img 
                                src={purchase.image} 
                                alt={purchase.name} 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{purchase.name}</h4>
                              <p className="text-sm text-gray-500">by {purchase.seller}</p>
                              <div className="flex items-center mt-1">
                                <Clock className="h-3 w-3 mr-1 text-gray-400" />
                                <span className="text-xs text-gray-500">{purchase.date}</span>
                              </div>
                            </div>
                            <div className="font-medium text-gold">{purchase.price}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6 text-gray-500">
                        <ShoppingCart className="mx-auto h-12 w-12 text-gray-300 mb-2" />
                        <p>No purchases yet</p>
                        <Button variant="link" className="text-gold mt-2">
                          Browse Content
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="favorites">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Favorite Creators</CardTitle>
                      <Button variant="outline" size="sm">
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {favorites.length > 0 ? (
                      <div className="space-y-4">
                        {favorites.map((seller) => (
                          <div key={seller.id} className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                            <Avatar className="h-14 w-14 border-2 border-gold">
                              <AvatarImage src={seller.image} />
                              <AvatarFallback className="bg-gold text-white">
                                {seller.displayName.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h4 className="font-semibold">{seller.displayName}</h4>
                              <p className="text-sm text-gray-500">@{seller.name}</p>
                              <div className="flex items-center mt-1">
                                <span className="text-xs text-gray-500">{seller.content.photos} Photos • {seller.content.videos} Videos</span>
                              </div>
                            </div>
                            <Button size="sm" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                              <Heart className="h-4 w-4 mr-1" />
                              Following
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6 text-gray-500">
                        <Heart className="mx-auto h-12 w-12 text-gray-300 mb-2" />
                        <p>No favorites yet</p>
                        <Button variant="link" className="text-gold mt-2">
                          Browse Sellers
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Personal Information</h4>
                        <div className="space-y-2">
                          <div className="grid grid-cols-3 gap-4 items-center">
                            <span className="text-sm text-gray-500">Name:</span>
                            <span className="col-span-2">{userData.name}</span>
                          </div>
                          <div className="grid grid-cols-3 gap-4 items-center">
                            <span className="text-sm text-gray-500">Email:</span>
                            <span className="col-span-2">{userData.email}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-2">Privacy Settings</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <p>Show activity status</p>
                              <p className="text-xs text-gray-500">Let sellers know when you're online</p>
                            </div>
                            <div>
                              {/* Placeholder for toggle */}
                              <div className="h-6 w-12 bg-gray-200 rounded-full"></div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p>Email notifications</p>
                              <p className="text-xs text-gray-500">Receive updates and offers by email</p>
                            </div>
                            <div>
                              {/* Placeholder for toggle */}
                              <div className="h-6 w-12 bg-gold rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 pt-4">
                        <Button className="bg-gold hover:bg-gold-dark">Save Changes</Button>
                        <Button variant="outline">Reset</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuyerDashboard;
