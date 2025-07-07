import React, { useState, useEffect } from "react";
import { FaPause, FaPlay, FaArrowLeft, FaArrowRight, FaUser } from "react-icons/fa";

const TestimonialCard = () => {
  const testimonials = [
    {
      name: "Toby Wharne",
      role: "Staff",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "I've never worked with such a motivated and talented group of students before. There's a real passion for learning and a great sense of community too.",
    },
    {
      name: "Sophie Lin",
      role: "Student",
      image: "https://plus.unsplash.com/premium_photo-1664908343551-5f7ad666a8da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Nob29sJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "BSM helped me discover my passion for science and arts. It's a place where ideas come alive.",
    },
    {
      name: "Mark Reyes",
      role: "Parent",
      image: "https://plus.unsplash.com/premium_photo-1681248156500-629dc0e04a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaG9vbCUyMHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D",
      description:
        "The supportive environment at BSM has helped my child grow both academically and emotionally.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="flex flex-col md:flex-row items-stretch bg-white max-w-7xl mx-auto my-10 shadow-xl overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <button className="absolute bottom-6 left-6 bg-cyan-500 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold shadow-lg hover:bg-cyan-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v10a2 2 0 002 2h2m10-6l4-4m0 0l-4-4m4 4H9" />
          </svg>
          stories
        </button>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 bg-[#003D79] text-white p-8 relative flex flex-col justify-between">
        {/* Top Header */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm uppercase text-white/80 tracking-wide">
              {testimonials[currentIndex].role}
            </span>
            <div className="bg-lime-400 text-[#003D79] rounded-full w-8 h-8 flex items-center justify-center">
              <FaUser size={16} />
            </div>
          </div>
          <h2 className="text-2xl font-semibold italic mb-4">
            {testimonials[currentIndex].name}
          </h2>
          <p className="text-white text-lg italic leading-relaxed transition-opacity duration-500">
            {testimonials[currentIndex].description}
          </p>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center gap-4">
          <button 
            onClick={togglePlay}
            className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#003D79] transition"
          >
            {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
          </button>
          <button 
            onClick={goToPrev}
            className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#003D79] transition"
          >
            <FaArrowLeft size={14} />
          </button>
          <button 
            onClick={goToNext}
            className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#003D79] transition"
          >
            <FaArrowRight size={14} />
          </button>
          
          {/* Progress indicators */}
          <div className="flex-grow flex items-center gap-2 ml-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-[2px] w-8 transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-lime-400" 
                    : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;