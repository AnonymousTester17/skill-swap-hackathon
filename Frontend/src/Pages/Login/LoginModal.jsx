import React from "react";
import styles from "./LoginModal.module.css";
import { FaGoogle, FaTimes } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

const LoginModal = ({ show, onHide }) => {
  if (!show) {
    return null;
  }

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_SERVER_URL}/auth/google` || "/auth/google";
  };

  return (
    <div className={styles.modalOverlay} onClick={onHide}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onHide}>
          <FaTimes />
        </button>
        <h1>LOGIN</h1>
        <div className={styles.security}>
          <MdOutlineSecurity />
        </div>
        <button className={styles.googleButton} onClick={handleGoogleLogin}>
          <FaGoogle style={{ marginRight: "10px" }} /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
