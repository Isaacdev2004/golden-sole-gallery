
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ShoppingBag, ArrowRight } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [purchase, setPurchase] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const contentId = searchParams.get("content_id");
    const isSuccess = searchParams.get("purchase_success") === "true";
    
    if (!user || !isSuccess || !contentId) {
      navigate("/buyer-dashboard");
      return;
    }

    const registerPurchase = async () => {
      try {
        setLoading(true);

        // Get content details
        const { data: contentData, error: contentError } = await supabase
          .from("content")
          .select("*, profiles:seller_id(username)")
          .eq("id", contentId)
          .single();

        if (contentError || !contentData) {
          throw new Error("Content not found");
        }

        // Check if purchase already exists
        const { data: existingPurchase, error: existingError } = await supabase
          .from("purchases")
          .select("*")
          .eq("content_id", contentId)
          .eq("buyer_id", user.id)
          .maybeSingle();

        if (!existingError && existingPurchase) {
          // Purchase already exists
          setPurchase(existingPurchase);
          setLoading(false);
          return;
        }

        // Create new purchase record
        const { data: purchaseData, error: purchaseError } = await supabase
          .from("purchases")
          .insert({
            content_id: contentId,
            buyer_id: user.id,
            seller_id: contentData.seller_id,
            price: contentData.price,
            status: "completed",
          })
          .select()
          .single();

        if (purchaseError) {
          throw new Error("Failed to record purchase");
        }

        // Update earnings for the seller
        await supabase.from("earnings").insert({
          seller_id: contentData.seller_id,
          amount: contentData.price * 0.8, // 80% to seller, 20% platform fee
          status: "pending",
          purchase_id: purchaseData.id,
        });

        setPurchase(purchaseData);
        
        toast({
          title: "Purchase successful!",
          description: `You now have access to ${contentData.title}`,
        });
      } catch (error) {
        console.error("Error registering purchase:", error);
        toast({
          title: "Something went wrong",
          description: "We couldn't record your purchase. Please contact support.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    registerPurchase();
  }, [user, navigate, location.search, toast]);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">Payment Successful!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center text-gray-600">
                <p className="mb-2">
                  Thank you for your purchase. Your payment has been processed successfully.
                </p>
                <p>
                  You now have access to the content and can download it from your dashboard.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Button 
                  className="bg-gold hover:bg-gold/90"
                  onClick={() => navigate("/buyer-dashboard")}
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Go to My Purchases
                </Button>
                
                {purchase && (
                  <Button 
                    variant="outline" 
                    onClick={() => navigate(`/purchase/${purchase.id}`)}
                  >
                    View Purchase Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
