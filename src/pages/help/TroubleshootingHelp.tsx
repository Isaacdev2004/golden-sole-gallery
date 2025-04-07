
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { KeyRound, CreditCard, Upload, AlertCircle } from "lucide-react";

const TroubleshootingHelp = () => {
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
                <span>Troubleshooting</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">Troubleshooting</h1>
          <p className="text-gray-600 mb-8">
            Solutions to common issues and problems you might encounter while using Magnificent Soles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <KeyRound className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Account Issues</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/login-problems" className="text-blue-600 hover:underline">
                      Cannot log in to account
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/password-reset" className="text-blue-600 hover:underline">
                      Password reset not working
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/verification-issues" className="text-blue-600 hover:underline">
                      Account verification problems
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/account-recovery" className="text-blue-600 hover:underline">
                      Account recovery options
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <CreditCard className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Payment Problems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/payment-declined" className="text-blue-600 hover:underline">
                      Payment method declined
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/double-charges" className="text-blue-600 hover:underline">
                      Double-charged for purchase
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/missing-purchase" className="text-blue-600 hover:underline">
                      Purchase not showing up
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/withdrawal-issues" className="text-blue-600 hover:underline">
                      Problems with withdrawals
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Upload className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Content Issues</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/upload-errors" className="text-blue-600 hover:underline">
                      Content upload errors
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/content-not-visible" className="text-blue-600 hover:underline">
                      Content not visible after upload
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/playback-issues" className="text-blue-600 hover:underline">
                      Video playback problems
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/download-issues" className="text-blue-600 hover:underline">
                      Cannot download purchased content
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <AlertCircle className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Technical Problems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/site-errors" className="text-blue-600 hover:underline">
                      Website error messages
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/browser-compatibility" className="text-blue-600 hover:underline">
                      Browser compatibility issues
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/slow-performance" className="text-blue-600 hover:underline">
                      Site loading slowly
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/notification-issues" className="text-blue-600 hover:underline">
                      Not receiving notifications
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6">Common Issues & Quick Fixes</h2>
          
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                I forgot my password and can't log in
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>Use the "Forgot Password" link on the login page to reset your password. You'll receive an email with instructions to create a new password. If you don't receive the email:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Check your spam or junk folder</li>
                  <li>Verify you're using the correct email address</li>
                  <li>Add support@magnificentsoles.com to your contacts</li>
                  <li>If you still don't receive it, contact our support team</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                My payment was declined
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>If your payment was declined, try these solutions:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Verify your card details are entered correctly</li>
                  <li>Check that your card hasn't expired</li>
                  <li>Ensure you have sufficient funds</li>
                  <li>Contact your bank to approve the transaction</li>
                  <li>Try an alternative payment method</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                I can't upload content
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>If you're having trouble uploading content:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Check that your file meets our size and format requirements</li>
                  <li>Ensure you have a stable internet connection</li>
                  <li>Try reducing the file size or using a different format</li>
                  <li>Clear your browser cache and try again</li>
                  <li>If using a mobile device, try uploading from a desktop</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                The website is loading slowly or crashing
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>If you're experiencing performance issues:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Clear your browser cache and cookies</li>
                  <li>Close other browser tabs and applications</li>
                  <li>Check your internet connection speed</li>
                  <li>Try using a different browser</li>
                  <li>Disable browser extensions that might interfere</li>
                  <li>If on mobile, try the desktop version or our mobile app</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold mb-4">Still having issues?</h2>
            <p className="text-gray-600 mb-4">
              Our technical support team is available to help you resolve any problems you're experiencing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Contact Technical Support
              </Link>
              <Link to="/report" className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Report a Bug
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

export default TroubleshootingHelp;
