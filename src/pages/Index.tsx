
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
      <TopSellers isHomepage={true} />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Index;
