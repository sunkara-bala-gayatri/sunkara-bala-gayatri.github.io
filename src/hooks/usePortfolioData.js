import { useState, useEffect } from 'react';

const GH_USERNAME = 'sunkara-bala-gayatri';
const BLOG_RSS_URL = 'https://dev.to/feed/sunkarabalagayatri'; // Placeholder - user can update
const GIST_ID = ''; // Placeholder for LinkedIn-style JSON data

const CACHE_KEY = 'portfolio_data_cache';
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

export const usePortfolioData = () => {
    const [data, setData] = useState({
        profile: null,
        repos: [],
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
            const [userRes, reposRes, blogsRes] = await Promise.all([
                fetch(`https://api.github.com/users/${GH_USERNAME}`),
                fetch(`https://api.github.com/users/${GH_USERNAME}/repos?sort=updated&per_page=10`),
                // Using a public RSS-to-JSON proxy for demo purposes
                fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(BLOG_RSS_URL)}`).catch(() => null)
            ]);

            const profile = await userRes.json();
            const repos = await reposRes.json();
            const blogsData = blogsRes ? await blogsRes.json() : { items: [] };

            // Manual Experience Data (Fallback for LinkedIn Sync)
            const experience = [
                {
                    id: 1,
                    role: "Diploma in CSE",
                    company: "Dhanekula Institute of Technology",
                    period: "2023 - 2026",
                    description: "Focusing on Software Development, Databases, and Web Technologies. Expected graduation in 2026.",
                    type: "Education"
                },
                {
                    id: 2,
                    role: "Candidate",
                    company: "Vijayawada",
                    period: "2024",
                    description: "Actively working on Virtual Try-On-Tech and other full-stack projects.",
                    type: "Experience"
                }
            ];

            const newPayload = {
                profile,
                repos: repos.filter(r => !r.fork),
                blogs: blogsData.items || [],
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
