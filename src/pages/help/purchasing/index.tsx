
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";

const PurchasingHelp = () => {
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
                <Link to="/help/buyers" className="text-blue-600 hover:underline">For Buyers</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Making Purchases</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">Making Purchases</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Purchasing content on Magnificent Soles is secure and straightforward. Here's everything you need to know about buying content.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Step-by-Step Purchase Guide</h2>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Find the content you want to purchase through search or by browsing seller profiles</li>
              <li>Click on the content to view its details page</li>
              <li>Review the content description, preview (if available), and price</li>
              <li>Click the "Purchase" or "Buy Now" button</li>
              <li>Select your payment method</li>
              <li>Confirm your purchase and complete the payment</li>
              <li>Access your purchased content through your buyer dashboard</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Options</h2>
            <p>
              We offer several secure payment methods:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Credit/Debit Cards (Visa, Mastercard, American Express)</li>
              <li>PayPal</li>
              <li>Platform Credits (purchased or earned through promotions)</li>
              <li>Cryptocurrency (Bitcoin, Ethereum)</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Security First</p>
              <p>All transactions are encrypted and processed through secure payment processors. We never store your complete payment details on our servers.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Content Access</h2>
            <p>
              After purchasing content, you'll have access based on the type of purchase:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>One-time purchases:</strong> Permanent access to the specific content</li>
              <li><strong>Subscriptions:</strong> Access to a seller's content library for the subscription period</li>
              <li><strong>Custom content:</strong> Exclusive content created for you, with access terms as agreed upon</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Purchase History and Downloads</h2>
            <p>
              All your purchases are tracked and available in your buyer dashboard. From there, you can:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>View your purchase history</li>
              <li>Download content (where downloads are permitted)</li>
              <li>Stream videos and view images</li>
              <li>Contact sellers regarding your purchases</li>
              <li>Manage your subscriptions</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/payment-methods" className="text-blue-600 hover:underline">
                  Accepted payment methods
                </Link>
              </li>
              <li>
                <Link to="/help/buyer-protection" className="text-blue-600 hover:underline">
                  Buyer protection policy
                </Link>
              </li>
              <li>
                <Link to="/help/subscription-vs-onetime" className="text-blue-600 hover:underline">
                  Subscription vs. one-time purchases
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <Link to="/help/buyers" className="text-blue-600 hover:underline flex items-center gap-2">
              <span>Back to Buyer Help</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PurchasingHelp;
