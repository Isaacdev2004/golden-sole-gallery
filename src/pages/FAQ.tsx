
import React from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
          
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                How do I create a seller account?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                To create a seller account, register for an account and select "Seller" as your account type. You'll need to complete your profile with relevant information and verify your identity before you can start selling content.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                What type of content can I sell?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                You can sell foot-related content such as images and videos that comply with our Content Policy. All content must follow our guidelines, which prohibit any illegal or harmful material. Please review our Content Policy for specific details.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                How much does it cost to sell on Magnificent Soles?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We offer different subscription plans for sellers. You can view our pricing details on the Pricing page. Each plan includes different features and benefits. We take a small percentage of each sale as a processing fee, which varies by plan.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                How do I get paid for my sales?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Payments are processed through our secure platform. You can withdraw your earnings to your linked bank account or other payment methods. Withdrawals are typically processed within 3-5 business days, depending on your payment method and location.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                How do I contact a seller?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                You can contact sellers through their profile page by clicking the "Message" button. All communications are kept within our platform to ensure safety and privacy for both parties. Please note that harassment or inappropriate messages are strictly prohibited.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">
                What payment methods are accepted?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We accept major credit cards (Visa, Mastercard, American Express), PayPal, and select cryptocurrency payments. All transactions are encrypted and processed securely through our payment processors.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">
                Can I request custom content?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, many sellers offer custom content services. You can request custom content by messaging the seller directly through their profile. Each seller sets their own prices and guidelines for custom requests.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-medium">
                What if I'm not satisfied with my purchase?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We have a satisfaction policy in place to handle disputes. If you're not satisfied with your purchase, please contact our support team within 48 hours with details about your issue. Each case is reviewed individually according to our refund policy.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-medium">
                How is my privacy protected?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We take privacy very seriously. Your personal and payment information is encrypted and stored securely. We never share your information with third parties without your consent. For more information, please review our Privacy Policy.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-lg font-medium">
                How do I report inappropriate content?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                If you come across content that violates our policies, please use the "Report" button available on the content or visit our Report Abuse page. Our moderation team reviews all reports and takes appropriate action according to our policies.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-4">
              Our support team is here to help. Contact us for assistance with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Contact Support
              </Link>
              <Link to="/help" className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Visit Help Center
              </Link>
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

export default FAQ;
