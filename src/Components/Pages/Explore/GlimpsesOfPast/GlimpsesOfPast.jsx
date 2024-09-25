import React from 'react'
import "./glimpsesOfPast.scss"
import { motion } from 'framer-motion'

import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"


export default function GlimpsesOfPast() {
  return (
    
    <section class="container">
      <motion.h1 initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Walkthrough Croeso 5.0</motion.h1>
      <motion.div initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1}}} class="slider-wrapper">
        <div class="slider">
          <img id="slide-1"  src={image1} alt='' />
          <img id="slide-2" src={image2} alt=''/>
          <img id="slide-3" src={image3} alt='' />
          <img id="slide-4" src={image4} alt="" />
        </div>
        <div class="slider-nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
          <a href="#slide-4"></a>
        </div>
      </motion.div>
</section>
  )
}
