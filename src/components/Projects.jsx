import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = ({ repos, loading }) => {
    // Filter for projects with descriptions or specific names if needed
    // For now, we'll use repos as projects
    const projects = repos.slice(0, 6);

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-outfit font-extrabold mb-4">
                        Featured <span className="text-primary-500">Portfolio</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        A selection of projects that showcase my technical skills and problem-solving abilities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading && (!repos || repos.length === 0) ? (
                        Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="h-96 glass rounded-3xl animate-pulse" />
                        ))
                    ) : (
                        projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative glass rounded-[2.5rem] overflow-hidden border border-slate-200/50 dark:border-slate-800/50 hover:border-primary-500/30 transition-all duration-500"
                            >
                                <div className="aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-primary-500/20">
                                        <Code2 size={120} strokeWidth={1} />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="flex gap-4">
                                            <a
                                                href={project.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-full bg-white text-slate-900 hover:scale-110 transition-transform"
                                            >
                                                <Github size={20} />
                                            </a>
                                            {project.homepage && (
                                                <a
                                                    href={project.homepage}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 rounded-full bg-primary-500 text-white hover:scale-110 transition-transform"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.language && (
                                            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-primary-500/10 text-primary-500 uppercase tracking-wider">
                                                {project.language}
                                            </span>
                                        )}
                                        {project.topics?.map(topic => (
                                            <span key={topic} className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase tracking-wider">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-outfit font-bold mb-3 group-hover:text-primary-500 transition-colors line-clamp-1">
                                        {project.name.replace(/-/g, ' ')}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 line-clamp-2 text-sm leading-relaxed mb-6">
                                        {project.description || "Experimental project focusing on modern web development patterns and efficient algorithms."}
                                    </p>

                                    <a
                                        href={project.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-bold text-primary-500 group-hover:gap-2 transition-all"
                                    >
                                        Project Details <ExternalLink size={14} className="ml-1" />
                                    </a>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
