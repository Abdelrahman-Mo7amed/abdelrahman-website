import React, { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css"; 
import {ExternalLink} from 'lucide-react'
import Project1 from '../../assets/project-1.png'
import Project2 from '../../assets/project-2.png'
import Project3 from '../../assets/project-3.jpg'
import Project4 from '../../assets/project-4.png'
import Project5 from '../../assets/project-5.png'
import Project6 from '../../assets/project-6.png'




export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Personal Website",
      description:
        "A modern and responsive personal website, It includes a hero section, about section, skills showcase, and a contact form — all styled with a clean and beautiful design to highlight my profile",
      image: Project1,
      technologies: ["HTML", "CSS", "JS"],
      liveUrl: "https://github.com/Abdelrahman-Mo7amed/my-website",
      githubUrl: "#",
      category: "Web Development",
    },
    {
      title: "📈 MarketPredictorX – Stock Market Analysis & Prediction Tool",
      description:
        "A Python tool for analyzing and visualizing stock trends. Features include real-time data retrieval, volatility checks, stock comparisons, and interactive charts for clear insights.",
      image: Project2,
      technologies: ["Python", "Matplotlib", "yFinance"],
      liveUrl: "https://github.com/Abdelrahman-Mo7amed/Stock-Predictor-Project",
      githubUrl: "#",
      category: "Data Analysis",
    },
    {
      title: "Amazon Electronics Sales Analysis",
      description: "Analyzed Amazon electronics sales data to uncover trends, top brands, and consumer behavior. Built interactive dashboards showing sales performance by year, category, and brand for data-driven insights.",
      image: Project3,
      technologies: ["Pandas", "Python", "Matplotlib", "Power BI"],
      liveUrl: "https://github.com/Abdelrahman-Mo7amed/amazon-sales-analysis",
      githubUrl: "#",
      category: "Data Analysis",
    },
    {
      title: "Employee Attrition Rate Analysis | IBM Internship",
      description:
        "Analyzed IBM employee data to identify key drivers of attrition and satisfaction, using Python and Power BI to deliver insights and recommendations for improving retention.",
      image: Project4,
      technologies: ["NumPy", "Pandas", "Python", "Excel"],
      liveUrl: "https://www.linkedin.com/posts/abdelrhmanmohmed_employees-attrition-project-activity-7174038135037669376-0W2N",
      githubUrl: "#",
      category: "Data Analysis",
    },
    {
      title: "Soldix Workshop – Creative Graphic Design Project",
      description: "Created marketing and social media designs for Soldix Workshop, featuring photo manipulations and visually appealing graphics to attract and engage the audience.",
      image: Project5,
      technologies: ["Adobe Photoshop", "Adobe Illustrator", ],
      liveUrl: "https://www.behance.net/gallery/144354301/My-Design-At-Soldix-Workshop",
      githubUrl: "#",
      category: "Graphic Design",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my skills, projects, and experiences. it highlights my work as a Data Analyst and Web Developer while providing an engaging user experience.",
      image: Project6,
      technologies: ["React.JS", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Development",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" ref={sectionRef} className={styles.portfolioSection}>
    <div
      className={`${styles.portfolioContainer} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.portfolioHeader}>
        <span className={styles.portfolioBadge}>Portfolio</span>
        <h2 className={styles.portfolioTitle}>Featured Projects</h2>
        <p className={styles.portfolioSubtitle}>
          A showcase of my Data Analysis, Web Development, and Graphic Design projects
        </p>
      </div>

      {/* 🔹 Tabs */}
      <div className={styles.tabs}>
        {["All", "Data Analysis", "Web Development", "Graphic Design"].map(
          (tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* 🔹 Projects Grid */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techList}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              <div className={styles.projectButtons}>
              <a
                href={project.liveUrl}
                className={styles.btn}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={16} className={styles.icon} />
                <span>Preview</span>
              </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
