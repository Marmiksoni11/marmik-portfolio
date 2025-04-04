"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function SkillsTextFlip() {
    const skillGroups = [
        ["Github", "Vercel", "MongoDB", "MYSQL"],
        ["React.js", "Next.js", "Tailwind CSS", "Typescript"],
        ["OpenAI API", "Google Maps API", "Stripe", "AI Agents"],
        ["Saas", "Ecommerce", "ERPs", "CRM", "HRMS"]
    ];

    const [activeGroupIndex, setActiveGroupIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveGroupIndex((prev) => (prev + 1) % skillGroups.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="sticky-skills flex flex-col mt-8 min-h-[200px] max-w-[180px] perspective-1000"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeGroupIndex}
                    initial={{
                        // rotateX: 90,
                        opacity: 0,
                        filter: "blur(20px)"
                    }}
                    animate={{
                        // rotateX: 0,
                        opacity: 1,
                        filter: "blur(0px)"
                    }}
                    exit={{
                        // rotateX: -90,
                        opacity: 0,
                        filter: "blur(20px)"
                    }}
                    transition={{
                        duration: 1,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                    className="flex flex-wrap gap-4 justify-center origin-center transform-style-preserve-3d"
                >
                    {skillGroups[activeGroupIndex].map((skill, index) => (

                        <motion.div
                            key={skill}
                            className={cn(
                                "px-4 py-1 rounded-3xl border w-max",
                                "text-sm font-semibold",

                                // "border-emerald-500/90",
                                "border dark:border dark:bg-[var(--navbar-bg)] backdrop-blur-[13px]",

                                "text-black/90 dark:text-white/90"

                            )}
                            initial={{
                                scale: 0.8,
                                opacity: 0,
                                filter: "blur(8px)"
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                filter: "blur(0px)"
                            }}
                            transition={{
                                delay: index * 0.15,
                                duration: 0.6,
                                ease: "backOut"
                            }}
                        >

                            {/* <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-emerald-400/0 via-purple-500 to-purple-500/0 dark:via-emerald-500/90  dark:to-emerald-500/0 transition-opacity duration-500 group-hover:opacity-40" /> */}

                            <span className="absolute -bottom-0 left-[0.8rem] h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-emerald-400/0 via-purple-500 to-purple-500/0 dark:via-emerald-500/90  dark:to-emerald-500/0 transition-opacity duration-500 group-hover:opacity-40" />
                          
                            {skill}

                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}