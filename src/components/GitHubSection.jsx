import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, Activity } from 'lucide-react';

const GitHubSection = ({ user, repos, loading }) => {
    // Mock contribution data
    const contributions = Array.from({ length: 52 * 7 }, () => Math.floor(Math.random() * 5));

    const stats = [
        { label: 'Public Repos', value: user?.public_repos ?? '...', icon: <BookOpen size={20} /> },
        { label: 'Followers', value: user?.followers ?? '...', icon: <Activity size={20} /> },
        { label: 'Following', value: user?.following ?? '...', icon: <Github size={20} /> },
    ];

    return (
        <section id="github" className="py-24 bg-slate-50 dark:bg-slate-950/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <h2 className="text-4xl font-outfit font-extrabold mb-4">
                            GitHub <span className="text-primary-500">Activity</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-8">
                            My open-source journey and consistent contributions to the developer community.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="glass px-4 py-3 rounded-2xl flex items-center gap-3 border border-slate-200/50 dark:border-slate-800/50">
                                    <div className="text-primary-500">{stat.icon}</div>
                                    <div>
                                        <div className="text-lg font-bold">{stat.value}</div>
                                        <div className="text-xs text-slate-500 uppercase">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <div className="glass p-8 rounded-[2rem] border border-primary-500/10 relative overflow-hidden">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-outfit font-bold flex items-center">
                                    <Activity className="mr-2 text-primary-500" size={20} />
                                    Contribution Calendar
                                </h3>
                                <span className="text-xs text-slate-500">Last 12 Months</span>
                            </div>

                            <div className="flex flex-wrap gap-[3px] justify-center md:justify-start">
                                {contributions.map((level, i) => (
                                    <div
                                        key={i}
                                        className={`w-[10px] h-[10px] rounded-[2px] transition-colors duration-500
                      ${level === 0 ? 'bg-slate-300 dark:bg-slate-800' : ''}
                      ${level === 1 ? 'bg-emerald-900/40' : ''}
                      ${level === 2 ? 'bg-emerald-700/60' : ''}
                      ${level === 3 ? 'bg-emerald-500/80' : ''}
                      ${level === 4 ? 'bg-emerald-400' : ''}
                    `}
                                    />
                                ))}
                            </div>

                            <div className="flex items-center justify-end mt-4 gap-2 text-[10px] text-slate-500 lowercase">
                                <span>Less</span>
                                <div className="w-2.5 h-2.5 bg-slate-300 dark:bg-slate-800 rounded-[2px]" />
                                <div className="w-2.5 h-2.5 bg-emerald-900/40 rounded-[2px]" />
                                <div className="w-2.5 h-2.5 bg-emerald-500/80 rounded-[2px]" />
                                <div className="w-2.5 h-2.5 bg-emerald-400 rounded-[2px]" />
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading && (!repos || repos.length === 0) ? (
                        Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="h-48 glass rounded-3xl animate-pulse" />
                        ))
                    ) : (
                        repos.slice(0, 6).map((repo, i) => (
                            <motion.a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 hover:border-primary-500/30 transition-all flex flex-col group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-2 rounded-xl bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                        <BookOpen size={20} />
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                                        <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                                        <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks_count}</span>
                                    </div>
                                </div>
                                <h4 className="text-lg font-outfit font-bold mb-2 group-hover:text-primary-500 transition-colors line-clamp-1">{repo.name}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-6 flex-grow">
                                    {repo.description || 'No description provided.'}
                                </p>
                                <div className="flex items-center gap-3">
                                    {repo.language && (
                                        <span className="flex items-center text-xs font-bold text-slate-500 uppercase">
                                            <div className="w-2 h-2 rounded-full bg-primary-500 mr-2" />
                                            {repo.language}
                                        </span>
                                    )}
                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Github size={16} className="text-slate-400" />
                                    </div>
                                </div>
                            </motion.a>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default GitHubSection;
