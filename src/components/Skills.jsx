import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Cpu, Terminal, GitBranch } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming",
            icon: <Terminal className="text-primary-500" size={24} />,
            skills: ["C", "Java", "Python"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Web Technologies",
            icon: <Globe className="text-accent" size={24} />,
            skills: ["HTML5", "CSS3", "JavaScript", "PHP"],
            color: "from-indigo-500 to-purple-500"
        },
        {
            title: "Databases",
            icon: <Database className="text-primary-400" size={24} />,
            skills: ["MySQL", "SQL"],
            color: "from-indigo-400 to-blue-600"
        },
        {
            title: "Tools & Others",
            icon: <GitBranch className="text-accent" size={24} />,
            skills: ["Git", "XAMPP"],
            color: "from-violet-500 to-fuchsia-500"
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-outfit font-extrabold mb-4"
                    >
                        Technical <span className="text-primary-500">Proficiency</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 dark:text-slate-400"
                    >
                        A diverse toolkit built through academic excellence and hands-on project implementation.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 border border-slate-200/50 dark:border-slate-800/50 group"
                        >
                            <div className="mb-6 p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/50 w-fit group-hover:bg-primary-500 transition-colors">
                                <div className="group-hover:text-white transition-colors">
                                    {category.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-outfit font-bold mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 group-hover:border-primary-500/30 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
