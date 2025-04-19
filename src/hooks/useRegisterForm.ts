
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

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
  const [accountType, setAccountType] = useState("seller");
  const [showPassword, setShowPassword] = useState(false);

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
    
    if (!selectedPlan) {
      navigate("/pricing");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      return;
    }
    
    try {
      await signUp(
        formData.email,
        formData.password,
        formData.fullName,
        accountType,
        selectedPlan.toLowerCase()
      );
    } catch (error) {
      console.error("Registration error:", error);
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
