
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { Upload, Coins, LineChart, Tag } from "lucide-react";

const SellersHelp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/help">Help Center</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>For Sellers</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">Help For Sellers</h1>
          <p className="text-gray-600 mb-8">
            Everything you need to know about selling content on Magnificent Soles, from account setup to maximizing your earnings.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Upload className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Managing Your Content</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/uploading-content" className="text-blue-600 hover:underline">
                      How to upload content
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/content-guidelines" className="text-blue-600 hover:underline">
                      Content guidelines and policies
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/optimizing-thumbnails" className="text-blue-600 hover:underline">
                      Creating effective thumbnails
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/content-organization" className="text-blue-600 hover:underline">
                      Organizing your content library
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Coins className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Payments & Earnings</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/payment-schedule" className="text-blue-600 hover:underline">
                      Payment schedule and methods
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/fee-structure" className="text-blue-600 hover:underline">
                      Understanding fee structure
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/tax-information" className="text-blue-600 hover:underline">
                      Tax information for sellers
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/payout-options" className="text-blue-600 hover:underline">
                      Setting up payout options
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <LineChart className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Analytics & Performance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/sales-analytics" className="text-blue-600 hover:underline">
                      Understanding your analytics
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/traffic-sources" className="text-blue-600 hover:underline">
                      Tracking traffic sources
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/buyer-demographics" className="text-blue-600 hover:underline">
                      Buyer demographics and insights
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/performance-reporting" className="text-blue-600 hover:underline">
                      Monthly performance reporting
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Tag className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>Promotion & Growth</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/pricing-strategies" className="text-blue-600 hover:underline">
                      Effective pricing strategies
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/promotions-discounts" className="text-blue-600 hover:underline">
                      Running promotions and discounts
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/building-audience" className="text-blue-600 hover:underline">
                      Building your audience
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/cross-promotion" className="text-blue-600 hover:underline">
                      Cross-promotion techniques
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
                How long does account verification take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Account verification typically takes 1-3 business days. We verify your identity to ensure platform safety and compliance with regulations. Make sure to provide clear, accurate documentation to avoid delays in the verification process.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                When do I receive my earnings?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Earnings are processed on a bi-weekly basis. There is a 7-day holding period for new sales to account for potential refunds or disputes. After this period, your earnings become available for withdrawal. Withdrawals are processed within 3-5 business days, depending on your payment method.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                Are there limits to how much content I can upload?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The amount of content you can upload depends on your seller subscription plan. Basic plans have limited storage, while Premium plans offer more generous allowances. All content must comply with our content policy regardless of your subscription level. You can view your current usage in the seller dashboard.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                How can I protect my content from being stolen?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We take content protection seriously. All uploaded content is protected using watermarking, DRM technology, and download restrictions. We also have systems to detect unauthorized sharing and respond to DMCA takedown requests. Additionally, we recommend using lower-resolution previews and adding personal watermarks to your content.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold mb-4">Ready to boost your sales?</h2>
            <p className="text-gray-600 mb-4">
              Check out our seller success resources or contact our seller support team for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/help/seller-resources" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Seller Resources
              </Link>
              <Link to="/contact" className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Contact Seller Support
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

export default SellersHelp;
