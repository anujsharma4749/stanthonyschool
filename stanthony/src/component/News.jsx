import React from 'react';
import { FileText } from 'lucide-react';

const NewsSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-bold text-blue-900 italic">News</h1>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transition-colors duration-200">
            <span>ALL NEWS</span>
            <div className="bg-white rounded-full p-1">
              <FileText className="w-4 h-4 text-teal-500" />
            </div>
          </button>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-4 h-96">
          {/* Left Card - Happy summer break */}
          <div className="col-span-12 lg:col-span-4 relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Happy students group photo"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-right mb-2">
                <span className="text-white/70 text-sm font-medium">PTA News</span>
              </div>
              <h3 className="text-white font-bold text-xl leading-tight">
                Happy summer break to all!
              </h3>
            </div>
          </div>

          {/* Middle Card - Battle of the Bands */}
          <div className="col-span-12 lg:col-span-4 relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Battle of the Bands concert"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* FOBISIA Banner */}
            <div className="absolute top-4 left-4 right-4">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold inline-block">
                FOBISIA
              </div>
            </div>
            
            {/* Battle of the Bands Text */}
            <div className="absolute top-16 left-4 right-4">
              <div className="text-yellow-300 font-bold text-lg">
                BATTLE OF
              </div>
              <div className="text-yellow-300 font-bold text-lg">
                THE BANDS
              </div>
              <div className="text-white text-sm mt-1">2026</div>
              <div className="text-white text-xs mt-2">20-24 JANUARY 2026</div>
            </div>
            
            {/* BSM Logo area */}
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">BSM</span>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-right mb-2">
                <span className="text-white/70 text-sm font-medium">VPA News</span>
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">
                Celebrating BSM Summer Concert 2025, BSM Music Ensembles 2025-2026, FOBISIA Battle of the Bands 2026, and CAC on the Walls: Year 9 & Year 11
              </h3>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            {/* Top Right Card - BSM Chamber Orchestra */}
            <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="BSM Chamber Orchestra and Voices"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* BSM Logo */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">BSM</span>
                  </div>
                  <div className="text-white text-sm font-semibold">
                    BRITISH SCHOOL<br />OF MANILA
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute top-16 left-4 right-4">
                <div className="text-white font-bold text-lg">
                  BSM CHAMBER ORCHESTRA
                </div>
                <div className="text-white text-sm">&</div>
                <div className="text-white font-bold text-lg">
                  BSM VOICES
                </div>
                <div className="text-white text-xs mt-2">
                  • FOR 2025-26 •
                </div>
              </div>
            </div>

            {/* Bottom Right Card - Year 7 English Exhibition */}
            <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Year 7 English Exhibition teacher"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-right mb-2">
                  <span className="text-white/70 text-sm font-medium">Senior School News</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">
                  Thank you and farewell! BSM: Year 7 English Exhibition & Humanities Exhibition on Conflict highlights
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;