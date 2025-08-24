import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants';
import SocialIcon from '@/components/icons/SocialIcons';

export default function TopNavbar() {
  return (
    <div className="bg-[#683bf2] text-white py-2">
      <div className="container mx-auto px-4 w-4/5">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="hidden md:inline">{CONTACT_INFO.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="hidden md:inline">{CONTACT_INFO.email}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="font-medium hidden md:inline">Follow Us:</span>
            <div className="flex space-x-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                  title={social.name}
                >
                  <SocialIcon type={social.icon as any} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
