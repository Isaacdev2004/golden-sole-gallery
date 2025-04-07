import { useState, useRef } from "react";
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
  CreditCard, Banknote, CheckCircle, ArrowRight
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

const SellerDashboard = () => {
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

  const contentItems = [
    { id: 1, type: "photo", title: "Beach Day", likes: 24, sales: 7, price: "$5.99", thumbnail: "https://images.unsplash.com/photo-1613677135865-3e7f85ad94b1?w=400&h=400&auto=format&q=80" },
    { id: 2, type: "photo", title: "Summer Vibes", likes: 18, sales: 5, price: "$4.99", thumbnail: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&auto=format&q=80" },
    { id: 3, type: "video", title: "Walking Tour", likes: 32, sales: 12, price: "$9.99", thumbnail: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400&h=400&auto=format&q=80" },
  ];

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
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="content">My Content</TabsTrigger>
                <TabsTrigger value="earnings">Earnings</TabsTrigger>
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
      
      <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {uploadStep === "select" ? "Upload New Content" : "Content Details"}
            </DialogTitle>
          </DialogHeader>
          
          {uploadStep === "select" ? (
            <div className="grid gap-4 py-4">
              <div 
                className="flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={triggerFileInput}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileSelect}
                  accept="image/*,video/*"
                />
                <div className="bg-gold/20 p-3 rounded-full">
                  <Camera className="h-6 w-6 text-gold" />
                </div>
                <p className="font-medium">Click to upload</p>
                <p className="text-sm text-gray-500">
                  Supports images and videos
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Max file size: 50MB
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24 rounded bg-gray-100 overflow-hidden">
                  {fileType === "image" && filePreview && (
                    <img
                      src={filePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {fileType === "video" && filePreview && (
                    <video
                      src={filePreview}
                      className="w-full h-full object-cover"
                      controls
                    />
                  )}
                  <Badge className="absolute top-1 right-1 bg-black bg-opacity-60">
                    {fileType === "image" ? <Image className="h-3 w-3 mr-1" /> : <Video className="h-3 w-3 mr-1" />}
                    {fileType}
                  </Badge>
                </div>
                <div className="space-y-2 flex-1">
                  <Input
                    id="title"
                    placeholder="Title *"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full"
                  />
                  <div className="flex gap-2">
                    <span className="flex items-center px-3 bg-gray-100 rounded-l border border-gray-300">$</span>
                    <Input
                      id="price"
                      placeholder="Price *"
                      type="number"
                      min="0.99"
                      step="0.01"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="rounded-l-none flex-1"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-gray-500" />
                  <label htmlFor="caption" className="text-sm font-medium">Caption</label>
                </div>
                <Textarea
                  id="caption"
                  placeholder="Write a caption for your content..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  rows={3}
                />
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <p>Add hashtags and mentions with # and @</p>
                  <p>{caption.length}/2200}</p>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            {uploadStep === "select" ? (
              <Button onClick={triggerFileInput}>Select File</Button>
            ) : (
              <Button onClick={handleSubmitUpload}>Upload</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Dialog open={withdrawDialogOpen} onOpenChange={closeWithdrawDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {withdrawStage === "method" && "Select Payment Method"}
              {withdrawStage === "amount" && "Withdraw Funds"}
              {withdrawStage === "confirm" && "Confirm Withdrawal"}
              {withdrawStage === "success" && "Withdrawal Successful"}
            </DialogTitle>
          </DialogHeader>
          
          {withdrawStage === "method" && (
            <div className="py-4">
              <RadioGroup className="space-y-3">
                {paymentMethods.map(method => (
                  <div 
                    key={method.id}
                    className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer ${
                      selectedPaymentMethod === method.id ? 'bg-gold/5 border-gold' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handlePaymentMethodSelect(method.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${selectedPaymentMethod === method.id ? 'bg-gold/20' : 'bg-gray-100'}`}>
                        {method.icon}
                      </div>
                      <div>
                        <p className="font-medium">{method.name}</p>
                        <p className="text-xs text-gray-500">{method.description} • {method.fee}</p>
                      </div>
                    </div>
                    <RadioGroupItem value={method.id} id={method.id} className="mr-2" />
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
          
          {withdrawStage === "amount" && (
            <div className="space-y-6 py-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-sm font-medium">Available Balance</label>
                  <span className="text-sm font-medium text-gold">${sellerData.balance.toFixed(2)}</span>
                </div>
                
                <div className="flex gap-2">
                  <span className="flex items-center px-3 bg-gray-100 rounded-l border border-gray-300">$</span>
                  <Input
                    placeholder="Enter amount"
                    type="number"
                    min="0.01"
                    max={sellerData.balance}
                    step="0.01"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="rounded-l-none flex-1"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button
                    variant="link"
                    size="sm"
                    className="text-xs"
                    onClick={() => setWithdrawAmount(sellerData.balance.toString
