import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaYoutube, FaBehance } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          {/* Quick Navigation */}
          <div className={styles.column}>
            <h4 className={styles.title}>Quick Links</h4>
            <ul className={styles.list}>
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    className={styles.link}
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className={styles.columnCenter}>
            <h4 className={styles.title}>Let's Connect</h4>
            <div className={styles.socials}>
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/abdelrhmanmohmed/" },
                { icon: FaGithub, href: "https://github.com/Abdelrahman-Mo7amed" },
                { icon: FaTwitter, href: "https://x.com/abr7maan" },
                { icon: FaFacebook, href: "https://www.facebook.com/itz.boudii" },
                { icon: FaBehance, href: "https://www.behance.net/boudymohamed1" },
                { icon: FaYoutube, href: "https://www.youtube.com/@taalimhub" },
              ].map((social, index) => (
                <a key={index} href={social.href} className={styles.socialIcon}>
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className={`${styles.column} ${styles.textRight}`}>
            <h4 className={styles.title}>Abdelrahman Mohamed</h4>
            <p className={styles.bio}>
              I’m Abdelrahman Mohamed, a Data Analyst from Egypt with a strong
              foundation in data science, machine learning, and business
              intelligence. With hands-on experience from internships at IBM.
              Beyond data, I’m a passionate lifelong learner with creative skills
              in Web Development and Graphic Design.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Abdelrahman Mohamed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
