
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { KeyRound } from "lucide-react";

const AccountRecoveryHelp = () => {
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
                <Link to="/help/troubleshooting" className="text-blue-600 hover:underline">Troubleshooting</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Account Recovery</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <KeyRound className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Account Recovery Options</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Lost access to your account? This guide will walk you through the various recovery methods available to regain access to your Magnificent Soles account.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Standard Password Reset</h2>
            <p>
              If you remember your username or email but forgot your password:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to the login page</li>
              <li>Click the "Forgot Password" link</li>
              <li>Enter the email address associated with your account</li>
              <li>Check your email for a password reset link (including spam/junk folders)</li>
              <li>Click the link and follow instructions to create a new password</li>
              <li>Log in with your new password</li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Note</p>
              <p>Password reset links expire after 24 hours. If your link has expired, you'll need to request a new one.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Recovery With Two-Factor Authentication Active</h2>
            <p>
              If you have two-factor authentication enabled but have lost access to your authentication device:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Use backup codes:</strong> If you saved your backup codes, use one to log in</li>
              <li><strong>Recovery phone number:</strong> If you added a recovery phone, you can receive a code there</li>
              <li><strong>Contact support:</strong> If you have neither backup codes nor recovery phone access, you'll need to verify your identity with customer support</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Lost Access to Email Account</h2>
            <p>
              If you can't access the email address associated with your account:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>First, try to recover access to your email account through your email provider</li>
              <li>If that's not possible, contact our support with as much account verification information as possible:
                <ul className="list-disc pl-6 mt-2">
                  <li>Username</li>
                  <li>Date when the account was created (approximate)</li>
                  <li>Payment information used on the account</li>
                  <li>Previous passwords (if you remember any)</li>
                  <li>Content you've purchased or sold</li>
                  <li>Any other identifying information</li>
                </ul>
              </li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Account Locked Due to Suspicious Activity</h2>
            <p>
              If your account has been locked due to suspicious activity:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Click the "Unlock Account" option on the login error screen</li>
              <li>Verify your identity through the provided method (email or phone verification)</li>
              <li>Create a new password</li>
              <li>Review recent account activity to check for unauthorized access</li>
              <li>Enable two-factor authentication if not already active</li>
            </ol>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important Security Notice</p>
              <p>If you believe your account has been compromised, change your password immediately after regaining access, and enable two-factor authentication. Also check your payment methods for any unauthorized charges.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Seller Account Recovery</h2>
            <p>
              For sellers, account recovery requires additional verification due to payment information:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>You may need to provide identity verification documents again</li>
              <li>Payment information must match records</li>
              <li>Recovery process may take 1-3 business days for security purposes</li>
              <li>Payout methods may need to be re-verified after recovery</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Prevention Tips</h2>
            <p>
              To avoid future account access issues:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Enable two-factor authentication</li>
              <li>Save your backup codes in a secure location</li>
              <li>Keep your email address and recovery phone number updated</li>
              <li>Use a password manager to avoid forgotten passwords</li>
              <li>Add a secondary recovery email if possible</li>
              <li>Log out of shared devices and public computers</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Need Personalized Help?</h3>
            <p className="mb-6">
              If you've tried the standard recovery options and still can't access your account, our support team is ready to help. Please provide as much verification information as possible to expedite the recovery process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Contact Support
              </Link>
              <Link to="/help/secure-password" className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Password Security Tips
              </Link>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/help/troubleshooting" className="text-blue-600 hover:underline flex items-center gap-2">
              <span>Back to Troubleshooting</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountRecoveryHelp;
