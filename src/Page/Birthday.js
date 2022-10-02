import React from "react";
import styles from "../style/Birthday.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import Location from "../assets/icons/Location.png";
import Calendar from "../assets/icons/Calendar.png";
const Birthday = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <div className={styles.host}>
            <h1 className={styles.eventName}>Birthday Bash</h1>
            <h3>
              Hosted by<span className={styles.name}>Elysia</span>
            </h3>
          </div>

          <ul>
            <li>
              <img src={Calendar} alt="calendar" />
              <div className={styles.date}>
                <p className="from">18 August 6:00PM</p>
                <p className="to">
                  to <b>19 August 1:00PM</b>UTC + 10
                </p>
              </div>
              <MdArrowForwardIos />
            </li>
            <li>
              <img src={Location} alt="location" />
              <div className={styles.location}>
                <p>Street Name</p>
                <p className="address">301 Rowes Lane, WA, 7183</p>
              </div>
              <MdArrowForwardIos />
            </li>
          </ul>
        </div>
        <div className={styles.eventImg}>
          <img src="" alt="host" />
        </div>
      </div>
    </div>
  );
};

export default Birthday;
