'use client';

import Link from 'next/link';

const projects = [
  {
    title: 'Movie Explorer',
    description: 'Interactive movie discovery app with search, filtering, and detailed movie information using TMDB API',
    tech: ['React', 'Tailwind', 'JavaScript'],
    gradient: 'from-red-600 to-pink-600',
    status: 'Live',
    link: 'https://movie-explorer-liart-eta.vercel.app/'
  },
  {
    title: 'To-Do List',
    description: 'Simple and efficient task management application with add, edit, delete, and mark complete functionality',
    tech: ['JavaScript', 'HTML', 'Tailwind'],
    gradient: 'from-green-600 to-emerald-600',
    status: 'Live',
    link: 'https://to-do-rosy-alpha.vercel.app/'
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    gradient: 'from-blue-600 to-cyan-600',
    status: 'Live',
    link: 'https://e-commerce-beta-ten-92.vercel.app/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-20 left-5 sm:left-10 md:left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#8A9A5B]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-5 sm:right-10 md:right-20 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-[#6b9071]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <p className="text-[#8A9A5B] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 sm:mb-3">MY WORK</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4">
            Featured <span className="text-[#6b9071]">Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-light">Turning Ideas Into Reality</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-[#6b9071] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Glass effect overlay */}
              <div className="relative glass-effect border border-white/10 group-hover:border-white/20 transition-all duration-500 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 h-full flex flex-col">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-[#6b9071] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Status badge with pulse animation */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                  <span className={`relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold backdrop-blur-md ${
                    project.status === 'Live' ? 'bg-green-500/30 text-green-300 border border-green-400/60' :
                    project.status === 'In Progress' ? 'bg-yellow-500/30 text-yellow-300 border border-yellow-400/60' :
                    'bg-blue-500/30 text-blue-300 border border-blue-400/60'
                  }`}>
                    {project.status}
                    {project.status === 'Live' && (
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></span>
                    )}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Project icon/emoji area */}
                  <div className="mb-4 sm:mb-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#6b9071] opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mb-3">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech stack with enhanced styling */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={tech} 
                        className="relative px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/5 backdrop-blur-sm text-gray-300 rounded-lg text-xs sm:text-sm font-semibold border border-white/10 hover:border-white/30 hover:bg-white/10 hover:scale-110 hover:text-white transition-all duration-300 group/tech overflow-hidden"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        <span className="relative z-10">{tech}</span>
                        <span className="absolute inset-0 bg-[#6b9071] opacity-0 group-hover/tech:opacity-20 transition-opacity duration-300"></span>
                      </span>
                    ))}
                  </div>

                  {/* Enhanced button */}
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative w-full py-3 sm:py-3.5 rounded-xl font-bold text-white text-sm sm:text-base overflow-hidden transition-all duration-300"
                    >
                      {/* Button background */}
                      <div className="absolute inset-0 bg-[#6b9071] opacity-90 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover/btn:border-white/50 transition-all duration-300"></div>
                      
                      {/* Button content */}
                      <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:gap-3 transition-all duration-300">
                        <span>View Live Site</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      
                      {/* Ripple effect on click */}
                      <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-active/btn:scale-100 opacity-0 group-active/btn:opacity-100 transition-all duration-300"></div>
                    </a>
                  ) : (
                    <button className="group/btn relative w-full py-3 sm:py-3.5 rounded-xl font-bold text-white text-sm sm:text-base overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#6b9071] to-[#8A9A5B] hover:from-[#8A9A5B] hover:to-[#6b9071]">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:gap-3 transition-all duration-300">
                        <span>View Project</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                  )}
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <Link 
            href="/contact" 
            className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-[#6b9071] text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#6b9071]/30"
          >
            Let's Work Together
          </Link>
        </div>
      </div>
    </section>
  );
}
