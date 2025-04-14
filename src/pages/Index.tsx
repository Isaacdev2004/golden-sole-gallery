
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedContent from "@/components/FeaturedContent";
import TopSellers from "@/components/TopSellers";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch featured content
        const { data: contentData, error: contentError } = await supabase
          .from('content')
          .select(`
            *,
            seller:seller_id (username)
          `)
          .order('created_at', { ascending: false })
          .limit(4);

        if (contentError) {
          console.error("Error fetching content:", contentError);
        } else {
          // Process content to add likes count
          const processedContent = await Promise.all((contentData || []).map(async (item) => {
            const { count } = await supabase
              .from('likes')
              .select('*', { count: 'exact', head: true })
              .eq('content_id', item.id);
              
            // Add isNew and isFeatured flags
            const creationDate = new Date(item.created_at);
            const now = new Date();
            const daysDifference = Math.floor((now.getTime() - creationDate.getTime()) / (1000 * 60 * 60 * 24));
            
            return {
              ...item,
              likes: count || 0,
              isNew: daysDifference < 7,
              isFeatured: true, // All items on homepage are featured
            };
          }));
          
          setContent(processedContent);
        }

        // Fetch top sellers
        const { data: sellersData, error: sellersError } = await supabase
          .from('profiles')
          .select(`
            id,
            full_name,
            username,
            profile_image,
            bio,
            created_at
          `)
          .eq('account_type', 'seller')
          .limit(3);

        if (sellersError) {
          console.error("Error fetching sellers:", sellersError);
        } else {
          // Process seller data to add additional information
          const processedSellers = await Promise.all((sellersData || []).map(async (seller) => {
            // Get subscribers (followers) count
            const { count: followersCount } = await supabase
              .from('followers')
              .select('*', { count: 'exact', head: true })
              .eq('following_id', seller.id);
            
            // Get content count
            const { count: contentCount } = await supabase
              .from('content')
              .select('*', { count: 'exact', head: true })
              .eq('seller_id', seller.id);
            
            // Get average rating
            const { data: reviews } = await supabase
              .from('reviews')
              .select('rating')
              .eq('seller_id', seller.id);
            
            let avgRating = 0;
            if (reviews && reviews.length > 0) {
              const sum = reviews.reduce((total, review) => total + review.rating, 0);
              avgRating = parseFloat((sum / reviews.length).toFixed(1));
            } else {
              avgRating = 4.5; // Default rating for new sellers
            }
            
            return {
              id: seller.id,
              name: seller.full_name || "Anonymous Seller",
              username: seller.username || "anonymous",
              bio: seller.bio || "A content creator on our platform.",
              avatar: seller.profile_image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
              subscribers: followersCount || 0,
              verified: true, // For now, assume all sellers are verified
              rating: avgRating,
              contentCount: contentCount || 0
            };
          }));
          
          setSellers(processedSellers);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-gold animate-spin" />
          <span className="ml-2 text-lg">Loading homepage data...</span>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <FeaturedContent content={content} />
      <TopSellers sellers={sellers} />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Index;
