
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { Tag } from "lucide-react";

const PromotionsHelp = () => {
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
                <span>Running Promotions</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <Tag className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Running Promotions</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Strategic promotions can boost your sales, attract new buyers, and encourage repeat purchases. Learn how to create effective promotions on Magnificent Soles.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Promotions Available</h2>
            <p>
              Our platform offers several promotion options:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Limited-time discounts:</strong> Temporary price reductions on specific content</li>
              <li><strong>Bundle deals:</strong> Special pricing when multiple items are purchased together</li>
              <li><strong>Subscription discounts:</strong> Special rates for new subscribers or extended subscriptions</li>
              <li><strong>Loyalty rewards:</strong> Special offers for repeat customers</li>
              <li><strong>Early access:</strong> Preview content before general release</li>
              <li><strong>Custom discount codes:</strong> Unique codes you can share with followers</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Creating a New Promotion</h2>
            <p>
              To set up a promotion:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your seller dashboard and select the "Promotions" tab</li>
              <li>Click "Create New Promotion"</li>
              <li>Select the promotion type you want to create</li>
              <li>Choose which content to include in the promotion</li>
              <li>Set your discount percentage or special pricing</li>
              <li>Define the promotion duration with start and end dates</li>
              <li>Add a promotion description that will appear to buyers</li>
              <li>Review the terms and enable the promotion</li>
            </ol>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>Once a promotion is active, you cannot increase the price or reduce the discount. You can only extend the duration or increase the discount.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Promotion Timing Strategies</h2>
            <p>
              Strategic timing can maximize promotion effectiveness:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Regular schedule:</strong> Monthly or quarterly sales to create anticipation</li>
              <li><strong>New content launch:</strong> Use promotions on older content when releasing new material</li>
              <li><strong>Seasonal promotions:</strong> Align with holidays and special events</li>
              <li><strong>Limited-time flash sales:</strong> Create urgency with 24-48 hour promotions</li>
              <li><strong>Anniversary/milestone celebrations:</strong> Mark personal milestones with special deals</li>
              <li><strong>Slow period boosts:</strong> Run promotions during typical low-sales periods</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Promoting Your Promotions</h2>
            <p>
              Getting the word out about your special offers:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Update your profile banner to highlight current promotions</li>
              <li>Send a message to your subscribers announcing the special offer</li>
              <li>Feature promotion details in your profile description</li>
              <li>Pin promotional content at the top of your page</li>
              <li>Use the platform's promotion feature for increased visibility</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Pro Tip</p>
              <p>Don't run too many promotions simultaneously. Focus on one compelling offer at a time for maximum impact and clearer messaging to your audience.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Measuring Promotion Success</h2>
            <p>
              After your promotion ends:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Check promotion analytics in your dashboard</li>
              <li>Compare sales during the promotion to your regular sales volume</li>
              <li>Analyze how many new customers the promotion attracted</li>
              <li>Track whether promotion buyers became regular customers</li>
              <li>Calculate the actual revenue impact accounting for discounts</li>
              <li>Use these insights to refine future promotion strategies</li>
            </ol>
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
                <Link to="/help/building-audience" className="text-blue-600 hover:underline">
                  Building your audience
                </Link>
              </li>
              <li>
                <Link to="/help/cross-promotion" className="text-blue-600 hover:underline">
                  Cross-promotion techniques
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

export default PromotionsHelp;
