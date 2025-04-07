
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { Store } from "lucide-react";

const SellerSetupHelp = () => {
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
                <span>Setting Up as a Seller</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <Store className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Setting Up as a Seller</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Ready to turn your passion into profit on Magnificent Soles? This comprehensive guide will walk you through the process of setting up your seller account and preparing for your first sale.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Account Creation and Verification</h2>
            <p>
              First, you'll need to create or upgrade your account:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li><strong>If you're new to the platform:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Go to the registration page</li>
                  <li>Select "Create Seller Account" during sign-up</li>
                  <li>Complete the basic registration information</li>
                </ul>
              </li>
              <li><strong>If you already have a buyer account:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Log in to your existing account</li>
                  <li>Go to account settings</li>
                  <li>Select "Upgrade to Seller"</li>
                </ul>
              </li>
            </ol>
            <p>
              After initial registration, you'll need to complete our verification process:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Provide a government-issued ID to verify your identity and age (18+)</li>
              <li>Complete a selfie verification or video call to confirm your identity</li>
              <li>Sign the content creator agreement</li>
              <li>Provide tax information (varies by country)</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>Verification typically takes 1-3 business days. You cannot upload or sell content until your verification is complete.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Setting Up Your Seller Profile</h2>
            <p>
              Your profile is your storefront, so make it inviting:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Profile photo:</strong> Upload a clear, appealing profile picture (face recommended but not required)</li>
              <li><strong>Cover image:</strong> Add an attractive banner image that represents your brand</li>
              <li><strong>Username:</strong> Choose a memorable, marketable username if you haven't already</li>
              <li><strong>Bio:</strong> Write an engaging description about yourself and your content</li>
              <li><strong>Tags/keywords:</strong> Add relevant tags to help buyers find you</li>
              <li><strong>Social media:</strong> Optionally link your approved social media accounts</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Pro Tip</p>
              <p>Your bio should highlight what makes your content unique. Consider mentioning your style, specialties, and the kind of experience buyers can expect.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Setting Up Payment Information</h2>
            <p>
              To receive your earnings, you'll need to set up your payout methods:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your seller dashboard</li>
              <li>Select "Payment Settings"</li>
              <li>Choose "Add Payout Method"</li>
              <li>Select your preferred payout option:
                <ul className="list-disc pl-6 mt-2">
                  <li>Direct deposit/bank transfer</li>
                  <li>PayPal</li>
                  <li>Paxum</li>
                  <li>Cryptocurrency</li>
                  <li>Check by mail (where available)</li>
                </ul>
              </li>
              <li>Enter your payment details</li>
              <li>Complete any verification steps required for your chosen method</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Creating Your Content Strategy</h2>
            <p>
              Before you start uploading, consider your content approach:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Content types:</strong> Decide what types of content you'll offer (photos, videos, customs, etc.)</li>
              <li><strong>Pricing structure:</strong> Determine your pricing strategy for different content types</li>
              <li><strong>Release schedule:</strong> Plan how frequently you'll release new content</li>
              <li><strong>Content organization:</strong> Consider how to categorize your offerings</li>
              <li><strong>Subscription tiers:</strong> Decide if you'll offer subscription options and what they'll include</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Uploading Your First Content</h2>
            <p>
              Once you're verified and your profile is set up:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your seller dashboard</li>
              <li>Select "Upload Content"</li>
              <li>Choose your content type (photo, video, bundle, etc.)</li>
              <li>Upload your files (ensuring they meet our technical requirements)</li>
              <li>Add a compelling title, description, and tags</li>
              <li>Set your pricing</li>
              <li>Choose appropriate categories</li>
              <li>Review and publish (content will undergo review before going live)</li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Getting Featured</p>
              <p>High-quality content with good descriptions and metadata has a better chance of being featured on the platform, which can significantly increase your visibility.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Setting Up Subscriptions (Optional)</h2>
            <p>
              If you want to offer subscription options:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your seller dashboard</li>
              <li>Select "Subscription Settings"</li>
              <li>Click "Enable Subscriptions"</li>
              <li>Set up your subscription tiers, pricing, and benefits</li>
              <li>Create descriptions for each tier</li>
              <li>Publish your subscription options</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Platform Fees</h2>
            <p>
              Be aware of the fee structure:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Standard commission: 20% on all sales</li>
              <li>Volume discounts available as you reach sales milestones</li>
              <li>Payment processing fees vary by payout method</li>
              <li>Additional features or promotion opportunities may have separate costs</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Next Steps After Setup</h2>
            <p>
              Once your seller account is active:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Regularly upload new content to build your library</li>
              <li>Engage with buyers who message you</li>
              <li>Consider running promotions to attract initial customers</li>
              <li>Review your analytics to understand what content performs best</li>
              <li>Continuously optimize your profile and offerings based on feedback</li>
              <li>Join the seller community forums to connect with other creators</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
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
              <li>
                <Link to="/help/tax-information" className="text-blue-600 hover:underline">
                  Tax information for sellers
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

export default SellerSetupHelp;
