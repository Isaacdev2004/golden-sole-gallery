
import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const ContentPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Content Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              This Content Policy outlines the types of content that are permitted and prohibited on the Magnificent Soles platform. Our goal is to create a safe, respectful environment for all users while allowing creators to share their foot-related content. 
            </p>
            <p className="mb-4">
              All users must agree to follow this Content Policy when using our platform. Failure to comply may result in content removal, account suspension, or permanent banning from our platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Permitted Content</h2>
            <p className="mb-4">
              Magnificent Soles allows the following types of content:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Images and videos of feet</li>
              <li>Educational content related to foot care, health, and wellbeing</li>
              <li>Artistic photography or videography featuring feet</li>
              <li>Fashion content focusing on footwear</li>
              <li>Modeling content that includes feet as a primary or secondary subject</li>
              <li>Customized content created at a buyer's request (within our guidelines)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Prohibited Content</h2>
            <p className="mb-4">
              The following types of content are strictly prohibited on our platform:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Any content featuring individuals under 18 years of age</li>
              <li>Illegal content of any kind</li>
              <li>Content that promotes, depicts, or encourages illegal activities</li>
              <li>Content that violates another person's intellectual property rights</li>
              <li>Content depicting non-consensual acts</li>
              <li>Content depicting extreme violence or gore</li>
              <li>Content that contains hate speech or promotes discrimination</li>
              <li>Content depicting or promoting self-harm</li>
              <li>Content featuring non-human subjects (animals)</li>
              <li>Any content that violates our Terms of Service</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Age Verification and Consent</h2>
            <p className="mb-4">
              All creators on Magnificent Soles must:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Be at least 18 years of age</li>
              <li>Verify their age through our verification process before posting content</li>
              <li>Only post content featuring individuals who have provided explicit consent</li>
              <li>Maintain records of consent for all individuals featured in their content</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Content Moderation</h2>
            <p className="mb-4">
              Magnificent Soles employs both automated systems and human moderators to review content and ensure compliance with our policies. We may:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Review content before it is published</li>
              <li>Remove content that violates our policies</li>
              <li>Take action against accounts that repeatedly violate our policies</li>
              <li>Cooperate with law enforcement when required by law</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Reporting Violations</h2>
            <p className="mb-4">
              If you encounter content that you believe violates our Content Policy, please report it immediately. To report a violation:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use the "Report" button on the content</li>
              <li>Provide a brief explanation of why you believe the content violates our policies</li>
              <li>Include any relevant details that may help our moderation team</li>
            </ul>
            <p className="mb-4">
              Our moderation team will review all reports and take appropriate action. We appreciate your help in keeping our platform safe and respectful.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Appeals Process</h2>
            <p className="mb-4">
              If your content has been removed or your account has been sanctioned, and you believe this was done in error, you may appeal the decision. To submit an appeal:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Log in to your account and navigate to the Appeals section</li>
              <li>Provide a detailed explanation of why you believe the action was taken in error</li>
              <li>Include any relevant information that supports your appeal</li>
            </ul>
            <p className="mb-4">
              Our team will review your appeal and respond within 5 business days.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Policy Updates</h2>
            <p className="mb-4">
              This Content Policy may be updated from time to time. We will notify users of any significant changes through our platform and via email. By continuing to use Magnificent Soles after such changes, you agree to be bound by the updated Content Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have questions about our Content Policy or need clarification on what is permitted, please contact us at:
              <br />
              <a href="mailto:contentpolicy@magnificentsoles.com" className="text-blue-600 hover:underline">
                contentpolicy@magnificentsoles.com
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

export default ContentPolicy;
