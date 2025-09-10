import { motion } from "framer-motion";
import styles from "./About.module.css";
import aboutImg from "../../assets/about-img.jpg";
import React from "react";
import { TrendingUp, Users, Award, Target } from "lucide-react";
import cvFile from '../../assets/cv.pdf'

function About() {
  const skills = ["Python", "SQL", "Tableau", "Power BI", "Excel", "R", "Machine Learning"];
  const achievements = [
    { icon: TrendingUp, value: "10+", label: "Projects Completed" },
    { icon: Users, value: "6+", label: "Clients Served" },
    { icon: Award, value: "3+", label: "Years Experience" },
    { icon: Target, value: "95%", label: "Client Satisfaction" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <section className={styles.about} id="about">
        <div className={styles.container}>
          {/* ==== Left Image ==== */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={aboutImg} alt="About Me" className={styles.aboutImg} />
          </motion.div>

          {/* ==== Right Content ==== */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.heading}>About Me</h2>
            <p className={styles.text}>
              I’m Abdelrahman Mohamed, a Web Developer & Data Analyst from Egypt. I love turning
              data into insights and building user-friendly digital solutions. With internship
              experience at IBM and CodeAlpha, and a background from STEM School for Boys and ALX, I
              combine problem-solving, teamwork, and creativity to deliver impactful work.
            </p>

            {/* ==== Skills Tags ==== */}
            <div className={styles.skills}>
              {skills.map((skill) => (
                <span key={skill} className={styles.badge}>
                  {skill}
                </span>
              ))}
            </div>

            {/* ==== Fact Cards ==== */}
            <div className={styles.achievements}>
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className={styles.achievementCard}>
                  <Icon className={styles.icon} />
                  <div className={styles.value}>{achievement.value}</div>
                  <div className={styles.label}>{achievement.label}</div>
                </div>
              );
            })}
            </div>

            {/* ==== CTA Buttons ==== */}
            <div className={styles.cta} >
              <a href={cvFile} download="Abdelrahman-CV.pdf" className={`${styles.btn} ${styles.primary}`}>
                Download CV
              </a>
                <button
                  className={`${styles.btn} ${styles.secondary}`}
                  onClick={() => scrollToSection("contact")}
                >
                  Let's Talk
                </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
