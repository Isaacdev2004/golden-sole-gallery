
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";

const ContentGuidelinesHelp = () => {
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
                <span>Content Guidelines</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold mb-8">Content Guidelines and Policies</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Understanding our content guidelines is essential for all sellers on Magnificent Soles. These policies ensure a safe, legal, and high-quality environment for everyone on the platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Allowed Content</h2>
            <p>
              Magnificent Soles is a platform specifically for foot-focused content. We allow:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Artistic and tasteful foot photography</li>
              <li>Foot modeling content</li>
              <li>Pedicure and foot care demonstrations</li>
              <li>Foot fashion (shoes, socks, etc.)</li>
              <li>Foot massage and reflexology content</li>
              <li>Artistic expression related to foot aesthetics</li>
              <li>Educational content about foot health and care</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Prohibited Content</h2>
            <p>
              The following content is strictly prohibited and will result in immediate removal:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Content featuring anyone under 18 years of age</li>
              <li>Content involving non-consensual activities</li>
              <li>Content depicting illegal activities</li>
              <li>Explicit sexual content beyond the foot focus</li>
              <li>Content involving animals</li>
              <li>Violent or harmful content</li>
              <li>Hate speech or discriminatory content</li>
              <li>Content that violates another's copyright or intellectual property</li>
              <li>Content that misrepresents what's being sold</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>All sellers must verify their identity and age (18+) before uploading any content. This verification process helps ensure the safety and legality of all content on the platform.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Content Quality Standards</h2>
            <p>
              To maintain a high-quality platform, we expect all content to meet these standards:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Images:</strong> Minimum resolution of 1080px on the shortest side</li>
              <li><strong>Videos:</strong> Minimum resolution of 720p, good lighting, clear audio if applicable</li>
              <li><strong>Description accuracy:</strong> Content must match its description and previews</li>
              <li><strong>Originality:</strong> Content must be original or properly licensed</li>
              <li><strong>Watermarking:</strong> Minimal watermarking that doesn't excessively obstruct content</li>
              <li><strong>Thumbnails:</strong> Accurately represent the content and follow the same guidelines</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Content Metadata Guidelines</h2>
            <p>
              Proper metadata helps your content get discovered:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Titles:</strong> Clear, descriptive, and accurate</li>
              <li><strong>Descriptions:</strong> Detailed explanation of what buyers will receive</li>
              <li><strong>Tags:</strong> Relevant keywords that accurately describe your content</li>
              <li><strong>Categories:</strong> Select the most appropriate category for your content</li>
              <li><strong>Content warnings:</strong> Include appropriate warnings if content contains sensitive material</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Pro Tip</p>
              <p>Use specific, relevant tags rather than generic ones. This improves discoverability for users specifically interested in your content type.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Content Review Process</h2>
            <p>
              Understanding our review process:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>All content is reviewed before being publicly available</li>
              <li>Initial review typically takes 24-48 hours</li>
              <li>Content may be flagged for manual review if our system detects potential issues</li>
              <li>You'll be notified when your content is approved or if there are issues</li>
              <li>If content is rejected, you'll receive an explanation and may be able to modify and resubmit</li>
              <li>Repeated violations may result in account restrictions or termination</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Copyright and Ownership</h2>
            <p>
              Important considerations regarding content ownership:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>You must own or have proper licenses for all content you upload</li>
              <li>If your content features other individuals, you must have documented consent</li>
              <li>You retain ownership of your content when uploading to our platform</li>
              <li>By uploading, you grant us limited license to display and distribute your content</li>
              <li>We actively enforce copyright protections against unauthorized distribution</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Related Help Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help/content-protection" className="text-blue-600 hover:underline">
                  Protecting your content
                </Link>
              </li>
              <li>
                <Link to="/help/dmca-process" className="text-blue-600 hover:underline">
                  DMCA takedown process
                </Link>
              </li>
              <li>
                <Link to="/content-policy" className="text-blue-600 hover:underline">
                  Complete Content Policy
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

export default ContentGuidelinesHelp;
