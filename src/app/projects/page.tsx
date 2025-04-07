"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Projects() {
    const { theme } = useTheme();

    const projects = [
        {
            title: "YouTube Video Processor (FFmpeg & Node.js)",
            description:
                "Developed a custom script using FFmpeg and Node.js to download and process YouTube videos. Integrated video conversion & compression, optimizing file sizes and formats.",
            technologies: ["Node.js", "FFmpeg", "JavaScript"],
            github: "#",
            demo: "#"
        },
        {
            title: "PPT to PDF Converter using LibreOffice",
            description:
                "Built a file conversion service using LibreOffice, Node.js, and DigitalOcean, enabling seamless PPT to PDF conversion with automated backend processing.",
            technologies: ["Node.js", "LibreOffice", "DigitalOcean"],
            github: "#",
            demo: "#"
        },
    ];

    return (
        <div id="projects" className="z-55 mt-10 w-full max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <TextAnimate
                    animation="blurIn"
                    duration={1}
                    className="text-4xl font-bold mb-4"
                >
                    Projects
                </TextAnimate>
            </motion.div>

            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
                {projects.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(12px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: index * 0.15 }
                        }
                        key={index}
                    >
                        <Card key={index} className="
                        relative 
                        overflow-hidden 
                        dark:bg-[var(--red-card-bg)] 
                        backdrop-blur-[12px]
                        flex 
                        flex-col 
                        justify-between
                        ">
                            <GridPattern
                                width={30}
                                height={30}
                                x={-1}
                                y={-1}
                                className={cn(
                                    "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]",
                                )}
                            />
                            <div
                                className="absolute inset-0 opacity-100 Background_gradient"
                            />
                            <CardHeader>
                                <CardTitle className="z-55 text-2xl font-bold text-slate-100">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="flex flex-wrap gap-2">

                                    <CardDescription className="z-55 text-slate-100 mb-4">
                                        {project.description}
                                    </CardDescription>

                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={cn(
                                                "px-3 py-1 rounded-2xl border",
                                                "text-sm font-medium",
                                                "border dark:border dark:bg-[var(--navbar-bg)] backdrop-blur-[13px]",
                                                "text-black/90 dark:text-white/90"
                                            )}
                                        >
                                            {tech}
                                            <span className="absolute -bottom-0 left-[0.8rem] h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-emerald-400/0 via-purple-500 to-purple-500/0 dark:via-emerald-500/90  dark:to-emerald-500/0 transition-opacity duration-500 group-hover:opacity-40" />
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="z-55 w-full px-6 py-4">
                                <Button
                                    className="w-full cursor-pointer transition-transform hover:scale-[1.02]"
                                >
                                    <a
                                        href={project.github}
                                        className="cursor-pointer text-black"
                                        target="_blank"
                                    >
                                        View Project
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div >
    );
}