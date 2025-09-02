import styles from "./Footer.module.css";
const Footer = () => {
  return (
      <div className={styles.footer}>
          <div className={styles.footerTop}>
            <div className={styles.footerLeft}>
              <h2 className={styles.footerTitle}>
                SKILL SWAP
              </h2>
              <p style={{ color: "var(--secondary-bg)" }}>
                Free, Open Source decentralized <br />
                Skills Exchanging Platform
              </p>
            </div>

            <div className={styles.footerRight}>
              <ul className={styles.list}>
                <li className={styles.footerHeading}>Programs</li>
                <li>Become a Mentor</li>
                <li>Learn from Community</li>
                <li>Exchange a Skill</li>
              </ul>
              <ul className={styles.list}>
                <li className={styles.footerHeading}>Resources</li>
                <li>Source Code</li>
                <li>Blog</li>
                <li>Support</li>
              </ul>
              <ul className={styles.list}>
                <li className={styles.footerHeading}>Company</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Collaboration</li>
              </ul>
            </div>
          </div>
          
          <hr className={styles.line}/>

          <div>
            <div className={styles.copy}>
              Copyright &copy; 2025 SkillSwap. All rights reserved.
            </div>
          </div>
      </div>
  );
};

export default Footer;