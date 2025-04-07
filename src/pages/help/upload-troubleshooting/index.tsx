
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";
import { Upload } from "lucide-react";

const UploadTroubleshootingHelp = () => {
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
                <span>Upload Troubleshooting</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <header className="flex items-center gap-4 mb-8">
            <Upload className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold">Upload Troubleshooting</h1>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Having trouble uploading your content? This guide will help you identify and resolve common upload issues on Magnificent Soles.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Upload Requirements</h2>
            <p>
              Before troubleshooting, ensure your content meets these basic requirements:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>File size limits:</strong>
                <ul className="list-disc pl-6 mt-1">
                  <li>Images: Up to 20MB per file</li>
                  <li>Videos: Up to 2GB per file (standard accounts), 5GB (premium accounts)</li>
                  <li>Audio: Up to 100MB per file</li>
                </ul>
              </li>
              <li><strong>Supported file formats:</strong>
                <ul className="list-disc pl-6 mt-1">
                  <li>Images: JPG, PNG, WEBP, HEIC</li>
                  <li>Videos: MP4, MOV, WEBM</li>
                  <li>Audio: MP3, WAV, M4A</li>
                </ul>
              </li>
              <li><strong>Resolution requirements:</strong>
                <ul className="list-disc pl-6 mt-1">
                  <li>Images: Minimum 1080px on shortest side</li>
                  <li>Videos: Minimum 720p resolution</li>
                </ul>
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Common Upload Issues & Solutions</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Upload Fails Immediately</h3>
            <p>
              If your upload fails as soon as you try to upload:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Check file size:</strong> Your file may exceed our size limits</li>
              <li><strong>Verify file format:</strong> Ensure you're using a supported file type</li>
              <li><strong>Try renaming the file:</strong> Remove special characters from the filename</li>
              <li><strong>Check storage quota:</strong> You may have reached your account storage limit</li>
              <li><strong>File corruption:</strong> Your file may be corrupted; try re-exporting it</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-medium">Pro Tip</p>
              <p>For large video files, try compressing the video or splitting it into multiple smaller segments.</p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Upload Starts But Never Completes</h3>
            <p>
              If your upload begins but gets stuck at a certain percentage:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Check internet connection:</strong> Unstable connection can interrupt uploads</li>
              <li><strong>Try a different browser:</strong> Some browsers handle large uploads better than others</li>
              <li><strong>Disable browser extensions:</strong> Some extensions may interfere with uploading</li>
              <li><strong>Try smaller batches:</strong> Upload fewer files at once</li>
              <li><strong>Clear browser cache:</strong> Clear your cache and cookies, then try again</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Content Uploads But Doesn't Process</h3>
            <p>
              If your upload completes but content shows as "Processing" for too long:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Be patient with videos:</strong> Videos can take 5-30 minutes to process depending on size</li>
              <li><strong>Check file corruption:</strong> Try uploading a different version of the file</li>
              <li><strong>File codec issues:</strong> Re-export your video with standard codecs (H.264)</li>
              <li><strong>Refresh the page:</strong> Sometimes the status updates but doesn't display correctly</li>
              <li><strong>Wait and try again:</strong> If servers are busy, processing may take longer</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Mobile Upload Issues</h2>
            <p>
              When uploading from mobile devices:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Use stable WiFi:</strong> Mobile data may be inconsistent for large uploads</li>
              <li><strong>Keep app active:</strong> Don't switch apps during upload</li>
              <li><strong>Check storage permissions:</strong> Ensure the app has permission to access your media</li>
              <li><strong>Update the app:</strong> Make sure you're using the latest version</li>
              <li><strong>Try desktop upload:</strong> For very large files, desktop uploading is more reliable</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-medium">Important</p>
              <p>If you repeatedly have issues with a specific file, try exporting it with different settings or converting it to another supported format.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Optimizing Your Uploads</h2>
            <p>
              To ensure smooth uploads:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Use a wired internet connection if possible</li>
              <li>Close other bandwidth-intensive applications</li>
              <li>Use descriptive but simple filenames</li>
              <li>Prepare metadata (titles, descriptions, tags) before uploading</li>
              <li>Upload during non-peak hours for faster processing</li>
            </ul>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Still Having Issues?</h3>
            <p className="mb-6">
              If you've tried these solutions and are still experiencing upload problems, please contact our support team with the following information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Screenshots of any error messages</li>
              <li>File details (size, format, resolution)</li>
              <li>Your device and browser information</li>
              <li>Description of the exact upload process and where it fails</li>
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

export default UploadTroubleshootingHelp;
