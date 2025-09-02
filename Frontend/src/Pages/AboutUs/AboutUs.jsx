import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutContainer}>
      <h2 id="about-us" className={styles.titleStyle}>About Us</h2>
      <div className={styles.content1Container}>
        <div className={styles.contentContainerStyle}>
          <p className={styles.descriptionStyle}>
            &#8680; As students, we often spend heavily on certifications to upskill. SkillSwap solves this by enabling
            learning, knowledge-sharing, and networking with talented peers.
          </p>
          <p className={styles.descriptionStyle}>
            &#8680; At SkillSwap, we believe in the power of learning and sharing knowledge. Our platform connects people from
            diverse backgrounds to exchange practical skills. Whether you’re mentoring or learning, SkillSwap offers a
            supportive space for growth and collaboration.
            <br />
            <br />
            &#8680; Our mission is to empower individuals to unlock their potential through skill sharing. We foster lifelong
            learning and meaningful connections, building a community where everyone can thrive.
          </p>
        </div>
        <img src={"/assets/images/about.svg"} className={styles.imageContainerStyle} />
      </div>
    </section>
  );
};

export default AboutUs;
