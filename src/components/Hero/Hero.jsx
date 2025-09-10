import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import styles from "./Hero.module.css";
import heroImg from "../../assets/profile.png"; 
import heroBg from "../../assets/hero-bg.jpg";
import Socials from '../Socials/Socials.jsx'
import cvFile from "../../assets/cv.pdf";


function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
      id="home"
    >
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        {/* Left Content */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.hello}>
            <ReactTyped
              strings={["Hi, I'm Abdelrahman Mohamed 👋","I'm Data Analyst and Web Developer", "Welcome to my portfolio 🚀", "I help businesses grow by turning data into..", "insights and building modern web solutions."]}
              typeSpeed={45}
              backSpeed={20}
              loop
            />
          </h2>

          <h1 className={styles.title}>
            Data Analyst <br /><span>& Web Developer</span>
          </h1>

          <p className={styles.bio}>
          I help transform data into meaningful insights and create sleek, responsive websites that bring ideas to life. By combining analysis with design, I deliver solutions that are both smart and impactful.</p>
          <hr className={styles.divider} />

          {/* Socials */}
          <Socials />

          {/* CTA Buttons */}
          <div className={styles.cta}>
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

        {/* Right Content */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImg} alt="Profile" className={styles.profileImg} />
        </motion.div>
      </div>
    </section>
  );
}


export default Hero;