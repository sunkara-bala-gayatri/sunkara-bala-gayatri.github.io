import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            const target = e.target;
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary-500 pointer-events-none z-[9999] hidden md:block"
            animate={{
                x: position.x - 16,
                y: position.y - 16,
                scale: isPointer ? 1.5 : 1,
                backgroundColor: isPointer ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
        />
    );
};

export default CustomCursor;
