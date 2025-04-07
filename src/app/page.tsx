"use client"

import { motion } from "framer-motion"
import { TextAnimate } from "@/components/magicui/text-animate";
import GradientButton from "@/components/ui/GradientButton";
import { SkillsTextFlip } from "@/components/SkillsTextFlip";

export default function Home() {
  return (
    <div id="home" className="relative z-52 flex flex-col md:flex-row justify-start pt-12 pb-10 px-4 md:px-6">

      <div id="home-text" className="w-full md:w-3/4 lg:w-2/3">
      
        {/* Mobile Profile Image - Only shows on small screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-6 md:hidden"
        >
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-lg">
            <img
              src="/images/marmik.JPG"
              alt="Marmik Soni"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        <TextAnimate
          animation="blurIn"
          duration={1}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-center md:text-left"
        >
          Marmik Soni
        </TextAnimate>

        <TextAnimate
          animation="blurIn"
          duration={1}
          className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-foreground text-center md:text-left"
        >
          Full Stack Developer
        </TextAnimate>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg mb-4 md:mb-6 max-w-2xl text-muted-foreground text-center md:text-left"
        >
          Full-Stack Developer & Freelancer specializing in building scalable, impactful web applications and SaaS products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center md:justify-start flex-wrap gap-4 mb-8 md:mb-10"
        >
          <GradientButton
            text="Let's discuss your project"
            href="https://cal.com/marmiksoni11"
          />
        </motion.div>

        
        {/* Mobile Skills - Only shows on small screens */}
        <motion.div className="md:hidden flex justify-center mb-8">
          <SkillsTextFlip />
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg mb-4 md:mb-5 max-w-2xl text-muted-foreground text-center md:text-left"
        >
          Driven by the challenge of solving real-world problems and building solutions that simplify complexity, and create meaningful impact. I build tools that empower others to innovate, streamline workflows, and drive efficiency.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg mb-4 md:mb-5 max-w-2xl text-muted-foreground text-center md:text-left"
        >
          I've honed my skills in building software using Tools like React.js, Next.js, Node.js. With extensive experience spanning various industries, including Pharmacy, Beauty, Travel and AI Agents.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg mb-4 md:mb-5 max-w-2xl text-muted-foreground text-center md:text-left"
        >
          I look forward to collaborating with teams that value growth, innovation, and excellence.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg mb-4 md:mb-5 max-w-2xl text-muted-foreground text-center md:text-left"
        >
          Feel free to reach out to me I'd love to connect.
        </motion.p>
        
      </div>

      {/* Desktop profile and skills - only shows on md screens and up */}
      <motion.div 
        className="z-20 hidden md:flex flex-col items-center justify-start md:ml-5 lg:ml-10" 
        id="home-profile"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="sticky-profile w-32 h-32 lg:w-40 lg:h-40 rounded-full"
        >
          <div className="z-20 relative w-full h-full rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-lg">
            <img
              src="/images/marmik.JPG"
              alt="Marmik Soni"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
        
        {/* Skills Text Flip with sticky positioning preserved */}
        <SkillsTextFlip />
      </motion.div>
    </div>
  );
}