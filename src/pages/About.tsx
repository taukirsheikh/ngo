import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Target, Users, Heart, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Mission',
      description: 'To empower and uplift communities in Kohalpur through sustainable development initiatives in healthcare, education, and social services.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Vision',
      description: 'Creating self-reliant communities where every individual has access to quality healthcare, education, and opportunities for growth.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Values',
      description: 'Compassion, integrity, and commitment to community development drive our every action and decision.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Impact',
      description: 'Measurable, sustainable change through community-driven initiatives and partnerships.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Nepal Ram Gram Foundation</title>
        <meta
          name="description"
          content="Learn about Nepal Ram Gram Foundation's mission, vision, and impact in Kohalpur, Nepal."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Nepal Ram Gram Foundation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established with a vision to transform lives in Kohalpur, we work tirelessly to create lasting positive change in our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="text-primary mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-4">
                Nepal Ram Gram Foundation was established with a clear vision to address the pressing needs of the Kohalpur community. Our journey began with a focus on providing essential healthcare and education services.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have expanded our services to include elderly care, vocational training, and comprehensive community development programs. Our growth has been guided by the needs of our community and our commitment to sustainable development.
              </p>
              <p className="text-gray-600">
                Today, we continue to evolve and adapt our programs to meet the changing needs of our community while staying true to our core mission of empowerment and positive change.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670"
                alt="Our Journey"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;