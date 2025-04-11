import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";

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

interface SellerProfile {
  id: string;
  full_name: string | null;
  username: string | null;
  profile_image: string | null;
  bio: string | null;
  created_at: string;
}

// Update the interface for recentSales to use string IDs instead of numbers
interface RecentSale {
  id: string;
  item: string;
  buyer: string;
  price: string;
  date: string;
}

// Update the interface for content items to use string IDs instead of numbers
interface ContentItem {
  id: string;
  type: "photo" | "video";
  title: string;
  likes: number;
  sales: number;
  price: string;
  date: string;
  thumbnail: string;
}

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
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { user } = useAuth();
  
  // Real data from Supabase
  const [sellerData, setSellerData] = useState({
    name: "",
    username: "",
    verified: false,
    profileImage: "",
    memberSince: "",
    rating: 0,
    reviews: 0,
    balance: 0,
    pendingBalance: 0,
    earnings: {
      today: 0,
      thisWeek: 0,
      thisMonth: 0,
    },
    stats: {
      followers: 0,
      totalContent: 0,
      views: 0,
    },
    recentSales: [] as RecentSale[],
    content: {
      photos: 0,
      videos: 0,
    },
    bio: ""
  });

  // Define the content items - make sure 'type' is explicitly "photo" or "video"
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);

  // State for filters and sorting
  const [filterPopoverOpen, setFilterPopoverOpen] = useState(false);
  const [sortPopoverOpen, setSortPopoverOpen] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "photo" | "video">("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "price-high" | "price-low" | "popular">("newest");
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

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

  // Prepare data for charts
  const [revenueDataState, setRevenueData] = useState<Array<{ name: string, revenue: number }>>([]);
  const [contentPerformanceDataState, setContentPerformanceData] = useState<Array<{ name: string, views: number, sales: number }>>([]);
  const [contentTypeDataState, setContentTypeData] = useState<Array<{ name: string, value: number }>>([]);
  const [topPerformingContent, setTopPerformingContent] = useState<Array<{
    id: string;
    title: string;
    type: string;
    price: string;
    sales: number;
  }>>([]);
  const [transactions, setTransactions] = useState<Array<{
    id: string;
    type: string;
    description: string;
    date: string;
    amount: number;
    status: "completed" | "pending";
  }>>([]);

  // Fetch seller profile data
  useEffect(() => {
    const fetchSellerData = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        
        // Get profile data
        const { data: profileData, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
          
        if (error) {
          throw error;
        }

        // Get follower count
        const { count: followerCount, error: followerError } = await supabase
          .from('followers')
          .select('*', { count: 'exact', head: true })
          .eq('following_id', user.id);
          
        if (followerError) {
          console.error("Error fetching followers:", followerError);
        }
        
        // Get content count
        const { data: contentData, error: contentError } = await supabase
          .from('content')
          .select('id, type')
          .eq('seller_id', user.id);
          
        if (contentError) {
          console.error("Error fetching content:", contentError);
        }
        
        const photoCount = contentData?.filter(item => item.type === 'photo').length || 0;
        const videoCount = contentData?.filter(item => item.type === 'video').length || 0;
        
        // Get content views
        const { count: viewCount, error: viewError } = await supabase
          .from('content_views')
          .select('*', { count: 'exact', head: true })
          .in('content_id', contentData?.map(item => item.id) || []);
          
        if (viewError) {
          console.error("Error fetching content views:", viewError);
        }
        
        // Get earnings data
        const { data: earningsData, error: earningsError } = await supabase
          .from('earnings')
          .select('amount, created_at, status')
          .eq('seller_id', user.id);
          
        if (earningsError) {
          console.error("Error fetching earnings:", earningsError);
        }
        
        // Calculate earnings
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
        const weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7).toISOString();
        const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate()).toISOString();
        
        const completedEarnings = earningsData?.filter(item => item.status === 'completed') || [];
        
        const todayEarnings = completedEarnings
          .filter(item => new Date(item.created_at) >= new Date(today))
          .reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
          
        const weekEarnings = completedEarnings
          .filter(item => new Date(item.created_at) >= new Date(weekAgo))
          .reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
          
        const monthEarnings = completedEarnings
          .filter(item => new Date(item.created_at) >= new Date(monthAgo))
          .reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
        
        // Calculate balance
        const availableBalance = completedEarnings.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
        const pendingBalance = (earningsData?.filter(item => item.status === 'pending') || [])
          .reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
        
        // Get recent purchases
        const { data: purchasesData, error: purchasesError } = await supabase
          .from('purchases')
          .select(`
            id, 
            price, 
            purchase_date, 
            content_id, 
            content:content_id (title), 
            buyer_id, 
            buyer:buyer_id (profiles:id (username, full_name))
          `)
          .eq('seller_id', user.id)
          .order('purchase_date', { ascending: false })
          .limit(3);
          
        if (purchasesError) {
          console.error("Error fetching purchases:", purchasesError);
        }
        
        // Format recent sales
        const recentSales: RecentSale[] = purchasesData?.map(purchase => {
          // @ts-ignore - we know the join structure
          const buyerName = purchase.buyer?.profiles?.username || purchase.buyer?.profiles?.full_name || "Anonymous";
          // @ts-ignore - we know the join structure
          const itemName = purchase.content?.title || "Content";
          
          // Format date
          const purchaseDate = new Date(purchase.purchase_date);
          const now = new Date();
          const isToday = purchaseDate.toDateString() === now.toDateString();
          const isYesterday = new Date(now.setDate(now.getDate() - 1)).toDateString() === purchaseDate.toDateString();
          
          let dateDisplay;
          if (isToday) {
            dateDisplay = "Today";
          } else if (isYesterday) {
            dateDisplay = "Yesterday";
          } else {
            dateDisplay = purchaseDate.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            });
          }
          
          return {
            id: purchase.id,
            item: itemName,
            buyer: buyerName,
            price: `$${parseFloat(purchase.price.toString()).toFixed(2)}`,
            date: dateDisplay
          };
        }) || [];

        // Get creation date
        const memberSince = new Date(profileData.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        // Format the seller data
        setSellerData({
          name: profileData.full_name || "Seller",
          username: profileData.username || "user",
          verified: true, // We could add a verified field to the profiles table if needed
          profileImage: profileData.profile_image || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&q=80",
          memberSince,
          rating: 4.8, // Placeholder until we implement ratings
          reviews: 0, // Placeholder until we implement reviews
          balance: availableBalance,
          pendingBalance,
          earnings: {
            today: todayEarnings,
            thisWeek: weekEarnings,
            thisMonth: monthEarnings,
          },
          stats: {
            followers: followerCount || 0,
            totalContent: (photoCount + videoCount) || 0,
            views: viewCount || 0,
          },
          recentSales,
          content: {
            photos: photoCount,
            videos: videoCount,
          },
          bio: profileData.bio || "Content creator"
        });

        // Fetch and set content items
        if (contentData && contentData.length > 0) {
          const formattedContent: ContentItem[] = contentData.map((item, index) => {
            return {
              id: item.id,
              type: item.type as "photo" | "video",
              title: `Content ${index + 1}`, // We'll update this when we fetch the full content data
              likes: 0, // Placeholder
              sales: 0, // Placeholder
              price: "$9.99", // Placeholder
              date: new Date().toISOString().split('T')[0], // Placeholder
              thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&auto=format&q=80" // Placeholder
            };
          });
          
          setContentItems(formattedContent);
        }

        // Create transactions list from earnings and withdrawals
        const fetchTransactions = async () => {
          try {
            // Get earnings
            const { data: earnings, error: earningsError } = await supabase
              .from('earnings')
              .select('*')
              .eq('seller_id', user.id)
              .order('created_at', { ascending: false });
              
            if (earningsError) throw earningsError;
            
            // Get withdrawals
            const { data: withdrawals, error: withdrawalsError } = await supabase
              .from('withdrawals')
              .select('*')
              .eq('seller_id', user.id)
              .order('created_at', { ascending: false });
              
            if (withdrawalsError) throw withdrawalsError;

            // Combine and format transactions
            const formattedEarnings = earnings?.map(earning => ({
              id: earning.id,
              type: 'Content Purchase',
              description: earning.purchase_id ? `Purchase ID: ${earning.purchase_id.substring(0, 8)}...` : 'Platform earnings',
              date: new Date(earning.created_at).toLocaleDateString(),
              amount: Number(earning.amount),
              status: earning.status as "completed" | "pending"
            })) || [];
            
            const formattedWithdrawals = withdrawals?.map(withdrawal => ({
              id: withdrawal.id,
              type: 'Withdrawal',
              description: `Payment method: ${withdrawal.payment_method}`,
              date: new Date(withdrawal.created_at).toLocaleDateString(),
              amount: -Number(withdrawal.amount), // Negative for withdrawals
              status: withdrawal.status as "completed" | "pending"
            })) || [];
            
            // Combine and sort by date (most recent first)
            const allTransactions = [...formattedEarnings, ...formattedWithdrawals]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            
            setTransactions(allTransactions);
          } catch (error) {
            console.error("Error fetching transactions:", error);
          }
        };

        // Generate revenue data by month
        const generateRevenueData = async () => {
          try {
            // Get all completed earnings grouped by month
            const { data: earnings, error: earningsError } = await supabase
              .from('earnings')
              .select('amount, created_at')
              .eq('seller_id', user.id)
              .eq('status', 'completed');
              
            if (earningsError) throw earningsError;
            
            if (earnings && earnings.length > 0) {
              // Group by month
              const monthlyRevenue: Record<string, number> = {};
              const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
              
              earnings.forEach(earning => {
                const date = new Date(earning.created_at);
                const monthKey = `${date.getFullYear()}-${date.getMonth()+1}`;
                const monthName = monthNames[date.getMonth()];
                
                if (!monthlyRevenue[monthKey]) {
                  monthlyRevenue[monthKey] = 0;
                }
                
                monthlyRevenue[monthKey] += Number(earning.amount);
              });
              
              // Convert to array format for chart
              const revenueChartData = Object.keys(monthlyRevenue).map(key => {
                const [year, month] = key.split('-');
                return {
                  name: `${monthNames[parseInt(month)-1]} ${year.slice(2)}`,
                  revenue: parseFloat(monthlyRevenue[key].toFixed(2))
                };
              }).sort((a, b) => {
                const [aMonth, aYear] = a.name.split(' ');
                const [bMonth, bYear] = b.name.split(' ');
                
                if (aYear !== bYear) {
                  return parseInt(aYear) - parseInt(bYear);
                }
                
                return monthNames.indexOf(aMonth) - monthNames.indexOf(bMonth);
              });
              
              setRevenueData(revenueChartData.slice(-6)); // Last 6 months
            } else {
              // Default data if no earnings yet
              const defaultData = [
                { name: 'Jan', revenue: 0 },
                { name: 'Feb', revenue: 0 },
                { name: 'Mar', revenue: 0 },
                { name: 'Apr', revenue: 0 },
                { name: 'May', revenue: 0 },
                { name: 'Jun', revenue: 0 },
              ];
              setRevenueData(defaultData);
            }
          } catch (error) {
            console.error("Error generating revenue data:", error);
            // Set default data in case of error
            const defaultData = [
              { name: 'Jan', revenue: 0 },
              { name: 'Feb', revenue: 0 },
              { name: 'Mar', revenue: 0 },
              { name: 'Apr', revenue: 0 },
              { name: 'May', revenue: 0 },
              { name: 'Jun', revenue: 0 },
            ];
            setRevenueData(defaultData);
          }
        };

        // Generate content performance data
        const generateContentPerformance = async () => {
          try {
            // Get content with view and sales counts
            const { data: content, error: contentError } = await supabase
              .from('content')
              .select('id, title, type')
              .eq('seller_id', user.id)
              .limit(5);
              
            if (contentError) throw contentError;
            
            if (content && content.length > 0) {
              // For each content, get views
              const contentPerformance = await Promise.all(content.map(async (item) => {
                // Get view count
                const { count: viewCount } = await supabase
                  .from('content_views')
                  .select('*', { count: 'exact', head: true })
                  .eq('content_id', item.id);
                  
                // Get sales count
                const { count: salesCount } = await supabase
                  .from('purchases')
                  .select('*', { count: 'exact', head: true })
                  .eq('content_id', item.id)
                  .eq('status', 'completed');
                
                return {
                  name: item.title.length > 10 ? item.title.substring(0, 10) + '...' : item.title,
                  views: viewCount || 0,
                  sales: salesCount || 0
                };
              }));
              
              setContentPerformanceData(contentPerformance);
              
              // Also prepare top performing content
              const { data: topContent, error: topContentError } = await supabase
                .from('content')
                .select(`
                  id, 
                  title, 
                  type,
                  price
                `)
                .eq('seller_id', user.id)
                .order('id', { ascending: false })
                .limit(3);
                
              if (topContentError) throw topContentError;
              
              if (topContent && topContent.length > 0) {
                const formattedTopContent = await Promise.all(topContent.map(async (item) => {
                  // Get sales count
                  const { count: salesCount } = await supabase
                    .from('purchases')
                    .select('*', { count: 'exact', head: true })
                    .eq('content_id', item.id)
                    .eq('status', 'completed');
                    
                  return {
                    id: item.id,
                    title: item.title,
                    type: item.type === 'photo' ? 'Photo content' : 'Video content',
                    price: `$${parseFloat(item.price.toString()).toFixed(2)}`,
                    sales: salesCount || 0
                  };
                }));
                
                // Sort by sales (highest first)
                formattedTopContent.sort((a, b) => b.sales - a.sales);
                setTopPerformingContent(formattedTopContent);
              }
            }
          } catch (error) {
            console.error("Error generating content performance data:", error);
          }
        };
        
        // Set content type distribution data
        const getContentTypeData = () => {
          const photoCount = sellerData.content.photos;
          const videoCount = sellerData.content.videos;
          
          if (photoCount === 0 && videoCount === 0) {
            return [
              { name: 'No Content', value: 1 }
            ];
          }
          
          return [
            { name: 'Photos', value: photoCount },
            { name: 'Videos', value: videoCount }
          ];
        };

        // Generate analytics data
        await fetchTransactions();
        await generateRevenueData();
        await generateContentPerformance();
        setContentTypeData(getContentTypeData());

      } catch (error) {
        console.error("Error fetching seller data:", error);
        toast({
          title: "Error",
          description: "Failed to load seller data",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchSellerData();
  }, [user, toast]);

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

  const handleSubmitUpload = async () => {
    if (!user || !selectedFile || !title || !price) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    try {
      // Upload the file to Supabase Storage
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;
      
      // TODO: Create a bucket and update this code when storage is set up
      // const { data: uploadData, error: uploadError } = await supabase
      //   .storage
      //   .from('content')
      //   .upload(filePath, selectedFile);
      //
      // if (uploadError) throw uploadError;
      
      // Insert content record in the database
      const { data: contentData, error: contentError } = await supabase
        .from('content')
        .insert({
          seller_id: user.id,
          title: title,
          description: caption,
          price: parseFloat(price),
          type: fileType === "image" ? "photo" : "video",
          // content_url: uploadData?.path, // Uncomment when storage is set up
          // thumbnail_url: uploadData?.path // Uncomment when storage is set up
        })
        .select()
        .single();
      
      if (contentError) throw contentError;
      
      toast({
        title: "Content uploaded successfully!",
        description: "Your new content is now available on your profile",
      });
      
      // Add the new content to the existing content items
      if (contentData) {
        const newContentItem: ContentItem = {
          id: contentData.id,
          type: fileType === "image" ? "photo" as const : "video" as const,
          title: title,
          likes: 0,
          sales: 0,
          price: `$${price}`,
          date: new Date().toISOString().split('T')[0],
          thumbnail: filePreview || ""
        };
        
        setContentItems([newContentItem, ...contentItems]);
      }
      
      // Update seller stats
      setSellerData(prev => ({
        ...prev,
        stats: {
          ...prev.stats,
          totalContent: prev.stats.totalContent + 1
        },
        content: {
          photos: fileType === "image" ? prev.content.photos + 1 : prev.content.photos,
          videos: fileType === "video" ? prev.content.videos + 1 : prev.content.videos
        }
      }));
      
      setUploadDialogOpen(false);
      resetUploadForm();
    } catch (error) {
      console.error("Error uploading content:", error);
      toast({
        title: "Upload failed",
        description: "An error occurred while uploading your content",
        variant: "destructive"
      });
    }
  };

  const handleUpdateContent = (updatedContent: ContentItem[]) => {
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

  const handleWithdrawalConfirmation = async () => {
    if (!user) return;
    
    setIsProcessingWithdrawal(true);
    
    try {
      // Create a withdrawal record
      const { error } = await supabase
        .from('withdrawals')
        .insert({
          seller_id: user.id,
          amount: parseFloat(withdrawAmount),
          payment_method: selectedPaymentMethod || 'bank',
          status: 'pending'
        });
      
      if (error) throw error;
      
      // Update the local state to reflect the withdrawal
      setSellerData(prev => ({
        ...prev,
        balance: prev.balance - parseFloat(withdrawAmount)
      }));
      
      setWithdrawStage("success");
      
      toast({
        title: "Withdrawal initiated",
        description: `$${withdrawAmount} will be sent to your selected payment method`,
      });
    } catch (error) {
      console.error("Error processing withdrawal:", error);
      toast({
        title: "Withdrawal failed",
        description: "An error occurred while processing your withdrawal",
        variant: "destructive"
      });
    } finally {
      setIsProcessingWithdrawal(false);
    }
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

  const handleProfileUpdate = (updatedProfile: {
    name: string;
    username: string;
    profileImage: string;
    bio: string;
  }) => {
    setSellerData(prev => ({
      ...prev,
      name: updatedProfile.name,
      username: updatedProfile.username,
      profileImage: updatedProfile.profileImage,
      bio: updatedProfile.bio
    }));
    
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully"
    });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("tab");
    
    if (tabParam && ["overview", "content", "earnings", "settings", "analytics"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location]);

  useEffect(() => {
    let filtered = [...contentItems];
    
    // Apply filter
    if (filterType !== "all") {
      filtered = filtered.filter(item => item.type === filterType);
    }
    
    // Apply sort
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.date
