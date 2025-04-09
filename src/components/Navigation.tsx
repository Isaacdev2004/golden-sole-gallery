
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User, Menu, X, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  // Check if user is on the seller dashboard page
  const isOnSellerDashboard = location.pathname === "/seller-dashboard";

  // Function to navigate to seller dashboard settings
  const navigateToSettings = () => {
    if (isOnSellerDashboard) {
      // If already on seller dashboard, we'll update the URL with the settings parameter
      navigate("/seller-dashboard?tab=settings", { replace: true });
    } else {
      // If not on seller dashboard, we'll navigate there with a settings parameter
      navigate("/seller-dashboard?tab=settings");
    }
  };

  // Function to navigate to seller dashboard analytics
  const navigateToAnalytics = () => {
    if (isOnSellerDashboard) {
      // If already on seller dashboard, we'll update the URL with the analytics parameter
      navigate("/seller-dashboard?tab=analytics", { replace: true });
    } else {
      // If not on seller dashboard, we'll navigate there with an analytics parameter
      navigate("/seller-dashboard?tab=analytics");
    }
  };

  // Function to navigate to seller dashboard content
  const navigateToContent = () => {
    if (isOnSellerDashboard) {
      // If already on seller dashboard, we'll update the URL with the content parameter
      navigate("/seller-dashboard?tab=content", { replace: true });
    } else {
      // If not on seller dashboard, we'll navigate there with a content parameter
      navigate("/seller-dashboard?tab=content");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="gold-text">Magnificent</span> 
              <span className="text-black">Soles</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/browse" className="text-gray-700 hover:text-gold transition-colors">
              Browse
            </Link>
            <Link to="/sellers" className="text-gray-700 hover:text-gold transition-colors">
              Sellers
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-gold transition-colors">
              How It Works
            </Link>
            
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 h-9 w-[180px] rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-light"
              />
            </div>
            
            {/* Show these buttons only when not logged in */}
            {!user ? (
              <>
                <Link to="/login">
                  <Button variant="outline" className="border-gold hover:bg-gold hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-gold hover:bg-gold-dark text-white">
                    Join Now
                  </Button>
                </Link>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full border-gold">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/buyer-dashboard" className="w-full cursor-pointer">Buyer Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/seller-dashboard" className="w-full cursor-pointer">Seller Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="text-red-600 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gold focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-3 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link
                to="/browse"
                className="text-gray-700 hover:text-gold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse
              </Link>
              <Link
                to="/sellers"
                className="text-gray-700 hover:text-gold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sellers
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-700 hover:text-gold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              
              <div className="relative py-2">
                <Search className="absolute left-3 top-5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 h-9 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-light"
                />
              </div>
              
              {/* Show these buttons only when not logged in */}
              {!user ? (
                <div className="flex flex-col space-y-2 pt-2">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-gold hover:bg-gold hover:text-white">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                      Join Now
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-2">
                  <Link to="/buyer-dashboard" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full text-left justify-start">
                      Buyer Dashboard
                    </Button>
                  </Link>
                  <Link to="/seller-dashboard" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full text-left justify-start">
                      Seller Dashboard
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full text-left justify-start text-red-600" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      signOut();
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
