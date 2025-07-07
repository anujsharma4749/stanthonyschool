import React, { useState, useEffect } from 'react';
import { Play as PlayIcon, Pause as PauseIcon, ChevronLeft, ChevronRight, MapPin, Phone, Search, ChevronDown, X } from 'lucide-react';

const BritishSchoolHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  

  // Sample video data - in a real app, these would be actual video URLs
  const slides = [
    {
      id: 1,
      title: "Welcome to British School Manila",
      subtitle: "Excellence in Education Since 1976",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
    },
    {
      id: 2,
      title: "Modern Facilities & Innovation",
      subtitle: "State-of-the-art Learning Environment",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2786&q=80"
    },
    {
      id: 3,
      title: "Student Life & Community",
      subtitle: "Building Tomorrow's Leaders",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
    },
    {
      id: 4,
      title: "Sports & Recreation",
      subtitle: "Developing Mind, Body & Spirit",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    }
  ];

  // Navigation menu items with dropdowns
  const navigationItems = [
    {
      title: "ABOUT US",
      items: ["Our History", "Mission & Vision", "Leadership Team", "Accreditations", "School Policies", "Campus Tour"]
    },
    {
      title: "ADMISSIONS",
      items: ["Application Process", "Entry Requirements", "Fees & Scholarships", "Open Days", "Transfer Students", "Contact Admissions"]
    },
    {
      title: "ACADEMICS",
      items: ["Early Years", "Primary School", "Secondary School", "Sixth Form", "Curriculum", "Assessment"]
    },
    {
      title: "LIFE AT BSM",
      items: ["Student Life", "House System", "Pastoral Care", "School Calendar", "Uniform", "Transport"]
    },
    {
      title: "COMMUNITY",
      items: ["Parent Community", "Alumni Network", "Events", "Partnerships", "Social Responsibility", "Newsletter"]
    },
    {
      title: "NEWS",
      items: ["Latest News", "School Events", "Academic Achievements", "Sports Updates", "Community News", "Press Releases"]
    }
  ];

  // Right side utility menu items
  const utilityItems = [
    { title: "PORTALS", items: ["Student Portal", "Parent Portal", "Staff Portal", "Alumni Portal"] },
    { title: "QUICKLINKS", items: ["Calendar", "Policies", "Forms", "Contact"] },
    { title: "CONTACT US", items: ["General Enquiries", "Admissions", "HR Department"] }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleDropdown = (menuTitle) => {
    setActiveDropdown(activeDropdown === menuTitle ? null : menuTitle);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Handle search logic here
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Top Utility Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10 sm:h-12">
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Utility Menu Items */}
              {utilityItems.map((item) => (
                <div key={item.title} className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="text-white hover:text-blue-300 transition-colors text-xs sm:text-sm flex items-center space-x-1"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-60">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-sm"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Search Icon */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-white hover:text-blue-300 transition-colors"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="absolute top-12 sm:top-14 left-1/2 right-0 z-50 bg-white shadow-lg rounded-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSearchSubmit} className="flex items-center py-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => setShowSearch(false)}
                className="ml-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Navigation Header */}
      <header className={`absolute left-0 right-0 z-40 bg-black bg-opacity-20 backdrop-blur-sm transition-all duration-300 ${showSearch ? 'top-20 sm:top-24' : 'top-10 sm:top-12'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="British School Manila Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full mr-2 sm:mr-3"
                />
                <div className="text-white">
                  <h1 className="font-bold text-sm sm:text-base lg:text-lg">BRITISH SCHOOL</h1>
                  <p className="text-xs sm:text-sm opacity-90">MANILA</p>
                  <p className="text-xs opacity-75 hidden sm:block">ESTABLISHED 1976</p>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((navItem) => (
                <div key={navItem.title} className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown(navItem.title)}
                    className="text-white hover:text-blue-300 transition-colors text-sm xl:text-base flex items-center space-x-1"
                  >
                    <span>{navItem.title}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {activeDropdown === navItem.title && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-60">
                      {navItem.items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-sm"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button className="text-white hover:text-blue-300 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Video Slider */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Video Background */}
            <div className="relative w-full h-full">
              <img
                src={slide.thumbnail}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              
              {/* Overlay for climbing wall effect */}
              <div className="absolute left-0 top-0 bottom-0 w-1/2 sm:w-2/5 md:w-1/3 bg-gradient-to-r from-gray-800 via-gray-700 to-transparent opacity-30">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;><circle cx=&quot;20&quot; cy=&quot;20&quot; r=&quot;3&quot; fill=&quot;%23ff6b6b&quot;/><circle cx=&quot;80&quot; cy=&quot;15&quot; r=&quot;2&quot; fill=&quot;%2351cf66&quot;/><circle cx=&quot;45&quot; cy=&quot;35&quot; r=&quot;2.5&quot; fill=&quot;%23339af0&quot;/><circle cx=&quot;70&quot; cy=&quot;45&quot; r=&quot;2&quot; fill=&quot;%23ffd43b&quot;/><circle cx=&quot;25&quot; cy=&quot;55&quot; r=&quot;3&quot; fill=&quot;%23ff8cc8&quot;/><circle cx=&quot;60&quot; cy=&quot;65&quot; r=&quot;2&quot; fill=&quot;%2351cf66&quot;/><circle cx=&quot;35&quot; cy=&quot;75&quot; r=&quot;2.5&quot; fill=&quot;%23ff6b6b&quot;/><circle cx=&quot;85&quot; cy=&quot;80&quot; r=&quot;2&quot; fill=&quot;%23339af0&quot;/><circle cx=&quot;15&quot; cy=&quot;85&quot; r=&quot;2.5&quot; fill=&quot;%23ffd43b&quot;/></svg>')] opacity-30"></div>
              </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
                    Learn More
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 sm:space-x-6">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 sm:p-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 sm:p-3 rounded-full transition-all"
        >
          {isPlaying ? <PauseIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 sm:p-3 rounded-full transition-all"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Side Action Buttons with Hover Labels */}
      <div className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 sm:space-y-4">
        <div className="relative group">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-colors">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Phone
          </div>
        </div>
        
        <div className="relative group">
          <button className="bg-green-600 hover:bg-green-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-colors">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Visit
          </div>
        </div>
        
        <div className="relative group">
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-colors"
          >
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default BritishSchoolHero;