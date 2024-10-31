import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: 'Ward No. 11, Kohalpur Municipality, Kohalpur, Banke, Nepal'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+977 1234567890'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'info@nepalramgram.org'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Office Hours',
      details: 'Sunday - Friday: 9:00 AM - 5:00 PM'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Nepal Ram Gram Foundation</title>
        <meta
          name="description"
          content="Get in touch with Nepal Ram Gram Foundation. We're here to answer your questions and help you get involved."
        />
      </Helmet>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-4">
                      <div className="flex items-start">
                        <div className="text-primary mr-4">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-gray-600">{info.details}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input placeholder="Enter subject" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Enter your message"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14132.460782193424!2d81.69661037815795!3d28.196925591741285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399813f44444444f%3A0x8439c56d53a2d4bb!2sKohalpur%2C%20Nepal!5e0!3m2!1sen!2sus!4v1709840000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;