'use client';

import { useEffect, useState, useRef } from 'react';
import { useTheme } from "next-themes";
import DarkOverlay from "@/components/dark-overlay";

interface Position {
    x: number;
    y: number;
}

function CursorTorchEffect() {
    const [positions, setPositions] = useState({
        main: { x: 0, y: 0 },
        trail: { x: 0, y: 0 }
    });
    const [isVisible, setIsVisible] = useState(false);
    const [isActive, setIsActive] = useState(false); // Start as inactive
    const [scale, setScale] = useState(1);
    const posRef = useRef({
        cursor: { x: 0, y: 0 },
        main: { x: 0, y: 0 },
        trail: { x: 0, y: 0 }
    });

    // Set initial position to right corner on mount
    useEffect(() => {
        const initialX = window.innerWidth - 100; // 90px from the right
        const initialY = window.innerHeight / 150; // Centered vertically

        posRef.current.cursor.x = initialX;
        posRef.current.cursor.y = initialY;
        posRef.current.main.x = initialX;
        posRef.current.main.y = initialY;
        posRef.current.trail.x = initialX;
        posRef.current.trail.y = initialY;

        setPositions({
            main: { x: initialX, y: initialY },
            trail: { x: initialX, y: initialY }
        });
        setIsVisible(true);
        setIsActive(false); // Keep inactive until first mouse move
    }, []);

    useEffect(() => {
        let animationFrameId: number;

        const updatePosition = (e: MouseEvent) => {
            posRef.current.cursor.x = e.clientX;
            posRef.current.cursor.y = e.clientY;
            if (!isVisible) setIsVisible(true);
            if (!isActive) setIsActive(true); // Activate on first move
        };

        const animate = () => {
            if (isActive) {
                // Update main circle position
                posRef.current.main.x += (posRef.current.cursor.x - posRef.current.main.x) * 0.08;
                posRef.current.main.y += (posRef.current.cursor.y - posRef.current.main.y) * 0.08;

                // Update trail position
                posRef.current.trail.x += (posRef.current.main.x - posRef.current.trail.x) * 0.07;
                posRef.current.trail.y += (posRef.current.main.y - posRef.current.trail.y) * 0.07;

                // Calculate velocity
                const deltaX = posRef.current.cursor.x - posRef.current.main.x;
                const deltaY = posRef.current.cursor.y - posRef.current.main.y;
                const velocity = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 0.05, 1.2);

                setScale(1 + velocity * 0.08);
            }

            setPositions({
                main: { x: posRef.current.main.x, y: posRef.current.main.y },
                trail: { x: posRef.current.trail.x, y: posRef.current.trail.y }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseLeave = () => setIsActive(true);
        const handleMouseEnter = () => setIsActive(true);

        window.addEventListener('mousemove', updatePosition);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        animate();

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible, isActive]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Circle */}
            <div
                className="fixed pointer-events-none z-50"
                style={{
                    left: `${positions.main.x}px`,
                    top: `${positions.main.y}px`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    width: '1200px',
                    height: '1200px',
                    background: 'radial-gradient(circle, rgba(52, 211, 153, 0.5) 0%, rgba(16, 185, 129, 0.3) 30%, rgba(6, 95, 70, 0) 70%)',
                    mixBlendMode: 'screen',
                    filter: 'blur(24px)',
                    opacity: 0.3,
                    transition: isActive ? 'transform 0.6s cubic-bezier(0.1, 0.1, 0.25, 1)' : 'none'
                }}
            />

            {/* Trail */}
            <div
                className="fixed pointer-events-none z-50"
                style={{
                    left: `${positions.trail.x}px`,
                    top: `${positions.trail.y}px`,
                    transform: 'translate(-50%, -50%)',
                    width: '1394px',
                    height: '1394px',
                    background: 'radial-gradient(circle, rgba(52, 211, 153, 0.5) 0%, rgba(16, 185, 129, 0.3) 30%, rgba(6, 95, 70, 0) 70%)',
                    mixBlendMode: 'screen',
                    filter: 'blur(32px)',
                    opacity: 0.35,
                    transition: isActive ? 'transform 1.2s cubic-bezier(0.12, 0.12, 0.2, 1)' : 'none'
                }}
            />
        </>
    );
}

// Wrapper remains the same
export default function CursorTorchEffectWrapper() {
    const { theme } = useTheme();

    if (theme === "dark") {
        return (
            <>
                <DarkOverlay />
                <CursorTorchEffect />
            </>
        );
    }
    return null;
}