
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";

const SubscriptionManagementHelp = () => {
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
                <span>Managing Your Subscription</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">Managing Your Subscription</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              This guide will help you manage your subscriptions on Magnificent Soles, including how to view, update, cancel, or renew subscriptions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Viewing Your Active Subscriptions</h2>
            <p>
              To see all your current subscriptions:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Log in to your account</li>
              <li>Go to your account dashboard</li>
              <li>Select the "Subscriptions" tab</li>
              <li>Here you'll see all active subscriptions with details including:
                <ul className="list-disc pl-6 mt-2">
                  <li>Subscription name/seller</li>
                  <li>Billing amount and frequency</li>
                  <li>Next billing date</li>
                  <li>Subscription start date</li>
                  <li>Payment method used</li>
                </ul>
              </li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changing Payment Method</h2>
            <p>
              To update the payment method for a subscription:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your "Subscriptions" tab in your account dashboard</li>
              <li>Find the subscription you want to update</li>
              <li>Click "Manage" or the settings icon</li>
              <li>Select "Update Payment Method"</li>
              <li>Choose an existing payment method or add a new one</li>
              <li>Confirm the change</li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Note</p>
              <p>Updating a payment method for one subscription doesn't automatically update it for all your subscriptions. You'll need to update each one individually.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Canceling a Subscription</h2>
            <p>
              If you need to cancel a subscription:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your "Subscriptions" tab</li>
              <li>Find the subscription you want to cancel</li>
              <li>Click "Manage" or the settings icon</li>
              <li>Select "Cancel Subscription"</li>
              <li>You may be asked for feedback about why you're canceling</li>
              <li>Confirm the cancellation</li>
              <li>You'll receive an email confirmation of your cancellation</li>
            </ol>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>When you cancel a subscription, you'll continue to have access until the end of your current billing period. No refunds are issued for partial months.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Reactivating a Canceled Subscription</h2>
            <p>
              If you change your mind about a canceled subscription:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Before current period ends:</strong> You can reactivate from your "Subscriptions" tab by finding the subscription and clicking "Reactivate"</li>
              <li><strong>After expiration:</strong> You'll need to subscribe again as a new subscriber, which may be at current pricing rather than any grandfathered rate you previously had</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Handling Failed Payments</h2>
            <p>
              If a subscription payment fails:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>You'll receive an email notification about the failed payment</li>
              <li>Your subscription will enter a grace period (typically 3-7 days)</li>
              <li>During this time, you can update your payment method</li>
              <li>We'll attempt to process the payment again</li>
              <li>If payment still fails after the grace period, your subscription will be paused</li>
              <li>You can restore access by updating your payment information or making a manual payment</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Subscription Tiers and Upgrades</h2>
            <p>
              Many sellers offer multiple subscription tiers:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Upgrading:</strong> To upgrade to a higher tier, go to the seller's profile and select the desired tier. Your current subscription will be prorated and applied to the new tier.</li>
              <li><strong>Downgrading:</strong> To downgrade, you'll typically need to cancel your current subscription and subscribe to the lower tier, which would take effect at your next billing date.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Platform Subscriptions vs. Creator Subscriptions</h2>
            <p>
              Magnificent Soles offers two types of subscriptions:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Platform subscriptions:</strong> Premium features for using Magnificent Soles (like advanced search or no ads)</li>
              <li><strong>Creator subscriptions:</strong> Access to a specific creator's content</li>
            </ul>
            <p>
              These are managed separately in your subscription dashboard, but the management process is the same for both types.
            </p>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/payment-methods" className="text-blue-600 hover:underline">
                  Accepted payment methods
                </Link>
              </li>
              <li>
                <Link to="/help/subscription-vs-onetime" className="text-blue-600 hover:underline">
                  Subscription vs. one-time purchases
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

export default SubscriptionManagementHelp;
