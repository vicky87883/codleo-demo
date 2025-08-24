import { SITE_CONFIG } from '@/constants';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#683bf2] to-[#5a2fd8] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About {SITE_CONFIG.name}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are passionate about creating exceptional digital experiences that drive business growth and user engagement.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that transform their digital presence and drive measurable results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe in the power of innovation, collaboration, and continuous learning to deliver solutions that exceed expectations.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Expert team with years of experience</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Modern technology stack</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Proven track record of success</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://themexriver.com/wp/tekz/wp-content/uploads/2025/04/ab1.webp" 
              alt={`${SITE_CONFIG.name} Company`}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do, from code quality to user experience.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">We work closely with our clients to understand their needs and deliver tailored solutions.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">We stay ahead of the curve with the latest technologies and best practices.</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#683bf2] mb-2">500+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#683bf2] mb-2">50+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#683bf2] mb-2">10+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#683bf2] mb-2">24/7</div>
            <p className="text-gray-600">Support Available</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-bold mb-2">James Anderson</h3>
              <p className="text-[#683bf2] mb-2">IT Director</p>
              <p className="text-gray-600 text-sm">
                Leading our technical strategy and ensuring delivery excellence across all projects.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Catherine Brooks</h3>
              <p className="text-[#683bf2] mb-2">Cybersecurity Analyst</p>
              <p className="text-gray-600 text-sm">
                Expert in security protocols and protecting client data with cutting-edge solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Thomas Reynolds</h3>
              <p className="text-[#683bf2] mb-2">Software Developer</p>
              <p className="text-gray-600 text-sm">
                Specializing in modern web technologies and creating scalable software solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
