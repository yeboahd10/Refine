import React from "react";
import Pic from "../Images/kl.png";
import LOG from "../Images/LOG.png";
import Styles from "../Components/Home.module.css";
import { Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <Slide direction="left" duration="2000">
          <h1 className={Styles.title}>Hi, Welcome to RIM</h1>
          <p className={Styles.desc}>
            Welcome to Refiner's International Missions (RIM), a friendly family
            church where faith, community, and love unite to create a warm and
            welcoming environment. Explore our website to join us on a journey
            of faith, service, and fellowship. At RIM, we are dedicated to
            spreading love, compassion, and hope worldwide, guiding individuals
            towards spiritual growth and community support. Join our global
            family, get involved, and make a positive impact with us. We look
            forward to connecting with you and sharing the joy of our faith
            community.<br/><br/> Warm regards, The RIM Family
          </p>
        </Slide>
        
      </div>
      <Slide direction="down" duration="2000">
        <img src={LOG} alt="Picture" className={Styles.image} />
      </Slide>
    </section>
  );
};

export default Home;
