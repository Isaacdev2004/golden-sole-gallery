
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Heart,
  MessageSquare,
  CheckCircle,
  Share2,
  Lock,
  Eye,
  ShieldAlert,
  Loader2,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const ContentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [content, setContent] = useState(null);
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [relatedContent, setRelatedContent] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [viewCount, setViewCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const fetchContentDetails = async () => {
      try {
        setLoading(true);
        if (!id) return;

        // Fetch the content details
        const { data: contentData, error: contentError } = await supabase
          .from('content')
          .select('*')
          .eq('id', id)
          .single();

        if (contentError) {
          console.error('Error fetching content:', contentError);
          toast({
            title: "Content not found",
            description: "We couldn't find the content you're looking for.",
            variant: "destructive",
          });
          navigate('/browse');
          return;
        }

        setContent(contentData);
        setSelectedImage(contentData.thumbnail_url);

        // Record a view if the user is logged in
        if (user) {
          await supabase
            .from('content_views')
            .insert({ 
              content_id: id,
              viewer_id: user.id 
            })
            .select();
        }

        // Check if the current user has liked this content
        if (user) {
          const { data: likeData } = await supabase
            .from('likes')
            .select('*')
            .eq('content_id', id)
            .eq('user_id', user.id)
            .single();
          
          setLiked(!!likeData);
        }

        // Get view count
        const { count: viewsCount } = await supabase
          .from('content_views')
          .select('*', { count: 'exact', head: true })
          .eq('content_id', id);
        
        setViewCount(viewsCount || 0);

        // Get like count
        const { count: likesCount } = await supabase
          .from('likes')
          .select('*', { count: 'exact', head: true })
          .eq('content_id', id);
        
        setLikeCount(likesCount || 0);

        // Fetch seller information
        if (contentData.seller_id) {
          const { data: sellerData, error: sellerError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', contentData.seller_id)
            .single();

          if (!sellerError && sellerData) {
            setSeller({
              id: sellerData.id,
              name: sellerData.full_name || 'Seller',
              username: sellerData.username || 'seller',
              avatar: sellerData.profile_image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
              verified: false,
              rating: 4.9, // We can calculate this from reviews in a real app
              totalSales: 0, // This would come from a count of purchases in a real app
            });
          }
        }

        // Fetch reviews
        const { data: reviewsData } = await supabase
          .from('reviews')
          .select('*, profiles!reviews_reviewer_id_fkey(full_name, username, profile_image)')
          .eq('seller_id', contentData.seller_id)
          .order('created_at', { ascending: false })
          .limit(5);

        if (reviewsData) {
          setReviews(reviewsData.map(review => ({
            id: review.id,
            user: review.profiles?.username || 'User',
            avatar: review.profiles?.profile_image || "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
            rating: review.rating,
            comment: review.comment || 'Great content!',
            date: new Date(review.created_at).toLocaleDateString(),
          })));
        }

        // Fetch related content
        const { data: relatedContentData } = await supabase
          .from('content')
          .select('*, profiles:seller_id(username)')
          .neq('id', id)
          .eq('type', contentData.type)
          .limit(3);

        if (relatedContentData) {
          setRelatedContent(relatedContentData.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            username: item.profiles?.username || 'seller',
            image: item.thumbnail_url || "https://images.unsplash.com/photo-1622633968683-ce0d0b611ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
          })));
        }

      } catch (error) {
        console.error('Error in content detail fetch:', error);
        toast({
          title: "Error",
          description: "There was a problem loading this content.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchContentDetails();
  }, [id, user, navigate, toast]);

  const handleLike = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to like content.",
      });
      navigate('/login');
      return;
    }

    try {
      if (liked) {
        // Remove like
        await supabase
          .from('likes')
          .delete()
          .eq('content_id', id)
          .eq('user_id', user.id);
        
        setLiked(false);
        setLikeCount(prev => prev - 1);
      } else {
        // Add like
        await supabase
          .from('likes')
          .insert([
            { content_id: id, user_id: user.id }
          ]);
        
        setLiked(true);
        setLikeCount(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error updating like status:', error);
      toast({
        title: "Error",
        description: "Failed to update like status.",
        variant: "destructive",
      });
    }
  };

  const handlePurchase = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to purchase content.",
      });
      navigate('/login');
      return;
    }

    // In a real implementation, this would redirect to checkout or payment processing
    toast({
      title: "Purchase initiated",
      description: `Processing purchase for ${content?.title || 'content'}...`,
    });
  };

  const handleMessage = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to message sellers.",
      });
      navigate('/login');
      return;
    }

    toast({
      title: "Message sent",
      description: `Your message has been sent to ${seller?.name || 'the seller'}.`,
    });
  };

  // Loading state
  if (loading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="container mx-auto px-4 flex items-center justify-center py-16">
            <div className="text-center">
              <Loader2 className="h-10 w-10 animate-spin mx-auto mb-4 text-gold" />
              <p className="text-gray-500">Loading content details...</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Content not found state
  if (!content) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-2">Content Not Found</h2>
              <p className="text-gray-600 mb-6">
                The content you're looking for doesn't exist or has been removed.
              </p>
              <Button onClick={() => navigate('/browse')} className="bg-gold hover:bg-gold/90">
                Browse Content
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column - Images */}
            <div className="w-full lg:w-3/5">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-md">
                    <img
                      src={selectedImage || content.thumbnail_url}
                      alt={content.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Purchase overlay */}
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                      <Lock className="h-12 w-12 text-white mb-4" />
                      <h3 className="text-white text-xl font-bold mb-2">Premium Content</h3>
                      <p className="text-white/80 text-center mb-4 max-w-xs">
                        Purchase this content to access {content.type === 'photo' ? 'all high-resolution photos' : 'the full video'}
                      </p>
                      <Button 
                        className="bg-gold hover:bg-gold-dark text-white" 
                        onClick={handlePurchase}
                      >
                        Unlock for ${content.price}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  {content.thumbnail_url && (
                    <div 
                      className={`relative cursor-pointer rounded-md overflow-hidden border-2 ${
                        selectedImage === content.thumbnail_url ? "border-gold" : "border-transparent"
                      }`}
                      onClick={() => setSelectedImage(content.thumbnail_url)}
                    >
                      <div className="w-20 h-20">
                        <img
                          src={content.thumbnail_url}
                          alt={`Thumbnail`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <Lock className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <Tabs defaultValue="details" className="bg-white rounded-lg shadow-sm p-4">
                <TabsList className="w-full">
                  <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                  <TabsTrigger value="reviews" className="flex-1">Reviews ({reviews.length})</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="pt-4">
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-gray-700 mb-6">{content.description || "No description available."}</p>
                  
                  <h3 className="font-medium mb-2">Content Details</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-gray-600 text-sm">Content Type</p>
                      <p className="font-medium">{content.type === "photo" ? "Photos" : "Videos"}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Published</p>
                      <p className="font-medium">{new Date(content.created_at).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Views</p>
                      <p className="font-medium">{viewCount}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Likes</p>
                      <p className="font-medium">{likeCount}</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="pt-4 space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="pb-4 border-b border-gray-100 last:border-0">
                      <div className="flex items-center mb-2">
                        <img 
                          src={review.avatar}
                          alt={review.user}
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <div className="flex items-center">
                            <p className="font-medium">{review.user}</p>
                            <div className="ml-2 flex">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-sm ${i < review.rating ? "text-gold" : "text-gray-300"}`}>★</span>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-500 text-xs">{review.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                  
                  {reviews.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No reviews yet for this content.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Right column - Info and actions */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-2xl font-bold">{content.title}</h1>
                  <div className="flex items-center gap-2">
                    <button
                      className={`p-2 rounded-full ${
                        liked ? "bg-pink-100" : "bg-gray-100"
                      }`}
                      onClick={handleLike}
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          liked ? "text-pink-500 fill-pink-500" : "text-gray-600"
                        }`}
                      />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full">
                      <Share2 className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-2 items-center text-gray-600 text-sm">
                    <Eye className="h-4 w-4" />
                    <span>{viewCount} views</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-600 text-sm">
                    <Heart className="h-4 w-4" />
                    <span>{likeCount} likes</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-bold text-gold">${content.price}</h2>
                    <Badge className="bg-green-50 text-green-600 hover:bg-green-50 hover:text-green-600">
                      Instant Access
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    One-time purchase, lifetime access to all content
                  </p>
                </div>
                
                <Button
                  className="w-full bg-gold hover:bg-gold-dark mb-3 py-6 text-lg"
                  onClick={handlePurchase}
                >
                  Purchase Now
                </Button>
                
                <div className="text-center text-sm text-gray-600 mb-6">
                  <p className="flex items-center justify-center gap-1">
                    <ShieldAlert className="h-4 w-4" />
                    <span>Secure payment, instant delivery</span>
                  </p>
                </div>
              </div>
              
              {/* Seller info */}
              {seller && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Link to={`/seller/${seller.id}`} className="block">
                        <img 
                          src={seller.avatar}
                          alt={seller.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </Link>
                      <div>
                        <Link to={`/seller/${seller.id}`} className="block">
                          <div className="flex items-center gap-1">
                            <h3 className="font-bold">{seller.name}</h3>
                            {seller.verified && (
                              <CheckCircle className="h-4 w-4 text-gold fill-gold" />
                            )}
                          </div>
                        </Link>
                        <p className="text-gray-500 text-sm">@{seller.username}</p>
                        <div className="flex items-center gap-1 text-sm">
                          <span className="text-gold">★</span>
                          <span>{seller.rating}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-500">{seller.totalSales} sales</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Link to={`/seller/${seller.id}`} className="flex-1">
                        <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-white">
                          View Profile
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="flex-1 flex items-center justify-center gap-2"
                        onClick={handleMessage}
                      >
                        <MessageSquare className="h-4 w-4" />
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Related content */}
              {relatedContent.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-bold mb-4">You May Also Like</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {relatedContent.map((item) => (
                      <Link to={`/content/${item.id}`} key={item.id}>
                        <div className="flex bg-white rounded-lg overflow-hidden shadow-sm hover-scale">
                          <div className="w-24 h-24">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-3 flex flex-col justify-center flex-1">
                            <h4 className="font-medium">{item.title}</h4>
                            <div className="flex justify-between items-center">
                              <p className="text-gray-600 text-sm">@{item.username}</p>
                              <p className="text-gold font-bold">${item.price}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContentDetail;
