
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
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [redirectPath, setRedirectPath] = useState(redirectTo);
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
            
            // Check account type requirement and set redirect if needed
            if (requiredAccountType && data && data.account_type !== requiredAccountType) {
              const path = data.account_type === 'buyer' ? '/buyer-dashboard' : '/seller-dashboard';
              setRedirectPath(path);
              setShouldRedirect(true);
              
              toast({
                title: "Access Denied",
                description: `This area is only accessible to ${requiredAccountType}s`,
                variant: "destructive",
              });
            }
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
  }, [user, toast, requiredAccountType]);

  if (loading || profileLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to={redirectTo} />;
  }

  if (shouldRedirect) {
    return <Navigate to={redirectPath} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
