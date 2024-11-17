import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Book, Stethoscope, Users} from 'lucide-react';

const Donate = () => {
  const causes = [
    {
      icon: <Book className="h-8 w-8" />,
      title: 'Education Fund',
      description: 'Support education initiatives and scholarship programs for underprivileged students.',
      target: 500000,
      raised: 325000
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: 'Healthcare Services',
      description: 'Help us provide essential healthcare services to remote communities.',
      target: 750000,
      raised: 420000
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Development',
      description: 'Support various community development programs and infrastructure.',
      target: 1000000,
      raised: 680000
    }
  ];

  return (
    <>
      <Helmet>
        <title>Donate - Nepal Ram Gram Foundation</title>
        <meta
          name="description"
          content="Support our community initiatives by donating to Nepal Ram Gram Foundation. Your contribution makes a difference in Kohalpur."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Make a Difference Today</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Your support helps us continue our mission of empowering communities and creating lasting positive change in Kohalpur.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              Donate Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Support Our Causes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {causes.map((cause, index) => (
              <motion.div
                key={cause.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="text-primary mb-4">{cause.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
                  <p className="text-gray-600 mb-4">{cause.description}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Raised: NPR {cause.raised.toLocaleString()}</span>
                      <span>Goal: NPR {cause.target.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2"
                        style={{ width: `${(cause.raised / cause.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <Button className="w-full">Donate to this Cause</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Amount Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Make a Custom Donation</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Amount (NPR)
                </label>
                <Input type="number" placeholder="Enter amount" min="100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <Button type="submit" className="w-full">
                Proceed to Payment
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '1000+', label: 'Students Supported' },
              { number: '500+', label: 'Families Helped' },
              { number: '50+', label: 'Community Projects' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;