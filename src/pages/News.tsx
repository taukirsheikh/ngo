import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsItems = [
    {
      title: 'New Healthcare Center Opens in Kohalpur',
      date: '2024-03-10',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653',
      excerpt: 'Our new healthcare center will provide essential medical services to over 1,000 families in the region.',
      slug: 'new-healthcare-center-opens'
    },
    {
      title: 'Vocational Training Program Graduates 50 Students',
      date: '2024-03-05',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670',
      excerpt: 'Celebrating the success of our latest batch of vocational training graduates.',
      slug: 'vocational-training-graduates'
    },
    {
      title: 'Community Clean-up Drive Success',
      date: '2024-03-01',
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2670',
      excerpt: 'Over 200 volunteers participated in our monthly community clean-up initiative.',
      slug: 'community-cleanup-success'
    },
    {
      title: 'Annual Charity Gala Raises Record Funds',
      date: '2024-02-25',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669',
      excerpt: 'This year\'s charity gala raised over NPR 5 million for our community programs.',
      slug: 'charity-gala-success'
    },
    {
      title: 'New Educational Scholarships Announced',
      date: '2024-02-20',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2574',
      excerpt: 'Launching new scholarship programs for underprivileged students in Kohalpur.',
      slug: 'new-scholarships-announced'
    },
    {
      title: 'Elderly Care Program Expansion',
      date: '2024-02-15',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=2574',
      excerpt: 'Our elderly care program is expanding to serve more community members.',
      slug: 'elderly-care-expansion'
    }
  ];

  return (
    <>
      <Helmet>
        <title>News & Updates - Nepal Ram Gram Foundation</title>
        <meta
          name="description"
          content="Stay updated with the latest news and developments from Nepal Ram Gram Foundation's community initiatives in Kohalpur."
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
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Latest News & Updates</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about our latest initiatives, success stories, and community impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <span className="text-sm font-medium text-primary mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <Button variant="link" asChild className="p-0">
                      <Link to={`/news/${item.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
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

export default News;