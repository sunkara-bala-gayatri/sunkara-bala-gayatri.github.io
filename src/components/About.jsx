import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const About = () => {
    const education = [
        {
            title: "Diploma in Computer Science & Engineering",
            institution: "Dhanekula Institute of Technology",
            period: "Expected Graduation: 2026",
            status: "Final Year Student",
            icon: <GraduationCap className="text-primary-500" size={24} />
        },
        {
            title: "SSC (Secondary School Certificate)",
            institution: "KSR High School",
            period: "2023",
            status: "CGPA: 9.8",
            icon: <Award className="text-accent" size={24} />
        }
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl font-outfit font-extrabold mb-6">
                            About <span className="text-primary-500">Me</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Passionate Computer Science diploma student with hands-on project experience and strong knowledge of programming, databases, and web technologies.
                            I am focused on building efficient, scalable, and user-friendly applications that solve real-world problems.
                        </p>

                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center text-slate-600 dark:text-slate-400">
                                <MapPin className="mr-3 text-primary-500" size={20} />
                                <span>Vijayawada, India</span>
                            </div>
                            <div className="flex items-center text-slate-600 dark:text-slate-400">
                                <Calendar className="mr-3 text-primary-500" size={20} />
                                <span>Available for Internships (2025-2026)</span>
                            </div>
                        </div>

                        <div className="mt-10 p-6 rounded-3xl bg-primary-500/5 border border-primary-500/10">
                            <h4 className="font-outfit font-bold text-slate-900 dark:text-white mb-2">My Career Objective</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                Seeking internship and entry-level software development opportunities to enhance skills and gain real-world exposure in a professional environment.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-outfit font-bold mb-8">Education Timeline</h3>
                        <div className="space-y-8">
                            {education.map((item, index) => (
                                <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 pb-2">
                                    <div className="absolute -left-[11px] top-0 p-1.5 rounded-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800">
                                        {item.icon}
                                    </div>
                                    <div className="glass p-6 rounded-2xl hover:border-primary-500/30 transition-all group">
                                        <span className="text-xs font-bold text-primary-500 uppercase tracking-wider mb-2 block">{item.period}</span>
                                        <h4 className="text-lg font-outfit font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors">{item.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium mb-1">{item.institution}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-500 italic">{item.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
