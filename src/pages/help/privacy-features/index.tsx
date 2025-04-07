
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { Eye } from "lucide-react";

const PrivacyFeaturesHelp = () => {
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
                <Link to="/help/privacy-security" className="text-blue-600 hover:underline">Privacy & Security</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Privacy Features</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <Eye className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Privacy Features</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Magnificent Soles offers a variety of privacy features to help you control your information and maintain your desired level of privacy while using the platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Profile Privacy Settings</h2>
            <p>
              Control who can see your profile and activity:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Profile visibility:</strong> Choose between public, registered users only, or subscribers only</li>
              <li><strong>Country/region visibility:</strong> Control whether your location is displayed</li>
              <li><strong>Activity status:</strong> Show or hide when you're online</li>
              <li><strong>Last seen status:</strong> Control visibility of your last active timestamp</li>
              <li><strong>View history:</strong> Enable/disable tracking of content you've viewed</li>
              <li><strong>Profile discovery:</strong> Control whether your profile appears in search results</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">For Sellers</p>
              <p>More restrictive privacy settings may limit your discoverability and potential sales. Consider balancing privacy needs with business growth goals.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Content Privacy Controls</h2>
            <p>
              Manage who can see and interact with your content:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Content privacy levels:</strong> Set individual content to public, subscribers only, or private</li>
              <li><strong>Geo-restrictions:</strong> Restrict content visibility by country/region</li>
              <li><strong>Commenting controls:</strong> Enable/disable comments on your content</li>
              <li><strong>Download permissions:</strong> Control whether buyers can download your content</li>
              <li><strong>Sharing permissions:</strong> Enable/disable social sharing features</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Communication Privacy</h2>
            <p>
              Control how others can contact and interact with you:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Messaging permissions:</strong> Choose who can send you direct messages</li>
              <li><strong>Message requests:</strong> Filter messages from users you don't follow</li>
              <li><strong>Read receipts:</strong> Control whether others see when you've read their messages</li>
              <li><strong>Custom content requests:</strong> Enable/disable custom content requests</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Blocking and Restricting Users</h2>
            <p>
              Manage unwanted interactions:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to the user's profile you want to block</li>
              <li>Click the three dots menu in the upper right</li>
              <li>Select "Block User" or "Restrict User"</li>
              <li>Confirm your choice</li>
            </ol>
            <p>
              The difference between blocking and restricting:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Blocking:</strong> The user cannot see your profile, content, or contact you in any way</li>
              <li><strong>Restricting:</strong> The user can see your public content but cannot message you or comment on your content</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>If you're experiencing harassment or other serious issues, please report the user in addition to blocking them. This helps us maintain a safe platform for everyone.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Privacy Controls</h2>
            <p>
              Manage your personal data:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Data download:</strong> Request a copy of your personal data</li>
              <li><strong>Account deletion:</strong> Permanently delete your account and personal information</li>
              <li><strong>Usage history:</strong> Clear your browsing and search history on the platform</li>
              <li><strong>Privacy logs:</strong> Review login history and account access</li>
              <li><strong>Cookie preferences:</strong> Manage cookie and tracking settings</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/privacy-settings" className="text-blue-600 hover:underline">
                  Managing privacy settings
                </Link>
              </li>
              <li>
                <Link to="/help/blocking-users" className="text-blue-600 hover:underline">
                  Blocking and unblocking users
                </Link>
              </li>
              <li>
                <Link to="/help/data-access" className="text-blue-600 hover:underline">
                  Requesting your data
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <Link to="/help/privacy-security" className="text-blue-600 hover:underline flex items-center gap-2">
              <span>Back to Privacy & Security</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyFeaturesHelp;
