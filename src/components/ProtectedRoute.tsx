
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
  requiredAccountType?: "buyer" | "seller";
};

const ProtectedRoute = ({ 
  children,
  redirectTo = "/login",
  requiredAccountType
}: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to={redirectTo} />;
  }

  // If a specific account type is required, we would check it here
  // This would require fetching the profile from the database
  // For now, we'll just allow any authenticated user

  return <>{children}</>;
};

export default ProtectedRoute;
