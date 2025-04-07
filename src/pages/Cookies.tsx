
import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center">
            <Cookie className="h-8 w-8 mr-3 text-gold" />
            <h1 className="text-3xl font-bold">Cookie Policy</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              This Cookie Policy explains how Magnificent Soles ("we", "us", or "our") uses cookies and similar technologies 
              on our website. By using our website, you consent to the use of cookies as described in this policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device when you visit our website. They allow us to 
              recognize your device and remember certain information about your visit, such as your preferences and activities 
              on our website. Cookies are widely used to make websites work more efficiently and to provide a better browsing 
              experience.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
            <p className="mb-4">We use the following types of cookies on our website:</p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">3.1 Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function properly. They enable core functionality such as security, 
              network management, and account access. You cannot opt out of these cookies as the website cannot function properly 
              without them.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">3.2 Preference Cookies</h3>
            <p className="mb-4">
              These cookies remember your choices and preferences on our website, such as language preferences and display settings. 
              They enhance your user experience by personalizing the website according to your selections.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">3.3 Analytics Cookies</h3>
            <p className="mb-4">
              These cookies collect information about how you use our website, such as which pages you visit most frequently and if 
              you receive error messages. This data helps us improve our website and your browsing experience. All information 
              collected by these cookies is aggregated and anonymous.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">3.4 Marketing Cookies</h3>
            <p className="mb-4">
              These cookies track your online activity to help deliver more relevant advertising content that aligns with your 
              interests. They also limit the number of times you see an advertisement and help measure the effectiveness of 
              advertising campaigns.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="mb-4">
              Some cookies on our website are set by third-party services that appear on our pages. These third parties may collect 
              information about your online activities across different websites. We do not control these cookies and recommend 
              reviewing the privacy policies of these third parties for more information.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookie Management</h2>
            <p className="mb-4">
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies or delete 
              certain cookies. However, if you choose to block all cookies (including essential cookies), you may not be able to 
              access all or parts of our website.
            </p>
            
            <p className="mb-4">
              You can manage your cookie preferences through your browser settings. Here are links to instructions for common browsers:
            </p>
            
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Cookie Policy</h2>
            <p className="mb-4">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page 
              and updating the "Last updated" date. We encourage you to review this Cookie Policy periodically for any changes.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Cookie Policy, please contact us at:
              <br />
              <a href="mailto:privacy@magnificentsoles.com" className="text-blue-600 hover:underline">
                privacy@magnificentsoles.com
              </a>
            </p>
            
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Cookie Consent</h3>
              <p className="mb-4">
                By using our website, you consent to the use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, 
                you should set your browser settings accordingly or not use our website.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
