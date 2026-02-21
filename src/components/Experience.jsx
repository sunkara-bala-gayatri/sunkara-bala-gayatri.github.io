import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = ({ items, loading }) => {
    if (loading) return null;

    return (
        <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-outfit font-extrabold mb-16 text-center">
                    Career <span className="text-primary-500">Journey</span>
                </h2>

                <div className="max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-12 last:pb-0 border-l-2 border-slate-200 dark:border-slate-800"
                        >
                            <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-2xl glass border border-primary-500/20 flex items-center justify-center shadow-lg shadow-primary-500/10">
                                {item.type === 'Education' ? (
                                    <GraduationCap className="text-primary-500" size={24} />
                                ) : (
                                    <Briefcase className="text-accent" size={24} />
                                )}
                            </div>

                            <div className="glass p-8 rounded-[2rem] border border-slate-200/50 dark:border-slate-800/50 hover:border-primary-500/30 transition-all">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-outfit font-bold">{item.role}</h3>
                                        <p className="text-primary-500 font-bold">{item.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-bold text-slate-500 whitespace-nowrap">
                                        <Calendar size={16} />
                                        {item.period}
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
