import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/CreateEvent.module.css";
const initialValues = {
  eventName: "",
  hostName: "",
  startTime: "",
  endTime: "",
  location: "",
};

const CreateEvent = () => {
  const [event, setEvent] = useState(initialValues);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
    console.log(event);
  };
  const NextPage = () => {
    navigate("/event", { event });
  };
  return (
    <div>
      <h1>Create Your Event</h1>
      <form className={styles.event}>
        <label htmlFor="img">Upload Event Image</label>
        <input type="file" name="image" accept=".jpeg, .png, .jpg" id="img" />
        <div className={styles.name}>
          <input
            type="text"
            name="eventName"
            value={event.eventName}
            placeholder="Yout Event Name"
            id="eName"
            onChange={(e) => changeHandler(e)}
          />
          <input
            type="text"
            name="hostName"
            value={event.hostName}
            placeholder="Host Name"
            id="hName"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className={styles.time}>
          <input
            type="text"
            name="startTime"
            value={event.startTime}
            placeholder="Set Start Time"
            id="sTime"
            onChange={(e) => changeHandler(e)}
          />
          <input
            type="text"
            name="endTime"
            value={event.endTime}
            placeholder="Set End Time"
            id="sTime"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <input
          type="text"
          name="location"
          value={event.location}
          placeholder="Location"
          onChange={(e) => changeHandler(e)}
        />
        <div className={styles.nextBtn}>
          <button onClick={NextPage}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
