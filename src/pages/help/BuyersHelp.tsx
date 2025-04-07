
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { ShoppingCart, CreditCard, MessageCircle, ShieldCheck } from "lucide-react";

const BuyersHelp = () => {
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
                <span>For Buyers</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">Help For Buyers</h1>
          <p className="text-gray-600 mb-8">
            Everything you need to know about finding, purchasing, and enjoying content on Magnificent Soles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <ShoppingCart className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Browsing & Finding Content</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/browsing-content" className="text-blue-600 hover:underline">
                      How to search for content
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/content-filters" className="text-blue-600 hover:underline">
                      Using filters to find what you want
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/content-categories" className="text-blue-600 hover:underline">
                      Understanding content categories
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/seller-profiles" className="text-blue-600 hover:underline">
                      Exploring seller profiles
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <CreditCard className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Purchasing Content</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/payment-methods" className="text-blue-600 hover:underline">
                      Accepted payment methods
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/purchase-process" className="text-blue-600 hover:underline">
                      Step-by-step purchase guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/purchase-history" className="text-blue-600 hover:underline">
                      Accessing your purchase history
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/subscription-vs-onetime" className="text-blue-600 hover:underline">
                      Subscription vs. one-time purchases
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <MessageCircle className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Communicating with Sellers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/messaging-sellers" className="text-blue-600 hover:underline">
                      How to message sellers
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/custom-content-requests" className="text-blue-600 hover:underline">
                      Requesting custom content
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/message-etiquette" className="text-blue-600 hover:underline">
                      Messaging etiquette
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/reporting-messages" className="text-blue-600 hover:underline">
                      Reporting inappropriate messages
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Buyer Protection</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/buyer-protection" className="text-blue-600 hover:underline">
                      Buyer protection policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/disputing-charges" className="text-blue-600 hover:underline">
                      How to dispute charges
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/content-guarantees" className="text-blue-600 hover:underline">
                      Content quality guarantees
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/refund-policy" className="text-blue-600 hover:underline">
                      Refund policy
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
                How do I know if a seller is legitimate?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                All sellers on Magnificent Soles go through a verification process. Look for the verified badge on their profile, check their reviews and ratings, and look at their content history. Sellers with consistent posting and positive reviews are typically more reliable.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                Is my payment information secure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, we take payment security seriously. We use industry-standard encryption and security protocols to protect your payment information. We never store complete credit card information on our servers, and all transactions are processed through secure, PCI-compliant payment processors.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                How long do I have access to content I've purchased?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                For one-time purchases, you typically have permanent access to the content you've bought. For subscription-based content, you'll have access as long as your subscription remains active. You can always access your purchased content through your buyer dashboard.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                Can I request a refund if I'm not satisfied?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, we have a satisfaction policy in place. If you're not satisfied with your purchase, you can request a refund within 48 hours of purchase. Each case is reviewed individually according to our refund policy. Please note that custom content requests may have different refund terms.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold mb-4">Need more help?</h2>
            <p className="text-gray-600 mb-4">
              If you can't find what you're looking for, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Contact Support
              </Link>
              <Link to="/faq" className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                View FAQ
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

export default BuyersHelp;
