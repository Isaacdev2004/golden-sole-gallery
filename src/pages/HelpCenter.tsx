
import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import Footer from "@/components/Footer";

const HelpCenter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Help Center</h1>
          <p className="text-gray-600 mb-8">
            Find answers to common questions and learn how to get the most out of Magnificent Soles.
          </p>
          
          {/* Search section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4">How can we help you today?</h2>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Search for answers..." 
                  className="pl-10 bg-white"
                />
              </div>
              <Button type="submit">Search</Button>
            </div>
          </div>
          
          {/* Quick links */}
          <h2 className="text-2xl font-semibold mb-6">Popular Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="p-5 pb-0">
                <CardTitle className="text-lg">Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/help/creating-account" className="text-blue-600 hover:underline">
                      How to create an account
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/verify-profile" className="text-blue-600 hover:underline">
                      Verifying your profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/setting-up-seller" className="text-blue-600 hover:underline">
                      Setting up as a seller
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/subscription-plans" className="text-blue-600 hover:underline">
                      Subscription plans explained
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="p-5 pb-0">
                <CardTitle className="text-lg">Account & Billing</CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/help/payment-methods" className="text-blue-600 hover:underline">
                      Accepted payment methods
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/subscription-management" className="text-blue-600 hover:underline">
                      Managing your subscription
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/withdraw-earnings" className="text-blue-600 hover:underline">
                      Withdrawing earnings
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/tax-information" className="text-blue-600 hover:underline">
                      Tax information
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="p-5 pb-0">
                <CardTitle className="text-lg">Content & Sales</CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/help/uploading-content" className="text-blue-600 hover:underline">
                      How to upload content
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/content-guidelines" className="text-blue-600 hover:underline">
                      Content guidelines
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/custom-content" className="text-blue-600 hover:underline">
                      Creating custom content
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/increase-sales" className="text-blue-600 hover:underline">
                      Tips to increase sales
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Categories section */}
          <h2 className="text-2xl font-semibold mb-6">Help Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle>For Buyers</CardTitle>
                <CardDescription>Learn how to find and purchase content</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/browsing-content" className="text-blue-600 hover:underline">
                      Browsing content
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/purchasing" className="text-blue-600 hover:underline">
                      Making purchases
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/messaging-sellers" className="text-blue-600 hover:underline">
                      Messaging sellers
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/buyer-protection" className="text-blue-600 hover:underline">
                      Buyer protection
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle>For Sellers</CardTitle>
                <CardDescription>Learn how to sell content effectively</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/seller-dashboard" className="text-blue-600 hover:underline">
                      Using the seller dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/pricing-content" className="text-blue-600 hover:underline">
                      Pricing your content
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/analytics" className="text-blue-600 hover:underline">
                      Understanding analytics
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/promotions" className="text-blue-600 hover:underline">
                      Running promotions
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Learn how we protect your information</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/privacy-features" className="text-blue-600 hover:underline">
                      Privacy features
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/security-tips" className="text-blue-600 hover:underline">
                      Security best practices
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/content-protection" className="text-blue-600 hover:underline">
                      Protecting your content
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle>Troubleshooting</CardTitle>
                <CardDescription>Solutions for common issues</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/login-issues" className="text-blue-600 hover:underline">
                      Login problems
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/payment-issues" className="text-blue-600 hover:underline">
                      Payment issues
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/upload-troubleshooting" className="text-blue-600 hover:underline">
                      Upload troubleshooting
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/account-recovery" className="text-blue-600 hover:underline">
                      Account recovery
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact support section */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold mb-4">Can't find what you're looking for?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is ready to assist you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Contact Support
              </Link>
              <Link to="/faq" className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                View FAQ
              </Link>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
