
import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Magnificent Soles ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="mb-4">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1. Personal Data</h3>
            <p className="mb-4">
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Payment information</li>
              <li>Usage Data</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.2. Usage Data</h3>
            <p className="mb-4">
              We may also collect information about how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              We may use the information we collect about you for various purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To fulfill any other purpose for which you provide it</li>
              <li>To carry out our obligations and enforce our rights</li>
              <li>In any other way we may describe when you provide the information</li>
              <li>For any other purpose with your consent</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-4">
              We may disclose your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request</li>
              <li>To enforce or apply our terms of use and other agreements</li>
              <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others</li>
              <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Company's assets</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p className="mb-4">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions will be encrypted.
            </p>
            <p className="mb-4">
              The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our site, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Children's Privacy</h2>
            <p className="mb-4">
              Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="mb-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@magnificentsoles.com" className="text-blue-600 hover:underline">
                privacy@magnificentsoles.com
              </a>
            </p>
          </div>
          
          <div className="mt-8">
            <Link to="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
