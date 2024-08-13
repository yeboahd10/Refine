import React from 'react'
import Styles from '../Components/Featured.module.css'
import Lottie from 'lottie-react'
import code from '../Components/animation/code.json'
import phone from '../Components/animation/phone.json'
import last from '../Components/animation/third.json'
import { Slide } from "react-awesome-reveal";
import CHIL from "../Images/chil.png";
import CHURCH from "../Images/church.png";
import OUT from "../Images/out.png";
import PROG from "../Images/apos.png";
import IVAS from "../Images/invas.png";
import { Zoom } from "react-awesome-reveal";
import Fade from "react-awesome-reveal";

const Featured = () => {
  return (
    <section className={Styles.Container}>
      
        <Fade duration={500}>
        <div className={Styles.Box}>
          <img src={CHIL} alt='' width="450px"/>
        </div>
       
        <div className={Styles.Box}>
        <img src={CHURCH} alt='' width="450px"/>
        </div>
        
        
        <div className={Styles.Box}>
        <img src={OUT} alt='' width="450px"/>
        </div>
        <div className={Styles.Box}>
        <img src={PROG} alt='' width="450px"/>
        </div>
        <div className={Styles.Box}>
        <img src={IVAS} alt='' width="450px"/>
        </div>
        </Fade>
    </section>
  )
}

export default Featured