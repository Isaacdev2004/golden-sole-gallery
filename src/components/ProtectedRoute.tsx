
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
  const [userProfile, setUserProfile] = useState<any>(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();
          
          if (error) {
            console.error('Error fetching user profile:', error);
            toast({
              title: "Error",
              description: "Failed to fetch user profile",
              variant: "destructive",
            });
          } else {
            setUserProfile(data);
          }
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setProfileLoading(false);
        }
      } else {
        setProfileLoading(false);
      }
    };

    fetchUserProfile();
  }, [user, toast]);

  if (loading || profileLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to={redirectTo} />;
  }

  if (requiredAccountType && userProfile && userProfile.account_type !== requiredAccountType) {
    const redirectPath = userProfile.account_type === 'buyer' ? '/buyer-dashboard' : '/seller-dashboard';
    toast({
      title: "Access Denied",
      description: `This area is only accessible to ${requiredAccountType}s`,
      variant: "destructive",
    });
    return <Navigate to={redirectPath} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
