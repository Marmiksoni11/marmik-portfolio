"use client"

import { motion } from "framer-motion"
import { TextAnimate } from "@/components/magicui/text-animate";
import GradientButton from "@/components/ui/GradientButton";
import { SkillsTextFlip } from "@/components/SkillsTextFlip";

export default function Home() {
  return (
    <div id="home" className="relative z-52 flex flex-row justify-start pt-12 pb-10">

      <div id="home-text">

        <TextAnimate
          animation="blurIn"
          duration={1}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Marmik Soni
        </TextAnimate>

        <TextAnimate
          animation="blurIn"
          duration={1}
          className="text-2xl md:text-2xl font-semibold mb-6 text-muted-foreground"
        >
          Full Stack Developer
        </TextAnimate>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-6 max-w-2xl text-muted-foreground"
        >
          Full-Stack Developer & Freelancer specializing in building scalable, impactful web applications and SaaS products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          <GradientButton
            text="Let's discuss your project"
            href="#contact"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-5 max-w-2xl text-muted-foreground"
        >
          Driven by the challenge of solving real-world problems and building solutions that simplify complexity, and create meaningful impact. I build tools that empower others to innovate, streamline workflows, and drive efficiency.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-5 max-w-2xl text-muted-foreground"
        >
          I’ve honed my skills in building software using Tools like React.js, Next.js, Node.js. With extensive experience spanning various industries, including Pharmacy, Beauty, Travel and AI Agents.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-5 max-w-2xl text-muted-foreground"
        >
          I look forward to collaborating with teams that value growth, innovation, and excellence.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-5 max-w-2xl text-muted-foreground"
        >
          Feel free to reach out to me I’d love to connect.
        </motion.p>
      </div>

      <div className="z-20 flex flex-col items-center ml-5" id="home-profile">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="sticky-profile hidden md:block w-35 h-35 rounded-full"
        >
          <div className="z-20 relative w-full h-full rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-lg">
            <img
              src="/images/marmik.JPG"
              alt="Marmik Soni"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
        <SkillsTextFlip />
      </div>
    </div>
  );
}
