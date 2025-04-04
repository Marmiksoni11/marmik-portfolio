"use client"

import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import GradientButton from "@/components/ui/GradientButton";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Tech Innovators Inc.",
    role: "Senior Full Stack Developer",
    duration: "2022 - Present",
    skills: ["JavaScript", "Redux", "Sass", "Webpack", "Jest", "React Native"],
    description: [
      "Led development of a SaaS platform serving 50k+ monthly users",
      "Architected microservices backend using Node.js and TypeScript",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored 4 junior developers in React best practices"
    ]
  },
  {
    company: "Digital Solutions Co.",
    role: "Full Stack Developer",
    duration: "2020 - 2022",
    skills: ["JavaScript", "Redux", "Sass", "Webpack", "Jest", "React Native"],
    description: [
      "Developed e-commerce platforms handling $10M+ annual revenue",
      "Optimized frontend performance achieving 95+ Lighthouse scores",
      "Integrated AI-powered recommendation systems",
      "Collaborated with cross-functional teams in Agile environment"
    ]
  },
  {
    company: "Mangalyam Technolabs • Ahmedabad, Gujarat",
    role: "PHP Developer Intern",
    duration: "2018 - 2020",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "AJAX", "MySQL"],
    description: [
      "Developed an exam registration webpage using PHP, MySQL, and AJAX, optimizing registration efficiency and UI consistency for an NGO.",
      "Built a Netflix landing page clone with interactive features, showcasing front-end expertise."
    ]
  }
];


export default function Experience() {
  return (

    <div id="experience" className="relative z-50 mb-4 mt-10 max-w-2xl">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Professional Journey</span>
          </h2>
        </motion.div>


        <div className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative pl-8 border-l-2 border-muted"
            >
              <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -left-[9px] top-0" />

              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-2xl font-semibold mb-2 md:mb-0">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground text-lg">{exp.duration}</p>
              </div>

              <h4 className="text-xl text-muted-foreground mb-4">
                @ {exp.company}
              </h4>

              <ul className="space-y-2 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="relative pl-4 before:content-['▹'] before:absolute before:left-0 before:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2 mb-6 mt-6"
              >
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}

                    className={cn(
                      "px-4 py-1 rounded-3xl border w-max",
                      "text-sm font-semibold",
                      // "border-emerald-500/90",
                      "border dark:border dark:bg-[var(--navbar-bg)] backdrop-blur-[13px]",
                      "text-black/90 dark:text-white/90"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

  );
}