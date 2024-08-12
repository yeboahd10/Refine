import React from "react";
import Styles from "../Components/Courses.module.css";
import AKOM from "../Images/akom.png";
import SCH from "../Images/last.png";
import { Roll } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { FaMapLocation } from "react-icons/fa6";
import { FcConferenceCall } from "react-icons/fc";

const Courses = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.title}>
        
      </div>
      <Zoom duration={500}>
      <div className={Styles.first}>
        <div className={Styles.Box}>
          <h2>
            RIM SANTASI MISSIONS
            <br />
            (HEADQUATERS)
          </h2>
          <FaMapLocation color="Red" size={50} />
          <p>SANTASI M/A BASIC SCHOOL</p>

          <img src={SCH} width="350px" height="100px" className={Styles.one}/>
        </div>
        <div className={Styles.Box}>
          <h2>
            RIM AKUMADAN 
            <br/>
            MISSIONS
          </h2>
          <FaMapLocation color="Red" size={50} />
          <p>KUNESO D/A BASIC SCHOOL</p>

          <img src={AKOM} width="350px" height="100px"  />
        </div>
        <div className={Styles.Box}>
          <h2>
            RIM ONLINE
            <br/>
            SERVICE
          </h2>
          <FcConferenceCall  color="Red" size={50} />
          <p>CONFERENCE CALL</p>
          <h2>
            MONDAYS- 7:00PM-9PM<br/>
            WEDNESDAYS- 7:00PM-9PM
          </h2>
          <p>WhatsApp Conference Call- 0244705518</p>
          
        </div>
        
      </div>
      </Zoom> 
    </section>
  );
};

export default Courses;
