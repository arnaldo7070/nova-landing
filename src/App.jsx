import React, { useState, useEffect } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  // Scroll listener for Back-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className={`${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-white text-slate-900'} min-h-screen selection:bg-emerald-500 selection:text-slate-950 font-sans antialiased overflow-x-hidden transition-colors duration-300`}>
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-emerald-600/20 via-cyan-500/20 to-indigo-600/10 blur-[120px] pointer-events-none -z-10" />

      {/* 1. Navigation Bar */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl ${darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-white/80 border-slate-200'} border-b transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="font-black text-slate-950 text-xl">N</span>
            </div>
            <span className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              NOVA<span className="text-emerald-500">.</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            <a href="#features" className="hover:text-emerald-500 transition-colors">Features</a>
            <a href="#about" className="hover:text-emerald-500 transition-colors">Platform</a>
            <a href="#solutions" className="hover:text-emerald-500 transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-emerald-500 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-emerald-500 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full border transition-colors ${darkMode ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button 
              onClick={() => setModalOpen(true)}
              className={`text-sm font-medium px-4 py-2 transition-colors ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setModalOpen(true)}
              className="relative group overflow-hidden rounded-full p-px font-semibold text-sm"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-300 group-hover:opacity-90" />
              <span className={`relative block px-5 py-2.5 rounded-full ${darkMode ? 'bg-slate-950 text-white group-hover:bg-opacity-0 group-hover:text-slate-950' : 'bg-white text-slate-950 group-hover:bg-opacity-0 group-hover:text-white'} transition-all duration-300`}>
                Get Started Free
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${darkMode ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-700'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className={`${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'} md:hidden border-b px-6 py-6 space-y-4 shadow-2xl`}>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className={`block font-medium ${darkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'}`}>Features</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className={`block font-medium ${darkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'}`}>Platform</a>
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className={`block font-medium ${darkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'}`}>Solutions</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className={`block font-medium ${darkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'}`}>Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className={`block font-medium ${darkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'}`}>FAQ</a>
            <div className={`pt-4 border-t ${darkMode ? 'border-slate-800' : 'border-slate-200'} flex flex-col gap-3`}>
              <button onClick={() => { setMobileMenuOpen(false); setModalOpen(true); }} className={`w-full py-2.5 text-center rounded-xl font-medium ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-900'}`}>Sign In</button>
              <button onClick={() => { setMobileMenuOpen(false); setModalOpen(true); }} className="w-full py-2.5 text-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-950 font-bold">Get Started Free</button>
            </div>
          </div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold uppercase tracking-wider mb-8 shadow-inner animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          Introducing NOVA 2.0 AI Core
        </div>
        <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'} max-w-4xl mx-auto leading-[1.1]`}>
          Build Better. <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">Work Smarter.</span>
        </h1>
        <p className={`mt-6 text-lg md:text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto leading-relaxed`}>
          NOVA is an AI-powered productivity platform that helps teams manage projects, automate repetitive tasks, and collaborate with superhuman efficiency.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-950 font-bold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all duration-200"
          >
            Start Free Trial — No Credit Card
          </button>
          <button 
            onClick={() => setModalOpen(true)}
            className={`w-full sm:w-auto px-8 py-4 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-white hover:bg-slate-800' : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'} font-semibold text-base transition-all duration-200`}
          >
            Watch Interactive Demo
          </button>
        </div>

        {/* Hero Visual Dashboard Mockup */}
        <div className={`mt-16 relative rounded-2xl border ${darkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-slate-50'} p-2 shadow-2xl backdrop-blur-xl`}>
          <div className={`rounded-xl overflow-hidden border ${darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-white'} p-6`}>
            <div className={`flex items-center justify-between pb-6 border-b ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="text-xs text-slate-400 font-mono">nova-workspace.app/dashboard</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-emerald-500 font-medium">AI Active</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 text-left">
              {[
                { title: "Sprint Velocity", val: "+142%", sub: "vs last month", bar: "w-4/5" },
                { title: "Tasks Automated", val: "18,420", sub: "Hours saved", bar: "w-full" },
                { title: "AI Assistant Load", val: "99.9%", sub: "Accuracy", bar: "w-[99%]" }
              ].map((card, i) => (
                <div key={i} className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{card.title}</p>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mt-2`}>{card.val} <span className="text-xs text-emerald-500 font-normal">{card.sub}</span></p>
                  <div className={`mt-4 h-2 w-full ${darkMode ? 'bg-slate-800' : 'bg-slate-200'} rounded-full overflow-hidden`}>
                    <div className={`h-full bg-gradient-to-r from-emerald-500 to-cyan-400 ${card.bar} rounded-full`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trusted By / Company Logos */}
      <section className={`py-12 border-y ${darkMode ? 'border-slate-900 bg-slate-950/50' : 'border-slate-200 bg-slate-50/50'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-8">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            {['Vercel', 'Stripe', 'Linear', 'Notion', 'Figma', 'Retool'].map((brand, i) => (
              <span key={i} className={`text-xl md:text-2xl font-black tracking-tighter ${darkMode ? 'text-slate-300' : 'text-slate-700'} font-mono`}>
                {brand.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Section (Min 6) */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">Core Capabilities</h2>
          <p className={`text-3xl md:text-5xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Engineered for Maximum Impact</p>
          <p className={`mt-4 text-base md:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Everything your team needs to plan, execute, and scale faster than ever before.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Smart Task Automation", desc: "Automate repetitive workflows and ticket routing using contextual AI models.", icon: "⚡" },
            { title: "Predictive Analytics", desc: "Forecast project bottlenecks and resource crunches before they impact deadlines.", icon: "📈" },
            { title: "Real-time Collaboration", desc: "Multi-cursor editing, instant document syncing, and frictionless team chat.", icon: "👥" },
            { title: "Enterprise Security", desc: "Bank-grade encryption, SOC2 compliance, and granular role-based access control.", icon: "🔒" },
            { title: "Custom Workflow Builder", desc: "Drag-and-drop builder to construct bespoke automations without writing code.", icon: "🛠️" },
            { title: "Deep Integrations", desc: "Connect seamlessly with GitHub, Jira, Slack, Google Workspace, and 100+ tools.", icon: "🔗" }
          ].map((feature, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border transition-all duration-300 group ${darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/80' : 'bg-slate-50 border-slate-200 hover:border-emerald-500/50 hover:bg-white shadow-sm'}`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-2`}>{feature.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Product / About Section */}
      <section id="about" className={`py-24 px-6 border-y ${darkMode ? 'bg-slate-900/20 border-slate-900' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3 block">Next-Gen Platform</span>
            <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} leading-tight`}>Built for modern engineering & product teams.</h2>
            <p className={`mt-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
              NOVA bridges the gap between raw ideation and flawless execution. By embedding intelligent context-aware automation directly into your everyday workspace, we eliminate administrative overhead so your team can focus on what matters most.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Instant AI summarization of meeting action items",
                "Automated PR description generation and code reviews",
                "Unified timeline view across multi-department squads"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-bold">✓</div>
                  <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative rounded-2xl border ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white shadow-xl'} p-8`}>
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-950 font-bold text-xs shadow-lg">
              99.8% Efficiency Boost
            </div>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Autonomous Workflow Execution</h3>
            <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Watch how NOVA transforms an unstructured product requirement document into scheduled sprints and code tasks in seconds.</p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 space-y-2">
              <p>&gt; nova analyze --input prd-v2.pdf</p>
              <p className="text-slate-400">Analyzing requirements... 24 user stories extracted.</p>
              <p>&gt; nova assign --auto-load-balance</p>
              <p className="text-cyan-400">Success! Sprints optimized across 4 teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">Simple Process</h2>
          <p className={`text-3xl md:text-5xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>How NOVA Works in 3 Steps</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Connect Your Stack", desc: "Link your GitHub, Jira, Slack, and cloud tools securely in under two minutes." },
            { step: "02", title: "AI Model Training", desc: "NOVA learns your team's unique velocity, coding standards, and project structure." },
            { step: "03", title: "Execute & Scale", desc: "Let AI handle routine updates while your team focuses on high-value creation." }
          ].map((item, idx) => (
            <div key={idx} className={`relative p-8 rounded-2xl border ${darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className={`text-5xl font-black ${darkMode ? 'text-slate-800' : 'text-slate-200'} absolute top-6 right-6 font-mono`}>{item.step}</span>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-3 mt-4`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Statistics Section */}
      <section className="py-20 bg-emerald-500/10 border-y border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "99.9%", label: "Platform Uptime" },
            { stat: "3.5x", label: "Average ROI" },
            { stat: "15M+", label: "Tasks Automated" },
            { stat: "120+", label: "Countries Served" }
          ].map((s, idx) => (
            <div key={idx} className="group hover:scale-105 transition-transform duration-300">
              <p className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent group-hover:animate-pulse">{s.stat}</p>
              <p className={`text-sm mt-2 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Solutions / Use Cases */}
      <section id="solutions" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">Tailored Use Cases</h2>
          <p className={`text-3xl md:text-5xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Built for Every Department</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Engineering Teams", desc: "Automate code reviews, sprint planning, and bug triage with integrated LLM agents.", tag: "Engineering" },
            { title: "Product Managers", desc: "Generate exhaustive PRDs, user story maps, and stakeholder release notes instantly.", tag: "Product" },
            { title: "Executive Leadership", desc: "Get real-time KPI dashboards, risk assessment reports, and predictive financial insights.", tag: "Leadership" }
          ].map((sol, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border flex flex-col justify-between transition-colors ${darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/50' : 'bg-slate-50 border-slate-200 hover:border-cyan-500/50 shadow-sm'}`}>
              <div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-semibold uppercase tracking-wider">{sol.tag}</span>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mt-4 mb-3`}>{sol.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{sol.desc}</p>
              </div>
              <button onClick={() => setModalOpen(true)} className="mt-8 text-sm font-semibold text-emerald-500 hover:text-emerald-400 flex items-center gap-2">
                Explore Solution →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Testimonials (Min 3) */}
      <section className={`py-24 px-6 border-y ${darkMode ? 'bg-slate-900/20 border-slate-900' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">Testimonials</h2>
            <p className={`text-3xl md:text-5xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Loved by Fast-Growing Teams</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "NOVA cut our sprint planning time by 75%. It feels like having an extra senior PM on every single project.", author: "Sarah Jenkins", role: "VP of Engineering, ScaleUp" },
              { quote: "The automation capabilities are unmatched. Our engineers spend 4 fewer hours in status meetings every week.", author: "Marcus Vance", role: "Head of Product, FinTech Labs" },
              { quote: "Implementation took literally 5 minutes. The AI contextual awareness is lightyears ahead of any other tool we've tried.", author: "Elena Rostova", role: "CTO, CloudScale AI" }
            ].map((t, idx) => (
              <div key={idx} className={`p-8 rounded-2xl border flex flex-col justify-between ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <p className={`text-sm italic leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>"{t.quote}"</p>
                <div>
                  <p className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t.author}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Pricing (Min 3 Plans with Monthly/Annual Toggle) */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">Transparent Pricing</h2>
          <p className={`text-3xl md:text-5xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Simple Plans for Teams of All Sizes</p>
          
          {/* Toggle */}
          <div className={`mt-8 inline-flex items-center gap-3 p-1 rounded-full border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${!isAnnual ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-500'}`}
            >
              Monthly Billing
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${isAnnual ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-500'}`}
            >
              Annual Billing <span className="text-[10px] text-cyan-950 bg-cyan-300 px-1.5 py-0.5 rounded ml-1 font-extrabold">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "Starter", 
              priceMonthly: "$29", 
              priceAnnual: "$23", 
              desc: "Perfect for small teams and early-stage startups getting started with AI productivity.",
              features: ["Up to 10 team members", "Basic AI task automation", "Standard integrations", "Community support"]
            },
            { 
              name: "Professional", 
              priceMonthly: "$79", 
              priceAnnual: "$63", 
              desc: "Ideal for growing organizations requiring advanced automation and analytics.",
              features: ["Up to 50 team members", "Advanced predictive analytics", "Unlimited integrations", "Priority 24/7 support", "Custom workflow builder"],
              popular: true
            },
            { 
              name: "Enterprise", 
              priceMonthly: "$199", 
              priceAnnual: "$159", 
              desc: "Maximum security, dedicated support, and custom AI models for large enterprises.",
              features: ["Unlimited team members", "Dedicated AI model training", "SOC2 & HIPAA Compliance", "Dedicated Account Manager", "Custom SLAs"]
            }
          ].map((plan, idx) => (
            <div key={idx} className={`relative p-8 rounded-2xl border flex flex-col justify-between ${plan.popular ? (darkMode ? 'bg-slate-900/90 border-emerald-500 shadow-xl shadow-emerald-500/10' : 'bg-white border-emerald-500 shadow-xl') : (darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-200')}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-2`}>{plan.name}</h3>
                <p className="text-slate-400 text-xs mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{isAnnual ? plan.priceAnnual : plan.priceMonthly}</span>
                  <span className="text-slate-400 text-xs">/ user / month</span>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <div key={i} className={`flex items-center gap-3 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      <span className="text-emerald-500 font-bold">✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setModalOpen(true)}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${plan.popular ? 'bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-950 hover:opacity-90' : (darkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-200 text-slate-900 hover:bg-slate-300')}`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section (Min 5 Questions with Accordion) */}
      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">Got Questions?</h2>
          <p className={`text-3xl md:text-5xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Frequently Asked Questions</p>
        </div>
        <div className="space-y-4">
          {[
            { q: "How secure is our company data with NOVA?", a: "We adhere to strict SOC2 Type II and GDPR compliance standards. All data is encrypted in transit and at rest using AES-256 encryption." },
            { q: "Can we connect NOVA with our existing Jira and GitHub setup?", a: "Yes! NOVA offers native, two-way sync integrations with Jira, GitHub, GitLab, Slack, Notion, and over 100 other tools." },
            { q: "How long does it take to set up NOVA for a team of 50?", a: "Most teams are fully onboarded and running automated sprints within 15 to 30 minutes. Our automated parser handles the heavy lifting." },
            { q: "Is there a free trial available?", a: "Yes, we offer a 14-day free trial on all plans with full access to advanced features, no credit card required." },
            { q: "How does the AI pricing and usage work?", a: "All plans include generous standard AI token allocations that cover 99% of daily team workflows. Custom enterprise tiers are available for heavy custom model training." }
          ].map((faq, idx) => (
            <div key={idx} className={`rounded-xl border overflow-hidden transition-all ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <button 
                onClick={() => toggleFaq(idx)}
                className={`w-full px-6 py-5 text-left font-semibold ${darkMode ? 'text-white hover:bg-slate-900/80' : 'text-slate-900 hover:bg-slate-100'} flex items-center justify-between transition-colors`}
              >
                <span>{faq.q}</span>
                <span className={`transform transition-transform duration-200 text-emerald-500 font-bold ${activeFaq === idx ? 'rotate-45' : ''}`}>+</span>
              </button>
              {activeFaq === idx && (
                <div className={`px-6 pb-5 text-sm leading-relaxed border-t pt-4 ${darkMode ? 'text-slate-400 border-slate-800/50' : 'text-slate-600 border-slate-200'}`}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 12. Final CTA & Newsletter Validation */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <div className={`p-12 md:p-16 rounded-3xl border relative overflow-hidden shadow-2xl ${darkMode ? 'bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 border-slate-800' : 'bg-gradient-to-b from-slate-100 via-white to-slate-50 border-slate-200'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
          <h2 className={`text-3xl md:text-5xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'} tracking-tight mb-4`}>Ready to Transform Your Workflow?</h2>
          <p className={`max-w-xl mx-auto mb-8 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Join over 10,000 engineering and product teams building better and working smarter with NOVA.</p>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              required
              placeholder="Enter your work email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`flex-1 px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
            />
            <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-950 font-bold text-sm hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-emerald-500 mt-3 font-medium animate-fadeIn">Thanks for subscribing! Check your email for your access link.</p>
          )}
        </div>
      </section>

      {/* 13. Footer */}
      <footer className={`border-t py-16 px-6 ${darkMode ? 'border-slate-900 bg-slate-950' : 'border-slate-200 bg-slate-100'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center font-black text-slate-950">N</div>
              <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>NOVA AI</span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed mb-6">Build Better. Work Smarter. The modern AI productivity platform designed for elite product and engineering squads.</p>
            <p className="text-slate-500 text-xs">© 2026 NOVA Technologies, Inc. All rights reserved.</p>
          </div>
          <div>
            <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Product</p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#features" className="hover:text-emerald-500">Features</a></li>
              <li><a href="#solutions" className="hover:text-emerald-500">Solutions</a></li>
              <li><a href="#pricing" className="hover:text-emerald-500">Pricing</a></li>
              <li><a href="#about" className="hover:text-emerald-500">Changelog</a></li>
            </ul>
          </div>
          <div>
            <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Resources</p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#faq" className="hover:text-emerald-500">Documentation</a></li>
              <li><a href="#faq" className="hover:text-emerald-500">API Reference</a></li>
              <li><a href="#faq" className="hover:text-emerald-500">Guides</a></li>
              <li><a href="#faq" className="hover:text-emerald-500">Support</a></li>
            </ul>
          </div>
          <div>
            <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Company</p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-emerald-500">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Back-to-Top Button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 p-3 rounded-full border shadow-xl hover:scale-110 transition-all duration-300 ${darkMode ? 'bg-slate-900/90 border-slate-700 text-emerald-400 hover:bg-slate-800' : 'bg-white/90 border-slate-300 text-emerald-600 hover:bg-slate-100'}`}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      {/* Interactive Demo / Auth Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className={`relative w-full max-w-md rounded-2xl border p-8 shadow-2xl ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-emerald-500 text-lg font-bold"
            >
              ✕
            </button>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center mx-auto mb-3 font-black text-slate-950 text-xl">N</div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Welcome to NOVA</h3>
              <p className="text-xs text-slate-400 mt-1">Enter your email to access your workspace</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Workspace access granted!'); setModalOpen(false); }} className="space-y-4">
              <div>
                <label className={`block text-xs font-medium mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-700'}`}>Work Email</label>
                <input type="email" required placeholder="name@company.com" className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-950 font-bold text-sm hover:opacity-95 transition-opacity">
                Continue to Dashboard
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}