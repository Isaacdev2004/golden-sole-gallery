
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ChevronUp, Image, Video, DollarSign, Star, 
  Users, Upload, BarChart3, Settings, Plus
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock data for seller dashboard
  const sellerData = {
    name: "Olivia Grace",
    username: "GoldenSteps",
    verified: true,
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&q=80",
    memberSince: "January 2025",
    rating: 4.8,
    reviews: 156,
    balance: 1238.50,
    pendingBalance: 420.75,
    earnings: {
      today: 85.50,
      thisWeek: 412.25,
      thisMonth: 1250.80,
    },
    stats: {
      followers: 256,
      totalContent: 179,
      views: 12584,
    },
    recentSales: [
      { id: 1, item: "Summer Beach Set", buyer: "JohnD", price: "$15.00", date: "Today" },
      { id: 2, item: "Exclusive Package", buyer: "FeetFan22", price: "$45.00", date: "Yesterday" },
      { id: 3, item: "Weekly Subscription", buyer: "SoleCollector", price: "$19.99", date: "Apr 5, 2025" },
    ],
    content: {
      photos: 137,
      videos: 42,
    }
  };

  // Mock content data
  const contentItems = [
    { id: 1, type: "photo", title: "Beach Day", likes: 24, sales: 7, price: "$5.99", thumbnail: "https://images.unsplash.com/photo-1613677135865-3e7f85ad94b1?w=400&h=400&auto=format&q=80" },
    { id: 2, type: "photo", title: "Summer Vibes", likes: 18, sales: 5, price: "$4.99", thumbnail: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&auto=format&q=80" },
    { id: 3, type: "video", title: "Walking Tour", likes: 32, sales: 12, price: "$9.99", thumbnail: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400&h=400&auto=format&q=80" },
  ];

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Seller Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="h-24 w-24 mb-4 border-2 border-gold">
                    <AvatarImage src={sellerData.profileImage} />
                    <AvatarFallback className="bg-gold text-white text-xl">{sellerData.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <h3 className="text-xl font-semibold">{sellerData.name}</h3>
                      {sellerData.verified && (
                        <span className="text-gold">✓</span>
                      )}
                    </div>
                    <p className="text-gray-500">@{sellerData.username}</p>
                    <Badge className="mt-2 bg-gold">Seller</Badge>
                  </div>
                </div>
                
                <div className="space-y-3 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Member since:</span>
                    <span className="font-medium">{sellerData.memberSince}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-medium flex items-center">
                      <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                      {sellerData.rating} ({sellerData.reviews})
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Content:</span>
                    <span className="font-medium">
                      {sellerData.content.photos} Photos • {sellerData.content.videos} Videos
                    </span>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-gold hover:bg-gold-dark">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gold/10 p-2 rounded mr-3">
                        <DollarSign className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Available Balance</p>
                        <p className="font-semibold">${sellerData.balance.toFixed(2)}</p>
                      </div>
                    </div>
                    <ChevronUp className="h-4 w-4 text-green-500" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gold/10 p-2 rounded mr-3">
                        <Users className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Followers</p>
                        <p className="font-semibold">{sellerData.stats.followers}</p>
                      </div>
                    </div>
                    <ChevronUp className="h-4 w-4 text-green-500" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gold/10 p-2 rounded mr-3">
                        <BarChart3 className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total Views</p>
                        <p className="font-semibold">{sellerData.stats.views.toLocaleString()}</p>
                      </div>
                    </div>
                    <ChevronUp className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="content">My Content</TabsTrigger>
                <TabsTrigger value="earnings">Earnings</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Today's Earnings</p>
                          <p className="text-2xl font-bold">${sellerData.earnings.today}</p>
                        </div>
                        <div className="bg-gold/10 p-3 rounded-full">
                          <DollarSign className="h-6 w-6 text-gold" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Total Content</p>
                          <p className="text-2xl font-bold">{sellerData.stats.totalContent}</p>
                        </div>
                        <div className="bg-gold/10 p-3 rounded-full">
                          <Image className="h-6 w-6 text-gold" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Profile Completion</p>
                          <p className="text-2xl font-bold">85%</p>
                        </div>
                        <div className="bg-gold/10 p-3 rounded-full">
                          <User className="h-6 w-6 text-gold" />
                        </div>
                      </div>
                      <Progress value={85} className="mt-2 bg-gray-200" indicatorClassName="bg-gold" />
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {sellerData.recentSales.map((sale) => (
                          <div key={sale.id} className="flex items-center justify-between p-3 border-b last:border-0">
                            <div>
                              <p className="font-medium">{sale.item}</p>
                              <p className="text-xs text-gray-500">Purchased by {sale.buyer} • {sale.date}</p>
                            </div>
                            <p className="font-medium text-gold">{sale.price}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        <Button className="h-auto py-4 flex flex-col bg-gold hover:bg-gold-dark">
                          <Upload className="h-6 w-6 mb-1" />
                          <span>Upload Content</span>
                        </Button>
                        <Button className="h-auto py-4 flex flex-col" variant="outline">
                          <DollarSign className="h-6 w-6 mb-1" />
                          <span>Withdraw Funds</span>
                        </Button>
                        <Button className="h-auto py-4 flex flex-col" variant="outline">
                          <Settings className="h-6 w-6 mb-1" />
                          <span>Settings</span>
                        </Button>
                        <Button className="h-auto py-4 flex flex-col" variant="outline">
                          <BarChart3 className="h-6 w-6 mb-1" />
                          <span>Analytics</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Content Tab */}
              <TabsContent value="content">
                <Card className="mb-6">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>My Content</CardTitle>
                      <Button className="bg-gold hover:bg-gold-dark">
                        <Plus className="h-4 w-4 mr-1" />
                        Add New
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 flex gap-3">
                      <div className="flex-1">
                        <Input placeholder="Search your content..." />
                      </div>
                      <Button variant="outline">Filter</Button>
                      <Button variant="outline">Sort</Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {contentItems.map((item) => (
                        <Card key={item.id} className="overflow-hidden">
                          <div className="relative h-48 bg-gray-100">
                            <img 
                              src={item.thumbnail} 
                              alt={item.title} 
                              className="w-full h-full object-cover"
                            />
                            <Badge className="absolute top-2 right-2 bg-black bg-opacity-60">
                              {item.type === "photo" ? <Image className="h-3 w-3 mr-1" /> : <Video className="h-3 w-3 mr-1" />}
                              {item.type}
                            </Badge>
                          </div>
                          <CardContent className="pt-4">
                            <h3 className="font-medium mb-1">{item.title}</h3>
                            <div className="flex justify-between text-sm text-gray-500">
                              <span>{item.likes} likes</span>
                              <span>{item.sales} sales</span>
                              <span className="text-gold font-medium">{item.price}</span>
                            </div>
                            <div className="flex gap-2 mt-3">
                              <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                              <Button variant="destructive" size="sm">Delete</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Earnings Tab */}
              <TabsContent value="earnings">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Earnings Overview</CardTitle>
                    <CardDescription>Your financial summary and transaction history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-sm text-gray-500">Available Balance</p>
                          <p className="text-2xl font-bold text-gold">${sellerData.balance.toFixed(2)}</p>
                          <Button className="w-full mt-2">Withdraw</Button>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-sm text-gray-500">Pending Balance</p>
                          <p className="text-2xl font-bold">${sellerData.pendingBalance.toFixed(2)}</p>
                          <p className="text-xs text-gray-500 mt-2">Available in 7 days</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-sm text-gray-500">Monthly Earnings</p>
                          <p className="text-2xl font-bold">${sellerData.earnings.thisMonth.toFixed(2)}</p>
                          <p className="text-xs text-green-600 mt-2">↑ 24% from last month</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h3 className="font-medium mb-2">Transaction History</h3>
                      <div className="space-y-2">
                        {sellerData.recentSales.map((sale) => (
                          <div key={sale.id} className="flex items-center justify-between p-2 bg-white rounded border">
                            <div>
                              <p className="font-medium">{sale.item}</p>
                              <p className="text-xs text-gray-500">Purchased by {sale.buyer} • {sale.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gold">{sale.price}</p>
                              <p className="text-xs text-gray-500">Platform fee: ${(parseFloat(sale.price.replace('$', '')) * 0.2).toFixed(2)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Settings Tab */}
              <TabsContent value="settings">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                    <CardDescription>Manage your seller profile information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Display Name</label>
                        <Input defaultValue={sellerData.name} className="mt-1" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Username</label>
                        <Input defaultValue={sellerData.username} className="mt-1" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Bio</label>
                        <textarea 
                          className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2" 
                          rows={4}
                          defaultValue="Professional creator with over 3 years of experience in the industry. Specializing in artistic foot modeling and high-quality content."
                        />
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <Button className="bg-gold hover:bg-gold-dark">Save Changes</Button>
                        <Button variant="outline">Cancel</Button>
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

export default SellerDashboard;
