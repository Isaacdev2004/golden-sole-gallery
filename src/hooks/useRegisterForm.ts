
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  agreeAge: boolean;
}

export const useRegisterForm = (selectedPlan: string | null, hasPaid: boolean) => {
  const navigate = useNavigate();
  const { signUp, loading } = useAuth();
  const [accountType, setAccountType] = useState("buyer");
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    agreeAge: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For buyers, we don't need to check the selected plan
    if (accountType === "seller" && !selectedPlan) {
      navigate("/pricing");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    try {
      await signUp(
        formData.email,
        formData.password,
        formData.fullName,
        accountType,
        accountType === "buyer" ? "free" : selectedPlan?.toLowerCase() || "free"
      );
      
      // Redirect buyers directly to their dashboard
      if (accountType === "buyer") {
        navigate("/buyer-dashboard");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration Failed",
        description: "An error occurred during registration. Please try again.",
        variant: "destructive",
      });
    }
  };

  return {
    formData,
    accountType,
    showPassword,
    loading,
    handleChange,
    handleSubmit,
    setAccountType,
    setShowPassword,
  };
};
