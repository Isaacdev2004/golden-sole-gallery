
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CreditCard, 
  ShieldCheck, 
  Upload, 
  Search, 
  DollarSign, 
  ChevronRight,
  Users,
  ThumbsUp
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

const HowItWorks = () => {
  const buyerSteps = [
    {
      icon: Search,
      title: "Browse Content",
      description: "Search through our extensive library of high-quality foot content from verified sellers."
    },
    {
      icon: CreditCard,
      title: "Purchase Securely",
      description: "Buy individual content or subscribe to your favorite creators with our secure payment system."
    },
    {
      icon: ShieldCheck,
      title: "Access Instantly",
      description: "Get immediate access to your purchased content with lifetime availability."
    },
    {
      icon: ThumbsUp,
      title: "Enjoy & Support",
      description: "Enjoy exclusive content and support your favorite creators directly."
    }
  ];

  const sellerSteps = [
    {
      icon: Upload,
      title: "Upload Content",
      description: "Create your profile, get verified, and start uploading your high-quality foot content."
    },
    {
      icon: DollarSign,
      title: "Set Your Prices",
      description: "You're in control - set prices for individual content or create subscription packages."
    },
    {
      icon: Users,
      title: "Grow Your Audience",
      description: "Connect with buyers and build your following through our creator-friendly platform."
    },
    {
      icon: CreditCard,
      title: "Get Paid",
      description: "Receive regular payouts directly to your account with our reliable payment system."
    }
  ];

  const faqs = [
    {
      question: "How do I become a verified seller?",
      answer: "To become a verified seller, you'll need to complete our ID verification process which includes providing government-issued photo ID and completing a verification photo. This helps maintain trust and security on our platform."
    },
    {
      question: "What are the platform fees?",
      answer: "Magnificent Soles takes a 20% commission on all sales. This covers payment processing, hosting, security, and ongoing platform development to bring you more buyers and features."
    },
    {
      question: "How often are sellers paid?",
      answer: "Sellers receive payments on a bi-weekly basis for all completed sales, with a minimum payout threshold of $50. Payments are sent via your preferred payment method set in your account settings."
    },
    {
      question: "What content is allowed on the platform?",
      answer: "We allow non-explicit foot-related content including photos and videos. All content must comply with our content policy which prohibits explicit material. All sellers must verify they are 18+ years old."
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely. We use industry-standard encryption and never store your full credit card details. All payments are processed through our secure payment processor that complies with PCI DSS standards."
    },
    {
      question: "Can I request custom content from sellers?",
      answer: "Yes! You can message sellers directly to request custom content. Payment for custom orders is handled through our secure platform to protect both buyers and sellers."
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gold-text">Magnificent Soles</span> Works
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
            Our platform connects foot content creators with buyers in a secure, 
            user-friendly marketplace. Learn how to make the most of your experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register?type=seller">
              <Button className="bg-gold hover:bg-gold-dark text-white">
                Start Selling
              </Button>
            </Link>
            <Link to="/register?type=buyer">
              <Button variant="outline" className="border-gold hover:bg-gold hover:text-white">
                Sign Up as Buyer
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* For Buyers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">For <span className="gold-text">Buyers</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover and enjoy high-quality content from verified creators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buyerSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover-scale"
              >
                <div className="inline-flex items-center justify-center p-3 bg-gold-light/20 rounded-full mb-4">
                  <step.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/browse">
              <Button className="bg-gold hover:bg-gold-dark text-white">
                Browse Content
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* For Sellers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">For <span className="gold-text">Sellers</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Monetize your content with our seller-friendly platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellerSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover-scale"
              >
                <div className="inline-flex items-center justify-center p-3 bg-gold-light/20 rounded-full mb-4">
                  <step.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/register?type=seller">
              <Button className="bg-gold hover:bg-gold-dark text-white">
                Become a Seller
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Platform Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose <span className="gold-text">Magnificent Soles</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform offers unique advantages for both buyers and sellers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover-scale">
              <div className="inline-flex items-center justify-center p-3 bg-gold-light/20 rounded-full mb-4">
                <ShieldCheck className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                We verify all sellers to ensure a safe marketplace. Your personal 
                information and payment details are always protected with enterprise-level encryption.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover-scale">
              <div className="inline-flex items-center justify-center p-3 bg-gold-light/20 rounded-full mb-4">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Growing Community</h3>
              <p className="text-gray-600">
                Join thousands of buyers and sellers in our specialized marketplace, 
                dedicated to high-quality foot content and building creator-fan relationships.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover-scale">
              <div className="inline-flex items-center justify-center p-3 bg-gold-light/20 rounded-full mb-4">
                <CreditCard className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Payments</h3>
              <p className="text-gray-600">
                Sellers receive regular payouts with competitive commission rates. 
                Buyers can purchase with confidence using our secure payment system.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked <span className="gold-text">Questions</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our platform
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/faq">
                <Button variant="outline" className="border-gold hover:bg-gold hover:text-white">
                  View All FAQs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </>
  );
};

export default HowItWorks;
