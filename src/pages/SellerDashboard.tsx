
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ChevronUp, Image, Video, DollarSign, Star, 
  Users, Upload, BarChart3, Settings, Plus, User,
  X, Instagram, FileText, Camera, Captions, Wallet,
  CreditCard, Banknote, CheckCircle, ArrowRight,
  TrendingUp, ArrowUpRight, ArrowDownRight, Eye,
  Filter, ArrowDown, ArrowUp
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const SellerDashboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [withdrawDialogOpen, setWithdrawDialogOpen] = useState(false);
  const [withdrawStage, setWithdrawStage] = useState<"method" | "amount" | "confirm" | "success">("method");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileType, setFileType] = useState<"image" | "video" | null>(null);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [price, setPrice] = useState("");
  const [uploadStep, setUploadStep] = useState<"select" | "details">("select");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawNote, setWithdrawNote] = useState("");
  const [isProcessingWithdrawal, setIsProcessingWithdrawal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  // Define the content items first, before using them
  const contentItems = [
    { id: 1, type: "photo", title: "Beach Day", likes: 24, sales: 7, price: "$5.99", date: "2025-03-15", thumbnail: "https://images.unsplash.com/photo-1613677135865-3e7f85ad94b1?w=400&h=400&auto=format&q=80" },
    { id: 2, type: "photo", title: "Summer Vibes", likes: 18, sales: 5, price: "$4.99", date: "2025-03-10", thumbnail: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&auto=format&q=80" },
    { id: 3, type: "video", title: "Walking Tour", likes: 32, sales: 12, price: "$9.99", date: "2025-04-01", thumbnail: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400&h=400&auto=format&q=80" },
    { id: 4, type: "photo", title: "Winter Collection", likes: 15, sales: 3, price: "$7.99", date: "2025-02-20", thumbnail: "https://images.unsplash.com/photo-1551489186-cf8726f514f5?w=400&h=400&auto=format&q=80" },
    { id: 5, type: "video", title: "Beach Sunset", likes: 45, sales: 18, price: "$12.99", date: "2025-03-25", thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&auto=format&q=80" },
  ];

  // New state for filter and sort
  const [filterPopoverOpen, setFilterPopoverOpen] = useState(false);
  const [sortPopoverOpen, setSortPopoverOpen] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "photo" | "video">("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "price-high" | "price-low" | "popular">("newest");
  const [filteredContent, setFilteredContent] = useState(contentItems);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("tab");
    
    if (tabParam && ["overview", "content", "earnings", "settings", "analytics"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location]);

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

  const paymentMethods = [
    { 
      id: "bank_transfer", 
      name: "Bank Transfer", 
      icon: <Banknote className="h-6 w-6" />,
      description: "2-3 business days",
      fee: "No fee",
      isDefault: true
    },
    { 
      id: "paypal", 
      name: "PayPal", 
      icon: <DollarSign className="h-6 w-6" />, 
      description: "Instant",
      fee: "1% fee",
      isDefault: false
    },
    { 
      id: "credit_card", 
      name: "Credit/Debit Card", 
      icon: <CreditCard className="h-6 w-6" />, 
      description: "1-2 business days",
      fee: "2.5% fee",
      isDefault: false
    },
    { 
      id: "wallet", 
      name: "Platform Wallet", 
      icon: <Wallet className="h-6 w-6" />, 
      description: "Instant",
      fee: "No fee",
      isDefault: false
    }
  ];

  // Effect to apply filtering and sorting to content items
  useEffect(() => {
    let filtered = [...contentItems];
    
    // Apply filter
    if (filterType !== "all") {
      filtered = filtered.filter(item => item.type === filterType);
    }
    
    // Apply sort
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case "price-high":
        filtered.sort((a, b) => parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", "")));
        break;
      case "price-low":
        filtered.sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")));
        break;
      case "popular":
        filtered.sort((a, b) => b.sales - a.sales);
        break;
    }
    
    setFilteredContent(filtered);
  }, [filterType, sortBy]);

  const revenueData = [
    { name: 'Jan', revenue: 650 },
    { name: 'Feb', revenue: 730 },
    { name: 'Mar', revenue: 840 },
    { name: 'Apr', revenue: 930 },
    { name: 'May', revenue: 1230 },
    { name: 'Jun', revenue: 1450 },
  ];

  const contentPerformanceData = [
    { name: 'Photo 1', views: 145, sales: 12 },
    { name: 'Video 1', views: 245, sales: 8 },
    { name: 'Photo 2', views: 98, sales: 5 },
    { name: 'Photo 3', views: 187, sales: 15 },
    { name: 'Video 2', views: 210, sales: 9 },
  ];

  const contentTypeData = [
    { name: 'Photos', value: 137 },
    { name: 'Videos', value: 42 },
  ];

  const COLORS = ['#FFD700', '#d4af37', '#FFC72C', '#C5B358'];

  const handleUploadButtonClick = () => {
    setUploadDialogOpen(true);
    resetUploadForm();
  };

  const resetUploadForm = () => {
    setSelectedFile(null);
    setFilePreview(null);
    setFileType(null);
    setTitle("");
    setCaption("");
    setPrice("");
    setUploadStep("select");
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const result = e.target?.result as string;
      setFilePreview(result);
    };
    fileReader.readAsDataURL(file);
    
    setSelectedFile(file);
    
    if (file.type.startsWith("image/")) {
      setFileType("image");
    } else if (file.type.startsWith("video/")) {
      setFileType("video");
    }
    
    setUploadStep("details");
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmitUpload = () => {
    if (!selectedFile || !title || !price) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Content uploaded successfully!",
      description: "Your new content is now available on your profile",
    });
    
    const newContentItem = {
      id: contentItems.length + 1,
      type: fileType === "image" ? "photo" : "video",
      title: title,
      likes: 0,
      sales: 0,
      price: `$${price}`,
      date: new Date().toISOString().split('T')[0],
      thumbnail: filePreview || ""
    };
    
    setUploadDialogOpen(false);
    resetUploadForm();
  };

  const handleWithdrawButtonClick = () => {
    setSelectedPaymentMethod(paymentMethods.find(method => method.isDefault)?.id || null);
    setWithdrawAmount("");
    setWithdrawNote("");
    setWithdrawStage("method");
    setWithdrawDialogOpen(true);
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
    setWithdrawStage("amount");
  };

  const handleWithdrawAmountSubmit = () => {
    const amount = parseFloat(withdrawAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid withdrawal amount",
        variant: "destructive"
      });
      return;
    }
    
    if (amount > sellerData.balance) {
      toast({
        title: "Insufficient funds",
        description: "You cannot withdraw more than your available balance",
        variant: "destructive"
      });
      return;
    }
    
    setWithdrawStage("confirm");
  };

  const handleWithdrawalConfirmation = () => {
    setIsProcessingWithdrawal(true);
    
    setTimeout(() => {
      setIsProcessingWithdrawal(false);
      setWithdrawStage("success");
      
      toast({
        title: "Withdrawal initiated",
        description: `$${withdrawAmount} will be sent to your selected payment method`,
      });
    }, 1500);
  };

  const closeWithdrawDialog = () => {
    setWithdrawDialogOpen(false);
    setTimeout(() => {
      setWithdrawStage("method");
    }, 300);
  };

  const getWithdrawalFee = () => {
    const selectedMethod = paymentMethods.find(method => method.id === selectedPaymentMethod);
    const amount = parseFloat(withdrawAmount) || 0;
    
    if (selectedMethod?.id === "paypal") {
      return amount * 0.01; // 1% fee
    } else if (selectedMethod?.id === "credit_card") {
      return amount * 0.025; // 2.5% fee
    }
    
    return 0; // No fee
  };

  const getWithdrawalTotal = () => {
    const amount = parseFloat(withdrawAmount) || 0;
    return amount - getWithdrawalFee();
  };

  const handleSettingsClick = () => {
    setActiveTab("settings");
  };

  const handleAnalyticsClick = () => {
    setActiveTab("analytics");
  };

  const handleContentClick = () => {
    setActiveTab("content");
  };

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Seller Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
          
          <div className="lg:col-span-3">
            <Tabs value={activeTab} className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="content">My Content</TabsTrigger>
                <TabsTrigger value="earnings">Earnings</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              
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
                      <Progress value={85} className="mt-2 bg-gray-200" />
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
                        <Button 
                          className="h-auto py-4 flex flex-col bg-gold hover:bg-gold-dark"
                          onClick={handleUploadButtonClick}
                        >
                          <Upload className="h-6 w-6 mb-1" />
                          <span>Upload Content</span>
                        </Button>
                        <Button 
                          className="h-auto py-4 flex flex-col" 
                          variant="outline"
                          onClick={handleWithdrawButtonClick}
                        >
                          <DollarSign className="h-6 w-6 mb-1" />
                          <span>Withdraw Funds</span>
                        </Button>
                        <Button 
                          className="h-auto py-4 flex flex-col" 
                          variant="outline"
                          onClick={handleSettingsClick}
                        >
                          <Settings className="h-6 w-6 mb-1" />
                          <span>Settings</span>
                        </Button>
                        <Button 
                          className="h-auto py-4 flex flex-col" 
                          variant="outline"
                          onClick={handleAnalyticsClick}
                        >
                          <BarChart3 className="h-6 w-6 mb-1" />
                          <span>Analytics</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="content">
                <Card className="mb-6">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>My Content</CardTitle>
                      <Button 
                        className="bg-gold hover:bg-gold-dark"
                        onClick={handleUploadButtonClick}
                      >
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
                      
                      <Popover open={filterPopoverOpen} onOpenChange={setFilterPopoverOpen}>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="flex gap-1 items-center">
                            <Filter className="h-4 w-4" />
                            Filter
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-48 p-2 bg-white">
                          <div className="space-y-2">
                            <h3 className="font-medium text-sm mb-2">Content Type</h3>
                            <div className="space-y-1">
                              <Button 
                                variant={filterType === "all" ? "default" : "ghost"} 
                                className={`w-full justify-start text-left ${filterType === "all" ? "bg-gold hover:bg-gold-dark" : ""}`}
                                onClick={() => {
                                  setFilterType("all");
                                  setFilterPopoverOpen(false);
                                }}
                              >
                                All
                              </Button>
                              <Button 
                                variant={filterType === "photo" ? "default" : "ghost"} 
                                className={`w-full justify-start text-left ${filterType === "photo" ? "bg-gold hover:bg-gold-dark" : ""}`}
                                onClick={() => {
                                  setFilterType("photo");
                                  setFilterPopoverOpen(false);
                                }}
                              >
                                Photos
                              </Button>
                              <Button 
                                variant={filterType === "video" ? "default" : "ghost"} 
                                className={`w-full justify-start text-left ${filterType === "video" ? "bg-gold hover:bg-gold-dark" : ""}`}
                                onClick={() => {
                                  setFilterType("video");
                                  setFilterPopoverOpen(false);
                                }}
                              >
                                Videos
                              </Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                      
                      <Popover open={sortPopoverOpen} onOpenChange={setSortPopoverOpen}>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="flex gap-1 items-center">
                            {sortBy === "newest" || sortBy === "price-high" || sortBy === "popular" ? (
                              <ArrowDown className="h-4 w-4" />
                            ) : (
                              <ArrowUp className="h-4 w-4" />
                            )}
                            Sort
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-48 p-2 bg-white">
                          <div className="space-y-2">
                            <h3 className="font-medium text-sm mb-2">Sort By</h3>
                            <div className="space-y-1">
                              <Button 
                                variant={sortBy === "newest" ? "default" : "ghost"} 
                                className={`w-full justify-start text-left ${sortBy === "newest" ? "bg-gold hover:bg-gold-dark" : ""}`}
                                onClick={() => {
                                  setSortBy("newest");
                                  setSortPopoverOpen(false);
                                }}
                              >
                                Newest
                              </Button>
                              <Button 
                                variant={sortBy === "oldest" ? "default" : "ghost"} 
                                className={`w-full justify-start text-left ${sortBy === "oldest" ? "bg-gold hover:bg-gold-dark" : ""}`}
                                onClick={() => {
                                  setSortBy("oldest");
                                  setSortPopoverOpen(false);
                                }}
                              >
                                Oldest
                              </Button>
                              <Button 
                                variant={sortBy === "price-high" ? "default" : "ghost"} 
                                className={`w-full justify-start text-left ${sortBy === "price-high" ? "bg-gold hover:bg-gold-dark" : ""}`}
                                onClick={() => {
                                  setSortBy("price-high");
                                  setSortPopoverOpen(false);
                                }}
                              >
                                Price (High to Low)
                              </Button>
                              <Button 
                                variant={sortBy === "price-low" ? "default" : "ghost"} 
                                className={`w-full justify-start text-left ${sortBy === "price-low" ? "bg-gold hover:bg-gold-dark" : ""}`}
                                onClick={() => {
                                  setSortBy("price-low");
                                  setSortPopoverOpen(false);
                                }}
                              >
                                Price (Low to High)
                              </Button>
                              <Button 
                                variant={sortBy === "popular" ? "default" : "ghost"} 
                                className={`w-full justify-start text-left ${sortBy === "popular" ? "bg-gold hover:bg-gold-dark" : ""}`}
                                onClick={() => {
                                  setSortBy("popular");
                                  setSortPopoverOpen(false);
                                }}
                              >
                                Most Popular
                              </Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {filteredContent.map((item) => (
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
                          <Button 
                            className="w-full mt-2"
                            onClick={handleWithdrawButtonClick}
                          >
                            Withdraw
                          </Button>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-sm text-gray-500">Pending Balance</p>
                          <p className="text-2xl font-bold">${sellerData.pendingBalance.toFixed(2)}</p>
                          <p className="text-xs text-gray-500">Available in 7 days</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-sm text-gray-500">This Month</p>
                          <p className="text-2xl font-bold">${sellerData.earnings.thisMonth.toFixed(2)}</p>
                          <div className="flex items-center text-green-500 text-xs mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>18% from last month</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-medium mb-4">Monthly Revenue</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="revenue" stroke="#FFD700" strokeWidth={2} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Transaction History</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 border-b">
                            <div>
                              <p className="font-medium">Content Purchase</p>
                              <p className="text-xs text-gray-500">Today, 10:30 AM</p>
                            </div>
                            <div className="flex items-center text-green-500">
                              <p className="font-medium">+$15.00</p>
                              <ArrowUpRight className="h-4 w-4 ml-1" />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between p-3 border-b">
                            <div>
                              <p className="font-medium">Subscription Payment</p>
                              <p className="text-xs text-gray-500">Yesterday, 8:15 PM</p>
                            </div>
                            <div className="flex items-center text-green-500">
                              <p className="font-medium">+$19.99</p>
                              <ArrowUpRight className="h-4 w-4 ml-1" />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between p-3 border-b">
                            <div>
                              <p className="font-medium">Withdrawal</p>
                              <p className="text-xs text-gray-500">Apr 1, 2025</p>
                            </div>
                            <div className="flex items-center text-red-500">
                              <p className="font-medium">-$150.00</p>
                              <ArrowDownRight className="h-4 w-4 ml-1" />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between p-3">
                            <div>
                              <p className="font-medium">Content Package</p>
                              <p className="text-xs text-gray-500">Mar 28, 2025</p>
                            </div>
                            <div className="flex items-center text-green-500">
                              <p className="font-medium">+$45.00</p>
                              <ArrowUpRight className="h-4 w-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Performance Analytics</CardTitle>
                    <CardDescription>Track and analyze your content performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500">Total Views</p>
                              <p className="text-2xl font-bold">{sellerData.stats.views.toLocaleString()}</p>
                            </div>
                            <div className="bg-gold/10 p-3 rounded-full">
                              <Eye className="h-6 w-6 text-gold" />
                            </div>
                          </div>
                          <div className="flex items-center text-green-500 text-xs mt-2">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>12% this week</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500">Conversion Rate</p>
                              <p className="text-2xl font-bold">8.7%</p>
                            </div>
                            <div className="bg-gold/10 p-3 rounded-full">
                              <ArrowUpRight className="h-6 w-6 text-gold" />
                            </div>
                          </div>
                          <div className="flex items-center text-green-500 text-xs mt-2">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>2.4% this month</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500">Avg. Order Value</p>
                              <p className="text-2xl font-bold">$14.25</p>
                            </div>
                            <div className="bg-gold/10 p-3 rounded-full">
                              <DollarSign className="h-6 w-6 text-gold" />
                            </div>
                          </div>
                          <div className="flex items-center text-red-500 text-xs mt-2">
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                            <span>0.8% this week</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-medium mb-4">Revenue Trend</h3>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={revenueData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Line type="monotone" dataKey="revenue" stroke="#FFD700" strokeWidth={2} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-4">Content Performance</h3>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={contentPerformanceData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="views" fill="#FFC72C" />
                              <Bar dataKey="sales" fill="#d4af37" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <h3 className="font-medium mb-4">Content Distribution</h3>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={contentTypeData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                              >
                                {contentTypeData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <h3 className="font-medium mb-4">Top Performing Content</h3>
                        <Card>
                          <CardContent className="p-0">
                            <div className="space-y-0">
                              <div className="flex items-center justify-between p-4 border-b">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-3">
                                    <Image className="h-5 w-5 text-gold" />
                                  </div>
                                  <div>
                                    <p className="font-medium">Summer Vibes Collection</p>
                                    <p className="text-xs text-gray-500">Photo package</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">$89.00</p>
                                  <p className="text-xs text-gray-500">28 sales</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between p-4 border-b">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-3">
                                    <Video className="h-5 w-5 text-gold" />
                                  </div>
                                  <div>
                                    <p className="font-medium">Beach Walk Tutorial</p>
                                    <p className="text-xs text-gray-500">Video content</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">$45.00</p>
                                  <p className="text-xs text-gray-500">16 sales</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between p-4">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-3">
                                    <Image className="h-5 w-5 text-gold" />
                                  </div>
                                  <div>
                                    <p className="font-medium">Exclusive Sunset</p>
                                    <p className="text-xs text-gray-500">Premium photo</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">$24.99</p>
                                  <p className="text-xs text-gray-500">14 sales</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                    <CardDescription>Manage your account and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <FormLabel>First Name</FormLabel>
                            <Input defaultValue="Olivia" className="mt-1" />
                          </div>
                          <div>
                            <FormLabel>Last Name</FormLabel>
                            <Input defaultValue="Grace" className="mt-1" />
                          </div>
                          <div>
                            <FormLabel>Email Address</FormLabel>
                            <Input defaultValue="olivia@example.com" className="mt-1" />
                          </div>
                          <div>
                            <FormLabel>Phone Number</FormLabel>
                            <Input defaultValue="+1 555-123-4567" className="mt-1" />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Profile Information</h3>
                        <div className="space-y-4">
                          <div>
                            <FormLabel>Username</FormLabel>
                            <Input defaultValue="GoldenSteps" className="mt-1" />
                          </div>
                          <div>
                            <FormLabel>Bio</FormLabel>
                            <Textarea 
                              defaultValue="Passionate content creator specializing in premium foot-focused content. Sharing beauty and elegance since 2025."
                              className="mt-1"
                              rows={4}
                            />
                          </div>
                          <div>
                            <FormLabel>Website</FormLabel>
                            <Input defaultValue="https://oliviagrace.com" className="mt-1" />
                          </div>
                          <div>
                            <FormLabel>Social Media</FormLabel>
                            <div className="flex items-center mt-1">
                              <Instagram className="h-5 w-5 text-gray-400 mr-2" />
                              <Input defaultValue="@olivia.grace" className="flex-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Payment Settings</h3>
                        <div className="space-y-4">
                          <div>
                            <FormLabel>Default Payment Method</FormLabel>
                            <RadioGroup defaultValue="bank" className="mt-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="bank" id="bank" />
                                <FormLabel htmlFor="bank" className="cursor-pointer">Bank Transfer</FormLabel>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="paypal" id="paypal" />
                                <FormLabel htmlFor="paypal" className="cursor-pointer">PayPal</FormLabel>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="card" id="card" />
                                <FormLabel htmlFor="card" className="cursor-pointer">Credit/Debit Card</FormLabel>
                              </div>
                            </RadioGroup>
                          </div>
                          
                          <div>
                            <FormLabel>Default Currency</FormLabel>
                            <RadioGroup defaultValue="usd" className="mt-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="usd" id="usd" />
                                <FormLabel htmlFor="usd" className="cursor-pointer">USD - US Dollar</FormLabel>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="eur" id="eur" />
                                <FormLabel htmlFor="eur" className="cursor-pointer">EUR - Euro</FormLabel>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="gbp" id="gbp" />
                                <FormLabel htmlFor="gbp" className="cursor-pointer">GBP - British Pound</FormLabel>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <FormLabel>Email Notifications</FormLabel>
                            <Switch id="email-notifications" />
                          </div>
                          <div className="flex items-center justify-between">
                            <FormLabel>SMS Notifications</FormLabel>
                            <Switch id="sms-notifications" />
                          </div>
                          <div className="flex items-center justify-between">
                            <FormLabel>Marketing Updates</FormLabel>
                            <Switch id="marketing-updates" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 flex justify-end space-x-4">
                        <Button variant="outline">Cancel</Button>
                        <Button className="bg-gold hover:bg-gold-dark">Save Changes</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{uploadStep === "select" ? "Upload Content" : "Content Details"}</DialogTitle>
          </DialogHeader>
          
          {uploadStep === "select" ? (
            <div className="space-y-4">
              <div 
                className="border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={triggerFileInput}
              >
                <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400 mt-1">JPG, PNG, or MP4 (max 20MB)</p>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*,video/*" 
                onChange={handleFileSelect}
              />
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline"
                  onClick={() => setUploadDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="bg-gold hover:bg-gold-dark"
                  onClick={triggerFileInput}
                >
                  Select File
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {filePreview && (
                <div className="aspect-square w-full max-h-64 overflow-hidden rounded-md bg-gray-100">
                  {fileType === "image" ? (
                    <img 
                      src={filePreview} 
                      alt="Preview" 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <video 
                      src={filePreview} 
                      className="w-full h-full object-contain" 
                      controls
                    />
                  )}
                </div>
              )}
              <div className="space-y-2">
                <FormLabel>Title</FormLabel>
                <Input 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a title for your content"
                />
              </div>
              <div className="space-y-2">
                <FormLabel>Caption (Optional)</FormLabel>
                <Textarea 
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Add a description for your content"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <FormLabel>Price ($)</FormLabel>
                <Input 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price (e.g. 4.99)"
                  type="number"
                  step="0.01"
                  min="0"
                />
              </div>
              <DialogFooter className="grid grid-cols-2 gap-2 sm:justify-start">
                <Button 
                  variant="outline"
                  onClick={() => setUploadStep("select")}
                >
                  Back
                </Button>
                <Button 
                  className="bg-gold hover:bg-gold-dark"
                  onClick={handleSubmitUpload}
                >
                  Upload Content
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={withdrawDialogOpen} onOpenChange={closeWithdrawDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {withdrawStage === "method" && "Withdraw Funds"}
              {withdrawStage === "amount" && "Enter Amount"}
              {withdrawStage === "confirm" && "Confirm Withdrawal"}
              {withdrawStage === "success" && "Withdrawal Successful"}
            </DialogTitle>
          </DialogHeader>
          
          {withdrawStage === "method" && (
            <div className="space-y-4">
              <p className="text-sm text-gray-500">Select your preferred payment method:</p>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <div 
                    key={method.id} 
                    className={`
                      flex items-center justify-between p-3 rounded-lg cursor-pointer border
                      ${selectedPaymentMethod === method.id ? 'border-gold bg-gold/5' : 'border-gray-200 hover:bg-gray-50'}
                    `}
                    onClick={() => handlePaymentMethodSelect(method.id)}
                  >
                    <div className="flex items-center">
                      <div className="bg-gold/10 p-2 rounded mr-3">
                        {method.icon}
                      </div>
                      <div>
                        <p className="font-medium">{method.name}</p>
                        <p className="text-xs text-gray-500">{method.description} • {method.fee}</p>
                      </div>
                    </div>
                    {method.isDefault && (
                      <Badge className="bg-gold">Default</Badge>
                    )}
                  </div>
                ))}
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
              </DialogFooter>
            </div>
          )}
          
          {withdrawStage === "amount" && (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Available balance: <span className="font-medium text-black">${sellerData.balance.toFixed(2)}</span></p>
              </div>
              <div className="space-y-2">
                <FormLabel>Amount to withdraw ($)</FormLabel>
                <Input 
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  type="number" 
                  step="0.01"
                  min="0.01"
                  max={sellerData.balance}
                  placeholder="Enter amount"
                />
              </div>
              <div className="space-y-2">
                <FormLabel>Note (Optional)</FormLabel>
                <Textarea 
                  value={withdrawNote}
                  onChange={(e) => setWithdrawNote(e.target.value)}
                  placeholder="Add a note to this transaction"
                  rows={2}
                />
              </div>
              <DialogFooter className="grid grid-cols-2 gap-2 sm:justify-start">
                <Button 
                  variant="outline"
                  onClick={() => setWithdrawStage("method")}
                >
                  Back
                </Button>
                <Button 
                  className="bg-gold hover:bg-gold-dark"
                  onClick={handleWithdrawAmountSubmit}
                  disabled={!withdrawAmount || parseFloat(withdrawAmount) <= 0}
                >
                  Continue
                </Button>
              </DialogFooter>
            </div>
          )}
          
          {withdrawStage === "confirm" && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Amount:</span>
                  <span className="font-medium">${parseFloat(withdrawAmount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Fee:</span>
                  <span className="font-medium">${getWithdrawalFee().toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
                  <span className="text-gray-700 font-medium">Total:</span>
                  <span className="font-bold text-gold">${getWithdrawalTotal().toFixed(2)}</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">The funds will be sent to:</p>
                <div className="flex items-center mt-2">
                  <div className="bg-gold/10 p-2 rounded mr-3">
                    {paymentMethods.find(m => m.id === selectedPaymentMethod)?.icon}
                  </div>
                  <div>
                    <p className="font-medium">{paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}</p>
                    <p className="text-xs text-gray-500">{paymentMethods.find(m => m.id === selectedPaymentMethod)?.description}</p>
                  </div>
                </div>
              </div>
              
              <DialogFooter className="grid grid-cols-2 gap-2 sm:justify-start">
                <Button 
                  variant="outline"
                  onClick={() => setWithdrawStage("amount")}
                  disabled={isProcessingWithdrawal}
                >
                  Back
                </Button>
                <Button 
                  className="bg-gold hover:bg-gold-dark"
                  onClick={handleWithdrawalConfirmation}
                  disabled={isProcessingWithdrawal}
                >
                  {isProcessingWithdrawal ? (
                    <><span className="animate-spin mr-1">◌</span> Processing...</>
                  ) : (
                    'Confirm Withdrawal'
                  )}
                </Button>
              </DialogFooter>
            </div>
          )}
          
          {withdrawStage === "success" && (
            <div className="space-y-4 text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <CheckCircle className="text-green-500 h-6 w-6" />
              </div>
              <p className="font-medium">Withdrawal Initiated Successfully!</p>
              <p className="text-sm text-gray-500">
                Your withdrawal of ${parseFloat(withdrawAmount).toFixed(2)} has been initiated and is being processed.
              </p>
              <p className="text-sm text-gray-500">
                The funds should arrive in your account within {paymentMethods.find(m => m.id === selectedPaymentMethod)?.description.toLowerCase()}.
              </p>
              <DialogFooter className="justify-center mt-4">
                <Button 
                  className="bg-gold hover:bg-gold-dark"
                  onClick={closeWithdrawDialog}
                >
                  Close
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SellerDashboard;

