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
    <section id="projects" className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#8A9A5B]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#6b9071]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-20">
          <p className="text-[#8A9A5B] text-sm font-bold tracking-wider uppercase mb-3">MY WORK</p>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
            Featured <span className="text-[#6b9071]">Projects</span>
          </h2>
          <p className="text-gray-400 text-2xl font-light">Turning Ideas Into Reality</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6b9071]/20 overflow-hidden cursor-pointer border border-white/5"
            >
              <div className="absolute inset-0 bg-[#6b9071] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                  project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                }`}>
                  {project.status}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold border border-white/10 hover:scale-110 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 rounded-xl font-bold bg-[#6b9071] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 text-center"
                  >
                    View Live Site
                  </a>
                ) : (
                  <button className="w-full py-3 rounded-xl font-bold bg-[#6b9071] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                    View Project
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="inline-block px-10 py-5 bg-[#6b9071] text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#6b9071]/30"
          >
            Let's Work Together
          </Link>
        </div>
      </div>
    </section>
  );
}
