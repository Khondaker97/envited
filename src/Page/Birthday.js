import React from "react";
import { useLocation } from "react-router-dom";
//styles
import styles from "../style/Birthday.module.css";
//icons
import { MdArrowForwardIos } from "react-icons/md";
import Location from "../assets/icons/Location.png";
import Calendar from "../assets/icons/Calendar.png";

import EventImage from "../assets/Images/EventImage.png";

const Birthday = () => {
  const location = useLocation();
  console.log(location.state);
  const { eventName, hostName, startTime, endTime, address } = location.state;
  return (
    <div className={styles.Container}>
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <div className={styles.host}>
            <h1 className={styles.eventName}>{eventName}</h1>
            <h3>
              Hosted by <span className={styles.name}> {hostName}</span>
            </h3>
          </div>

          <ul className={styles.eventSchedule}>
            <li>
              <div className={styles.image}>
                <img src={Calendar} alt="calendar" />
              </div>
              <div className={styles.date}>
                <p className="from">{startTime}</p>
                <p className="to">
                  to <b>{endTime}</b>UTC + 10
                </p>
              </div>
              <MdArrowForwardIos />
            </li>
            <li>
              <div className={styles.image}>
                <img src={Location} alt="location" />
              </div>
              <div className={styles.location}>
                <p>Street Name</p>
                <p className="address">{address}</p>
              </div>
              <MdArrowForwardIos />
            </li>
          </ul>
        </div>
        <div className={styles.eventImg}>
          <img src={EventImage} alt="host" />
        </div>
      </div>
    </div>
  );
};

export default Birthday;
