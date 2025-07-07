import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  Zap,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#002147] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-inter">
      {/* SVG Wave Background */}
      <div className="absolute bottom-0 left-0 w-full h-full z-0 opacity-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#ffffff"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#ffffff"
            opacity="0.5"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#ffffff"
            opacity="0.25"
          ></path>
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-br from-[#003366] to-[#004d99] opacity-90"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Section 1: Logo and Contact Info */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <div className="h-16 w-16 mr-4 flex items-center justify-center rounded-full border-2 border-white text-white font-bold p-1 bg-[#003366]">
                <div className="h-16 w-16 mr-4 flex rounded-full border-2 border-white">
                  <img
                    src="/logos/bs-manila.png"
                    alt="BS Manila Logo"
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
              <span className="text-xl font-bold tracking-wide">
                BRITISH SCHOOL MANILA
              </span>
            </div>

            <div className="space-y-4">
              <p className="flex items-center text-sm">
                <Phone className="w-5 h-5 mr-3 text-blue-300" />
                <span>+63 (2) 8860 4800</span>
              </p>
              <p className="flex items-center text-sm">
                <Mail className="w-5 h-5 mr-3 text-blue-300" />
                <span>Email us</span>
              </p>

              <div className="text-sm space-y-1">
                <h4 className="font-semibold text-blue-300">
                  British School Manila
                </h4>
                <p>36th Street, University Park,</p>
                <p>Bonifacio Global City,</p>
                <p>Taguig City, Metro Manila,</p>
                <p>Philippines</p>
              </div>

              <a
                href="#"
                className="flex items-center text-sm hover:underline transition-all duration-300 hover:text-blue-300"
              >
                <MapPin className="w-5 h-5 mr-3 text-blue-300" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Section 2: Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-500 inline-block">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {[
                "Visit BSM",
                "Work at BSM",
                "News",
                "Social Media",
                "Privacy Policy",
                "Terms of Service",
                "Careers",
                "Alumni Portal",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm flex items-center hover:text-blue-300 transition-colors duration-300 group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-300 transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Connect (Social Media Icons) */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-500 inline-block">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Twitter, color: "#1DA1F2" },
                { icon: Facebook, color: "#1877F2" },
                { icon: Youtube, color: "#FF0000" },
                { icon: Instagram, color: "#E1306C" },
                { icon: Linkedin, color: "#0077B5" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:opacity-90 hover:transform hover:scale-110"
                  style={{ backgroundColor: social.color }}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-3 text-blue-300">
                Subscribe to Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-lg text-gray-800 w-full focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg font-medium transition-colors duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations/Logos */}
        <div className="mt-16 pt-8 border-t border-blue-800 flex flex-wrap items-center justify-center md:justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "CIS", logo: "/logos/cis.png" },
              { name: "FOBISIA", logo: "/logos/fobisia.png" },
              { name: "COBIS", logo: "/logos/cobis.png" },
              { name: "Cambridge", logo: "/logos/cambridge.png" },
              { name: "IB", logo: "/logos/ib.png" },
            ].map((org) => (
              <div
                key={org.name}
                className="bg-blue-900 bg-opacity-50 rounded-xl px-6 py-3 flex flex-col items-center justify-center hover:bg-opacity-70 transition-all duration-300"
              >
                <div className="h-16 w-16 mb-2 flex items-center justify-center">
                  <img
                    src={org.logo}
                    alt={`${org.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium">
                  {org.name} Accredited
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center text-sm bg-blue-900 bg-opacity-50 px-4 py-2 rounded-lg">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            <span>Powered by Finalsite</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} British School Manila. All rights
            reserved.
          </p>
          <p className="mt-2">Educating global citizens since 1976</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
