import React from 'react'
import "./letMeet.scss"
import insta from  "/src/assets/img/LOGO.png"
import confession from "./confession.jpg"
import spicy from "./spicy.jpg"
import { motion } from 'framer-motion'


export default function LetsMeet() {
  return (
    <div className='contact'>
      <motion.div initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}} className='contact-heading'> <h1>Let's Meet !</h1></motion.div>
      
      <div className='main-container'>
        <motion.div className='social-media' initial={{scale:0,x:-150}} whileInView={{x:0,scale:1,transition:{duration:1.5}}}>
          <h3 style={{color:"aqua"}}>Follow Our Social Media</h3>

          <div className='croeso2k24'>
            <a href="https://www.instagram.com/cgec_croeso_2k24/">
              <img src={insta} width="50px" alt="" />
              <p style={{color: "aqua"}}>Croeso 2K24</p>
            </a>
            
          </div>

          <h4>Some of CGEC Famouse Social Media</h4>

          <div  className='croeso2k24'>
            <div>
            <a href="https://www.instagram.com/cgec_confessions/">
            <img style={{borderRadius:"50%"}} src={confession} width="50px" alt="" />
            <p style={{color:"goldenrod"}}>Croeso 2K24</p>
            </a>
            </div>
            <div>
            <a href="https://www.instagram.com/dank_xgec/">
            <img style={{borderRadius:"50%"}} src={spicy} width="50px" alt="" />
            <p style={{color:"gray"}}>???</p>
            </a>
            </div>
          </div>
          
        </motion.div>

        <motion.div className="form" initial={{scale:0,x:150}} whileInView={{x:0,scale:1,transition:{duration:1.5}}}>

          <button><a style={{color:"orangered"}} href="https://forms.gle/UtKNDCiZUsDB43tq6">Click Me</a></button>

        </motion.div>
      </div>
    </div>
  )
}
