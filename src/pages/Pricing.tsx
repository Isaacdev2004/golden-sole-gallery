
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const PricingPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
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
        // For new users, redirect to register page
        navigate("/register", { state: { plan: "basic" } });
        toast({
          title: "Basic Plan Selected",
          description: "You've selected our Basic plan. Complete registration to get started."
        });
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
        // For new users, redirect to register page with pro plan selected
        navigate("/register", { state: { plan: "pro" } });
        toast({
          title: "Pro Plan Selected",
          description: "You've selected our Pro plan. Complete registration to upgrade your experience."
        });
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
      
      <Footer />
    </div>
  );
};

export default PricingPage;
