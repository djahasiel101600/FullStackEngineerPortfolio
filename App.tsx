
import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Download, 
  Menu, 
  X,
  ChevronRight,
  Code2,
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';
import { PROFILE, SKILLS, PROJECTS } from './constants';
import { AIChatAssistant } from './components/AIChatAssistant';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProjects = PROJECTS.filter(p => activeTab === 'all' || p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Terminal className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-slate-100 tracking-tight">
                {PROFILE.name.split(' ')[0]}<span className="text-indigo-500">.dev</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href={PROFILE.resumeUrl}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
              >
                <Download size={16} /> Resume
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-slate-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-4">
              {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-indigo-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href={PROFILE.resumeUrl} className="bg-indigo-600 text-white p-3 rounded-lg text-center font-medium">
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
              <Sparkles size={14} /> Available for new opportunities
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 leading-tight">
              Building the next generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Full Stack</span> apps.
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              {PROFILE.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20">
                View My Work <ChevronRight size={20} />
              </a>
              <div className="flex items-center gap-3 px-2">
                <a href={PROFILE.github} className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-all"><Github size={22} /></a>
                <a href={PROFILE.linkedin} className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-all"><Linkedin size={22} /></a>
                <a href={`mailto:${PROFILE.email}`} className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-all"><Mail size={22} /></a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <div className="flex items-center gap-1"><MapPin size={16} /> {PROFILE.location}</div>
              <div className="w-1 h-1 rounded-full bg-slate-700"></div>
              <div>Specialized in Distributed Systems</div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] -z-10 rounded-full"></div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-1"></div>
                <div className="text-[10px] text-slate-500 font-mono">portfolio.tsx</div>
              </div>
              <pre className="text-indigo-400 font-mono text-sm leading-relaxed p-4 overflow-hidden">
                <code>{`const developer = {
  name: "${PROFILE.name}",
  role: "${PROFILE.role}",
  skills: [
    "Next.js", "Go", "Kubernetes",
    "PostgreSQL", "Terraform"
  ],
  status: "Optimizing code...",
  readyForHire: true
};

function renderSkills() {
  return developer.skills.map(skill => (
    <Badge key={skill}>{skill}</Badge>
  ));
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-100">Tech Stack</h2>
            <p className="text-slate-400">Tools and technologies I use to bring ideas to life</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SKILLS.map((skill, idx) => (
              <div 
                key={idx} 
                className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all flex flex-col items-center gap-3 text-center"
              >
                <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{skill.icon}</div>
                <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold">{skill.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
              <p className="text-slate-400 max-w-lg">A selection of my best work, ranging from complex backends to interactive frontends.</p>
            </div>
            <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl">
              {['all', 'frontend', 'backend', 'fullstack'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                    activeTab === tab ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.github && <a href={project.github} className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white transition-all"><Github size={18} /></a>}
                      <a href={project.link} className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white transition-all"><ExternalLink size={18} /></a>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-full font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-[40px] p-8 md:p-16 text-center space-y-8">
          <h2 className="text-4xl font-bold text-slate-100">Let's build something epic.</h2>
          <p className="text-xl text-slate-400">
            Currently open to full-time roles and high-impact freelance projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href={`mailto:${PROFILE.email}`} className="w-full sm:w-auto bg-white text-slate-950 px-10 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
              <Mail size={20} /> Say Hello
            </a>
            <a href={PROFILE.linkedin} className="w-full sm:w-auto bg-slate-900 text-white border border-slate-800 px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="text-indigo-500" size={20} />
            <span className="text-slate-500 text-sm">© {new Date().getFullYear()} {PROFILE.name}. Built with React & Gemini.</span>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href={PROFILE.github} className="hover:text-white transition-colors">GitHub</a>
            <a href={PROFILE.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#home" className="hover:text-white transition-colors">Back to Top</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant Floating Button */}
      <AIChatAssistant />
    </div>
  );
};

export default App;
