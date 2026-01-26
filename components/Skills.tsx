'use client';

import { useState } from 'react';
import SkillIcon from './SkillIcon';

const skills = [
  { name: 'HTML', level: 99, color: 'from-orange-500 to-red-500', icon: '🌐', category: 'Frontend' },
  { name: 'CSS', level: 95, color: 'from-blue-500 to-cyan-500', icon: '🎨', category: 'Frontend' },
  { name: 'Tailwind', level: 92, color: 'from-cyan-400 to-blue-500', icon: '💎', category: 'Framework' },
  { name: 'JavaScript', level: 62, color: 'from-yellow-400 to-orange-500', icon: '⚡', category: 'Programming' },
  { name: 'React', level: 85, color: 'from-blue-400 to-cyan-400', icon: '⚛️', category: 'Framework' },
  { name: 'Node.js', level: 78, color: 'from-green-500 to-emerald-500', icon: '🟢', category: 'Backend' },
  { name: 'MySQL', level: 80, color: 'from-blue-600 to-indigo-600', icon: '📊', category: 'Database' },
  { name: 'Figma', level: 80, color: 'from-purple-500 to-pink-500', icon: '🎨', category: 'Design' },
  { name: 'TypeScript', level: 70, color: 'from-blue-600 to-blue-400', icon: '📝', category: 'Programming' },
];

export default function Skills() {
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? skills : skills.slice(0, 3);
  return (
    <section id="skills" className="min-h-screen flex items-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-5 sm:left-10 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-[#8A9A5B]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-5 sm:right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#6b9071]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <p className="text-[#8A9A5B] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 sm:mb-3">MY FAVORITE TOOLS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4">
            Exploring the <span className="text-[#6b9071]">Tools</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-light">Behind My Design & Development</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {displayedSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group relative glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6b9071]/20 overflow-hidden border border-white/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-[#6b9071] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <div className="mb-1 sm:mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 text-white">
                      <SkillIcon name={skill.name} />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">{skill.name}</h3>
                    <p className="text-[#8A9A5B] text-xs font-semibold mt-0.5 sm:mt-1">{skill.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#6b9071]">{skill.level}%</div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-800/50 rounded-full h-2 sm:h-3 overflow-hidden backdrop-blur-sm">
                    <div 
                      className="h-full bg-[#6b9071] rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 h-2 sm:h-3 bg-[#6b9071] rounded-full blur-md opacity-50 transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#6b9071] text-white rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#6b9071]/30"
          >
            {showAll ? 'Show Less' : 'See More'}
          </button>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 text-center px-4">
          <div className="inline-block glass-effect rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 border border-[#8A9A5B]/20">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              <span className="font-bold text-[#6b9071]">Always learning</span> and expanding my tech stack!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
