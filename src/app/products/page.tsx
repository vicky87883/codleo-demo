export default function ProjectsPage() {
  const projects = [
    {
      id: '1',
      name: 'Renewable Energy Landing Page',
      description: 'A modern landing page for a renewable energy company with interactive elements and analytics integration.',
      category: 'Web Development',
      image: '/api/placeholder/400/300',
      stats: ['900% increase in ROI', '40% decrease in CAC'],
      link: '#',
    },
    {
      id: '2',
      name: 'Digital Identity Management System',
      description: 'Comprehensive digital identity management solution with advanced security features.',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/300',
      stats: ['Enhanced Security', 'User-friendly Interface'],
      link: '#',
    },
    {
      id: '3',
      name: 'Healthcare Management Platform',
      description: 'Telemedicine platform with patient management and appointment scheduling capabilities.',
      category: 'Healthcare',
      image: '/api/placeholder/400/300',
      stats: ['Improved Patient Care', 'Streamlined Operations'],
      link: '#',
    },
    {
      id: '4',
      name: 'E-commerce Mobile App',
      description: 'Cross-platform mobile application for online retail with payment integration.',
      category: 'Mobile Development',
      image: '/api/placeholder/400/300',
      stats: ['Increased Sales', 'Better User Experience'],
      link: '#',
    },
    {
      id: '5',
      name: 'AI-Powered Analytics Dashboard',
      description: 'Business intelligence dashboard with machine learning insights and real-time data.',
      category: 'AI/ML',
      image: '/api/placeholder/400/300',
      stats: ['Data-Driven Decisions', 'Real-time Insights'],
      link: '#',
    },
    {
      id: '6',
      name: 'Cloud Infrastructure Solution',
      description: 'Scalable cloud infrastructure setup with automated deployment and monitoring.',
      category: 'Cloud Services',
      image: '/api/placeholder/400/300',
      stats: ['Reduced Costs', 'Improved Performance'],
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our collection of successful projects that showcase our expertise in delivering innovative solutions.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.stats.map((stat, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">•</span>
                        {stat}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Categories */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600">Modern, responsive websites and web applications built with cutting-edge technologies.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Apps</h3>
              <p className="text-gray-600">Cross-platform mobile applications for iOS and Android with native performance.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity</h3>
              <p className="text-gray-600">Advanced security solutions to protect your business and customer data.</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <p className="text-gray-600">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
}
