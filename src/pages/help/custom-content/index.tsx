
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";

const CustomContentHelp = () => {
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
                <span>Creating Custom Content</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">Creating Custom Content</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Creating personalized custom content can be one of the most lucrative ways to earn on Magnificent Soles. This guide will help you set up, manage, and deliver custom content requests effectively.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started with Custom Content</h2>
            <p>
              To offer custom content on your profile:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your seller dashboard</li>
              <li>Navigate to the "Services" tab</li>
              <li>Enable the "Custom Content" option</li>
              <li>Set up your custom content parameters:
                <ul className="list-disc pl-6 mt-2">
                  <li>Base pricing</li>
                  <li>Turnaround time</li>
                  <li>Types of customs you offer</li>
                  <li>Any limitations or boundaries</li>
                </ul>
              </li>
              <li>Create a custom content menu (optional but recommended)</li>
              <li>Save your settings</li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Pro Tip</p>
              <p>Be very specific about what you do and don't offer for custom content. Clear boundaries save time and prevent misunderstandings with buyers.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Setting Effective Custom Pricing</h2>
            <p>
              Developing a pricing structure for custom work:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Base rate:</strong> Start with a minimum price for basic customs</li>
              <li><strong>Add-on pricing:</strong> Charge additional fees for specific requests or features</li>
              <li><strong>Exclusivity premium:</strong> Consider charging more if the content will be exclusive to one buyer</li>
              <li><strong>Rush fees:</strong> Add charges for expedited delivery</li>
              <li><strong>Complexity factors:</strong> Adjust pricing based on the difficulty or time investment required</li>
            </ul>
            <p>
              Sample pricing structure:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Basic custom photo set (5 images): $XX</li>
              <li>Additional photos: $X per photo</li>
              <li>Custom video (3-5 minutes): $XX-$XXX</li>
              <li>Specific requests (special items, settings): $X-$XX additional</li>
              <li>24-hour rush delivery: +50% of base price</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Custom Requests</h2>
            <p>
              When you receive a custom content request:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Review the request carefully to ensure it fits within your offerings</li>
              <li>Clarify any details or specifications that are unclear</li>
              <li>Provide a clear quote with breakdown of costs</li>
              <li>Confirm delivery timeframe</li>
              <li>Once terms are agreed, create a custom listing for the buyer</li>
              <li>Receive payment (typically held in escrow until delivery)</li>
              <li>Create and deliver the content as specified</li>
              <li>Follow up to ensure customer satisfaction</li>
            </ol>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>Always get all details in writing through the platform's messaging system. This protects both you and the buyer in case there are any misunderstandings about what was requested.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips for Quality Custom Content</h2>
            <p>
              Delivering exceptional custom content:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Communication:</strong> Maintain open communication throughout the process</li>
              <li><strong>Detail focus:</strong> Pay close attention to the specific details requested</li>
              <li><strong>Quality control:</strong> Ensure lighting, angles, and production quality are excellent</li>
              <li><strong>Timeliness:</strong> Deliver on or before the promised date</li>
              <li><strong>Personal touch:</strong> Include personalized elements that show you created it specifically for them</li>
              <li><strong>Exceed expectations:</strong> When possible, include a bonus or extra that wasn't explicitly requested</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Handling Revisions and Feedback</h2>
            <p>
              Addressing buyer requests for changes:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Set clear revision policies upfront (e.g., one minor revision included)</li>
              <li>Be receptive to feedback</li>
              <li>Address reasonable revision requests promptly</li>
              <li>For major changes outside the original scope, discuss additional compensation</li>
              <li>Document all revision requests through the platform's messaging system</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Legal and Safety Considerations</h2>
            <p>
              Protecting yourself while creating custom content:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>All custom content must still comply with platform content guidelines</li>
              <li>Clearly state usage rights (whether buyer has exclusive rights or you retain rights to sell later)</li>
              <li>Document all agreements through the platform's messaging system</li>
              <li>Never share personal contact information or arrange payments outside the platform</li>
              <li>Trust your instincts—you always have the right to decline any request</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/pricing-content" className="text-blue-600 hover:underline">
                  Pricing your content effectively
                </Link>
              </li>
              <li>
                <Link to="/help/content-guidelines" className="text-blue-600 hover:underline">
                  Content guidelines and policies
                </Link>
              </li>
              <li>
                <Link to="/help/increase-sales" className="text-blue-600 hover:underline">
                  Tips to increase sales
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

export default CustomContentHelp;
