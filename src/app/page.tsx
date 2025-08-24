import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import FeaturesSlider from '@/components/FeaturesSlider';
import ProjectsSlider from '@/components/ProjectsSlider';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Gap Section */}
      <section className="py-16 bg-white">
        <div className="w-full px-4">
          <div className="text-center">
            {/* Empty gap section - removed numbered indicators */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#EDECFD' }}>
        <div className="w-full px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h3 className="text-[#683bf2] font-semibold mb-4">Our Unique Features</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Discover Our Unique Features
            </h2>
          </div>
          
          <FeaturesSlider />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-[#683bf2] font-semibold mb-4">About Our Company</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We provide perfect IT solutions & technology for any startups Agency's.
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber. Fully customizable templates. Build relationships that lead to conversions.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">⭐</div>
                  <h4 className="text-xl font-bold">Best Technical Solution</h4>
                </div>
                <p className="text-gray-600">
                  Nanotechnology immersion along the information high will close the loop on focusing solely
                </p>
              </div>
              
              <Link 
                href="/services" 
                className="bg-[#683bf2] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a2fd8] transition-colors inline-block"
              >
                Get Our Services
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://themexriver.com/wp/tekz/wp-content/uploads/2025/04/ab1.webp" 
                alt="Codleo Company"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-[#683bf2] font-semibold mb-4">Our Services</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Unique Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-[#683bf2]/10 text-[#683bf2] px-3 py-1 rounded-full text-sm font-semibold mr-4">01</span>
                <div className="text-3xl">🔒</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Cybersecurity Services</h3>
              <p className="text-gray-600 mb-4">
                Our job doesn't stop. We provide continuous monitoring, maintenance, and optimization to ensure seamless operation and peak performance.
              </p>
              <Link href="/services" className="text-[#683bf2] hover:text-[#5a2fd8] font-semibold">
                Read More
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-[#683bf2]/10 text-[#683bf2] px-3 py-1 rounded-full text-sm font-semibold mr-4">02</span>
                <div className="text-3xl">📱</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile App Development</h3>
              <p className="text-gray-600 mb-4">
                Our job doesn't stop. We provide continuous monitoring, maintenance, and optimization to ensure seamless operation and peak performance.
              </p>
              <Link href="/services" className="text-[#683bf2] hover:text-[#5a2fd8] font-semibold">
                Read More
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-[#683bf2]/10 text-[#683bf2] px-3 py-1 rounded-full text-sm font-semibold mr-4">03</span>
                <div className="text-3xl">⚙️</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Managed IT Services</h3>
              <p className="text-gray-600 mb-4">
                Our job doesn't stop. We provide continuous monitoring, maintenance, and optimization to ensure seamless operation and peak performance.
              </p>
              <Link href="/services" className="text-[#683bf2] hover:text-[#5a2fd8] font-semibold">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-[#683bf2] font-semibold mb-4">Our Team</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Skilled Expert Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-bold mb-2">James Anderson</h3>
              <p className="text-[#683bf2]">IT Director</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Catherine Brooks</h3>
              <p className="text-[#683bf2]">Cybersecurity Analyst</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Thomas Reynolds</h3>
              <p className="text-[#683bf2]">Software Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#683bf2] text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book A Consultancy
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our mission is to look after the financial best interests with automation
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-[#683bf2] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Book a Service
          </Link>
        </div>
      </section>

      {/* Projects Slider Section */}
      <ProjectsSlider />
    </div>
  );
}
