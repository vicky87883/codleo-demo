'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: "Welcome to Codleo",
    subtitle: "We Build Ideas Driven by the Future",
    description: "We understand the importance of financial planning for individuals and businesses alike.",
    cta: "Get Started",
    images: [
      "/api/placeholder/300/200",
      "/api/placeholder/250/180",
      "/api/placeholder/280/190",
      "/api/placeholder/320/210"
    ]
  },
  {
    id: 2,
    title: "Innovative Technology Solutions",
    subtitle: "Transforming Businesses with Digital Excellence",
    description: "Deliver cutting-edge solutions that drive growth and efficiency for your business.",
    cta: "Learn More",
    images: [
      "/api/placeholder/300/200",
      "/api/placeholder/250/180",
      "/api/placeholder/280/190",
      "/api/placeholder/320/210"
    ]
  },
  {
    id: 3,
    title: "Expert IT Services",
    subtitle: "Professional Solutions for Modern Challenges",
    description: "Our team of experts provides comprehensive IT services tailored to your needs.",
    cta: "Our Services",
    images: [
      "/api/placeholder/300/200",
      "/api/placeholder/250/180",
      "/api/placeholder/280/190",
      "/api/placeholder/320/210"
    ]
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          setIsAnimating(false);
        }, 400);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const goToSlide = (index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 400);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#683bf2]/30 via-[#683bf2]/20 to-[#5a2fd8]/30">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#683bf2]/40 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-[#5a2fd8]/35 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-[#683bf2]/45 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#5a2fd8]/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          {/* Additional animated elements */}
          <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-[#683bf2]/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-12 h-12 bg-[#5a2fd8]/35 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-18 h-18 bg-[#683bf2]/40 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        </div>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-white/70 backdrop-blur-sm transition-opacity duration-800 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center h-full max-w-7xl mx-auto px-4">
            {/* Gaussian Blur Bubble Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[800px] h-[600px] bg-gradient-to-br from-[#683bf2]/40 via-[#5a2fd8]/35 to-[#683bf2]/45 rounded-full blur-3xl opacity-80"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
              {/* Left Side - Text Content */}
              <div className={`${index === currentSlide ? 'slide-in' : ''}`}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-[#683bf2]">
                  {slide.subtitle}
                </h2>
                <p className="text-xl mb-10 max-w-2xl text-gray-700">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-[#683bf2] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a2fd8] transition-colors inline-block text-center"
                  >
                    {slide.cta}
                  </Link>
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-gray-600">Hotline: +(733)-860-2906</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Image Collage */}
              <div className="relative h-96 lg:h-[500px]">
                <div className="grid grid-cols-2 gap-4 h-full relative">
                  {/* First Image - Big, vertically aligned, slightly down */}
                  <div className="flex items-center justify-center relative mt-4">
                    <img 
                      src="https://themexriver.com/wp/tekz/wp-content/uploads/2025/04/hs3.webp" 
                      alt="Technology Solutions"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {/* Third Image - Smaller, positioned on top right of first image */}
                    <div className="absolute top-2 right-2 w-32 h-24 z-10" style={{ animation: 'rotateAndStop 2s ease-out forwards' }}>
                      <img 
                        src="https://themexriver.com/wp/tekz/wp-content/uploads/2025/04/hs1.webp" 
                        alt="IT Services"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </div>
                  
                  {/* Second Image - Big, vertically aligned, slightly up */}
                  <div className="flex items-center justify-center relative -mt-4">
                    <img 
                      src="https://themexriver.com/wp/tekz/wp-content/uploads/2025/04/hs2.webp" 
                      alt="Digital Innovation"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Numbers */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center font-bold text-sm ${
              index === currentSlide 
                ? 'bg-[#683bf2] text-white shadow-lg scale-110' 
                : 'bg-white text-[#683bf2] border-2 border-[#683bf2] hover:bg-[#683bf2] hover:text-white'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#683bf2]/20 hover:bg-[#683bf2]/30 text-[#683bf2] p-3 rounded-full transition-colors"
      >
        ←
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#683bf2]/20 hover:bg-[#683bf2]/30 text-[#683bf2] p-3 rounded-full transition-colors"
      >
        →
      </button>
    </section>
  );
}
