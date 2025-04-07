
import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const DMCA = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">DMCA Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Magnificent Soles respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S. Copyright Office website at <a href="http://www.copyright.gov/legislation/dmca.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">http://www.copyright.gov/legislation/dmca.pdf</a>, Magnificent Soles will respond expeditiously to claims of copyright infringement committed using the Magnificent Soles service that are reported to our Designated Copyright Agent identified below.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. DMCA Takedown Notices</h2>
            <p className="mb-4">
              If you are a copyright owner, or are authorized to act on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to <a href="mailto:dmca@magnificentsoles.com" className="text-blue-600 hover:underline">dmca@magnificentsoles.com</a>, with the subject line: "DMCA Takedown Request."
            </p>
            <p className="mb-4">
              For your complaint to be valid under the DMCA, you must provide the following information when providing notice of the claimed copyright infringement:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing or to be the subject of the infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material</li>
              <li>Information reasonably sufficient to permit us to contact the copyright owner, such as an address, telephone number, and, if available, an electronic mail address</li>
              <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law</li>
              <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed</li>
            </ul>
            <p className="mb-4">
              You may also mail your DMCA takedown notice to:
            </p>
            <p className="mb-4">
              Magnificent Soles<br />
              Attn: DMCA Compliance<br />
              1234 Main Street<br />
              Anytown, CA 12345<br />
              USA
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Counter-Notification Procedures</h2>
            <p className="mb-4">
              If you believe that your content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the material in your content, you may send a counter-notification containing the following information to the Copyright Agent:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your physical or electronic signature</li>
              <li>Identification of the content that has been removed or to which access has been disabled and the location at which the content appeared before it was removed or disabled</li>
              <li>A statement that you have a good faith belief that the content was removed or disabled as a result of mistake or a misidentification of the content</li>
              <li>Your name, address, telephone number, and email address, and a statement that you consent to the jurisdiction of the federal court in the district where you reside (or, if you are outside the US, that you consent to the jurisdiction of any judicial district in which Magnificent Soles may be found), and that you will accept service of process from the person who provided the original notification or an agent of such person</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Repeat Infringer Policy</h2>
            <p className="mb-4">
              In accordance with the DMCA and other applicable law, Magnificent Soles has adopted a policy of terminating, in appropriate circumstances and at Magnificent Soles' sole discretion, users who are deemed to be repeat infringers. Magnificent Soles may also at its sole discretion limit access to the service and/or terminate the accounts of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to this Policy</h2>
            <p className="mb-4">
              Magnificent Soles may update this DMCA Policy from time to time. We will notify you of any changes by posting the new DMCA Policy on this page. You are advised to review this DMCA Policy periodically for any changes.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about this DMCA Policy, please contact us at:
              <br />
              <a href="mailto:dmca@magnificentsoles.com" className="text-blue-600 hover:underline">
                dmca@magnificentsoles.com
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

export default DMCA;
