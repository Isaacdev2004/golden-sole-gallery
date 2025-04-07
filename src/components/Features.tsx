
import { Shield, CreditCard, Zap, Users } from "lucide-react";

const features = [
  {
    title: "Secure Platform",
    description: "ID verification for all sellers means you can trust who you're interacting with.",
    icon: Shield
  },
  {
    title: "Simple Payments",
    description: "Set your prices and receive payments directly to your account.",
    icon: CreditCard
  },
  {
    title: "Fast Growth",
    description: "Our discovery features help you quickly grow your audience and sales.",
    icon: Zap
  },
  {
    title: "Private Community",
    description: "Connect with buyers directly through our messaging system.",
    icon: Users
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose <span className="gold-text">Magnificent Soles</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform offers everything you need to successfully monetize your content
            with the security and features creators and buyers love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover-scale"
            >
              <div className="inline-flex items-center justify-center p-3 bg-gold-light/20 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
