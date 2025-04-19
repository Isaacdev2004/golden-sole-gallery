
import { Navigate, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { AccountTypeSelector } from "@/components/register/AccountTypeSelector";
import { SelectedPlan } from "@/components/register/SelectedPlan";
import { RegisterFormFields } from "@/components/register/RegisterFormFields";
import { useRegisterForm } from "@/hooks/useRegisterForm";

const Register = () => {
  const location = useLocation();
  const { user, loading } = useAuth();
  
  // Extract plan info from location state
  const selectedPlan = location.state?.plan || null;
  const hasPaid = location.state?.paid || false;

  const {
    formData,
    accountType,
    showPassword,
    loading: formLoading,
    handleChange,
    handleSubmit,
    setAccountType,
    setShowPassword,
  } = useRegisterForm(selectedPlan, hasPaid);
  
  // If already authenticated, redirect
  if (user && !loading) {
    return <Navigate to={accountType === "seller" ? "/seller-dashboard" : "/buyer-dashboard"} />;
  }

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
                  <AccountTypeSelector 
                    accountType={accountType}
                    setAccountType={setAccountType}
                    disabled={!!selectedPlan}
                  />
                  
                  {selectedPlan && (
                    <SelectedPlan plan={selectedPlan} hasPaid={hasPaid} />
                  )}
                  
                  <RegisterFormFields
                    formData={formData}
                    showPassword={showPassword}
                    handleChange={handleChange}
                    setShowPassword={setShowPassword}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gold hover:bg-gold-dark"
                    disabled={!formData.agreeTerms || !formData.agreeAge || formLoading}
                  >
                    {formLoading ? "Creating Account..." : "Create Account"}
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
