
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";

const BuyerProtectionHelp = () => {
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
                <span>Buyer Protection</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <ShieldCheck className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Buyer Protection Policy</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              At Magnificent Soles, we prioritize your trust and satisfaction. Our Buyer Protection Policy ensures your purchases are secure and meet your expectations.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Buyer Protection Guarantees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-white border p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Content Quality Guarantee</h3>
                <p>All content must match descriptions and previews. If content quality differs significantly from what was advertised, you're eligible for a refund.</p>
              </div>
              
              <div className="bg-white border p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Secure Transactions</h3>
                <p>All payments are processed securely with encryption. Your payment details are never shared with sellers or stored unencrypted.</p>
              </div>
              
              <div className="bg-white border p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Fraud Protection</h3>
                <p>We actively monitor for fraudulent activity. If unauthorized charges appear, we'll help resolve them quickly and secure your account.</p>
              </div>
              
              <div className="bg-white border p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Custom Content Protection</h3>
                <p>For custom content orders, funds are held in escrow until you confirm satisfaction with the delivered content.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How to File a Claim</h2>
            <p>
              If you experience an issue with a purchase, here's how to get help:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your purchase history in your buyer dashboard</li>
              <li>Find the transaction in question</li>
              <li>Click "Report an Issue" next to the transaction</li>
              <li>Select the reason for your claim from the dropdown menu</li>
              <li>Provide details about the problem and any supporting evidence</li>
              <li>Submit the claim</li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Claim Timeline</p>
              <p>Claims must be submitted within 48 hours of purchase for digital content. For custom content, claims must be filed within 48 hours of receiving the content.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Claim Resolution Process</h2>
            <p>
              After filing a claim, our resolution process works as follows:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Our support team reviews your claim (typically within 24-48 hours)</li>
              <li>The seller is notified and given an opportunity to respond</li>
              <li>We may request additional information from either party</li>
              <li>Based on our policies and provided evidence, we'll make a determination</li>
              <li>If your claim is approved, you'll receive a refund to your original payment method</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Refund Policy</h2>
            <p>
              Refunds are generally approved for the following reasons:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Content quality differs significantly from description or preview</li>
              <li>Technical issues prevent access to purchased content</li>
              <li>Custom content doesn't match agreed-upon specifications</li>
              <li>Duplicate or accidental purchases</li>
              <li>Unauthorized transactions</li>
            </ul>
            
            <p>
              Refunds may be denied in these circumstances:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Claims filed after the 48-hour window</li>
              <li>"Buyer's remorse" or changing your mind</li>
              <li>Content has been substantially downloaded or consumed</li>
              <li>The content meets the description but doesn't meet subjective expectations</li>
              <li>Custom content that meets agreed-upon specifications</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/disputing-charges" className="text-blue-600 hover:underline">
                  How to dispute charges
                </Link>
              </li>
              <li>
                <Link to="/help/content-guarantees" className="text-blue-600 hover:underline">
                  Content quality guarantees
                </Link>
              </li>
              <li>
                <Link to="/help/refund-policy" className="text-blue-600 hover:underline">
                  Refund policy
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

export default BuyerProtectionHelp;
