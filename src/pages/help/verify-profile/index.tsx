
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const VerifyProfileHelp = () => {
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
                <span>Verifying Your Profile</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <CheckCircle className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Verifying Your Profile</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Profile verification on Magnificent Soles is an important step that helps build trust, ensures platform safety, and unlocks additional features. This guide explains the verification process for both buyers and sellers.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Verification Matters</h2>
            <p>
              Profile verification serves several important purposes:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Age verification:</strong> Ensures all users are 18+ as required by our terms</li>
              <li><strong>Trust and safety:</strong> Creates a more secure environment for all users</li>
              <li><strong>Fraud prevention:</strong> Helps prevent impersonation and unauthorized activity</li>
              <li><strong>Feature access:</strong> Unlocks additional platform features</li>
              <li><strong>Credibility:</strong> Shows others you're a genuine member of the community</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Verification (Required for All Users)</h2>
            <p>
              All users must complete these verification steps:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li><strong>Email verification:</strong> Clicking the link sent to your email during registration</li>
              <li><strong>Age verification:</strong> Confirming you're 18+ through our age verification partner</li>
            </ol>
            <p>
              Without these basic verifications, you'll have limited access to the platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Buyer Verification (Optional)</h2>
            <p>
              Buyers can choose to verify their profiles for additional benefits:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Verified badge:</strong> Shows sellers you're a legitimate buyer</li>
              <li><strong>Custom content access:</strong> Many sellers only accept custom requests from verified buyers</li>
              <li><strong>Message priority:</strong> Verified buyers often receive faster responses</li>
              <li><strong>Enhanced features:</strong> Access to certain platform features</li>
            </ul>
            <p>
              To get verified as a buyer:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your account settings</li>
              <li>Select "Verify My Profile"</li>
              <li>Complete identity verification through our third-party verification service</li>
              <li>Wait for approval (typically 24-48 hours)</li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Privacy Note</p>
              <p>Your identification documents are processed securely by our verification partner and are not stored on our servers. Only your verification status is shared with us.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Seller Verification (Required for Sellers)</h2>
            <p>
              All sellers must complete comprehensive verification:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li><strong>Identity verification:</strong> Providing government-issued ID to confirm your identity and age</li>
              <li><strong>Face verification:</strong> A selfie or video call to match your ID</li>
              <li><strong>Content rights confirmation:</strong> Verifying you have rights to sell your content</li>
              <li><strong>Tax information:</strong> Providing necessary tax documentation</li>
              <li><strong>Payment information:</strong> Setting up verified payment methods</li>
            </ol>
            <p>
              The seller verification process typically takes 1-3 business days to complete after all documents are submitted.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Verification Badge</h2>
            <p>
              Once verified, your profile will display a verification badge:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>The blue checkmark appears next to your username across the platform</li>
              <li>Hovering over the badge shows your verification level</li>
              <li>Verified profiles rank higher in search results</li>
              <li>The badge helps distinguish genuine accounts from potential impersonators</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>If someone is using your likeness or impersonating you on the platform, report it immediately through our reporting system. Verified profiles make impersonation much more difficult.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Maintaining Verified Status</h2>
            <p>
              To maintain your verified status:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Keep your contact information up to date</li>
              <li>Update your ID documents if they expire</li>
              <li>Follow platform guidelines and terms of service</li>
              <li>Respond to any verification check requests promptly</li>
            </ul>
            <p>
              Verification status may be revoked if platform rules are violated or if we detect suspicious activity.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Verification Troubleshooting</h2>
            <p>
              If you encounter issues during verification:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Rejected documents:</strong> Ensure your ID is valid, not expired, and clearly visible in the image</li>
              <li><strong>Face match issues:</strong> Take your selfie in good lighting with a neutral expression</li>
              <li><strong>Technical problems:</strong> Try a different browser or device</li>
              <li><strong>Long processing times:</strong> During peak periods, verification may take longer than usual</li>
              <li><strong>Specific requirements:</strong> Some countries may have additional verification requirements</li>
            </ul>
            <p>
              If you continue to experience issues, contact our support team with details of the problem.
            </p>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/creating-account" className="text-blue-600 hover:underline">
                  How to create an account
                </Link>
              </li>
              <li>
                <Link to="/help/setting-up-seller" className="text-blue-600 hover:underline">
                  Setting up as a seller
                </Link>
              </li>
              <li>
                <Link to="/help/privacy-features" className="text-blue-600 hover:underline">
                  Privacy features
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

export default VerifyProfileHelp;
