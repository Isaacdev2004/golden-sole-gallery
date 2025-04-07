
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { CreditCard } from "lucide-react";

const PaymentIssuesHelp = () => {
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
                <span>Payment Issues</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <CreditCard className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Resolving Payment Issues</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Encountering problems with payments can be frustrating. This guide will help you identify and resolve common payment issues on Magnificent Soles.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Method Declined</h2>
            <p>
              If your payment method is being declined, try these solutions:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Verify card information:</strong> Ensure your card number, expiration date, and CVV are entered correctly</li>
              <li><strong>Check available funds:</strong> Make sure you have sufficient funds in your account</li>
              <li><strong>Contact your bank:</strong> Your bank may be blocking the transaction as suspicious activity</li>
              <li><strong>Verify billing address:</strong> Ensure your billing address matches what's on file with your bank</li>
              <li><strong>Try a different card:</strong> If possible, attempt the purchase with a different payment method</li>
              <li><strong>Check card restrictions:</strong> Some cards have restrictions on adult content purchases</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Note</p>
              <p>Many financial institutions have specific policies regarding transactions on adult content platforms. If your card is repeatedly declined, contact your bank for clarification on their policies.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Double Charges</h2>
            <p>
              If you notice duplicate charges for the same purchase:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Check your purchase history in your account dashboard</li>
              <li>Verify if you received multiple copies of the same content</li>
              <li>If it's truly a duplicate charge, click "Report Issue" next to the transaction</li>
              <li>Select "Duplicate Charge" as the issue type</li>
              <li>Provide any relevant details about the transaction</li>
              <li>Our support team will investigate and process a refund if appropriate</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Missing Purchase</h2>
            <p>
              If you've been charged but don't see your purchase:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Check your email:</strong> Verify your purchase confirmation email</li>
              <li><strong>Allow processing time:</strong> Some transactions may take a few minutes to complete</li>
              <li><strong>Review purchase history:</strong> Look for the transaction in your account dashboard</li>
              <li><strong>Check pending transactions:</strong> Your bank may show the charge as pending</li>
              <li><strong>Clear browser cache:</strong> Sometimes clearing your cache and reloading resolves display issues</li>
            </ul>
            
            <p>
              If after checking these items you still don't see your purchase:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Contact customer support with your transaction details</li>
              <li>Include the date and approximate time of purchase</li>
              <li>Provide the payment method used</li>
              <li>Include the amount charged</li>
              <li>Specify what content you were attempting to purchase</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Method Issues for Sellers</h2>
            <p>
              For sellers experiencing payout or payment method issues:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Verify payout information:</strong> Ensure your payout details are accurate</li>
              <li><strong>Check eligibility:</strong> Make sure you've met the minimum payout threshold</li>
              <li><strong>Review payout schedule:</strong> Understand the typical processing timeframes</li>
              <li><strong>Verify identity documents:</strong> Ensure your verification documents are up to date</li>
              <li><strong>Check for holds:</strong> Some funds may be temporarily held for security purposes</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>If you believe there's been an unauthorized transaction on your account, contact customer support immediately and consider changing your password.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">General Payment Troubleshooting</h2>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Use a private/incognito browsing window to avoid interference from browser extensions</li>
              <li>Try a different web browser</li>
              <li>Disable any ad-blocking or privacy extensions temporarily</li>
              <li>Check your internet connection stability</li>
              <li>Verify that your payment method is supported in your country/region</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Still Having Issues?</h3>
            <p className="mb-6">
              If you've tried these solutions and are still experiencing payment problems, please contact our support team with the following information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Screenshots of any error messages</li>
              <li>Description of the issue and steps you've already tried</li>
              <li>Your device and browser information</li>
              <li>Transaction details (if applicable)</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Contact Support
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

export default PaymentIssuesHelp;
