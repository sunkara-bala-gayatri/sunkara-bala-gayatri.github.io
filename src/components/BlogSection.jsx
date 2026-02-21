import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, User } from 'lucide-react';

const BlogSection = ({ blogs, loading }) => {
    if (loading && (!blogs || blogs.length === 0)) {
        return (
            <section id="blog" className="py-24">
                <div className="container mx-auto px-6">
                    <div className="h-8 w-48 bg-slate-200 dark:bg-slate-800 rounded animate-pulse mb-12" />
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-80 glass rounded-3xl animate-pulse" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (!blogs || blogs.length === 0) return null;

    return (
        <section id="blog" className="py-24 bg-white dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-16">
                    <div>
                        <h2 className="text-4xl font-outfit font-extrabold mb-4">
                            Latest <span className="text-primary-500">Articles</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Sharing my thoughts and discoveries in software development.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.slice(0, 3).map((post, i) => (
                        <motion.a
                            key={i}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group glass p-6 rounded-[2rem] border border-slate-200/50 dark:border-slate-800/50 hover:border-primary-500/30 transition-all flex flex-col"
                        >
                            <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800">
                                {post.thumbnail ? (
                                    <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                                        <BookOpen size={48} />
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center gap-4 mb-4 text-xs font-bold text-primary-500 uppercase tracking-widest">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.pubDate).toLocaleDateString()}</span>
                            </div>

                            <h3 className="text-xl font-outfit font-bold mb-4 group-hover:text-primary-500 transition-colors line-clamp-2">
                                {post.title}
                            </h3>

                            <div className="mt-auto flex items-center text-sm font-bold text-slate-900 dark:text-white group-hover:gap-2 transition-all">
                                Read More <ExternalLink size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
