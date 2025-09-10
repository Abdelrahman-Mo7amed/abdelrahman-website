import React, { useState } from "react";
import styles from "./TestimonialForm.module.css";
import { Star } from "lucide-react";

export default function TestimonialForm({ onSubmit }) {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    content: "",
    rating: 5,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.content) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    onSubmit(formData); // هيبعتها للـ parent component بعدين (عشان نربط مع Firebase)
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      content: "",
      rating: 5,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Share Your Experience</h3>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.row}>
        <div className={styles.field}>
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className={styles.field}>
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company name"
          />
        </div>
        <div className={styles.field}>
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Your role"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label>Your Testimonial *</label>
        <textarea
          name="content"
          rows="4"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your feedback here..."
          required
        />
      </div>

      <div className={styles.field}>
        <label>Rating *</label>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`${styles.star} ${
                star <= formData.rating ? styles.active : ""
              }`}
              onClick={() => handleRatingChange(star)}
            >
              <Star size={22} />
            </span>
          ))}
        </div>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Submit Testimonial
      </button>
    </form>
  );
}
