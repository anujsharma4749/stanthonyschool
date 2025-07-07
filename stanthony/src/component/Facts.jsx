import React from "react";
import { FaUsers, FaMedal, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";

const facts = [
  {
    icon: <FaUsers size={22} />,
    value: "50+",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    icon: <FaMedal size={22} />,
    value: "180+",
    img: "https://images.unsplash.com/photo-1571745612875-6b66ea516a0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZGVudHMlMjBwYWx5aW5nJTIwYmFza2V0JTIwYmFsfGVufDB8fDB8fHww",
  },
  {
    icon: <FaChalkboardTeacher size={22} />,
    value: "21",
    img: "https://plus.unsplash.com/premium_photo-1680807868955-805266ef99f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYWNoZXIlMjB3aXRoJTIwZ3JvdXAlMjBvZiUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    icon: <FaGlobe size={22} />,
    value: "95%",
    img: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlYWNoZXIlMjB3aXRoJTIwZ3JvdXAlMjBvZiUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
  },
];

const FactsFigures = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#e8f6f9] py-12 px-4 md:px-20 overflow-hidden">
      
      {/* SVG Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full opacity-10"
          preserveAspectRatio="none"
        >
          <path
            fill="#003D79"
            fillOpacity="1"
            d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,213.3C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
          ></path>
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-10">
        
        {/* Text Block */}
        <div className="bg-[#003D79] text-white p-10 w-full lg:w-[40%] flex items-center rounded-lg shadow-lg opacity-80">
          <p className="text-lg leading-relaxed h-full">
            At BSM, we foster a family friendly atmosphere and create a true
            sense of belonging for all our community members.
          </p>
        </div>

        {/* Right Column with Heading + Grid */}
        <div className="w-full lg:w-[60%] flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold italic text-right text-[#003D79] mb-4">
            Facts & Figures
          </h2>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-2 h-full z-10">
            {facts.map((fact, i) => (
              <div key={i} className="relative group overflow-hidden">
                <img
                  src={fact.img}
                  alt={`fact-${i}`}
                  className="h-[200px] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#003D79] text-white px-4 py-2 flex items-center gap-2 font-semibold">
                  {fact.icon}
                  <span>{fact.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsFigures;
