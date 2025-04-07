
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { UserPlus } from "lucide-react";

const CreateAccountHelp = () => {
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
                <span>How to Create an Account</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <UserPlus className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">How to Create an Account</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Creating an account on Magnificent Soles is quick and easy. Follow this step-by-step guide to join our community and start exploring premium foot content.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 1: Visit the Registration Page</h2>
            <p>
              There are several ways to access our registration page:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Click the "Sign Up" button in the top-right corner of our homepage</li>
              <li>Go directly to <Link to="/register" className="text-blue-600 hover:underline">magnificentsoles.com/register</Link></li>
              <li>Click "Create Account" when prompted while attempting to purchase content</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 2: Choose Your Account Type</h2>
            <p>
              We offer two primary account types:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Buyer Account:</strong> For those who want to purchase and enjoy content</li>
              <li><strong>Seller Account:</strong> For content creators who want to sell their work</li>
            </ul>
            <p>
              You can always upgrade a buyer account to a seller account later, so if you're unsure, start with a buyer account.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Note</p>
              <p>Seller accounts require additional verification steps and information. See our <Link to="/help/setting-up-seller" className="text-blue-600 hover:underline">Setting Up as a Seller</Link> guide for more details.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 3: Enter Your Information</h2>
            <p>
              Complete the registration form with the following information:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Username:</strong> Your unique identifier on the platform (choose wisely as this will be visible to others)</li>
              <li><strong>Email Address:</strong> Use a valid email that you check regularly</li>
              <li><strong>Password:</strong> Create a strong, secure password (at least 8 characters with a mix of letters, numbers, and special characters)</li>
              <li><strong>Date of Birth:</strong> You must be at least 18 years old to use our platform</li>
              <li><strong>Country/Region:</strong> Your current location</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 4: Verify Your Email</h2>
            <p>
              After submitting your registration:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Check your email inbox for a verification message from Magnificent Soles</li>
              <li>If you don't see it, check your spam or junk folder</li>
              <li>Click the verification link in the email</li>
              <li>You'll be redirected to the platform with your email confirmed</li>
            </ol>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>Email verification links expire after 24 hours. If yours expires, you can request a new verification email from the login page.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 5: Complete Your Profile</h2>
            <p>
              While not required, we recommend completing your profile:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Add a profile picture (avatars are fine for buyer accounts)</li>
              <li>Add a short bio or description</li>
              <li>Set your content preferences to improve recommendations</li>
              <li>Adjust your privacy and notification settings</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 6: Add Payment Information (Optional)</h2>
            <p>
              To make purchases, you can add a payment method:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to your account settings</li>
              <li>Select "Payment Methods"</li>
              <li>Choose "Add Payment Method"</li>
              <li>Follow the prompts to securely add your preferred payment option</li>
            </ol>
            <p>
              You can also add payment information during checkout when making your first purchase.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Account Security Tips</h2>
            <p>
              Keep your new account secure:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Enable two-factor authentication for additional security</li>
              <li>Never share your password with anyone</li>
              <li>Use a unique password not used on other sites</li>
              <li>Keep your email address updated</li>
              <li>Log out when using shared or public devices</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/verify-profile" className="text-blue-600 hover:underline">
                  Verifying your profile
                </Link>
              </li>
              <li>
                <Link to="/help/setting-up-seller" className="text-blue-600 hover:underline">
                  Setting up as a seller
                </Link>
              </li>
              <li>
                <Link to="/help/two-factor" className="text-blue-600 hover:underline">
                  Two-factor authentication
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

export default CreateAccountHelp;
