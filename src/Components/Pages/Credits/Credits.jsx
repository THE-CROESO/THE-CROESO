import React from 'react'
import "./credits.scss"
import rakibul from "./rakibul.jpg"
import rijiya from "./rijiya.jpeg"
import abhiyaan from "./abhiyaan.jpeg"
import { motion } from 'framer-motion'




export default function Credits() {
  return (
    <div className='credits'>
      <div className='developers-heading'>
          <motion.h1 initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Developers</motion.h1>
      </div>


      <motion.div initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}} className="developers">

        <div className="card">
          <a href="https://www.instagram.com/sky.walk3r__/">
            <img src={rakibul} alt="" />
          </a>
          <div className="about">
            <h3>Rakibul Islam Mondal</h3>
            <p>CSE 2nd Year</p>
            <p>Web Developer</p>

          </div>

        </div>
      </motion.div>

      <motion.div initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}} className="developers">

      <div className="card">
        <a href="https://www.instagram.com/rijiya_khan/">
        <img src={rijiya} alt="" />
        </a>
        <div className="about">
          <h3>Rijiya Sultana</h3>
          <p>ECE 2nd Year</p>
          <p>Programmer</p>

        </div>

      </div>
    </motion.div>

    <motion.div initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}} className="developers">

<div className="card">
  <a href="https://www.instagram.com/abhiyaan_mahato?igsh=NHFrZng3dnowYnhy">
    <img src={abhiyaan} alt="" />
  </a>
  <div className="about">
    <h3>Aabhiyan Mahato</h3>
    <p>CSE 2nd Year</p>
    <p>Video Editor</p>

  </div>

</div>
</motion.div>

    </div>
  )
}
