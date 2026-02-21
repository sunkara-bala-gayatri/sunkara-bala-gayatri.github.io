import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'GitHub', href: '#github' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                isScrolled
                    ? 'glass py-3 border-slate-200/50 dark:border-slate-800/50 shadow-lg shadow-indigo-500/5'
                    : 'bg-transparent py-5 border-transparent'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#home" className="text-2xl font-outfit font-extrabold tracking-tight group">
                    <span className="bg-gradient-to-r from-primary-500 to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary-500 transition-all duration-300">
                        BG.
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="flex items-center space-x-4 pl-4 border-l border-slate-200 dark:border-slate-800">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors text-slate-600 dark:text-slate-400"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <a
                            href="https://github.com/sunkara-bala-gayatri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors text-slate-600 dark:text-slate-400"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-5 py-2 rounded-full bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/25 active:scale-95"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors text-slate-600 dark:text-slate-400"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-slate-600 dark:text-slate-400"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass border-t border-slate-200/50 dark:border-slate-800/50 animate-fade-in">
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-primary-500"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full py-3 rounded-xl bg-primary-500 text-white text-center font-semibold shadow-lg shadow-primary-500/25"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
