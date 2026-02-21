import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -z-10 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto glass rounded-[3rem] p-8 md:p-16 border border-primary-500/10">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-outfit font-extrabold mb-6 leading-tight">
                                Let's Build Something <br />
                                <span className="bg-gradient-to-r from-primary-500 to-accent bg-clip-text text-transparent">Amazing</span> Together.
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
                                I'm currently seeking internship opportunities and entry-level developer roles. Whether you have a question or just want to say hi, my inbox is always open!
                            </p>

                            <div className="space-y-6 mb-12">
                                <a href="mailto:sunkarabalagayatri@gmail.com" className="flex items-center group">
                                    <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all mr-6">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Email Me</div>
                                        <div className="text-lg font-medium">sunkarabalagayatri@gmail.com</div>
                                    </div>
                                </a>
                                <a href="tel:+919550728493" className="flex items-center group">
                                    <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all mr-6">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Call Me</div>
                                        <div className="text-lg font-medium">+91 95507 28493</div>
                                    </div>
                                </a>
                            </div>

                            <div className="flex gap-4">
                                {[
                                    { icon: <Github size={20} />, href: "https://github.com/sunkara-bala-gayatri" },
                                    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/sunkara-bala-gayatri-5865493b2" },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-all border border-transparent hover:border-primary-500/20"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-primary-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-primary-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell me about your project..."
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-primary-500 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-2xl bg-primary-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/25 active:scale-[0.98]"
                                >
                                    Send Message
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
