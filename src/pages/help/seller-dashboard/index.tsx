
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";

const SellerDashboardHelp = () => {
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
                <span>Using the Seller Dashboard</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">Using the Seller Dashboard</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              The seller dashboard is your command center for managing your content, tracking sales, analyzing performance, and handling customer communications.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Dashboard Overview</h2>
            <p>
              Your seller dashboard consists of several tabs:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Overview:</strong> Quick stats, recent sales, and notifications</li>
              <li><strong>Content:</strong> Upload, organize, and manage your content library</li>
              <li><strong>Analytics:</strong> Detailed performance metrics and insights</li>
              <li><strong>Earnings:</strong> Sales history, payout information, and financial reports</li>
              <li><strong>Messages:</strong> Communication with buyers and customer service</li>
              <li><strong>Settings:</strong> Profile management, notification preferences, and account settings</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Stats and Metrics</h2>
            <p>
              The overview tab provides at-a-glance information about your account performance:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Today's earnings and sales</li>
              <li>This month's earnings compared to previous month</li>
              <li>Recent sales and purchases</li>
              <li>Content performance highlights</li>
              <li>Unread messages and notifications</li>
              <li>Top-performing content</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Your Content</h2>
            <p>
              In the Content tab, you can:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Upload new photos, videos, and other content</li>
              <li>Organize content into collections or categories</li>
              <li>Set pricing for individual items or packages</li>
              <li>Edit descriptions, tags, and other metadata</li>
              <li>Enable or disable specific content</li>
              <li>Monitor content performance</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Pro Tip</p>
              <p>Regularly review your content performance metrics to understand what your audience prefers. Use these insights to guide your content creation strategy.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Handling Orders and Customer Requests</h2>
            <p>
              When you receive orders or custom content requests:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>You'll receive a notification in your dashboard and via email (if enabled)</li>
              <li>View order details in the "Orders" section under the Earnings tab</li>
              <li>For custom requests, communicate with the buyer through the messaging system</li>
              <li>Once you deliver custom content, the buyer needs to approve it before payment is released</li>
              <li>Handle any questions or issues promptly to maintain good customer relations</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Customizing Your Dashboard</h2>
            <p>
              You can personalize your dashboard experience:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Arrange widget positions in the Overview tab</li>
              <li>Set your preferred date ranges for analytics</li>
              <li>Customize notification preferences</li>
              <li>Create saved views for content filtering</li>
              <li>Set preferred payout methods and schedules</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/analytics" className="text-blue-600 hover:underline">
                  Understanding your analytics
                </Link>
              </li>
              <li>
                <Link to="/help/uploading-content" className="text-blue-600 hover:underline">
                  How to upload content
                </Link>
              </li>
              <li>
                <Link to="/help/pricing-content" className="text-blue-600 hover:underline">
                  Pricing your content effectively
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

export default SellerDashboardHelp;
