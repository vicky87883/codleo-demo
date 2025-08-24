'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Rocket, 
  Code, 
  Settings, 
  Lightbulb, 
  Shield, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  Zap, 
  Users 
} from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Rocket,
    title: 'Deployment Services',
    description: 'Streamlined deployment solutions for web applications, mobile apps, and enterprise software with zero-downtime updates and automated scaling.',
    link: '/services'
  },
  {
    id: 2,
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs, from web applications to enterprise systems with modern technologies.',
    link: '/services'
  },
  {
    id: 3,
    icon: Settings,
    title: 'Technology Solutions',
    description: 'Comprehensive technology consulting and implementation services to optimize your business processes and digital transformation.',
    link: '/services'
  },
  {
    id: 4,
    icon: Lightbulb,
    title: 'AI-Driven Insights',
    description: 'Advanced artificial intelligence solutions for data analysis, predictive modeling, and intelligent automation to drive business growth.',
    link: '/services'
  },
  {
    id: 5,
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Robust security solutions including threat detection, vulnerability assessments, and 24/7 monitoring to protect your digital assets.',
    link: '/services'
  },
  {
    id: 6,
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with cutting-edge features and exceptional user experience.',
    link: '/services'
  },
  {
    id: 7,
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure, migration services, and cloud-native applications to modernize your business operations.',
    link: '/services'
  },
  {
    id: 8,
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Comprehensive data analysis and business intelligence solutions to turn your data into actionable insights and strategic decisions.',
    link: '/services'
  },
  {
    id: 9,
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed optimization, caching strategies, and performance monitoring to ensure your applications run at peak efficiency.',
    link: '/services'
  },
  {
    id: 10,
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic IT consulting services to align technology with your business goals and drive digital transformation initiatives.',
    link: '/services'
  }
];

export default function FeaturesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2000); // Move every 2 seconds (faster)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex space-x-6 animate-scroll">
        {/* Duplicate features for seamless loop */}
        {[...features, ...features].map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={`${feature.id}-${index}`}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl hover:border-2 hover:border-[#683bf2] transition-all duration-300 w-[500px] flex-shrink-0 border border-gray-100 group"
            >
              <div className="text-[#683bf2] mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconComponent size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#683bf2] transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
              <Link 
                href={feature.link} 
                className="inline-block bg-[#683bf2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a2fd8] hover:scale-105 transition-all duration-300 text-sm"
              >
                Learn More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
