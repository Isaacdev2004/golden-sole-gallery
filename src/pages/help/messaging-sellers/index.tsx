
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";

const MessagingSellersHelp = () => {
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
                <span>Messaging Sellers</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">How to Message Sellers</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Direct communication with sellers is a key feature of Magnificent Soles, allowing you to ask questions, request custom content, and build relationships.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Sending Your First Message</h2>
            <p>
              There are several ways to start a conversation with a seller:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Visit their profile and click the "Message" button</li>
              <li>From a content page, click "Contact Seller"</li>
              <li>From your messages dashboard, click "New Message" and search for a seller</li>
              <li>After a purchase, you'll have the option to message the seller directly</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Messaging Etiquette</h2>
            <p>
              To maintain a positive experience for everyone on the platform:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Be respectful and professional in all communications</li>
              <li>Clearly state your questions or requests</li>
              <li>Give sellers reasonable time to respond (most respond within 24-48 hours)</li>
              <li>Respect seller boundaries regarding custom content requests</li>
              <li>Use the platform's messaging system for all communications (for your protection)</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>Never share personal contact information or arrange payments outside the platform. This protects both you and the seller and ensures our buyer protection policies apply to your transactions.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Requesting Custom Content</h2>
            <p>
              Many sellers offer custom content tailored to your preferences:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Start by checking if the seller offers custom content (noted on their profile)</li>
              <li>Be specific about what you're looking for, including any preferences</li>
              <li>Ask about pricing and timeframes</li>
              <li>Wait for the seller to confirm they can fulfill your request</li>
              <li>Once agreed, the seller will create a custom listing for you to purchase</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Message Privacy & Safety</h2>
            <p>
              Your messages are private between you and the seller, with a few important notes:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Messages are encrypted and only visible to you and the seller</li>
              <li>Our system may automatically scan messages for prohibited content</li>
              <li>You can report inappropriate messages through the "Report" button</li>
              <li>Message history is retained for dispute resolution purposes if needed</li>
              <li>You can block a seller at any time if you no longer wish to communicate</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/custom-content" className="text-blue-600 hover:underline">
                  Requesting custom content
                </Link>
              </li>
              <li>
                <Link to="/help/message-etiquette" className="text-blue-600 hover:underline">
                  Messaging etiquette
                </Link>
              </li>
              <li>
                <Link to="/help/reporting-messages" className="text-blue-600 hover:underline">
                  Reporting inappropriate messages
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

export default MessagingSellersHelp;
