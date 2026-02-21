import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-2xl font-outfit font-extrabold">
                        <span className="bg-gradient-to-r from-primary-500 to-accent bg-clip-text text-transparent">
                            BG.
                        </span>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        &copy; {new Date().getFullYear()} Sunkara Bala Gayatri. All rights reserved.
                    </p>

                    <div className="flex gap-8 text-sm font-medium text-slate-500">
                        <a href="#about" className="hover:text-primary-500 transition-colors">About</a>
                        <a href="#projects" className="hover:text-primary-500 transition-colors">Work</a>
                        <a href="#contact" className="hover:text-primary-500 transition-colors">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
