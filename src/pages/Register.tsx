
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("buyer");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract plan info from location state
  const selectedPlan = location.state?.plan || null;
  const hasPaid = location.state?.paid || false;
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    agreeAge: false,
  });

  // Set account type to seller if coming from pricing page
  useEffect(() => {
    if (selectedPlan) {
      setAccountType("seller");
      
      if (hasPaid) {
        toast({
          title: "Plan Purchase Complete",
          description: `You've purchased the ${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} plan. Complete registration to get started.`,
        });
      }
    }
  }, [selectedPlan, hasPaid, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }
    
    // In a real application, you would send this data to your backend
    // For now, we'll simulate a registration process
    console.log("Register with:", { ...formData, accountType, selectedPlan, hasPaid });
    
    setTimeout(() => {
      setIsLoading(false);
      
      // Show success toast
      toast({
        title: "Registration successful!",
        description: `Welcome to Magnificent Soles, ${formData.fullName}!`,
      });
      
      // Redirect based on account type
      if (accountType === "seller") {
        navigate("/seller-dashboard");
      } else {
        navigate("/buyer-dashboard");
      }
    }, 1500);
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">
                  Join <span className="gold-text">Magnificent Soles</span>
                </CardTitle>
                <CardDescription className="text-center">
                  {selectedPlan ? (
                    `Create your ${selectedPlan} seller account ${hasPaid ? "(Payment Complete)" : ""}`
                  ) : (
                    "Create an account to start buying or selling content"
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>I want to join as a:</Label>
                    <RadioGroup 
                      value={accountType} 
                      onValueChange={setAccountType}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="buyer" id="buyer" disabled={!!selectedPlan} />
                        <Label htmlFor="buyer">Buyer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="seller" id="seller" disabled={!!selectedPlan} />
                        <Label htmlFor="seller">Seller</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  {selectedPlan && (
                    <div className="bg-gold/10 p-3 rounded-md border border-gold/30">
                      <p className="text-sm font-medium">
                        Selected Plan: <span className="font-bold">{selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}</span>
                      </p>
                      {hasPaid && (
                        <p className="text-xs text-green-600 mt-1">Payment complete</p>
                      )}
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email" 
                      placeholder="name@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input 
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        required 
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOffIcon className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input 
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      required 
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="agreeTerms" 
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => 
                          setFormData({...formData, agreeTerms: checked === true})}
                      />
                      <label
                        htmlFor="agreeTerms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link to="/terms" className="text-gold hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-gold hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="agreeAge" 
                        name="agreeAge"
                        checked={formData.agreeAge}
                        onCheckedChange={(checked) => 
                          setFormData({...formData, agreeAge: checked === true})}
                      />
                      <label
                        htmlFor="agreeAge"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I confirm that I am at least 18 years old
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gold hover:bg-gold-dark"
                    disabled={!formData.agreeTerms || !formData.agreeAge || isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="text-gold hover:underline">
                    Sign In
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
