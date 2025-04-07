"use client"

import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { cn } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CardSpotlightDark } from "@/components/card-spotlight-dark";
import { useTheme } from "next-themes";


const experiences = [
  {
    company: "IIH Global Pvt. Ltd.",
    role: "Full-Stack Developer",
    duration: "July 2024 - Feb 2025",
    skills: ["React.js", "Redux-Toolkit", "Reactstrap", "React-Bootstrap", "Framer-motion", "Material UI", "SCSS", "Node.js", "MongoDB", "MYSQL", "Google-Places API", "Open-AI API"],
    description: [
      "Worked on 3+ production-grade projects including a live UK-based pharmacy SaaS platform used by multiple pharmacies, an admin panel for an AI-powered itinerary planner with a custom animated landing page.",
      "Contributed to auxiliary full-stack apps: enhanced a Chrome extension and a beauty niche landing page via small feature implementations and bug fixes."
    ],
    projects: [
      {
        name: "Pharmacy SaaS platform (Repeat-prescription management)",
        details: [
          "Contributed to a UK-based pharmacy SaaS platform, featuring multi-role logins, repeat order prescription management, chase ups, driver delivery management for orders, and patient data handling.",
          "Redesigned the entire UI and implemented a new onboarding flow, boosting responsiveness and user experience by over 40%.",
          "Built session management with auto-logout after inactivity and seamless active session handling across tabs."
        ]
      },
      {
        name: "AI-Powered Itinerary Planner (Admin Panel)",
        // details: [
        //   "Contributed to the AI-driven itinerary mobile app project by building its landing page and React.js admin dashboard; backend leveraged OpenAI API for personalized itinerary generation.",
        //   "Engineered CRUD operations for user management and itinerary listings, reducing admin workload by 40% through automated data handling and intuitive UI/UX design.",
        //   "Built forum and reviews modules for community discussions and place/hotel feedback, plus a ‘Visited Places’ list leveraging Google Places API autocomplete.",
        //   "Created a policy-pages editor using Draft.js, allowing non-technical teams to update app content instantly, slashing dependency on developers by 30%."
        // ]
        details: [
          "Developed React.js admin dashboard and landing page for AI itinerary app, which used OpenAI API for personalized itineraries.",

          "Automated user/itinerary management with CRUD operations, cutting admin tasks by 40% via streamlined UI/UX.",

          "Built forum and reviews modules for community discussions and place/hotel feedback , plus a ‘Visited Places’ list leveraging Google Places API autocomplete.",

          "Created a policy-pages editor using Draft.js, allowing non-technical teams to update app content instantly, slashing dependency on developers by 30%."
        ]
      }

    ]
  },
  {
    company: "IIH Global Pvt. Ltd.",
    role: "Full-Stack Developer Intern",
    duration: "Jan 2024 - June 2024",
    skills: ["React.js", "Redux", "Material UI", "Node.js", "Sequelize ORM", "MySQL", "Digital Ocean", "Socket.IO", "Slack Webhook API"],
    description: [
      "Single-Handedly built a custom HRMS and an in-house Project Management System (PMS) for a 100+ member team, reducing HR processing time by over 50%.",
    ],
    projects: [
      {
        name: "HRMS (Company HR Management Platform)",
        details: [
          "Built and enhanced core HRMS modules including Admin & Super Admin Dashboards, Leave Management, Employee Work Hour Logs, Role-Based Access Control, Credential Sharing, Leave Balance Management, Asset Tracking, and other company-specific utilities.",

          "Implemented advanced filters and streamlined employee data handling, significantly improving tracking efficiency and reducing HR processing time by over 50%.",
        ]
      },
      {
        name: "PMS (Integrated HRMS Module)",
        details: [
          "Designed and developed a fully functional Project Management System within the HRMS, enabling task management through Kanban boards, drag-and-drop task handling, assignments, comments, file uploads, and real-time updates using Socket.IO.",

          "Implemented features like task filtering, ‘Me Mode’ view, task search, and activity logs, improving team collaboration and project tracking across departments.",

          "Built as a custom, in-house Trello alternative tailored to company needs—offering more control, flexibility, and deeper integration with HR operations."
        ]
      },
    ]
  },
  {
    "company": "Mangalyam Technolabs",
    "role": "PHP Developer Intern",
    "duration": "May 2023 - June 2023",
    "skills": ["HTML", "CSS", "JavaScript", "PHP", "AJAX", "MySQL"],
    "description": [
      "Completed intensive 1-month internship during college break to gain foundational web development skills."
    ],
    "projects": [
      {
        "name": "Exam Registration Landing Page",
        "details": [
          "Developed a responsive exam registration system using HTML, CSS, PHP, MySQL, and AJAX for an NGO, handling student registrations",
          "Enhanced UI consistency across devices achieving mobile compatibility with CSS media queries"
        ]
      },
      {
        "name": "Netflix-inspired landing page",
        "details": [
          "Built a Netflix-inspired landing page with interactive UI components using HTML5, CSS3, and JavaScript",
          "Achieved 98% pixel-perfect design matching through meticulous CSS styling and Flexbox implementation",
          "Improved page load performance by 25% by optimizing image assets"
        ]
      }
    ]
  }
];


