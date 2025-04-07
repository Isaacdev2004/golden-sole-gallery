
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, Eye, FileWarning } from "lucide-react";

const PrivacySecurityHelp = () => {
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
                <span>Privacy & Security</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">Privacy & Security</h1>
          <p className="text-gray-600 mb-8">
            Learn about how we protect your information, secure your account, and maintain privacy on our platform.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Account Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
            
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Lock className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Payment Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/payment-encryption" className="text-blue-600 hover:underline">
                      Payment data encryption
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/secure-transactions" className="text-blue-600 hover:underline">
                      Secure transaction process
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/unauthorized-charges" className="text-blue-600 hover:underline">
                      Reporting unauthorized charges
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/payment-verification" className="text-blue-600 hover:underline">
                      Payment method verification
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Eye className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Privacy Controls</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/privacy-settings" className="text-blue-600 hover:underline">
                      Managing privacy settings
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/profile-visibility" className="text-blue-600 hover:underline">
                      Profile visibility options
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
              </CardContent>
            </Card>
            
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <FileWarning className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Content Protection</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/content-watermarking" className="text-blue-600 hover:underline">
                      Watermarking and protection
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/copyright-protection" className="text-blue-600 hover:underline">
                      Copyright and ownership
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/dmca-process" className="text-blue-600 hover:underline">
                      DMCA takedown process
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/content-theft" className="text-blue-600 hover:underline">
                      Reporting content theft
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                Is my personal information visible to other users?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                By default, only your username, profile picture, and public content are visible to other users. Your email address, payment information, and other personal details remain private. You can further adjust your privacy settings to control what information is shared with others.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                How do you protect my payment information?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We use industry-standard encryption and security protocols to protect your payment information. All payment data is encrypted using SSL technology, and we comply with PCI DSS requirements. We partner with trusted payment processors and never store complete credit card information on our servers.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                Can I use a pseudonym or stage name on my account?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, you can use a pseudonym or stage name for your public profile. However, for account verification purposes, we still require your legal identification during the verification process. This information is kept secure and separate from your public profile information.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                What happens if my account is compromised?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                If you suspect your account has been compromised, contact our support team immediately. We'll help you secure your account, investigate any unauthorized activity, and restore access. We recommend enabling two-factor authentication to prevent unauthorized access in the future.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold mb-4">Privacy & Legal Resources</h2>
            <p className="text-gray-600 mb-4">
              Review our detailed policies and legal information to understand how we protect your privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/privacy" className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Terms of Service
              </Link>
              <Link to="/content-policy" className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Content Policy
              </Link>
            </div>
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

export default PrivacySecurityHelp;
