"use client"

import { motion } from "framer-motion";
import GradientButton from "@/components/ui/GradientButton";
import { useState } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function Contact() {
    const { theme } = useTheme();
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
        submitting: false,
        submitted: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState({ ...formState, submitting: true });

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                }),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setFormState({
                name: "",
                email: "",
                message: "",
                submitting: false,
                submitted: true
            });

            setTimeout(() => {
                setFormState(prev => ({ ...prev, submitted: false }));
            }, 3000);
        } catch (error) {
            console.error('Submission error:', error);
            setFormState(prev => ({ ...prev, submitting: false }));
            alert('Failed to send message. Please try again.');
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id="contact" className="z-55 mt-16 w-full max-w-4xl mx-auto pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-10">
                        <span className="gradient-text">Get In Touch</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg mb-6 max-w-2xl text-muted-foreground"
                >
                    Need a skilled freelancer for your project? Let's connect! I'm always open to discussing new opportunities and interesting ideas.
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative p-6 rounded-lg border overflow-hidden 
                    dark:bg-[var(--red-card-bg)] 
                    backdrop-blur-[12px]"
                >


                    {theme === "dark" ? (
                        <>
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
                                className="absolute inset-0 opacity-80 Background_gradient"
                            />
                        </>) : (<></>)}

                    <h3 className="text-xl font-semibold mb-4 relative z-56">Send a Message</h3>

                    <form onSubmit={handleSubmit} className="relative z-56 space-y-4">
                        <div className="relative z-56" >
                            <label htmlFor="name" className="z-56 block text-sm font-medium mb-1 text-zinc-700 dark:text-muted-foreground">Name</label>
                            <Input
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="w-full z-56"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-zinc-700 dark:text-muted-foreground">Email</label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                required
                                className="w-full "
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1 text-zinc-700 dark:text-muted-foreground">Message</label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project or idea"
                                required
                                className="w-full min-h-32 "
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={formState.submitting}
                            className="cursor-pointer"

                        >
                            {formState.submitting ? 'Sending...' : formState.submitted ? 'Message Sent!' : 'Send Message'}
                        </Button>
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col justify-start"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="p-6 rounded-lg border-2 bg-accent"
                    >
                        <h3 className="text-xl font-semibold mb-2">Let's Create Something Amazing</h3>
                        <p className="text-muted-foreground mb-4">Ready to bring your ideas to life with modern web technologies?</p>
                        <GradientButton
                            text="Schedule a Call"
                            href="https://cal.com/marmiksoni11"
                        />
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-12 flex flex-col items-center"
                    >
                        <p className="text-center text-muted-foreground mb-4">Connect with me on social platforms</p>

                        <div className="flex gap-6">
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
                                    <IoLogoLinkedin className="h-7 w-7" />
                                </a>

                                <a
                                    href="https://github.com/Marmiksoni11"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FaGithub className="h-7 w-7" />
                                </a>

                                <a
                                    href="mailto:marmiksoni1108@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="Email"
                                >
                                    <IoMdMail className="h-7 w-7" />
                                </a>

                                <a
                                    href="https://x.com/MarmikSoni11"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="Email"
                                >
                                    <FaXTwitter className="h-7 w-7" />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>


            </div>


        </div>
    );
}