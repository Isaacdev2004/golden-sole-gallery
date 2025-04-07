
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const LoginProblemsHelp = () => {
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
                <span>Login Problems</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">Cannot Log In to Account</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Having trouble accessing your account? Here are some common login issues and solutions to help you get back in quickly.
            </p>
            
            <Alert variant="destructive" className="my-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Need Urgent Help?</AlertTitle>
              <AlertDescription>
                If you believe your account has been compromised, please contact our support team immediately at <a href="mailto:security@magnificentsoles.com" className="font-medium underline">security@magnificentsoles.com</a>
              </AlertDescription>
            </Alert>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Forgot Password</h2>
            <p>
              If you can't remember your password:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Go to the <Link to="/login" className="text-blue-600 hover:underline">Login page</Link></li>
              <li>Click on "Forgot Password"</li>
              <li>Enter the email address associated with your account</li>
              <li>Check your email for a password reset link (including spam/junk folders)</li>
              <li>Follow the instructions to create a new password</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Login Errors</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium">Error: "Incorrect email or password"</h3>
                <ul className="list-disc pl-6 my-2">
                  <li>Double check that you're using the correct email address</li>
                  <li>Ensure your password is entered correctly (check caps lock)</li>
                  <li>Try clearing your browser cache and cookies</li>
                  <li>If persistent, use the "Forgot Password" option to reset</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium">Error: "Account locked"</h3>
                <ul className="list-disc pl-6 my-2">
                  <li>This occurs after multiple failed login attempts</li>
                  <li>Wait 30 minutes before trying again</li>
                  <li>Use the "Forgot Password" option to reset your password</li>
                  <li>If the issue persists, contact support</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium">Error: "Two-factor authentication required"</h3>
                <ul className="list-disc pl-6 my-2">
                  <li>Enter the code from your authentication app or SMS</li>
                  <li>If you can't access your authentication method, use a backup code</li>
                  <li>For lost access to 2FA, see our <Link to="/help/two-factor" className="text-blue-600 hover:underline">Two-Factor Authentication guide</Link></li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Browser & Device Issues</h2>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Try using a different browser</li>
              <li>Ensure JavaScript is enabled</li>
              <li>Check that cookies are enabled for our site</li>
              <li>If using a VPN, try disabling it temporarily</li>
              <li>Update your browser to the latest version</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Still having trouble?</p>
              <p>If none of these solutions work, please <Link to="/contact" className="text-blue-600 hover:underline">contact our support team</Link> with the following information:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>The email address associated with your account</li>
                <li>What error message you're receiving (screenshot if possible)</li>
                <li>What device and browser you're using</li>
                <li>When the problem started</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/password-reset" className="text-blue-600 hover:underline">
                  Password reset not working
                </Link>
              </li>
              <li>
                <Link to="/help/account-recovery" className="text-blue-600 hover:underline">
                  Account recovery options
                </Link>
              </li>
              <li>
                <Link to="/help/browser-compatibility" className="text-blue-600 hover:underline">
                  Browser compatibility issues
                </Link>
              </li>
            </ul>
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

export default LoginProblemsHelp;
