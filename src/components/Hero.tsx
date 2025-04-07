
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gold-text">Showcase</span> and <span className="gold-text">Monetize</span> <br />
              Your Feet Content
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Join the premier marketplace where creators connect with fans. 
              Set your prices, build your audience, and earn securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button className="bg-gold hover:bg-gold-dark text-white text-lg py-6 px-8">
                  Become a Seller
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/browse">
                <Button variant="outline" className="border-gold hover:bg-gold hover:text-white text-lg py-6 px-8">
                  Browse Content
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gold opacity-10 rounded-lg transform rotate-3"></div>
              <div className="bg-white p-6 rounded-lg shadow-xl relative z-10">
                <div className="aspect-video bg-gray-100 rounded-md mb-4 overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center text-gray-400">
                    <p className="text-xl font-medium">Platform Preview</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">Start earning today</h3>
                    <p className="text-sm text-gray-500">Verified sellers earn an average of $1,200/month</p>
                  </div>
                  <span className="gold-text text-lg">$$$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-gold opacity-5"></div>
      <div className="absolute top-20 -right-20 w-40 h-40 rounded-full bg-gold opacity-5"></div>
    </div>
  );
};

export default Hero;
