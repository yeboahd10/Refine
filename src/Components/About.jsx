import React from 'react'
import phone from '../Images/phone.png'
import Styles from '../Components/About.module.css'
import { Zoom } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section className={Styles.container}>
        
        <div className={`${Styles.content} ${Styles.Box}`}>
            <h4 className={Styles.title}>CONTACT US </h4>
            <p className={Styles.desc}>REFINER'S INTERNATIONAL MISSIONS (RIM - SANTASI MISSIONS) <br></br>
            PROPHET NANA AKWASI OWUSU (RIM: GHANA - AFRICA OVERSEER)<br></br>
            +233 24 470 5518<br/>
            Kumasi , Ghana
            </p>
            <br/><br/>
            <p className={Styles.desc}>REFINER'S INTERNATIONAL MISSIONS (RIM - AKUMADAN MISSIONS) <br></br>
            PROPHET NANA AKWASI OWUSU (RIM: GHANA - AFRICA OVERSEER)<br></br>
            +233 24 844 9715 / +233 54 473 0918<br/>
            Akumadan , Ghana
            </p>
            <br/><br/>
            <p className={Styles.desc}>REFINER'S INTERNATIONAL MISSIONS (RIM - UK MISSIONS) <br></br>
            REV FRANK ACHEAMPONG (RIM: UK - EUROPE OVERSEER)<br></br>
            +447507253071<br/>
            UK, EUROPE
            </p>
            
        </div>
        
    </section>
  )
}

export default About