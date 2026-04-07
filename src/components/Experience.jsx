import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = ({ items, loading }) => {
    if (loading) return null;

    // Filter items by type
    const internships = items.filter(item => item.type === 'Experience');
    const educations = items.filter(item => item.type === 'Education');

    const ExperienceCategory = ({ title, icon, data, delay }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="flex-1"
        >
            <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-2xl bg-primary-500/10 text-primary-500">
                    {icon}
                </div>
                <h3 className="text-3xl font-outfit font-extrabold">{title}</h3>
            </div>

            <div className="space-y-8 relative pl-6 border-l-2 border-slate-200 dark:border-slate-800">
                {data.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: delay + (i * 0.1) }}
                        className="relative"
                    >
                        {/* Dot on Timeline */}
                        <div className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-950 border-2 border-primary-500 z-10" />

                        <div className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 hover:border-primary-500/30 transition-all group">
                            <div className="flex flex-col gap-2 mb-4">
                                <span className="text-xs font-bold text-primary-500 uppercase tracking-widest">{item.period}</span>
                                <h4 className="text-xl font-outfit font-bold group-hover:text-primary-500 transition-colors uppercase">{item.role}</h4>
                                <p className="text-sm font-bold text-slate-500">{item.company}</p>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-outfit font-black mb-6">
                        Career <span className="text-primary-500">Journey</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        My professional journey and academic background combined for a well-rounded skill set.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    <ExperienceCategory
                        title="Internships"
                        icon={<Briefcase size={28} />}
                        data={internships}
                        delay={0.1}
                    />
                    <ExperienceCategory
                        title="Education"
                        icon={<GraduationCap size={28} />}
                        data={educations}
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
