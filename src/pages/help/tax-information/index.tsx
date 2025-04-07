
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TaxInformationHelp = () => {
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
                <span>Tax Information</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <FileText className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Tax Information for Sellers</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Understanding your tax obligations as a content seller on Magnificent Soles is an important part of running your business. This guide provides general information to help you navigate tax requirements.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Disclaimer</p>
              <p>This information is provided as general guidance only and should not be considered legal or tax advice. Tax laws vary significantly by location, and we strongly recommend consulting with a qualified tax professional regarding your specific situation.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Tax Information Collection</h2>
            <p>
              When you sign up as a seller, we'll request tax information:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>For U.S. sellers:</strong> We'll request your Social Security Number (SSN) or Employer Identification Number (EIN) via a W-9 form</li>
              <li><strong>For international sellers:</strong> We'll request appropriate tax identification information for your country, typically through a W-8BEN form</li>
              <li>All tax information is collected through our secure tax information portal</li>
              <li>You must provide valid tax information before you can withdraw earnings</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">U.S. Tax Reporting</h2>
            <p>
              For sellers based in the United States:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>If you earn $600 or more in a calendar year, we're required to issue a 1099-NEC form</li>
              <li>1099-NEC forms are provided by January 31st for the previous calendar year</li>
              <li>You can access your 1099 forms in your seller dashboard under "Tax Documents"</li>
              <li>We report your earnings to the IRS as required by law</li>
              <li>You're responsible for reporting all income on your tax returns, even if you don't receive a 1099</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Independent Contractor Status</p>
              <p>As a seller on our platform, you're considered an independent contractor, not an employee. This means you're responsible for paying self-employment taxes and making estimated tax payments if necessary.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">International Tax Considerations</h2>
            <p>
              For sellers outside the United States:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>We may be required to withhold taxes on your earnings depending on your country's tax treaty with the U.S.</li>
              <li>Providing proper tax documentation (like a W-8BEN) may reduce or eliminate withholding requirements</li>
              <li>You're responsible for reporting income according to your country's tax laws</li>
              <li>Value-Added Tax (VAT) or Goods and Services Tax (GST) may apply depending on your location</li>
              <li>Some countries have specific reporting requirements for digital content sales</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Record-Keeping for Taxes</h2>
            <p>
              Maintaining proper records is essential:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Keep track of all earnings from the platform</li>
              <li>Document business expenses that may be tax-deductible:
                <ul className="list-disc pl-6 mt-2">
                  <li>Equipment (cameras, computers, lighting, etc.)</li>
                  <li>Props and costumes</li>
                  <li>Home office expenses</li>
                  <li>Internet and utilities related to content creation</li>
                  <li>Professional services (photographers, editors, etc.)</li>
                  <li>Marketing and advertising</li>
                </ul>
              </li>
              <li>Save receipts for all business purchases</li>
              <li>Track platform fees, which may be deductible as business expenses</li>
              <li>Consider using accounting software to streamline record-keeping</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Common Tax Deductions</h2>
            <p>
              Potential tax deductions for content creators:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Home office deduction:</strong> If you have a dedicated workspace in your home</li>
              <li><strong>Equipment:</strong> Cameras, computers, lighting, smartphones, etc.</li>
              <li><strong>Software subscriptions:</strong> Editing software, business apps, etc.</li>
              <li><strong>Internet and phone:</strong> Portion used for business</li>
              <li><strong>Travel expenses:</strong> If related to content creation</li>
              <li><strong>Professional development:</strong> Courses, coaching, etc.</li>
              <li><strong>Health insurance premiums:</strong> May be deductible for self-employed individuals</li>
              <li><strong>Platform fees:</strong> Including transaction fees and commissions</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Updating Tax Information</h2>
            <p>
              Keep your tax information current:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>If your tax status or information changes, update your tax forms immediately</li>
              <li>Go to your seller dashboard > Settings > Tax Information</li>
              <li>Select "Update Tax Information"</li>
              <li>Complete the required forms</li>
              <li>Submit for verification</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Professional Help</h2>
            <p>
              Consider working with tax professionals:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Many tax professionals specialize in working with independent contractors and digital content creators</li>
              <li>A professional can help ensure compliance and maximize deductions</li>
              <li>Tax software designed for self-employed individuals may be helpful for simpler tax situations</li>
              <li>Consider consulting with a professional before starting your content business to set up proper structures</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/withdraw-earnings" className="text-blue-600 hover:underline">
                  Withdrawing earnings
                </Link>
              </li>
              <li>
                <Link to="/help/fee-structure" className="text-blue-600 hover:underline">
                  Understanding fee structure
                </Link>
              </li>
              <li>
                <Link to="/help/setting-up-seller" className="text-blue-600 hover:underline">
                  Setting up as a seller
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

export default TaxInformationHelp;
