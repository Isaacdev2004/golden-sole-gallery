
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";

const BrowsingContentHelp = () => {
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
                <span>How to Search for Content</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">How to Search for Content</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Finding the perfect content on Magnificent Soles is easy with our powerful search tools.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Using the Search Bar</h2>
            <p>
              The search bar is available at the top of every page. Simply type in keywords related to the content you're looking for, such as:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Specific foot features (high arches, pedicures, etc.)</li>
              <li>Content types (photos, videos, custom)</li>
              <li>Seller names if you know who you're looking for</li>
              <li>Special attributes or themes</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Advanced Search Options</h2>
            <p>
              For more specific searches, use the advanced search feature available from the browse page:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to the <Link to="/browse" className="text-blue-600 hover:underline">Browse</Link> page</li>
              <li>Click on "Advanced Search" below the main search bar</li>
              <li>Use the filters to narrow down your search by content type, price range, seller rating, and more</li>
              <li>Sort results by relevance, newest, price, or popularity</li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Pro Tip</p>
              <p>Save your search filters for future use by clicking the "Save Search" button after setting up your filters.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Recommended Content</h2>
            <p>
              The more you browse and purchase content, the better our recommendation engine gets at suggesting content that matches your preferences. Check the "Recommended for You" section on your dashboard regularly for personalized suggestions.
            </p>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/content-filters" className="text-blue-600 hover:underline">
                  Using filters to find what you want
                </Link>
              </li>
              <li>
                <Link to="/help/content-categories" className="text-blue-600 hover:underline">
                  Understanding content categories
                </Link>
              </li>
              <li>
                <Link to="/help/seller-profiles" className="text-blue-600 hover:underline">
                  Exploring seller profiles
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

export default BrowsingContentHelp;
