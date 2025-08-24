import { SERVICES } from '@/constants';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the modern digital landscape.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="text-4xl">{service.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <h4 className="font-semibold text-gray-900 mb-3">What we offer:</h4>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored to your specific needs and business requirements.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without compromising on quality.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Support</h3>
              <p className="text-gray-600">Ongoing support and maintenance for all our solutions.</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Work Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We analyze your requirements and understand your business goals.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">We create a detailed plan and timeline for your project.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Our team builds your solution using the latest technologies.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">We deploy your solution and provide ongoing support.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Let's discuss your project and how we can help you achieve your goals.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}
