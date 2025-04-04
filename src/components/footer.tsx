"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";


export function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="z-52 flex flex-col justify-center items-start max-w-4xl mx-auto w-full mb-5">

            <hr className="w-full border border-gray-200 dark:gray-300 mb-5" />

            <div className="flex w-full justify-between items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4"
                >
                    <Button
                        onClick={scrollToTop}
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                        <FiArrowUp className="h-5 w-5" />
                    </Button>
                    <p className="text-sm text-gray-300">
                        © {new Date().getFullYear()} Marmik Soni
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-4"
                >
                    <a
                        href="https://linkedin.com/in/marmiksoni11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <IoLogoLinkedin className="h-5 w-5" />
                    </a>

                    <a
                        href="https://github.com/Marmiksoni11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub className="h-5 w-5" />
                    </a>

                    <a
                        href="mailto:marmiksoni1108@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Email"
                    >
                        <IoMdMail className="h-5 w-5" />
                    </a>

                    <a
                        href="https://github.com/Marmiksoni11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Email"
                    >
                        <FaXTwitter className="h-5 w-5" />
                    </a>
                </motion.div>

            </div>

        </footer>
    );
}