export default function Experience() {
  const { theme } = useTheme();

  return (
    <div id="experience" className="relative z-50 mb-4 mt-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-10">
          <span className="gradient-text">Professional Journey</span>
        </h2>
      </motion.div>

      <div className="space-y-12 relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company + "_" + index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative pl-8 border-l-[0.5px] border-muted-foreground dark:border-l-2 dark:border-muted"
          >
            {/* Timeline dot */}
            <div className="absolute w-4 h-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-400 dark:from-emerald-700 dark:via-emerald-700 dark:to-emerald-800 rounded-full -left-[8px] dark:-left-[9px] top-0" />

            {/* Experience Header */}
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-2xl font-semibold mb-2 md:mb-0">{exp.role}</h3>
              <p className="text-muted-foreground text-lg">{exp.duration}</p>
            </div>

            <h4 className="text-xl text-accent-foreground dark:text-muted-foreground mb-4">@ {exp.company}</h4>

            {/* Experience Description */}
            <ul className="space-y-2 text-[var(--muted-foreground-2)] dark:text-muted-foreground mb-5">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="relative pl-4 before:content-['▹'] before:absolute before:left-0 before:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={cn(
                    "px-3 py-1 rounded-2xl border",
                    "text-sm font-medium",
                    "border bg-slate-100 shadow-md dark:border dark:bg-[var(--navbar-bg)] backdrop-blur-[13px]",
                    "text-black/90 dark:text-white/90"
                  )}
                >
                  {skill}
                  <span className="absolute -bottom-0 left-[0.8rem] h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-emerald-400/0 via-purple-500 to-purple-500/0 dark:via-emerald-500/90  dark:to-emerald-500/0 transition-opacity duration-500 group-hover:opacity-40" />
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 mt-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-blue-400 dark:from-emerald-600 dark:via-emerald-600 dark:to-emerald-700 text-lg font-semibold">
                  Featured Projects
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-purple-600/30 via-purple-500/30 to-blue-400/30 dark:from-emerald-400/30 dark:via-emerald-400/30 dark:to-emerald-600/30" />
              </div>
            </motion.div>

            {/* Projects Grid */}
            {exp.projects && exp.projects.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-12">
                {exp.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + projectIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                  {theme === "dark" ? (
                      <CardSpotlightDark className="h-full p-6 w-[423px]">
                        <div className="space-y-4">
                          <h3 className="text-lg font-bold text-primary">
                            {project.name}
                          </h3>
                          <ul className="space-y-2 pl-4">
                            {project.details.map((detail, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground relative before:content-['•'] before:absolute before:-left-4 before:text-primary"
                              >
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardSpotlightDark>
                    ) : (
                      <CardSpotlight className="h-full p-6 w-[423px]">
                        <div className="space-y-4">
                          <h3 className="text-lg font-bold text-zinc-300">
                            {project.name}
                          </h3>
                          <ul className="space-y-2 pl-4">
                            {project.details.map((detail, i) => (
                              <li
                                key={i}
                                className="text-sm text-zinc-400 relative before:content-['•'] before:absolute before:-left-4 before:text-zinc-300"
                              >
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardSpotlight>
                    )
                  }
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}