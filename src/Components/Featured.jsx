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

const Featured = () => {
  return (
    <section className={Styles.Container}>
      
        
        <div className={Styles.Box}>
          <img src={CHIL} alt='' width="450px"/>
        </div>
       
        <div className={Styles.Box}>
        <img src={CHURCH} alt='' width="450px"/>
        </div>
        
        
        <div className={Styles.Box}>
        <img src={OUT} alt='' width="450px"/>
        </div>
        
    </section>
  )
}

export default Featured