
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="text-2xl font-bold">
                <span className="gold-text">Magnificent</span> 
                <span className="text-white">Soles</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              The premier marketplace for foot-related content.
              Connect with buyers and sell your content securely.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:support@magnificentsoles.com" className="text-gray-400 hover:text-gold">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/browse" className="text-gray-400 hover:text-gold">
                  Browse Content
                </Link>
              </li>
              <li>
                <Link to="/sellers" className="text-gray-400 hover:text-gold">
                  Top Sellers
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-gold">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-gold">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-gold">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-gold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/content-policy" className="text-gray-400 hover:text-gold">
                  Content Policy
                </Link>
              </li>
              <li>
                <Link to="/dmca" className="text-gray-400 hover:text-gold">
                  DMCA
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-gold">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-gold">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-400 hover:text-gold">
                  Report Abuse
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Magnificent Soles. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-400 hover:text-gold text-sm">
                Terms
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-gold text-sm">
                Privacy
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-gold text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
