
import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Magnificent Soles ("Company", "we", "our", "us")! These Terms of Service ("Terms") govern your use of our website located at [magnificentsoles.com] (the "Service") operated by Magnificent Soles.
            </p>
            <p className="mb-4">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. User Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="mb-4">
              You are responsible for safeguarding the password and for all activities that occur under your account. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Content</h2>
            <p className="mb-4">
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
            </p>
            <p className="mb-4">
              By posting Content to the Service, you grant us the right and license to use, modify, perform, display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights.
            </p>
            <p className="mb-4">
              You represent and warrant that: (i) the Content is yours or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Prohibited Uses</h2>
            <p className="mb-4">
              You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the Service:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter" or "spam" or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="mb-4">
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Magnificent Soles, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="mb-4">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
              <br />
              <a href="mailto:support@magnificentsoles.com" className="text-blue-600 hover:underline">
                support@magnificentsoles.com
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

export default Terms;
