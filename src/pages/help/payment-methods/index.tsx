
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { CreditCard } from "lucide-react";

const PaymentMethodsHelp = () => {
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
                <Link to="/help/buyers" className="text-blue-600 hover:underline">For Buyers</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Accepted Payment Methods</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <CreditCard className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Accepted Payment Methods</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Magnificent Soles offers several secure payment options to make purchasing content convenient for buyers around the world.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Credit and Debit Cards</h2>
            <p>
              We accept major credit and debit cards:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Visa</li>
              <li>Mastercard</li>
              <li>American Express</li>
              <li>Discover</li>
              <li>JCB (in supported regions)</li>
            </ul>
            <p>
              Card payments are processed through our secure payment processor which uses bank-level encryption to protect your financial information. Your full card details are never stored on our servers.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Privacy Note</p>
              <p>Card statements will show a discreet billing descriptor (MS Digital Media) rather than "Magnificent Soles" for your privacy.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Digital Wallets</h2>
            <p>
              For additional convenience and security, we support these digital payment methods:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>PayPal</li>
              <li>Google Pay</li>
              <li>Apple Pay (on compatible devices)</li>
            </ul>
            <p>
              Digital wallets provide an extra layer of security as your payment details aren't shared with our platform. These methods also often offer faster checkout experiences.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cryptocurrency</h2>
            <p>
              For users who prefer cryptocurrency, we accept:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Bitcoin (BTC)</li>
              <li>Ethereum (ETH)</li>
              <li>USD Coin (USDC)</li>
              <li>Litecoin (LTC)</li>
            </ul>
            <p>
              Cryptocurrency transactions provide enhanced privacy and typically have lower transaction fees. Once your crypto payment is confirmed on the blockchain, your purchase will be processed immediately.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Platform Credits</h2>
            <p>
              You can purchase platform credits which can be used for all transactions on Magnificent Soles:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Buy credits in bundles ($10, $25, $50, $100)</li>
              <li>Credits never expire</li>
              <li>Bonus credits are often offered on larger bundles</li>
              <li>Use credits for any purchase on the platform</li>
              <li>Credits simplify multiple purchases</li>
            </ul>
            <p>
              Credits can be purchased using any of our accepted payment methods.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>Platform credits are non-refundable except as required by law. If you have unused credits and require a refund, please contact customer support for assistance.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Adding and Managing Payment Methods</h2>
            <p>
              To add or manage your payment methods:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Log in to your account</li>
              <li>Go to your account settings</li>
              <li>Select the "Payment Methods" tab</li>
              <li>Choose "Add Payment Method" to enter a new method</li>
              <li>To set a default payment method, select the desired method and click "Set as Default"</li>
              <li>To remove a payment method, click the "Remove" button next to it</li>
            </ol>
            <p>
              You can save multiple payment methods to your account for easier checkout.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Security</h2>
            <p>
              We take your payment security seriously:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>PCI DSS compliant payment processing</li>
              <li>SSL/TLS encryption for all transactions</li>
              <li>3D Secure authentication for applicable card transactions</li>
              <li>Fraud monitoring systems to protect both buyers and sellers</li>
              <li>Regular security audits and compliance checks</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/payment-issues" className="text-blue-600 hover:underline">
                  Troubleshooting payment issues
                </Link>
              </li>
              <li>
                <Link to="/help/subscription-management" className="text-blue-600 hover:underline">
                  Managing your subscription
                </Link>
              </li>
              <li>
                <Link to="/help/payment-security" className="text-blue-600 hover:underline">
                  Payment security information
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <Link to="/help/buyers" className="text-blue-600 hover:underline flex items-center gap-2">
              <span>Back to Buyer Help</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentMethodsHelp;
