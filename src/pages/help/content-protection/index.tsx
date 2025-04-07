
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { FileWarning } from "lucide-react";

const ContentProtectionHelp = () => {
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
                <Link to="/help/privacy-security" className="text-blue-600 hover:underline">Privacy & Security</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Protecting Your Content</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <FileWarning className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Protecting Your Content</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              For content creators, protecting your digital assets is essential. Magnificent Soles provides several features to help safeguard your content from unauthorized use and distribution.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Built-in Platform Protection</h2>
            <p>
              When you upload content to our platform, these protections are automatically applied:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Digital watermarking:</strong> Invisible watermarks embedded into your content</li>
              <li><strong>Download restrictions:</strong> Controls on who can download content and in what quality</li>
              <li><strong>Streaming protection:</strong> Videos are securely streamed to prevent easy capture</li>
              <li><strong>Screenshot detection:</strong> Our player can detect and prevent screen captures</li>
              <li><strong>Access controls:</strong> Content is only available to authorized buyers</li>
              <li><strong>DRM technology:</strong> Digital Rights Management helps protect higher-tier content</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Premium Feature</p>
              <p>Sellers with Professional or Elite subscription tiers receive enhanced content protection features, including advanced watermarking and forensic tracking.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Additional Steps You Can Take</h2>
            <p>
              Beyond our built-in protections, consider these additional measures:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Add visible watermarks:</strong> Include your username or logo on your content</li>
              <li><strong>Use lower-resolution previews:</strong> Only provide full quality to paying customers</li>
              <li><strong>Limit high-resolution content:</strong> Reserve your best quality for premium customers</li>
              <li><strong>Consider the preview length:</strong> Show enough to interest buyers without giving everything away</li>
              <li><strong>Regularly search for your content:</strong> Monitor for unauthorized distribution</li>
              <li><strong>Register copyright:</strong> For valuable content, consider formal copyright registration</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How Our Content ID System Works</h2>
            <p>
              Our platform employs Content ID technology to help identify unauthorized uploads:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>When content is uploaded to our platform, we create a unique digital signature</li>
              <li>This signature is stored in our database and associated with you as the rights holder</li>
              <li>All new uploads are checked against our database of signatures</li>
              <li>If a match is found, the upload is flagged for review</li>
              <li>Content that appears to infringe on your rights will be removed</li>
            </ol>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>While we employ advanced protection technologies, no system is 100% secure. If you find your content being used without authorization, report it immediately through our DMCA process.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Reporting Unauthorized Use</h2>
            <p>
              If you discover your content being used without permission:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Document the unauthorized use (screenshots, URLs, etc.)</li>
              <li>Go to our DMCA Takedown page</li>
              <li>Fill out the DMCA takedown request form</li>
              <li>Provide evidence of your ownership</li>
              <li>Submit the form</li>
            </ol>
            <p>
              Our team will review DMCA requests promptly, usually within 1-3 business days. If your claim is valid, the content will be removed and appropriate action taken against the violating account.
            </p>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/content-watermarking" className="text-blue-600 hover:underline">
                  Watermarking and protection
                </Link>
              </li>
              <li>
                <Link to="/help/copyright-protection" className="text-blue-600 hover:underline">
                  Copyright and ownership
                </Link>
              </li>
              <li>
                <Link to="/help/dmca-process" className="text-blue-600 hover:underline">
                  DMCA takedown process
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <Link to="/help/privacy-security" className="text-blue-600 hover:underline flex items-center gap-2">
              <span>Back to Privacy & Security</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContentProtectionHelp;
