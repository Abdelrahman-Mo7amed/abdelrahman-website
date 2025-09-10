import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Users, Code, BarChart3 } from "lucide-react";
import styles from "./Experience.module.css";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      type: "work",
      company: "IBM",
      role: "Data Analyst Intern",
      period: "February 2024 – June 2024",
      location: "Remote",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Cleaned and preprocessed datasets using Python and Excel to ensure data quality and readiness for analysis",
        "Performed exploratory data analysis (EDA) to uncover trends and patterns, leading to actionable business insights",
        "Created interactive dashboards and visualizations using Excel and Power BI",
        "Wrote detailed analytical reports summarizing results, insights, and recommendations for decision-makers",
      ],
    },
    {
      id: 2,
      type: "education",
      company: "ALX Africa",
      role: "Data Science Programme",
      subtitle: "Data Science Trainee (16-month intensive program)",
      period: "May 2023 – August 2024",
      location: "Online",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Completed a full-time, project-based program covering Python, SQL, statistics, data analysis, and machine learning",
        "Built real-world data projects involving data cleaning, EDA, feature engineering, and predictive modeling",
        "Developed strong data storytelling skills by presenting findings with visual dashboards and written reports",
        "Practiced version control and collaboration using Git/GitHub and agile workflows in team-based assignments",
        "Strengthened soft skills including communication, problem-solving, time management, and critical thinking",
        "Participated in career-readiness sessions, peer reviews, and mentorship to prepare for real-world roles",
      ],
    },
    {
      id: 3,
      type: "education",
      company: "Digital Egypt Cubs Initiative",
      role: "Web Development Programme",
      subtitle: "Ministry of Communications and Information Technology (MCIT) – Web Development Trainee",
      period: "October 2022 – Present",
      location: "Egypt",
      icon: Code,
      color: "from-green-500 to-teal-500",
      achievements: [
        "Completed full-stack training with hands-on projects using HTML, CSS, JavaScript, SQL, TypeScript, Node.js, and Express",
        "Gained strong skills in OOP, async JavaScript (Promises, async/await), backend design patterns, and unit testing with Jasmine",
        "Practiced clean coding, Git/GitHub collaboration, and technical documentation writing",
      ],
    },
    {
      id: 4,
      type: "leadership",
      company: "ALX Fusion Job Fair",
      role: "Event Organizer",
      period: "December 2024",
      location: "Virtual & Physical",
      icon: Users,
      color: "from-orange-500 to-red-500",
      achievements: [
        "Co-led the organization of a large-scale virtual and physical job fair connecting 1200+ attendees with 25+ hiring companies",
        "Coordinated 3 days of keynote talks, networking sessions, and logistics, ensuring a seamless experience for alumni and recruiters",
      ],
    },
    {
      id: 5,
      type: "leadership",
      company: "TopCareer Maker Series",
      role: "Technical & Event Coordinator",
      period: "July 2025 - Present",
      location: "Hybrid",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      achievements: [
        "Co-organizing a series of career-focused events featuring industry leaders speaking on personal branding, freelancing, and CV building",
        "Led the technical setup to deliver a high-quality hybrid experience, including livestreaming, AV setup, and real-time screen sharing",
      ],
    },
  ]
  
  const education = {
    degree: "Preparatory School Certificate",
    institution: "Egyptian Ministry of Education",
    year: "2025",
    description:
      "Achieved high academic performance in final year (Prep 3), demonstrating strong capabilities in mathematics, science, and problem-solving.",
  }


  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>My Journey</h2>
          <p className={styles.subtitle}>
            A timeline of my professional growth, education, and leadership
            experiences
          </p>
        </motion.div>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine}></div>

          <div className={styles.items}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${styles.item} ${
                  index % 2 === 0 ? styles.left : styles.right
                }`}
              >
                <div className={styles.node}></div>

                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <exp.icon className={styles.icon} />
                    </div>
                    <div className={styles.cardInfo}>
                      <div className={styles.period}>
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <p className={styles.company}>{exp.company}</p>
                      {exp.subtitle && (
                        <p className={styles.subtitleText}>{exp.subtitle}</p>
                      )}
                      <div className={styles.location}>
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className={styles.achievements}>
                    {exp.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>

                  <div className={styles.badge}>
                    {exp.type === "work"
                      ? "Work Experience"
                      : exp.type === "education"
                      ? "Education & Training"
                      : "Leadership & Volunteering"}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.educationCard}
          >
            <div className={styles.educationIcon}>
              <Award size={24} />
            </div>
            <h3>{education.degree}</h3>
            <p className={styles.institution}>{education.institution}</p>
            <p className={styles.year}>Graduated: {education.year}</p>
            <p className={styles.desc}>{education.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
