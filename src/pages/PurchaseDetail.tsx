
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, MessageCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";

const PurchaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { user } = useAuth();
  const [purchase, setPurchase] = useState(null);
  const [content, setContent] = useState(null);
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchaseDetails = async () => {
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please log in to view your purchases.",
          variant: "destructive"
        });
        navigate("/login");
        return;
      }

      try {
        setLoading(true);
        
        // Fetch purchase data from the database
        const { data: purchaseData, error: purchaseError } = await supabase
          .from('purchases')
          .select('*')
          .eq('id', id)
          .eq('buyer_id', user.id)
          .single();

        if (purchaseError || !purchaseData) {
          throw new Error('Purchase not found');
        }

        // Fetch content details
        const { data: contentData, error: contentError } = await supabase
          .from('content')
          .select('*')
          .eq('id', purchaseData.content_id)
          .single();

        if (contentError || !contentData) {
          throw new Error('Content not found');
        }

        // Fetch seller profile
        const { data: sellerData, error: sellerError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', purchaseData.seller_id)
          .single();

        // Format the purchase data
        const formattedPurchase = {
          id: purchaseData.id,
          name: contentData.title,
          seller: sellerData?.username || 'Seller',
          price: `$${purchaseData.price}`,
          date: new Date(purchaseData.purchase_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          image: contentData.thumbnail_url,
          description: contentData.description || "No description available.",
          fileCount: 1, // This could be updated with actual file count if available
          fileSize: "45 MB", // This could be updated with actual file size if available
          resolution: contentData.type === "photo" ? "High Resolution (4K)" : "HD Video",
          license: "Commercial Use",
          downloadCount: 0, // This could be tracked in a separate table if needed
          purchaseDate: new Date(purchaseData.purchase_date).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          })
        };

        setPurchase(formattedPurchase);
        setContent(contentData);
        setSeller(sellerData);

      } catch (error) {
        console.error('Error fetching purchase:', error);
        toast({
          title: "Purchase not found",
          description: "The requested purchase could not be found.",
          variant: "destructive"
        });
        navigate("/buyer-dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchPurchaseDetails();
  }, [id, navigate, toast, user]);

  const handleDownload = () => {
    toast({
      title: "Starting download",
      description: `Downloading ${purchase?.name} content package...`,
    });
    
    // In a real implementation, this would initiate a download of the purchased files
    // For now, we'll just show the toast notification
  };

  const handleContactSeller = () => {
    toast({
      title: "Message sent",
      description: `Your message to ${purchase?.seller} has been sent.`,
    });
    
    // In a real implementation, this would open a messaging interface or send a message
    // For now, we'll just show the toast notification
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center h-64">
            <div className="flex flex-col items-center">
              <Loader2 className="h-8 w-8 animate-spin text-gold mb-2" />
              <div>Loading purchase details...</div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!purchase) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Purchase Not Found</h2>
            <p className="mb-6">The purchase you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/buyer-dashboard')}>
              Return to Dashboard
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          className="mb-6" 
          onClick={() => navigate('/buyer-dashboard')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Purchase Preview */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Purchase Preview</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="w-full h-64 overflow-hidden rounded-md mb-4 bg-gray-100">
                <img 
                  src={purchase.image}
                  alt={purchase.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{purchase.name}</h3>
              <p className="text-gray-500">by {purchase.seller}</p>
              <Badge className="mt-4 bg-green-600">{purchase.price}</Badge>
              <div className="mt-6 w-full">
                <Button 
                  className="w-full bg-gold hover:bg-gold/90 mb-3"
                  onClick={handleDownload}
                >
                  <Download className="h-4 w-4 mr-2" /> Download Files
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleContactSeller}
                >
                  <MessageCircle className="h-4 w-4 mr-2" /> Contact Seller
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Purchase Details */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Purchase Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-lg mb-2">Description</h4>
                  <p className="text-gray-600">{purchase.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b py-4">
                  <div>
                    <p className="text-sm text-gray-500">File Count</p>
                    <p className="font-medium">{purchase.fileCount} Files</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Size</p>
                    <p className="font-medium">{purchase.fileSize}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Resolution</p>
                    <p className="font-medium">{purchase.resolution}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">License Type</p>
                    <p className="font-medium">{purchase.license}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-2">Purchase Information</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Purchase Date:</span>
                      <span>{purchase.purchaseDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Price:</span>
                      <span className="font-medium">{purchase.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Downloads:</span>
                      <span>{purchase.downloadCount} times</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PurchaseDetail;
