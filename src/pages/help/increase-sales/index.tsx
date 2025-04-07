
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { TrendingUp } from "lucide-react";

const SalesHelp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/" className="text-blue-600 hover:underline">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link to="/help" className="text-blue-600 hover:underline">Help Center</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link to="/help/sellers" className="text-blue-600 hover:underline">For Sellers</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Tips to Increase Sales</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <TrendingUp className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Tips to Increase Your Sales</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Whether you're just starting out or looking to grow your existing business on Magnificent Soles, these proven strategies can help you attract more customers and increase your sales.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Optimize Your Profile</h2>
            <p>
              Your profile is your storefront—make it inviting and professional:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Professional profile photo:</strong> Use a clear, high-quality image that represents you well</li>
              <li><strong>Compelling banner image:</strong> Showcase your best content or a professional banner</li>
              <li><strong>Detailed bio:</strong> Tell buyers about yourself, your style, and what makes your content unique</li>
              <li><strong>Clear content categories:</strong> Organize your offerings so buyers can easily find what they're looking for</li>
              <li><strong>Regular updates:</strong> Keep your profile fresh with new content and updates</li>
              <li><strong>Verification badges:</strong> Complete all platform verifications to build trust</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Pro Tip</p>
              <p>Buyers often check your profile before making a purchase. A complete, professional profile can significantly increase conversion rates.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Create High-Quality Content</h2>
            <p>
              Quality always stands out in a crowded marketplace:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Invest in good equipment:</strong> Quality lighting and cameras make a huge difference</li>
              <li><strong>Focus on composition:</strong> Pay attention to framing, backgrounds, and presentation</li>
              <li><strong>Be consistent:</strong> Develop a recognizable style or theme</li>
              <li><strong>Pay attention to details:</strong> Grooming, setting, and accessories all matter</li>
              <li><strong>Create diverse content:</strong> Offer variety while staying true to your niche</li>
              <li><strong>Listen to feedback:</strong> Use buyer comments to improve your offerings</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Strategic Pricing</h2>
            <p>
              Finding the right price point is crucial:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Research competitors:</strong> Know what others with similar content are charging</li>
              <li><strong>Value-based pricing:</strong> Price according to the uniqueness and quality of your content</li>
              <li><strong>Bundle offerings:</strong> Create packages that offer better value</li>
              <li><strong>Tiered pricing:</strong> Offer different levels of content at various price points</li>
              <li><strong>Limited-time promotions:</strong> Use strategic discounts to attract new buyers</li>
              <li><strong>Premium exclusive content:</strong> Offer special content at premium prices</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Effective Marketing</h2>
            <p>
              Actively promote your content:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Post regularly:</strong> Maintain a consistent schedule for new uploads</li>
              <li><strong>Use all platform features:</strong> Utilize stories, featured content, and other promotional tools</li>
              <li><strong>Cross-promotion:</strong> Collaborate with other sellers when appropriate</li>
              <li><strong>Engage with buyers:</strong> Respond to messages and comments promptly</li>
              <li><strong>Create teasers:</strong> Share previews of upcoming content to build anticipation</li>
              <li><strong>Seasonal content:</strong> Create themed content for holidays and special occasions</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>While promoting your Magnificent Soles content elsewhere, always follow the terms of service of both our platform and any other platforms you use.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Provide Excellent Customer Service</h2>
            <p>
              Happy customers become repeat buyers:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Quick responses:</strong> Reply to messages within 24 hours when possible</li>
              <li><strong>Professional communication:</strong> Be courteous and clear in all interactions</li>
              <li><strong>Personalization:</strong> Remember your regular buyers' preferences</li>
              <li><strong>Fulfilling requests:</strong> Deliver custom content as promised and on time</li>
              <li><strong>Show appreciation:</strong> Thank buyers and consider loyalty rewards</li>
              <li><strong>Handle issues gracefully:</strong> Address problems quickly and professionally</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Analyze and Adapt</h2>
            <p>
              Use data to inform your strategy:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Review analytics:</strong> Regularly check which content performs best</li>
              <li><strong>Track buyer behavior:</strong> Note what types of content generate repeat purchases</li>
              <li><strong>A/B testing:</strong> Try different approaches to see what works</li>
              <li><strong>Solicit feedback:</strong> Ask buyers what they'd like to see</li>
              <li><strong>Stay current:</strong> Keep up with trends in your niche</li>
              <li><strong>Refine your strategy:</strong> Continuously improve based on what you learn</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/pricing-content" className="text-blue-600 hover:underline">
                  Effective pricing strategies
                </Link>
              </li>
              <li>
                <Link to="/help/promotions" className="text-blue-600 hover:underline">
                  Running promotions
                </Link>
              </li>
              <li>
                <Link to="/help/analytics" className="text-blue-600 hover:underline">
                  Understanding your analytics
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <Link to="/help/sellers" className="text-blue-600 hover:underline flex items-center gap-2">
              <span>Back to Seller Help</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SalesHelp;
