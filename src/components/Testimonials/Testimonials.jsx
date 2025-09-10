import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";
import { ArrowLeft, ArrowRight, PlusCircle, Star, X } from "lucide-react";
import TestimonialForm from "./TestimonialForm";
import { db } from "../../firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  const staticTestimonials = [
    {
      name: "Amr Islam Farahat",
      role: "Community Manager",
      company: "ALX",
      content:
        "Abdelrahman transformed our marketing data into actionable insights that increased our ROI by 40%.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=amr",
    },
    {
      name: "Hady Amin",
      role: "Founder",
      company: "Elv8",
      content:
        "Working with Abdelrahman was a game-changer. His predictive models reduced customer churn by 25%.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=hady",
    },
    {
      name: "Mohamed Mamdouh",
      role: "CoFounder",
      company: "Elv8",
      content:
        "The supply chain analysis saved us thousands. Abdelrahman explains complex data simply.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=mohamed",
    }
  ];
  
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth <= 640) {
        setCardsPerSlide(1);
      } else if (window.innerWidth <= 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };

    updateCardsPerSlide(); 
    window.addEventListener("resize", updateCardsPerSlide);

    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        const firebaseTestimonials = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestimonials([...staticTestimonials, ...firebaseTestimonials]);
      } catch (err) {
        console.error("Error fetching testimonials: ", err);
      }
    };

    fetchTestimonials();
  }, []);

  const handleFormSubmit = async (data) => {
    const newTestimonial = {
      ...data,
      avatar: `https://api.dicebear.com/7.x/identicon/svg?seed=${data.name || "user"}`,
    };

    try {
      await addDoc(collection(db, "testimonials"), newTestimonial);

      setTestimonials((prev) => [...prev, newTestimonial]);
      setShowForm(false);
    } catch (err) {
      console.error("Error adding testimonial: ", err);
    }
  };

  const totalCards = [{ addCard: true }, ...testimonials];

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - cardsPerSlide < 0
        ? Math.max(totalCards.length - cardsPerSlide, 0)
        : prev - cardsPerSlide
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerSlide >= totalCards.length ? 0 : prev + cardsPerSlide
    );
  };

  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <h2 className={styles.title}>What Clients Say</h2>
      <div className={styles.slider}>
        <button onClick={prevSlide} className={styles.navBtn}>
          <ArrowLeft size={24} />
        </button>

        <div className={styles.cardsWrapper}>
          <div
            className={styles.cardsTrack}
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)`,
            }}
          >
            {totalCards.map((t, index) =>
              t.addCard ? (
                <div
                  key={index}
                  className={`${styles.card} ${styles.addCard}`}
                  onClick={() => setShowForm(true)}
                >
                  <PlusCircle size={40} className={styles.plusIcon} />
                  <p>Add Your Opinion</p>
                </div>
              ) : (
                <div key={index} className={styles.card}>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < t.rating ? styles.starFilled : styles.starEmpty}
                      />
                    ))}
                  </div>
                  <p className={styles.content}>"{t.content}"</p>
                  <div className={styles.user}>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className={styles.avatar}
                    />
                    <div className={styles.userInfo}>
                      <h4>{t.name}</h4>
                      <small>{t.role}</small>
                      {t.company && <small> - {t.company}</small>}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <button onClick={nextSlide} className={styles.navBtn}>
          <ArrowRight size={24} />
        </button>
      </div>

      {showForm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button
              className={styles.closeBtn}
              onClick={() => setShowForm(false)}
            >
              <X size={22} />
            </button>
            <TestimonialForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </section>
  );
}
