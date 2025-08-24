import Link from 'next/link';
import { SOCIAL_LINKS } from '@/constants';
import SocialIcon from '@/components/icons/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Codleo</h3>
            <p className="text-gray-300 mb-6">
              Our dedicated support team is available 24/7 to ensure smooth IT operations, quick issue resolution
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  title={social.name}
                >
                  <SocialIcon type={social.icon as any} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-300 hover:text-white">Database Solution</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Data Protection</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">App Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Machine Learning</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Helpdesk Services</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Address Company</h4>
            <div className="space-y-3 text-gray-300">
              <p>128 Munich 1258, Germany</p>
              <p>Call Us: +12456978963</p>
              <p>Mail: help.me@example.com</p>
              <p>Office: 8:00 AM - 7:00 PM</p>
            </div>
          </div>
          
          {/* Latest Posts */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Latest Posts</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">May 17, 2025</p>
                <Link href="/blog" className="text-gray-300 hover:text-white font-medium">
                  How Businesses Can...
                </Link>
              </div>
              <div>
                <p className="text-gray-400 text-sm">May 17, 2025</p>
                <Link href="/blog" className="text-gray-300 hover:text-white font-medium">
                  IT Industry Key...
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright @ 2025 Codleo. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Privacy policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Terms of use</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">Site map</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
