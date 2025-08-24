'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Renewable Energy Landing Page',
    description: 'See the power of data in action as we break down how analytics driven decisions led to a surge in campaign effectiveness.',
    image: 'https://themexriver.com/wp/tekz/wp-content/uploads/2025/04/pro1.webp',
    link: '/projects/renewable-energy',
    stats: [
      '900% increase in ROI',
      '40% decrease in CAC'
    ]
  },
  {
    id: 2,
    title: 'Based Digital Identity Management',
    description: 'See the power of data in action as we break down how analytics driven decisions led to a surge in campaign effectiveness.',
    image: 'https://themexriver.com/wp/tekz/wp-content/uploads/2025/04/pro2.webp',
    link: '/projects/digital-identity',
    stats: [
      '900% increase in ROI',
      '40% decrease in CAC'
    ]
  },
  {
    id: 3,
    title: 'Healthcare Management & Telemedicine',
    description: 'See the power of data in action as we break down how analytics driven decisions led to a surge in campaign effectiveness.',
    image: 'https://themexriver.com/wp/tekz/wp-content/uploads/2025/04/pro3.webp',
    link: '/projects/healthcare',
    stats: [
      '900% increase in ROI',
      '40% decrease in CAC'
    ]
  }
];

export default function ProjectsSlider() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#05091A' }}>
      {/* Decorative Background Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-20">
        <img src="https://themexriver.com/wp/tekz/wp-content/uploads/2025/04/circle1.svg" alt="circle1" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 opacity-20">
        <img src="https://themexriver.com/wp/tekz/wp-content/uploads/2025/04/circle2.svg" alt="circle2" className="w-full h-full" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-[#683bf2] font-semibold mb-4 text-uppercase">Our Projects</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Recent Projects
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.
          </p>
        </div>
      </div>

      {/* Projects Container - All slides visible */}
      <div className="relative max-w-6xl mx-auto px-4 pb-20">
        {projects.map((project, index) => (
          <div key={project.id} className="mb-20 last:mb-0">
            {/* Complete Glass Card */}
            <div className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 transition-all duration-700 hover:bg-[#683bf2]/20 hover:backdrop-blur-xl hover:shadow-[#683bf2]/20 hover:shadow-2xl">
              {/* Decorative Shapes */}
              <div className="absolute top-4 left-4 w-16 h-16 opacity-10">
                <img src="https://themexriver.com/wp/tekz/wp-content/uploads/2025/04/p-shape1.webp" alt="p-shape1" className="w-full h-full" />
              </div>
              <div className="absolute bottom-4 right-4 w-12 h-12 opacity-10">
                <img src="https://themexriver.com/wp/tekz/wp-content/uploads/2025/04/p-shape2.webp" alt="p-shape2" className="w-full h-full" />
              </div>

              <div className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Text Content */}
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    <Link href={project.link} className="text-white">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-white text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="space-y-3">
                    {project.stats.map((stat, statIndex) => (
                      <li key={statIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-[#683bf2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white font-medium">{stat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link 
                      href={project.link} 
                      className="inline-flex items-center bg-[#683bf2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a2fd8] transition-all duration-300 group-hover:scale-105"
                    >
                      <span>Read Full Case Study</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="lg:w-1/2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto rounded-lg shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-[#683bf2]/20"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
