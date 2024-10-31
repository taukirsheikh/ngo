import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About NRGF</h3>
            <p className="text-gray-400 mb-4">
              Nepal Ram Gram Foundation is committed to providing healthcare, education,
              and social services to the community of Kohalpur, Banke.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/education" className="text-gray-400 hover:text-white">
                  Education Programs
                </Link>
              </li>
              <li>
                <Link to="/services/healthcare" className="text-gray-400 hover:text-white">
                  Healthcare Services
                </Link>
              </li>
              <li>
                <Link to="/services/elderly-care" className="text-gray-400 hover:text-white">
                  Elderly Care
                </Link>
              </li>
              <li>
                <Link to="/services/vocational" className="text-gray-400 hover:text-white">
                  Vocational Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Ward No. 11, Kohalpur Municipality<br />
                Kohalpur, Banke, Nepal
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +977 1234567890
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                info@nepalramgram.org
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates about our community initiatives and impact.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Nepal Ram Gram Foundation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;