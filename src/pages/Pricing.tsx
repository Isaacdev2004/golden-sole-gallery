
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const PricingPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [isProcessing, setIsProcessing] = useState(false);
  
  const tiers = [
    {
      name: "Basic",
      price: "$4.99",
      description: "Perfect for beginners looking to sell their content",
      features: [
        "5 uploads per month",
        "Basic analytics",
        "Standard resolution",
        "24 hour support",
        "90% seller commission"
      ],
      cta: "Get Started",
      highlighted: false,
      action: () => {
        setSelectedPlan("basic");
        setIsDialogOpen(true);
      }
    },
    {
      name: "Pro",
      price: "$9.99",
      description: "For dedicated content creators with regular uploads",
      features: [
        "25 uploads per month",
        "Advanced analytics",
        "HD resolution",
        "Priority support",
        "92% seller commission",
        "Custom watermarks"
      ],
      cta: "Sign Up",
      highlighted: true,
      action: () => {
        setSelectedPlan("pro");
        setIsDialogOpen(true);
      }
    },
    {
      name: "Premium",
      price: "$19.99",
      description: "For professional content creators with high volume",
      features: [
        "Unlimited uploads",
        "Premium analytics dashboard",
        "4K resolution support",
        "24/7 dedicated support",
        "95% seller commission",
        "Custom branding",
        "Early access to new features"
      ],
      cta: "Contact Sales",
      highlighted: false,
      action: () => {
        // For Premium, we'll show a toast and could redirect to a contact form
        toast({
          title: "Premium Plan Inquiry",
          description: "Thank you for your interest! Our sales team will contact you shortly."
        });
        // Simulate sending user info to sales team
        setTimeout(() => {
          toast({
            title: "Request Received",
            description: "A sales representative will reach out within 24 hours."
          });
        }, 2000);
      }
    }
  ];

  const processPayment = () => {
    setIsProcessing(true);
    
    // In a real app, this would be a call to your payment processor
    setTimeout(() => {
      setIsProcessing(false);
      setIsDialogOpen(false);
      
      toast({
        title: "Payment Successful!",
        description: `You have successfully purchased the ${selectedPlan?.charAt(0).toUpperCase() + selectedPlan?.slice(1)} plan.`
      });
      
      // Redirect to registration with plan info
      navigate("/register", { 
        state: { 
          plan: selectedPlan,
          paid: true
        } 
      });
    }, 1500);
  };

  const getPlanPrice = () => {
    const plan = tiers.find(tier => tier.name.toLowerCase() === selectedPlan);
    return plan ? plan.price : "";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your content creation needs with no hidden fees
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <Card 
                key={tier.name} 
                className={`flex flex-col ${tier.highlighted ? "border-gold border-2 shadow-xl" : ""}`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-gray-500"> / month</span>
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-gold mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${tier.highlighted ? "bg-gold hover:bg-gold-dark" : ""}`}
                    onClick={tier.action}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Need something custom?</h2>
            <p className="text-gray-600 mb-6">
              Contact our sales team for custom plans tailored to your specific requirements
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                toast({
                  title: "Custom Plan Request",
                  description: "Our team will reach out to discuss your custom requirements."
                });
              }}
            >
              Contact Sales
            </Button>
          </div>
        </div>

        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Have questions about our pricing? Find answers to common questions below
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">How do commissions work?</h3>
                <p className="text-gray-600">
                  Commissions are calculated as a percentage of each sale after payment processing fees. 
                  The percentage you keep depends on your subscription plan.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-gray-600">
                  Yes, you can change your plan at any time. Changes will take effect at the start of your next billing cycle.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600">
                  We offer a 7-day money back guarantee for new subscribers. Contact support to process your refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Complete Your Purchase</DialogTitle>
            <DialogDescription>
              {selectedPlan && `Purchase the ${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} plan for ${getPlanPrice()} per month`}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Payment Method</Label>
              <RadioGroup 
                value={paymentMethod} 
                onValueChange={setPaymentMethod}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2 border p-3 rounded-md">
                  <RadioGroupItem value="credit" id="credit" />
                  <Label htmlFor="credit">Credit / Debit Card</Label>
                </div>
                <div className="flex items-center space-x-2 border p-3 rounded-md">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
              </RadioGroup>
            </div>
            
            {paymentMethod === 'credit' && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input 
                    id="cardNumber" 
                    placeholder="1234 5678 9012 3456" 
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input 
                      id="expiry" 
                      placeholder="MM/YY" 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input 
                      id="cvc" 
                      placeholder="123" 
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="name">Name on Card</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="mt-1"
                  />
                </div>
              </div>
            )}
            
            {paymentMethod === 'paypal' && (
              <div className="text-center p-4 border rounded-md bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">You will be redirected to PayPal to complete your purchase.</p>
                <img 
                  src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" 
                  alt="PayPal" 
                  className="mx-auto h-6" 
                />
              </div>
            )}
            
            <Button 
              className="w-full bg-gold hover:bg-gold-dark mt-4"
              onClick={processPayment}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : `Pay ${getPlanPrice()}`}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
