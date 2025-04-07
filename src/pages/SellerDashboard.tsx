import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Import refactored components
import ProfileCard from "@/components/seller-dashboard/ProfileCard";
import QuickStatsCard from "@/components/seller-dashboard/QuickStatsCard";
import OverviewTab from "@/components/seller-dashboard/OverviewTab";
import ContentTab from "@/components/seller-dashboard/ContentTab";
import EarningsTab from "@/components/seller-dashboard/EarningsTab";
import AnalyticsTab from "@/components/seller-dashboard/AnalyticsTab";
import SettingsTab from "@/components/seller-dashboard/SettingsTab";
import UploadDialog from "@/components/seller-dashboard/UploadDialog";
import WithdrawDialog from "@/components/seller-dashboard/WithdrawDialog";

// Import necessary lucide icons
import { Banknote, DollarSign, CreditCard, Wallet } from "lucide-react";

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
  
  // Define the content items - make sure 'type' is explicitly "photo" or "video"
  const [contentItems, setContentItems] = useState([
    { id: 1, type: "photo" as const, title: "Beach Day", likes: 24, sales: 7, price: "$5.99", date: "2025-03-15", thumbnail: "https://images.unsplash.com/photo-1613677135865-3e7f85ad94b1?w=400&h=400&auto=format&q=80" },
    { id: 2, type: "photo" as const, title: "Summer Vibes", likes: 18, sales: 5, price: "$4.99", date: "2025-03-10", thumbnail: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&auto=format&q=80" },
    { id: 3, type: "video" as const, title: "Walking Tour", likes: 32, sales: 12, price: "$9.99", date: "2025-04-01", thumbnail: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400&h=400&auto=format&q=80" },
    { id: 4, type: "photo" as const, title: "Winter Collection", likes: 15, sales: 3, price: "$7.99", date: "2025-02-20", thumbnail: "https://images.unsplash.com/photo-1551489186-cf8726f514f5?w=400&h=400&auto=format&q=80" },
    { id: 5, type: "video" as const, title: "Beach Sunset", likes: 45, sales: 18, price: "$12.99", date: "2025-03-25", thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&auto=format&q=80" },
  ]);

  // State for filters and sorting
  const [filterPopoverOpen, setFilterPopoverOpen] = useState(false);
  const [sortPopoverOpen, setSortPopoverOpen] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "photo" | "video">("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "price-high" | "price-low" | "popular">("newest");
  const [filteredContent, setFilteredContent] = useState(contentItems);

  // Apply tab from URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("tab");
    
    if (tabParam && ["overview", "content", "earnings", "settings", "analytics"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location]);

  // Apply filtering and sorting
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
  }, [filterType, sortBy, contentItems]);

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
      type: fileType === "image" ? "photo" as const : "video" as const,
      title: title,
      likes: 0,
      sales: 0,
      price: `$${price}`,
      date: new Date().toISOString().split('T')[0],
      thumbnail: filePreview || ""
    };
    
    setContentItems([newContentItem, ...contentItems]);
    setUploadDialogOpen(false);
    resetUploadForm();
  };

  const handleUpdateContent = (updatedContent: any[]) => {
    setContentItems(updatedContent);
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
            <ProfileCard
              name={sellerData.name}
              username={sellerData.username}
              verified={sellerData.verified}
              profileImage={sellerData.profileImage}
              memberSince={sellerData.memberSince}
              rating={sellerData.rating}
              reviews={sellerData.reviews}
              content={sellerData.content}
            />
            
            <QuickStatsCard
              balance={sellerData.balance}
              followers={sellerData.stats.followers}
              views={sellerData.stats.views}
            />
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
                <OverviewTab 
                  sellerData={sellerData}
                  onUploadClick={handleUploadButtonClick}
                  onSettingsClick={handleSettingsClick}
                  onAnalyticsClick={handleAnalyticsClick}
                  onWithdrawClick={handleWithdrawButtonClick}
                />
              </TabsContent>
              
              <TabsContent value="content">
                <ContentTab 
                  filteredContent={filteredContent}
                  filterType={filterType}
                  sortBy={sortBy}
                  filterPopoverOpen={filterPopoverOpen}
                  sortPopoverOpen={sortPopoverOpen}
                  onAddNewClick={handleUploadButtonClick}
                  setFilterPopoverOpen={setFilterPopoverOpen}
                  setSortPopoverOpen={setSortPopoverOpen}
                  setFilterType={setFilterType}
                  setSortBy={setSortBy}
                  onUpdateContent={handleUpdateContent}
                />
              </TabsContent>
              
              <TabsContent value="earnings">
                <EarningsTab 
                  balance={sellerData.balance}
                  pendingBalance={sellerData.pendingBalance}
                  monthlyEarnings={sellerData.earnings.thisMonth}
                  revenueData={revenueData}
                  onWithdrawClick={handleWithdrawButtonClick}
                />
              </TabsContent>
              
              <TabsContent value="analytics">
                <AnalyticsTab 
                  views={sellerData.stats.views}
                  revenueData={revenueData}
                  contentPerformanceData={contentPerformanceData}
                  contentTypeData={contentTypeData}
                  colors={COLORS}
                />
              </TabsContent>
              
              <TabsContent value="settings">
                <SettingsTab />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <UploadDialog 
        open={uploadDialogOpen}
        onOpenChange={setUploadDialogOpen}
        selectedFile={selectedFile}
        filePreview={filePreview}
        fileType={fileType}
        title={title}
        caption={caption}
        price={price}
        uploadStep={uploadStep}
        onTitleChange={setTitle}
        onCaptionChange={setCaption}
        onPriceChange={setPrice}
        onFileSelect={handleFileSelect}
        onUploadStepChange={setUploadStep}
        onSubmit={handleSubmitUpload}
        triggerFileInput={triggerFileInput}
      />
      
      <WithdrawDialog 
        open={withdrawDialogOpen}
        onOpenChange={setWithdrawDialogOpen}
        stage={withdrawStage}
        paymentMethods={paymentMethods}
        selectedPaymentMethod={selectedPaymentMethod}
        withdrawAmount={withdrawAmount}
        withdrawNote={withdrawNote}
        balance={sellerData.balance}
        isProcessing={isProcessingWithdrawal}
        onPaymentMethodSelect={handlePaymentMethodSelect}
        onWithdrawAmountChange={setWithdrawAmount}
        onWithdrawNoteChange={setWithdrawNote}
        onSubmitAmount={handleWithdrawAmountSubmit}
        onConfirmWithdrawal={handleWithdrawalConfirmation}
        onClose={closeWithdrawDialog}
        getWithdrawalFee={getWithdrawalFee}
        getWithdrawalTotal={getWithdrawalTotal}
      />
    </>
  );
};

export default SellerDashboard;
