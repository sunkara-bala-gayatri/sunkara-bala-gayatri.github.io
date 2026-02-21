import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, MousePointer2, Mail } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Final Year CSE Student & Aspiring Developer";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex(index + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-8"
                >
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                    </span>
                    Open for Internships 2026
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-outfit font-extrabold mb-6 leading-tight"
                >
                    Hi, I'm <br />
                    <span className="bg-gradient-to-r from-primary-500 via-accent to-primary-500 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                        Sunkara Bala Gayatri
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-12 h-8"
                >
                    {text}<span className="animate-pulse border-r-2 border-primary-500 h-full inline-block ml-1" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-4 rounded-2xl bg-primary-500 text-white font-bold flex items-center hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/25"
                    >
                        View My Work
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </a>
                    <a
                        href="/resume.pdf"
                        className="px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-slate-800 flex items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                    >
                        <Download className="mr-2" size={20} />
                        Download CV
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20 flex justify-center space-x-8 text-slate-400"
                >
                    <a href="https://github.com/sunkara-bala-gayatri" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/sunkara-bala-gayatri-5865493b2" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:sunkarabalagayatri@gmail.com" className="hover:text-primary-500 transition-colors">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                <MousePointer2 size={32} />
            </div>
        </section>
    );
};

export default Hero;
