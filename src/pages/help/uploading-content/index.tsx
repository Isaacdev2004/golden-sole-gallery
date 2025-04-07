
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";

const UploadingContentHelp = () => {
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
                <span>How to Upload Content</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">How to Upload Content</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Uploading your content to Magnificent Soles is a straightforward process. Follow these steps to get your content available for sale quickly and efficiently.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Before You Upload</h2>
            <p>
              Before uploading any content, make sure:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Your account is fully verified</li>
              <li>You have reviewed our <Link to="/content-policy" className="text-blue-600 hover:underline">Content Policy</Link></li>
              <li>Your content meets our quality guidelines</li>
              <li>You have all necessary rights to the content you're uploading</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Step-by-Step Upload Process</h2>
            <ol className="list-decimal pl-6 my-4 space-y-4">
              <li>
                <strong>Access your seller dashboard</strong>
                <p>Log in and navigate to your <Link to="/seller-dashboard" className="text-blue-600 hover:underline">Seller Dashboard</Link></p>
              </li>
              <li>
                <strong>Go to the Content tab</strong>
                <p>Click on "Content" in the sidebar navigation</p>
              </li>
              <li>
                <strong>Click "Upload New Content"</strong>
                <p>This will open the upload dialog</p>
              </li>
              <li>
                <strong>Select your content type</strong>
                <p>Choose whether you're uploading photos, videos, or bundled content</p>
              </li>
              <li>
                <strong>Upload your files</strong>
                <p>Drag and drop files or use the file browser to select them from your device</p>
              </li>
              <li>
                <strong>Add details</strong>
                <p>Fill in title, description, tags, price, and other relevant information</p>
              </li>
              <li>
                <strong>Preview and submit</strong>
                <p>Review how your listing will appear to buyers and submit it for approval</p>
              </li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">File Format Requirements</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Images: JPG, PNG (max 20MB each)</li>
                <li>Videos: MP4, MOV (max 2GB each)</li>
                <li>Minimum image resolution: 1280x720 pixels</li>
                <li>Recommended video resolution: 1080p or higher</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">After Uploading</h2>
            <p>
              After submission, your content will go through a brief review process to ensure it complies with our policies. This typically takes 12-24 hours. You'll receive a notification once your content is approved and live on the platform.
            </p>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
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

export default UploadingContentHelp;
