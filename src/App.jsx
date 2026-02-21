import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import BlogSection from './components/BlogSection';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { Reveal } from './components/Reveal';
import { usePortfolioData } from './hooks/usePortfolioData';
import { RefreshCw, Clock } from 'lucide-react';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const { profile, repos, blogs, experience, loading, refresh, lastUpdated } = usePortfolioData();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const timeSinceUpdate = lastUpdated ? Math.floor((Date.now() - lastUpdated) / 60000) : 0;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-primary-500/30">
            <CustomCursor />
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

            {/* Sync Controls */}
            <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 glass p-3 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl">
                <button
                    onClick={refresh}
                    disabled={loading}
                    className={`p-2 rounded-xl transition-all ${loading ? 'animate-spin text-primary-500' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-primary-500'}`}
                    title="Sync Data"
                >
                    <RefreshCw size={20} />
                </button>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 pr-2">
                    <Clock size={12} className="text-primary-500" />
                    {loading ? 'Syncing...' : `Updated ${timeSinceUpdate}m ago`}
                </div>
            </div>

            <main>
                <Hero />
                <Reveal width="100%"><About /></Reveal>
                <Reveal width="100%"><Skills /></Reveal>
                <Reveal width="100%"><Experience items={experience} loading={loading} /></Reveal>
                <Reveal width="100%"><Projects repos={repos} loading={loading} /></Reveal>
                <Reveal width="100%"><BlogSection blogs={blogs} loading={loading} /></Reveal>
                <Reveal width="100%"><GitHubSection user={profile} repos={repos} loading={loading} /></Reveal>
                <Reveal width="100%"><Contact /></Reveal>
            </main>
            <Footer />
        </div>
    );
}

export default App;
