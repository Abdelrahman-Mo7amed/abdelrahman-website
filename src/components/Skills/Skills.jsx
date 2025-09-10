import React, { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Database,
  PieChart,
  TrendingUp,
  FileSpreadsheet,
  Brain,
  Code,
  Activity,
  Search,
  Cpu,
  Settings,
} from "lucide-react";

import styles from "./Skills.module.css";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateSkills(true), 300);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Python", level: 95, icon: Code, category: "Data Analysis" },
    { name: "SQL", level: 90, icon: Database, category: "Data Analysis" },
    { name: "Power BI", level: 85, icon: PieChart, category: "Data Analysis" },
    { name: "Excel", level: 80, icon: FileSpreadsheet, category: "Tools" },
    { name: "Photoshop", level: 92, icon: FileSpreadsheet, category: "Tools" },
    { name: "HTML, CSS, JS", level: 80, icon: TrendingUp, category: "Web Development" },
    { name: "ReactJS", level: 80, icon: TrendingUp, category: "Web Development" },
    { name: "Machine Learning", level: 82, icon: Brain, category: "AI/ML" },
    { name: "Statistical Analysis", level: 88, icon: Activity, category: "Data Analysis" },
    { name: "TensorFlow", level: 75, icon: Cpu, category: "AI/ML" },
    { name: "Jupyter Notebooks", level: 90, icon: Settings, category: "Tools" },
  ];

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" ref={sectionRef} className={styles.skillsSection}>
      <div className={`${styles.skillsContainer} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.skillsHeader}>
          <span className={styles.skillsBadge}>Skills & Expertise</span>
          <h2 className={styles.skillsTitle}>Technical Proficiency</h2>
          <p className={styles.skillsSubtitle}>
            A comprehensive toolkit of data analysis, visualization, and machine learning technologies
          </p>
        </div>

        <div>
          {categories.map((category, catIndex) => (
            <div
              key={category}
              className={`${styles.skillsCategory} ${isVisible ? styles.show : ""}`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.skillsGrid}>
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`${styles.skillCard} ${animateSkills ? styles.animate : ""}`}
                      style={{ transitionDelay: `${catIndex * 150 + index * 100}ms` }}
                    >
                      <div className={styles.skillHeader}>
                        <div className={styles.skillIcon}>
                          <skill.icon size={24} color="#fff" />
                        </div>
                        <h4>{skill.name}</h4>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div
                          className={styles.progressFill}
                          style={{ width: animateSkills ? `${skill.level}%` : "0%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
