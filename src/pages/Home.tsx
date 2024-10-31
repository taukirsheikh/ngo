import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, GraduationCap, Stethoscope, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Nepal Ram Gram Foundation - Empowering Communities in Kohalpur</title>
        <meta
          name="description"
          content="Nepal Ram Gram Foundation is dedicated to providing healthcare, education, and community services in Kohalpur, Banke. Join us in making a difference."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=2670')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.4)"
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Stronger Communities<br />in Kohalpur
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Providing healthcare, education, and social services to create lasting positive change in our community.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/projects">Our Programs</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 hover:bg-white/20">
                <Link to="/about">About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <GraduationCap className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600 mb-4">Educational institutions and vocational training programs for community development.</p>
              <Button variant="link" asChild className="p-0">
                <Link to="/projects/education">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </Card>
            <Card className="p-6">
              <Stethoscope className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600 mb-4">Accessible healthcare services and medical support for those in need.</p>
              <Button variant="link" asChild className="p-0">
                <Link to="/projects/healthcare">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </Card>
            <Card className="p-6">
              <Users className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600 mb-4">Elderly care, rehabilitation centers, and family counseling services.</p>
              <Button variant="link" asChild className="p-0">
                <Link to="/projects/community">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact in Kohalpur</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Youth Education",
                image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2574",
                description: "Supporting underprivileged children with quality education and resources"
              },
              {
                title: "Elderly Care",
                image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=2574",
                description: "Providing care and support services for elderly community members"
              },
              {
                title: "Vocational Training",
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2574",
                description: "Empowering individuals through skill development programs"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Button variant="link" className="text-primary p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Community Initiatives</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your contribution helps us provide essential services to the Kohalpur community.
          </p>
          <Button size="lg" variant="outline" asChild className="bg-white text-primary hover:bg-white/90">
            <Link to="/donate">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;