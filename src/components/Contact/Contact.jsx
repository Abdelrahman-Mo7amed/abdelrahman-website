import { useEffect, useRef, useState } from "react"
import styles from "./Contact.module.css"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { db } from "../../firebase"  
import { collection, addDoc, Timestamp } from "firebase/firestore"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // ✅ form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      })
      setStatus("✅ Message sent successfully!")
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error adding contact: ", error)
      setStatus("❌ Failed to send message, please try again.")
    }
  }

  // ✅ Auto-hide status after 4 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 4000)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <section id="contact" ref={sectionRef} className={styles.section}>
      <div className={`${styles.inner} ${isVisible ? styles.visible : styles.hidden}`}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Get In Touch</span>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.subtitle}>
            Ready to transform your data into actionable insights? Let’s discuss your project and how I can help drive your business forward.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Side */}
          <div>
            {/* Contact Info */}
            <div>
              <h3 className={styles.sectionTitle}>Contact Information</h3>
              <div className={styles.row}>
                <Mail className={styles.icon} />
                <span>abdelrahmanmohamedhafez83@email.com</span>
              </div>
              <div className={styles.row}>
                <Phone className={styles.icon} />
                <span>+20 111 972 7579</span>
              </div>
              <div className={styles.row}>
                <MapPin className={styles.icon} />
                <span>Cairo, Egypt</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className={styles.sectionTitle}>Services Offered</h3>
              <div className={styles.services}>
                {[
                  "Data Analysis",
                  "Business Intelligence",
                  "Predictive Modeling",
                  "Data Visualization",
                  "Statistical Analysis",
                  "Machine Learning",
                  "Dashboard Development",
                  "Data Mining",
                ].map((service) => (
                  <span key={service} className={styles.serviceBadge}>
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Send a Message</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.double}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Tell me about your project and how I can help..."
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className={styles.button}>
                <Send size={16} />
                Send Message
              </button>
            </form>

            {/* ✅ Status message */}
            {status && (
              <p
                className={`${styles.status} ${
                  status.startsWith("✅") ? styles.success : styles.error
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
