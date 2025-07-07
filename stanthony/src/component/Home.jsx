import React from 'react'
import TestimonialCard from './Meet'
import FactsFigures from './Facts'
import NewsSection from './News'

function Home() {
  const cards = [
    {
      title: "Key Stages",
      image: "https://plus.unsplash.com/premium_photo-1750751601554-001885f3c03b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBraWRzJTIwYXQlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D",
      description: "Explore learning stages from Early Years to Senior School.",
    },
    {
      title: "Primary",
      image: "https://media.istockphoto.com/id/1163985429/photo/group-of-schoolboys-and-schoolgirls-at-school-campus.webp?a=1&b=1&s=612x612&w=0&k=20&c=4EAqHWb6wVmQpZSNFOjWfsFKTM2xPV9KqzeCyJo_6xM=",
      description: "Nurturing young minds through creativity, care and curiosity.",
    },
    {
      title: "Senior",
      image: "https://images.unsplash.com/photo-1552649300-c5fafe9748ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbWFyeSUyMCUyMGF0JTIwc2Nob29sfGVufDB8fDB8fHww",
      description: "Preparing students for universities and future careers.",
    },
  ];
  
  return (
    <section className="relative bg-[#eaf9fc] overflow-hidden pb-20">
      {/* Background SVG */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#d6edf5"
            d="M0,64L40,80C80,96,160,128,240,144C320,160,400,160,480,154.7C560,149,640,139,720,128C800,117,880,107,960,112C1040,117,1120,139,1200,154.7C1280,171,1360,181,1400,186.7L1440,192L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Welcome Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-20 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold italic text-blue-900 mb-6">
          Welcome To The BSM Family
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          The British School Manila provides an outstanding holistic British international education, empowering students to flourish as global citizens with the skills, understanding and values, to make a positive contribution to our world.
        </p>
      </div>

      {/* Card Grid */}
      <div className="relative z-10 mt-16 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative overflow-hidden shadow-lg rounded-lg cursor-pointer h-[400px]"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-xl font-bold">{card.title}</h3>
              <div className="mt-1 h-[2px] bg-white/30 w-full" />
            </div>

            {/* Slide-up Description Card */}
            <div className="absolute bottom-0 left-1/2 w-[95%] -translate-x-1/2 translate-y-[100%] bg-blue-500 bg-opacity-100 rounded-t-xl p-6 text-center transition-all duration-500 group-hover:translate-y-[-50%] z-20 overflow-hidden">
              <p className="text-black font-medium">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-3xl mr-[38rem] md:text-4xl font-bold text-center mt-16 mb-8 text-blue-900 ">
          Meet Our Community
        </h2>
      </div>
       <TestimonialCard />
        <FactsFigures />
        <NewsSection />
    </section>
  )
}

export default Home