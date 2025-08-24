import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: '1',
      title: 'The Importance of Cybersecurity Services from IT Experts',
      excerpt: 'Learn how professional cybersecurity services can protect your business from evolving digital threats.',
      author: 'Codleo Team',
      publishedAt: '2024-01-15',
      tags: ['Cybersecurity', 'IT Services', 'Security'],
      slug: 'importance-of-cybersecurity-services',
    },
    {
      id: '2',
      title: 'How Custom Software Development Is Changing the Game',
      excerpt: 'Discover how custom software solutions are transforming businesses and driving innovation.',
      author: 'Codleo Team',
      publishedAt: '2024-01-10',
      tags: ['Software Development', 'Custom Solutions', 'Innovation'],
      slug: 'custom-software-development-changing-game',
    },
    {
      id: '3',
      title: 'How Emerging Technologies Are Reshaping Business',
      excerpt: 'Explore the latest technological trends and their impact on modern business operations.',
      author: 'Codleo Team',
      publishedAt: '2024-01-05',
      tags: ['Technology', 'Business', 'Innovation'],
      slug: 'emerging-technologies-reshaping-business',
    },
    {
      id: '4',
      title: 'The Future of Mobile App Development in 2024',
      excerpt: 'Stay ahead of the curve with insights into the latest mobile development trends and technologies.',
      author: 'Codleo Team',
      publishedAt: '2024-01-01',
      tags: ['Mobile Development', 'Technology', 'Trends'],
      slug: 'future-mobile-app-development-2024',
    },
    {
      id: '5',
      title: 'Cloud Computing Solutions for Modern Businesses',
      excerpt: 'Understanding the benefits of cloud computing and how it can optimize your business operations.',
      author: 'Codleo Team',
      publishedAt: '2023-12-28',
      tags: ['Cloud Computing', 'Business', 'Technology'],
      slug: 'cloud-computing-solutions-businesses',
    },
    {
      id: '6',
      title: 'AI and Machine Learning in Enterprise Applications',
      excerpt: 'How artificial intelligence and machine learning are revolutionizing enterprise software.',
      author: 'Codleo Team',
      publishedAt: '2023-12-25',
      tags: ['AI/ML', 'Enterprise', 'Technology'],
      slug: 'ai-machine-learning-enterprise',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#683bf2] to-[#5a2fd8] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, tutorials, and updates from our team of experts. Stay up to date with the latest in technology and IT solutions.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Blog Image</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>By {post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read Details →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-16">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Load More Posts
          </button>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sign Up To Our Newsletters</h2>
          <div className="max-w-md mx-auto">
            <p className="text-gray-600 text-center mb-6">
              Subscribe to our Newsletter & Event Right Now to be Updated
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blog Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity</h3>
              <p className="text-gray-600">Latest security trends and best practices for protecting your business.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Development</h3>
              <p className="text-gray-600">Insights into modern development practices and technologies.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Trends</h3>
              <p className="text-gray-600">Emerging technologies and their impact on business and society.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
