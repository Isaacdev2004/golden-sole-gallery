
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";

const PricingContentHelp = () => {
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
                <span>Pricing Your Content</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">Pricing Your Content Effectively</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Setting the right prices for your content is crucial to maximizing your earnings while attracting customers. This guide will help you develop an effective pricing strategy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Different Pricing Models</h2>
            <p>
              Magnificent Soles supports several pricing structures:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Individual item pricing:</strong> Set specific prices for each photo, video, or other content</li>
              <li><strong>Bundles/collections:</strong> Group related content together at a discounted rate</li>
              <li><strong>Subscription tiers:</strong> Offer recurring access at different price points with varying perks</li>
              <li><strong>Custom content pricing:</strong> Personalized content at premium rates</li>
              <li><strong>Pay-per-view:</strong> Charge users to unlock specific premium content</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Factors to Consider When Setting Prices</h2>
            <p>
              Several factors should influence your pricing decisions:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Content quality:</strong> Higher quality production usually justifies higher prices</li>
              <li><strong>Content uniqueness:</strong> Rare or specialized content can command premium prices</li>
              <li><strong>Production costs:</strong> Consider your time, equipment, and other expenses</li>
              <li><strong>Content length/quantity:</strong> Videos, photo sets, etc. with more content typically cost more</li>
              <li><strong>Market research:</strong> What are others with similar content charging?</li>
              <li><strong>Your reputation:</strong> Established sellers with good reviews can typically charge more</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Pro Tip</p>
              <p>Don't undervalue your work. While competitive pricing is important, pricing too low can actually reduce perceived value and result in fewer sales overall.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Recommended Price Ranges</h2>
            <p>
              While pricing is highly individual, here are some general guidelines:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Individual photos:</strong> $3-15 depending on quality and uniqueness</li>
              <li><strong>Photo sets:</strong> $10-30 for collections of 10-20 high-quality images</li>
              <li><strong>Short videos (1-5 minutes):</strong> $10-25</li>
              <li><strong>Longer videos (5+ minutes):</strong> $20-50+</li>
              <li><strong>Monthly subscriptions:</strong> $15-50 depending on content quantity and exclusivity</li>
              <li><strong>Custom content:</strong> Typically 1.5-3x the price of similar non-custom content</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Testing and Optimizing Your Pricing</h2>
            <p>
              Finding the optimal price point often requires experimentation:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Start with mid-range pricing based on your research</li>
              <li>Monitor sales performance and customer feedback</li>
              <li>Try different price points for similar content to gauge response</li>
              <li>Analyze your analytics to identify price-sensitive patterns</li>
              <li>Consider seasonal promotions to test price elasticity</li>
              <li>Gradually raise prices as your reputation and quality improve</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Platform Fees and Your Final Earnings</h2>
            <p>
              Remember to account for platform fees when setting prices:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Magnificent Soles charges a commission percentage on all sales (varies by seller level)</li>
              <li>Factor this commission into your pricing strategy</li>
              <li>Higher volume sellers may qualify for lower commission rates</li>
              <li>Payment processing fees may also apply depending on withdrawal method</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/fee-structure" className="text-blue-600 hover:underline">
                  Understanding fee structure
                </Link>
              </li>
              <li>
                <Link to="/help/promotions-discounts" className="text-blue-600 hover:underline">
                  Running promotions and discounts
                </Link>
              </li>
              <li>
                <Link to="/help/custom-content" className="text-blue-600 hover:underline">
                  Creating custom content
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

export default PricingContentHelp;
