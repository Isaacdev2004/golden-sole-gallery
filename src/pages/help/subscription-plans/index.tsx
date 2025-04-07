
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { Layers } from "lucide-react";

const SubscriptionPlansHelp = () => {
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
                <span>Subscription Plans Explained</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <Layers className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Subscription Plans Explained</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Magnificent Soles offers various subscription plans for both buyers and sellers. This guide explains the different options, their benefits, and how to choose the right plan for your needs.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Platform Subscription Plans</h2>
            <p>
              These are subscription plans for using the Magnificent Soles platform itself:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="bg-white border p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Basic (Free)</h3>
                <p className="text-gray-600 mb-3">$0/month</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Browse and purchase content</li>
                  <li>Basic messaging</li>
                  <li>Standard search features</li>
                  <li>Limited content uploads (sellers)</li>
                  <li>20% platform fee (sellers)</li>
                </ul>
              </div>
              
              <div className="bg-white border p-5 rounded-lg shadow-sm border-primary">
                <h3 className="font-semibold text-lg mb-2">Premium</h3>
                <p className="text-gray-600 mb-3">$9.99/month</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Ad-free browsing experience</li>
                  <li>Advanced search filters</li>
                  <li>Priority messaging</li>
                  <li>Increased upload limits (sellers)</li>
                  <li>18% platform fee (sellers)</li>
                  <li>Analytics dashboard (sellers)</li>
                </ul>
              </div>
              
              <div className="bg-white border p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Elite</h3>
                <p className="text-gray-600 mb-3">$19.99/month</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>All Premium features</li>
                  <li>Early access to new features</li>
                  <li>Exclusive content access</li>
                  <li>Unlimited uploads (sellers)</li>
                  <li>15% platform fee (sellers)</li>
                  <li>Promoted content (sellers)</li>
                  <li>Priority support</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Value Tip</p>
              <p>For sellers, the reduced platform fees on Premium and Elite plans can often pay for themselves if you're making regular sales.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Content Creator Subscription Options</h2>
            <p>
              As a seller, you can offer subscription options to your buyers:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Monthly subscriptions:</strong> Buyers pay a recurring monthly fee for access to your content library</li>
              <li><strong>Multi-month discounts:</strong> Offer discounts for longer subscription commitments (3, 6, 12 months)</li>
              <li><strong>Tiered subscriptions:</strong> Create different levels (e.g., Silver, Gold, Platinum) with varying perks</li>
              <li><strong>Free trial periods:</strong> Offer limited-time free access to encourage subscriptions</li>
            </ul>
            <p>
              As a seller, you determine your own subscription pricing and what content is included.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Benefits of Creator Subscriptions</h2>
            <p>
              Understanding the advantages of offering subscriptions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-white border p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Benefits for Sellers</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Steady, predictable income</li>
                  <li>Build a loyal fan base</li>
                  <li>Simpler than pricing individual items</li>
                  <li>Higher lifetime value per customer</li>
                  <li>More flexibility in content creation</li>
                </ul>
              </div>
              
              <div className="bg-white border p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Benefits for Buyers</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Better value than purchasing items individually</li>
                  <li>Regular new content from favorite creators</li>
                  <li>Exclusive content not available elsewhere</li>
                  <li>Special perks and early access</li>
                  <li>More personal connection with creators</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Subscriber vs. One-time Buyer</h2>
            <p>
              Understanding the different purchase options as a buyer:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>One-time purchases:</strong> Buy individual pieces of content with a single payment</li>
              <li><strong>Bundle purchases:</strong> Buy groups of related content at a discounted price</li>
              <li><strong>Subscriptions:</strong> Pay a recurring fee for ongoing access to a creator's content</li>
              <li><strong>Custom content:</strong> Commission personalized content directly from creators</li>
            </ul>
            <p>
              You can mix and match these options based on your preferences and budget.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important for Buyers</p>
              <p>When you cancel a subscription, you typically retain access until the end of your current billing period. After that, you'll lose access to subscription content unless you resubscribe or purchase specific items individually.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Your Subscriptions</h2>
            <p>
              Taking control of your subscription plans:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your account settings</li>
              <li>Select "Subscriptions"</li>
              <li>Here you can:
                <ul className="list-disc pl-6 mt-2">
                  <li>View all active subscriptions</li>
                  <li>See renewal dates and billing amounts</li>
                  <li>Upgrade or downgrade your platform subscription</li>
                  <li>Cancel or pause subscriptions</li>
                  <li>Update payment methods</li>
                </ul>
              </li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Choosing the Right Plan</h2>
            <p>
              Tips for selecting the best option for your needs:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>For casual buyers:</strong> The free Basic plan is sufficient for occasional purchases</li>
              <li><strong>For regular buyers:</strong> Premium offers better features and ad-free browsing</li>
              <li><strong>For new sellers:</strong> Start with Basic until you build a content library, then consider upgrading</li>
              <li><strong>For established sellers:</strong> Premium or Elite plans often pay for themselves through lower fees</li>
              <li><strong>Try before you commit:</strong> Many sellers offer subscription trials or sample content</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/subscription-management" className="text-blue-600 hover:underline">
                  Managing your subscription
                </Link>
              </li>
              <li>
                <Link to="/help/pricing-content" className="text-blue-600 hover:underline">
                  Pricing your content effectively
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-blue-600 hover:underline">
                  Platform pricing details
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <Link to="/help" className="text-blue-600 hover:underline flex items-center gap-2">
              <span>Back to Help Center</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubscriptionPlansHelp;
