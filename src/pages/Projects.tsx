import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Education Initiatives',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2669',
      description: 'Supporting underprivileged children with quality education and resources.',
      status: 'Ongoing'
    },
    {
      title: 'Healthcare Outreach',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670',
      description: 'Mobile health clinics and medical support for remote communities.',
      status: 'Active'
    },
    {
      title: 'Elderly Care Center',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=2574',
      description: 'Comprehensive care and support services for elderly community members.',
      status: 'Ongoing'
    },
    {
      title: 'Vocational Training',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2574',
      description: 'Skill development programs for youth and adults.',
      status: 'Active'
    },
    {
      title: 'Community Center',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670',
      description: 'A hub for community gatherings and cultural activities.',
      status: 'Planned'
    },
    {
      title: 'Women Empowerment',
      category: 'Social',
      image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?q=80&w=2670',
      description: 'Programs focused on women\'s education and economic independence.',
      status: 'Active'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Projects - Nepal Ram Gram Foundation</title>
        <meta
          name="description"
          content="Explore our ongoing projects in education, healthcare, and community development in Kohalpur, Nepal."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we're making a difference in Kohalpur through our various initiatives and programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-sm font-medium text-primary">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
                      </div>
                      <span className={`text-sm px-2 py-1 rounded ${
                        project.status === 'Active' ? 'bg-green-100 text-green-800' :
                        project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Button variant="link" className="p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;