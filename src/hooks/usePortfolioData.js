import { useState, useEffect } from 'react';

const BLOG_RSS_URL = 'https://dev.to/feed/sunkarabalagayatri'; // Placeholder - user can update
const GIST_ID = ''; // Placeholder for LinkedIn-style JSON data

const CACHE_KEY = 'portfolio_data_cache_v2'; // Changed cache key to invalidate old data
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

export const usePortfolioData = () => {
    const [data, setData] = useState({
        blogs: [],
        experience: [],
        loading: true,
        error: null,
        lastUpdated: null
    });

    const fetchData = async (force = false) => {
        setData(prev => ({ ...prev, loading: true }));

        // Try loading from cache first
        if (!force) {
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                const { timestamp, payload } = JSON.parse(cached);
                if (Date.now() - timestamp < CACHE_TTL) {
                    setData({ ...payload, loading: false, lastUpdated: timestamp });
                    return;
                }
            }
        }

        try {
            const [blogsRes] = await Promise.all([
                // Using a public RSS-to-JSON proxy for demo purposes
                fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(BLOG_RSS_URL)}`).catch(() => null)
            ]);

            const blogsData = blogsRes ? await blogsRes.json() : { items: [] };

            // Manual Experience Data (Fallback for LinkedIn Sync)
            const experience = [
                {
                    id: 1,
                    role: "Web Development Intern",
                    company: "Phantasm Solutions",
                    period: "November 26, 2025 – Present",
                    description: "Working as a Web Development Intern involved in building and maintaining web applications. Contributing to frontend development using modern web technologies, improving UI components, and collaborating with the development team on real-world projects.",
                    type: "Experience"
                },
                {
                    id: 2,
                    role: "Diploma in CSE",
                    company: "Dhanekula Institute of Technology",
                    period: "2023 - 2026",
                    description: "Focusing on Software Development, Databases, and Web Technologies. Expected graduation in 2026.",
                    type: "Education"
                },
                {
                    id: 3,
                    role: "Candidate",
                    company: "Vijayawada",
                    period: "2024",
                    description: "Actively working on Virtual Try-On-Tech and other full-stack projects.",
                    type: "Experience"
                }
            ];

            const newPayload = {
                blogs: blogsData && blogsData.items ? blogsData.items : [],
                experience,
                loading: false,
                error: null,
                lastUpdated: Date.now()
            };

            // Update cache
            localStorage.setItem(CACHE_KEY, JSON.stringify({
                timestamp: Date.now(),
                payload: newPayload
            }));

            setData(newPayload);
        } catch (err) {
            setData(prev => ({ ...prev, loading: false, error: err.message }));

            // Fallback to stale cache if available
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                const { payload } = JSON.parse(cached);
                setData({ ...payload, loading: false, error: 'Using cached data (API offline)' });
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { ...data, refresh: () => fetchData(true) };
};
