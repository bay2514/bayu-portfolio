import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 'bebe',
      title: 'Tabungan Berdua',
      category: 'Full-Stack',
      description: 'Shared savings tracker & date voucher catalog built with React + Vite frontend and Laravel backend API.',
      stack: ['React', 'Laravel', 'Tailwind', 'REST API'],
      github: 'https://github.com/bay2514/bebe',
      featured: true,
      colSpan: 'lg:col-span-2'
    },
    {
      id: 'project-kp',
      title: 'Project-KP Web',
      category: 'Frontend SPA',
      description: 'Interactive web app featuring responsive layouts, custom dashboard modules, and polished visual styling deployed live on Vercel.',
      stack: ['JavaScript', 'HTML/CSS', 'Vite', 'Vercel'],
      demo: 'https://project-kp-one.vercel.app',
      github: 'https://github.com/bay2514/Project-KP',
      featured: true,
      colSpan: 'lg:col-span-1'
    },
    {
      id: 'lppm',
      title: 'LPPM Platform',
      category: 'Institutional Portal',
      description: 'Academic research and community service web portal designed with professional UI tokens and structured information architecture.',
      stack: ['React', 'Vite', 'Tailwind CSS', 'Component System'],
      github: 'https://github.com/bay2514/LPPM',
      featured: true,
      colSpan: 'lg:col-span-1'
    },
    {
      id: 'portfolio',
      title: 'Professional Portfolio v2026',
      category: 'UI/UX & Frontend',
      description: 'Modern developer portfolio crafted with Sunset Amber & Rose palette, glassmorphism, and responsive grid architecture.',
      stack: ['React', 'Tailwind v4', 'Vite', 'Glassmorphism'],
      github: 'https://github.com/bay2514',
      featured: true,
      colSpan: 'lg:col-span-2'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <div className="text-[#1c1917] min-h-screen relative overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background Blobs */}
      <div className="blob-1"></div>
      <div className="blob-2"></div>
      <div className="blob-3"></div>

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-600 to-rose-700 flex items-center justify-center font-bold text-white shadow-lg shadow-rose-500/30">
              BD
            </div>
            <div>
              <span className="font-bold text-stone-900 tracking-tight block">Bayu Dwi Santoso</span>
              <span className="text-xs font-mono font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">Frontend Engineer</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600">
            <a href="#services" className="hover:text-rose-600 transition">Services</a>
            <a href="#projects" className="hover:text-rose-600 transition">Portfolio</a>
            <a href="#stack" className="hover:text-rose-600 transition">Expertise</a>
            <a href="#contact" className="hover:text-rose-600 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://github.com/bay2514" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/70 hover:bg-white border border-amber-200 text-rose-700 transition flex items-center gap-2 shadow-sm backdrop-blur-md">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-white/70 backdrop-blur-md border border-amber-200 text-rose-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 animate-pulse"></span>
              Frontend Engineer & UI Systems Specialist
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
              Building Clean & <span className="hero-gradient-text">High-Impact</span> Web Interfaces.
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
              I specialize in React, Vite, and modern Tailwind design systems. Transforming complex institutional requirements and web apps into pristine, responsive digital experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="px-8 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-600 via-rose-600 to-rose-700 hover:opacity-90 text-white shadow-xl shadow-rose-500/25 transition transform hover:-translate-y-0.5 flex items-center gap-2">
                <span>Explore Portfolio Grid</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </a>
              <a href="#contact" className="px-8 py-4 rounded-xl text-sm font-bold bg-white/70 hover:bg-white backdrop-blur-md border border-amber-200 text-stone-800 shadow-sm transition">
                Start a Conversation
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-amber-200/60 max-w-lg">
              <div>
                <p className="text-2xl font-extrabold text-stone-900">4+</p>
                <p className="text-xs text-stone-500 font-medium">Production Apps</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-stone-900">100%</p>
                <p className="text-xs text-stone-500 font-medium">Responsive Design</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-stone-900">React</p>
                <p className="text-xs text-stone-500 font-medium">& Vite Core</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card-wrapper">
              <div className="glass-card p-8 space-y-6">
                <div className="flex justify-between items-center border-b border-amber-100 pb-4">
                  <span className="font-mono text-xs font-semibold text-stone-500">developer.config.json</span>
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-amber-400 block shadow-sm"></span>
                    <span className="w-3 h-3 rounded-full bg-rose-400 block shadow-sm"></span>
                    <span className="w-3 h-3 rounded-full bg-rose-600 block shadow-sm"></span>
                  </div>
                </div>
                <div className="font-mono text-xs space-y-3 text-stone-700 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-amber-100 shadow-inner">
                  <p><span className="text-amber-600 font-bold">const</span> <span className="text-rose-600 font-bold">profile</span> = {'{'}</p>
                  <p className="pl-4">name: <span className="text-rose-700 font-semibold">"Bayu Dwi Santoso"</span>,</p>
                  <p className="pl-4">role: <span className="text-rose-700 font-semibold">"Frontend Engineer"</span>,</p>
                  <p className="pl-4">focus: <span className="text-amber-700 font-semibold">"UI Systems & SPAs"</span>,</p>
                  <p className="pl-4">stack: [<span className="text-amber-700 font-semibold">"React"</span>, <span className="text-amber-700 font-semibold">"Tailwind"</span>, <span className="text-amber-700 font-semibold">"Laravel"</span>],</p>
                  <p className="pl-4">github: <span className="text-rose-600 font-semibold">"@bay2514"</span></p>
                  <p>{'}'};</p>
                </div>
                <div className="pt-2 flex justify-between items-center text-xs text-stone-500 font-medium">
                  <span>Status: Available for Work</span>
                  <span className="text-rose-600 font-bold">2026 Edition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Capabilities Bento Grid */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto border-t border-amber-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">Core Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">Engineered for Performance & Scale</h2>
          <p className="text-sm text-stone-600">Delivering exceptional web interfaces with robust component architecture.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card-wrapper">
            <div className="glass-card p-8 space-y-4 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-rose-500/20">01</div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Frontend Architecture</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Building modular, maintainable single-page applications using React, Vite, and component-driven development practices.
                </p>
              </div>
            </div>
          </div>
          <div className="glass-card-wrapper">
            <div className="glass-card p-8 space-y-4 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-rose-600/20">02</div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Design Systems & UI</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Translating complex mockups into polished Tailwind CSS code with glassmorphism, precise tokens, and smooth interactions.
                </p>
              </div>
            </div>
          </div>
          <div className="glass-card-wrapper">
            <div className="glass-card p-8 space-y-4 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-amber-600/20">03</div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Full-Stack Integration</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Seamlessly connecting React frontends with Laravel backend APIs, handling authentication, data binding, and state management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Card Grid */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-amber-200/60">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-sm font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent block mb-2">Portfolio Grid</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">Featured Repositories & Work</h2>
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/70 backdrop-blur-md p-1.5 rounded-2xl border border-amber-200 shadow-sm">
            {['all', 'full-stack', 'frontend', 'institutional'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md shadow-rose-500/20' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`glass-card-wrapper ${project.colSpan || ''}`}>
              <div className="glass-card p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100/80 text-amber-900 border border-amber-200 backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-stone-500 font-semibold">bay2514/{project.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">{project.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs text-stone-600">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-white/70 border border-amber-100 backdrop-blur-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:opacity-90 text-white font-semibold text-xs transition flex items-center justify-center gap-2 shadow-md shadow-rose-500/20">
                        <span>Live Demo</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer" className={`${project.demo ? 'px-4' : 'flex-1'} py-3 rounded-xl bg-white/70 hover:bg-white backdrop-blur-sm border border-amber-200 text-stone-800 font-semibold text-xs transition flex items-center justify-center gap-2`}>
                      <span>GitHub</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack / Arsenal */}
      <section id="stack" className="py-20 px-6 max-w-7xl mx-auto border-t border-amber-200/60">
        <div className="mb-12">
          <span className="text-sm font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent block mb-2">Technical Proficiency</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">Core Stack & Technologies</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'React', level: 'Advanced', icon: '⚛️' },
            { name: 'Vite', level: 'Expert', icon: '⚡' },
            { name: 'Tailwind CSS', level: 'Master', icon: '🎨' },
            { name: 'JavaScript / ES6+', level: 'Expert', icon: '💻' },
            { name: 'Laravel API', level: 'Proficient', icon: '🚀' },
            { name: 'Git & GitHub', level: 'Advanced', icon: '🛠️' },
          ].map((tech, index) => (
            <div key={index} className="glass-card-wrapper">
              <div className="glass-card p-6 text-center space-y-2">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="font-bold text-stone-900 text-sm">{tech.name}</h3>
                <p className="text-xs font-mono text-rose-600 font-semibold">{tech.level}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-amber-200/60">
        <div className="glass-card-wrapper">
          <div className="glass-card p-12 sm:p-16 text-center space-y-8 bg-gradient-to-br from-white/95 via-amber-50/40 to-rose-50/40">
            <span className="text-sm font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent block">Get In Touch</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">Ready to build something exceptional?</h2>
            <p className="text-base text-stone-600 max-w-xl mx-auto leading-relaxed">
              Whether you have an exciting frontend engineering role, a freelance project, or want to collaborate on open-source repositories—my inbox is open.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="https://github.com/bay2514" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-600 via-rose-600 to-rose-700 hover:opacity-90 text-white transition shadow-xl shadow-rose-500/25">
                GitHub Profile (@bay2514)
              </a>
              <a href="mailto:bayu@example.com" className="px-8 py-4 rounded-xl text-sm font-bold bg-white/70 hover:bg-white backdrop-blur-md border border-amber-200 text-stone-800 shadow-sm transition">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-amber-200/60 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 font-mono">
        <p>&copy; 2026 Bayu Dwi Santoso. Engineered with precision & passion.</p>
        <p className="mt-4 sm:mt-0">Built via Hermes Agent</p>
      </footer>
    </div>
  );
}
