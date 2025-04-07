
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { Wallet } from "lucide-react";

const WithdrawEarningsHelp = () => {
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
                <Link to="/help/sellers" className="text-blue-600 hover:underline">For Sellers</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Withdrawing Earnings</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <Wallet className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Withdrawing Your Earnings</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              This guide explains everything you need to know about accessing your earnings on Magnificent Soles, including payout methods, timeframes, and requirements.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Your Earnings</h2>
            <p>
              Before requesting a withdrawal, it's important to understand how earnings work:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Pending earnings:</strong> Recent sales that are still in the holding period</li>
              <li><strong>Available balance:</strong> Funds that have cleared the holding period and are ready for withdrawal</li>
              <li><strong>Reserved funds:</strong> Money temporarily held for potential refunds or disputes</li>
              <li><strong>Total earnings:</strong> Your lifetime earnings on the platform</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Holding Period</p>
              <p>New sales typically have a 7-day holding period before becoming available for withdrawal. This allows time for any potential disputes or refund requests.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Available Payout Methods</h2>
            <p>
              We offer several options for receiving your earnings:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Direct deposit/bank transfer:</strong> Funds sent directly to your bank account (available in most countries)</li>
              <li><strong>PayPal:</strong> Payments sent to your verified PayPal account</li>
              <li><strong>Paxum:</strong> Adult industry-friendly payment processor</li>
              <li><strong>Cryptocurrency:</strong> Withdraw as Bitcoin (BTC), Ethereum (ETH), or USD Coin (USDC)</li>
              <li><strong>Check:</strong> Physical check mailed to your address (additional processing time)</li>
            </ul>
            <p>
              Available methods may vary by country/region due to local regulations.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Setting Up a Payout Method</h2>
            <p>
              To set up your preferred payout method:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your seller dashboard</li>
              <li>Navigate to "Earnings" > "Payout Settings"</li>
              <li>Click "Add Payout Method"</li>
              <li>Select your preferred method</li>
              <li>Enter the required details for that method</li>
              <li>Complete any verification steps if required</li>
              <li>Set as your default payout method if desired</li>
            </ol>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>For security reasons, there's a 3-day waiting period when you add a new payout method before you can withdraw funds to it.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Requesting a Withdrawal</h2>
            <p>
              Once you have available funds and a verified payout method:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your seller dashboard</li>
              <li>Navigate to "Earnings" > "Withdrawals"</li>
              <li>Click "Request Withdrawal"</li>
              <li>Select your payout method</li>
              <li>Enter the amount you wish to withdraw (minimum $50)</li>
              <li>Review the transaction details including any fees</li>
              <li>Confirm your withdrawal request</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Withdrawal Schedule and Timeframes</h2>
            <p>
              Understanding when you'll receive your funds:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Processing time:</strong> Withdrawals are typically processed within 1-3 business days</li>
              <li><strong>Payment schedule:</strong> By default, we process withdrawals on Tuesdays and Fridays</li>
              <li><strong>Automatic withdrawals:</strong> You can set up automatic withdrawals on a weekly or monthly basis</li>
              <li><strong>Arrival time:</strong> After processing, funds usually arrive within:
                <ul className="list-disc pl-6 mt-2">
                  <li>Direct deposit: 1-3 business days</li>
                  <li>PayPal: 1 business day</li>
                  <li>Paxum: 1 business day</li>
                  <li>Cryptocurrency: 1-24 hours</li>
                  <li>Check: 7-14 business days</li>
                </ul>
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Withdrawal Fees</h2>
            <p>
              Fee structure for different withdrawal methods:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Direct deposit (US banks):</strong> Free for withdrawals over $100, $3 fee for smaller amounts</li>
              <li><strong>Direct deposit (International):</strong> $10 flat fee</li>
              <li><strong>PayPal:</strong> Free for withdrawals over $100, $1 fee for smaller amounts</li>
              <li><strong>Paxum:</strong> Free</li>
              <li><strong>Cryptocurrency:</strong> Network transaction fee only (varies)</li>
              <li><strong>Check:</strong> $15 processing and shipping fee</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Tax Considerations</h2>
            <p>
              Important tax information for sellers:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>For US sellers, we'll issue a 1099 form if you earn more than $600 in a calendar year</li>
              <li>International sellers may need to provide tax documentation based on their country's requirements</li>
              <li>You're responsible for reporting income according to your local tax laws</li>
              <li>Keep records of all earnings and business expenses for tax purposes</li>
              <li>Consider consulting a tax professional for guidance specific to your situation</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/tax-information" className="text-blue-600 hover:underline">
                  Tax information for sellers
                </Link>
              </li>
              <li>
                <Link to="/help/fee-structure" className="text-blue-600 hover:underline">
                  Understanding fee structure
                </Link>
              </li>
              <li>
                <Link to="/help/payment-issues" className="text-blue-600 hover:underline">
                  Troubleshooting payment issues
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <Link to="/help/sellers" className="text-blue-600 hover:underline flex items-center gap-2">
              <span>Back to Seller Help</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WithdrawEarningsHelp;
