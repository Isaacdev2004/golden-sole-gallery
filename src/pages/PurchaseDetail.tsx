
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PurchaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [purchase, setPurchase] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Mock data - in a real app, this would come from an API
  const mockPurchases = [
    { 
      id: "1", 
      name: "Summer Collection", 
      seller: "GoldenSteps", 
      price: "$15.00", 
      date: "April 3, 2025", 
      image: "https://images.unsplash.com/photo-1613677135865-3e7f85ad94b1?w=400&h=400&auto=format&q=80",
      description: "A beautiful collection of summer-themed foot photography. Perfect for warm weather campaigns and seasonal marketing.",
      fileCount: 25,
      fileSize: "45 MB",
      resolution: "High Resolution (4K)",
      license: "Commercial Use",
      downloadCount: 2,
      purchaseDate: "April 3, 2025 at 14:30 PM"
    },
    { 
      id: "2", 
      name: "Beach Day Set", 
      seller: "ArtsyToes", 
      price: "$12.50", 
      date: "April 1, 2025", 
      image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&auto=format&q=80",
      description: "Sand and sea-themed feet photography set ideal for vacation promotions and summer product showcasing.",
      fileCount: 18,
      fileSize: "32 MB",
      resolution: "High Resolution (4K)",
      license: "Commercial Use",
      downloadCount: 1,
      purchaseDate: "April 1, 2025 at 09:15 AM"
    },
    { 
      id: "3", 
      name: "Wellness Feet Pack", 
      seller: "FeetFirst", 
      price: "$18.00", 
      date: "March 28, 2025", 
      image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=400&h=400&auto=format&q=80",
      description: "A wellness-focused collection highlighting foot care, massage, and therapeutic concepts.",
      fileCount: 30,
      fileSize: "52 MB",
      resolution: "High Resolution (4K)",
      license: "Commercial Use",
      downloadCount: 3,
      purchaseDate: "March 28, 2025 at 16:45 PM"
    },
    { 
      id: "4", 
      name: "Fashion Week Special", 
      seller: "SoleMates", 
      price: "$22.50", 
      date: "March 25, 2025", 
      image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&h=400&auto=format&q=80",
      description: "Premium fashion-forward foot photography featuring trendy footwear and styling concepts.",
      fileCount: 40,
      fileSize: "68 MB",
      resolution: "Ultra High Resolution (8K)",
      license: "Commercial Use (Extended)",
      downloadCount: 1,
      purchaseDate: "March 25, 2025 at 11:20 AM"
    },
    { 
      id: "5", 
      name: "Autumn Collection", 
      seller: "GoldenSteps", 
      price: "$15.00", 
      date: "March 20, 2025", 
      image: "https://images.unsplash.com/photo-1604001307862-2d953b875079?w=400&h=400&auto=format&q=80",
      description: "Fall-themed foot photography with seasonal colors, textures, and atmospheric elements.",
      fileCount: 22,
      fileSize: "41 MB",
      resolution: "High Resolution (4K)",
      license: "Commercial Use",
      downloadCount: 0,
      purchaseDate: "March 20, 2025 at 15:10 PM"
    },
  ];

  useEffect(() => {
    // Simulate API call with a delay
    const timer = setTimeout(() => {
      const foundPurchase = mockPurchases.find(p => p.id === id);
      
      if (foundPurchase) {
        setPurchase(foundPurchase);
      } else {
        toast({
          title: "Purchase not found",
          description: "The requested purchase could not be found.",
          variant: "destructive"
        });
        navigate("/buyer-dashboard");
      }
      
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [id, navigate, toast]);

  const handleDownload = () => {
    toast({
      title: "Starting download",
      description: `Downloading ${purchase?.name} content package...`,
    });
  };

  const handleContactSeller = () => {
    toast({
      title: "Message sent",
      description: `Your message to ${purchase?.seller} has been sent.`,
    });
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center h-64">
            <div className="animate-pulse">Loading purchase details...</div>
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
