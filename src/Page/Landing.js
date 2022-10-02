import React from "react";
import styles from "../style/Landing.module.css";
import LandingImg from "../assets/Images/Landing.png";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();

  const handleEvent = () => {
    navigate("/create");
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h1 className={styles.headline}>
            <span>Imagine if</span>
            <span className={styles.highlight}>Snapchat</span>
            <span>had events.</span>
          </h1>
          <p>
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>

        <div className={styles.imgSection}>
          <img src={LandingImg} alt="event demo details" />
        </div>
        <div className={styles.createBtn}>
          <button onClick={handleEvent}>🎉 Create my event</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
