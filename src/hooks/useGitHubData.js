import { useState, useEffect } from 'react';

const GH_USERNAME = 'sunkara-bala-gayatri';

export const useGitHubData = () => {
    const [data, setData] = useState({
        user: null,
        repos: [],
        loading: true,
        error: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${GH_USERNAME}`),
                    fetch(`https://api.github.com/users/${GH_USERNAME}/repos?sort=updated&per_page=6`)
                ]);

                if (!userRes.ok || !reposRes.ok) throw new Error('Failed to fetch GitHub data');

                const userData = await userRes.json();
                const reposData = await reposRes.json();

                setData({
                    user: userData,
                    repos: reposData,
                    loading: false,
                    error: null
                });
            } catch (err) {
                setData(prev => ({ ...prev, loading: false, error: err.message }));
            }
        };

        fetchData();
    }, []);

    return data;
};
