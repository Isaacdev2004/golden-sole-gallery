
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { LineChart } from "lucide-react";

const AnalyticsHelp = () => {
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
                <span>Understanding Analytics</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <LineChart className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Understanding Your Analytics</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Analytics are crucial for understanding your performance and making data-driven decisions to grow your business on Magnificent Soles.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Accessing Your Analytics</h2>
            <p>
              You can find your analytics in several places:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>The "Analytics" tab in your seller dashboard provides comprehensive data</li>
              <li>The "Overview" dashboard features quick metric summaries</li>
              <li>Individual content pages show performance metrics specific to that item</li>
              <li>Downloadable reports available from the Analytics tab</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Key Metrics Explained</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Performance Metrics</h3>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Revenue:</strong> Total earnings before fees</li>
              <li><strong>Net earnings:</strong> Your take-home amount after platform fees</li>
              <li><strong>Sales count:</strong> Number of individual sales/transactions</li>
              <li><strong>Average order value:</strong> Typical amount spent per transaction</li>
              <li><strong>Subscription revenue:</strong> Earnings from recurring subscriptions</li>
              <li><strong>Custom content revenue:</strong> Earnings from personalized content</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Traffic & Engagement Metrics</h3>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Profile views:</strong> How many users viewed your profile</li>
              <li><strong>Content impressions:</strong> How often your content appeared in search/browse</li>
              <li><strong>Click-through rate:</strong> Percentage of impressions that led to content views</li>
              <li><strong>Conversion rate:</strong> Percentage of content views that resulted in purchases</li>
              <li><strong>Average time spent:</strong> How long buyers engage with your content</li>
              <li><strong>Follower growth:</strong> Rate at which you're gaining followers</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Key Insight</p>
              <p>Conversion rate is often more important than raw traffic numbers. A high conversion rate means your content effectively convinces viewers to become buyers.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Traffic Sources</h2>
            <p>
              Knowing where your visitors come from helps optimize your marketing:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Platform search:</strong> Users finding you through Magnificent Soles search</li>
              <li><strong>Browse pages:</strong> Users finding you while browsing categories</li>
              <li><strong>Featured content:</strong> Visits from platform-featured promotions</li>
              <li><strong>Direct visits:</strong> Users going directly to your profile</li>
              <li><strong>External referrals:</strong> Traffic from outside links/social media (if you've linked your profile)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Content Performance Analysis</h2>
            <p>
              Compare metrics across your content library:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Best-selling content by revenue and units</li>
              <li>Content with highest conversion rates</li>
              <li>Content with most views/engagement</li>
              <li>Content performance by category/tag</li>
              <li>Pricing effectiveness across different content types</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Using Analytics to Grow Your Business</h2>
            <p>
              Turn insights into action with these strategies:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Identify your best-performing content and create more similar material</li>
              <li>Optimize underperforming content by improving thumbnails, descriptions, or pricing</li>
              <li>Recognize patterns in buyer behavior to better schedule new releases</li>
              <li>Target promotional efforts toward your most effective traffic sources</li>
              <li>Experiment with pricing strategies and measure the impact</li>
              <li>Track seasonal trends to plan content creation calendar</li>
            </ol>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/traffic-sources" className="text-blue-600 hover:underline">
                  Tracking traffic sources
                </Link>
              </li>
              <li>
                <Link to="/help/buyer-demographics" className="text-blue-600 hover:underline">
                  Understanding buyer demographics
                </Link>
              </li>
              <li>
                <Link to="/help/performance-reporting" className="text-blue-600 hover:underline">
                  Monthly performance reporting
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

export default AnalyticsHelp;
