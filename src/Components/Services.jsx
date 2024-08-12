import React from "react";
import Styles from "../Components/Services.module.css";
import Frank from "../Images/frank.png";
import Eric from "../Images/Eric.png";
import Nana from "../Images/nana.png";
import Mark from "../Images/mark.png";
import Eben from "../Images/eben.png";
import Fade from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const Services = () => {
  return (
    <section className={Styles.Container}>
      <div className={Styles.Box} >
        <div className={Styles.head}>
          <h4>LEADERS</h4>
        </div>
        <div className={Styles.first}>
          <img src={Eric} alt="" />
          <img src={Nana} alt="" />
        </div>
        <div className={Styles.second}>
          <img src={Mark} alt="" />
          <img src={Eben} alt="" />
          <img src={Frank} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Services;
