
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

const SecurityTipsHelp = () => {
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
                <span>Security Best Practices</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <ShieldCheck className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Security Best Practices</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Protecting your account and personal information is a shared responsibility. Follow these best practices to enhance your security on Magnificent Soles and across the internet.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Account Security</h2>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Create a strong password:</strong> Use a unique combination of upper and lowercase letters, numbers, and special characters</li>
              <li><strong>Enable two-factor authentication:</strong> Add an extra layer of security by requiring a code in addition to your password</li>
              <li><strong>Use different passwords:</strong> Don't reuse passwords across multiple sites or services</li>
              <li><strong>Regular password changes:</strong> Update your password every 3-6 months</li>
              <li><strong>Monitor login activity:</strong> Check your account's login history regularly for suspicious access</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Pro Tip</p>
              <p>Consider using a password manager to generate and store strong, unique passwords for all your accounts.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Device and Browser Security</h2>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Keep software updated:</strong> Always install the latest updates for your devices and browsers</li>
              <li><strong>Use secure connections:</strong> Only access the platform over secure (HTTPS) connections</li>
              <li><strong>Clear browser data:</strong> Regularly clear cookies and browsing history, especially on shared devices</li>
              <li><strong>Private browsing:</strong> Consider using private/incognito mode when accessing sensitive sites</li>
              <li><strong>Device locks:</strong> Secure your devices with passwords, PINs, or biometrics</li>
              <li><strong>Logout completely:</strong> Always log out when finished, especially on shared or public devices</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Recognizing Phishing and Scams</h2>
            <p>
              Be vigilant against attempts to access your account or information:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Verify email sources:</strong> Magnificent Soles emails always come from official domains (@magnificentsoles.com)</li>
              <li><strong>Check links:</strong> Hover over links to verify their destination before clicking</li>
              <li><strong>Be skeptical of urgent requests:</strong> Scammers often create false urgency to rush decisions</li>
              <li><strong>Don't provide personal information:</strong> We will never ask for your password via email</li>
              <li><strong>Report suspicious messages:</strong> Forward suspicious emails to our security team</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Warning Signs</p>
              <p>Be suspicious of messages with poor spelling/grammar, generic greetings, requests for immediate action, threats, or offers that seem too good to be true.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Security</h2>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Use platform payment methods only:</strong> Never send money outside the platform</li>
              <li><strong>Monitor statements:</strong> Regularly check your payment records for unauthorized charges</li>
              <li><strong>Verify payment pages:</strong> Ensure you're on the official site before entering payment information</li>
              <li><strong>Consider virtual cards:</strong> For added security, some payment providers offer virtual cards for online purchases</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">What to Do If You Suspect a Security Breach</h2>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li><strong>Change your password immediately</strong></li>
              <li><strong>Enable two-factor authentication</strong> if not already active</li>
              <li><strong>Check account activity</strong> for unauthorized actions</li>
              <li><strong>Contact our support team</strong> to report the issue</li>
              <li><strong>Review connected applications</strong> and revoke access where appropriate</li>
              <li><strong>Monitor payment methods</strong> for unauthorized charges</li>
            </ol>
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
                <Link to="/help/two-factor" className="text-blue-600 hover:underline">
                  Two-factor authentication
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

export default SecurityTipsHelp;
