
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
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
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const { signIn, user, loading } = useAuth();
  const [accountType, setAccountType] = useState<string | null>(null);
  const [checkingAccountType, setCheckingAccountType] = useState(false);

  // If user is already logged in, fetch account type and redirect
  if (user && !loading && !checkingAccountType && accountType) {
    return <Navigate to={accountType === "seller" ? "/seller-dashboard" : "/buyer-dashboard"} />;
  }

  // If user is logged in but we don't know the account type yet, fetch it
  if (user && !loading && !checkingAccountType && !accountType) {
    setCheckingAccountType(true);
    supabase
      .from('profiles')
      .select('account_type')
      .eq('id', user.id)
      .single()
      .then(({ data, error }) => {
        if (error) {
          toast({
            title: "Error",
            description: "Failed to fetch user profile",
            variant: "destructive",
          });
          console.error("Error fetching profile:", error);
        } else {
          setAccountType(data.account_type);
        }
        setCheckingAccountType(false);
      });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await signIn(email, password);
      
      // The navigation happens automatically through the auth state change
      // The toast will be shown via the auth context
      
    } catch (error) {
      // Error is handled in the auth context
      console.error("Login error:", error);
    }
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
                  Welcome back to <span className="gold-text">Magnificent Soles</span>
                </CardTitle>
                <CardDescription className="text-center">
                  Enter your email and password to sign in
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-gold hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

                  <Button 
                    type="submit" 
                    className="w-full bg-gold hover:bg-gold-dark"
                    disabled={loading || checkingAccountType}
                  >
                    {loading || checkingAccountType ? "Signing in..." : "Sign In"}
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-gold hover:underline">
                    Sign Up
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

export default Login;
