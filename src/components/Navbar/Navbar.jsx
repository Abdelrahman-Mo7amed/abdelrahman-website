import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1190);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const brand = "Abdelrahman".split("");
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Opinions" },
  ];

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* Brand Animation */}
      <motion.h1
        className={styles.brand}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
        }}
      >
        {brand.map((ch, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 12, filter: "blur(2px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
          >
            {ch}
          </motion.span>
        ))}
      </motion.h1>

      {/* Desktop Links */}
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.id}>
            <button
              className={styles.linkBtn}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Desktop Actions */}
      <div className={styles.actions}>
        <button
          className={`${styles.btn} ${styles.primary}`}
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </button>

        <ToggleTheme />

        {/* Hamburger (mobile only) */}
        <div
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.ul
            className={`${styles.mobileMenu}`}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          >
            {links.map((link, i) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <button
                  className={styles.linkBtn}
                  onClick={() => {
                    setIsOpen(false); // ✅ close menu first
                    setTimeout(() => scrollToSection(link.id), 300); // ✅ small delay for smooth exit
                  }}
                >
                  {link.label}
                </button>
              </motion.li>
            ))}

            <motion.div
              className={styles.mobileActions}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button
                className={`${styles.btn} ${styles.primary}`}
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => scrollToSection("contact"), 300);
                }}
              >
                Contact Me
              </button>

              <ToggleTheme />
            </motion.div>
          </motion.ul>
        )}
      </AnimatePresence>

    </nav>
  );
}
