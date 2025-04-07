
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";

const TwoFactorHelp = () => {
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
                <span>Two-Factor Authentication</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">Two-Factor Authentication</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Two-factor authentication (2FA) adds an extra layer of security to your Magnificent Soles account by requiring a second verification step when logging in.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Use Two-Factor Authentication?</h2>
            <p>
              Using 2FA significantly increases your account security by:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Preventing unauthorized access even if your password is compromised</li>
              <li>Adding a physical component to your security (your phone or authentication device)</li>
              <li>Providing immediate notification if someone attempts to access your account</li>
              <li>Protecting your financial information and content</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Setting Up Two-Factor Authentication</h2>
            <ol className="list-decimal pl-6 my-4 space-y-4">
              <li>
                <strong>Go to Account Settings</strong>
                <p>Log in to your account and navigate to Settings → Security</p>
              </li>
              <li>
                <strong>Select "Enable Two-Factor Authentication"</strong>
                <p>Click on the button to begin setup</p>
              </li>
              <li>
                <strong>Choose your 2FA method</strong>
                <p>Select from SMS verification, authentication app, or security key</p>
              </li>
              <li>
                <strong>Follow the setup instructions</strong>
                <ul className="list-disc pl-6 my-2 space-y-1">
                  <li><strong>For SMS:</strong> Verify your phone number and enter the code sent to you</li>
                  <li><strong>For Authentication app:</strong> Scan the QR code with your app (like Google Authenticator or Authy)</li>
                  <li><strong>For Security key:</strong> Connect your security key when prompted and follow device instructions</li>
                </ul>
              </li>
              <li>
                <strong>Save backup codes</strong>
                <p>Store these securely - they'll help you regain access if you lose your authentication device</p>
              </li>
            </ol>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important Security Tip</p>
              <p>Never share your 2FA codes with anyone, including Magnificent Soles support staff. Our team will never ask for your authentication codes.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">If You Lose Access to Your Authentication Method</h2>
            <p>
              If you can't access your authentication app or phone:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Use one of your backup codes to log in</li>
              <li>If you don't have backup codes, contact support with proof of identity</li>
              <li>Recovery can take 1-3 business days to verify your identity and restore access</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/secure-password" className="text-blue-600 hover:underline">
                  Creating a secure password
                </Link>
              </li>
              <li>
                <Link to="/help/login-alerts" className="text-blue-600 hover:underline">
                  Login alerts and notifications
                </Link>
              </li>
              <li>
                <Link to="/help/suspicious-activity" className="text-blue-600 hover:underline">
                  Reporting suspicious activity
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

export default TwoFactorHelp;
