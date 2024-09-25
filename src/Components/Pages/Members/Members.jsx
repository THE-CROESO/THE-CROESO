import React from 'react'
import "./member.scss"
import rijiya from "./rijiya.jpeg"
import rakibul from "./rakibul.jpg"
import sid from "./sid.jpeg"
import sakil from "./sakil.jpeg"
import sajal from "./sajal.jpeg"


import members from '../../../assets/membersInfo'
import { motion } from 'framer-motion'

export default function Members() {
  return (
    <div className='members'>
      <div className="heading">
        <h1 className='meet' data-text="Meet">Meet</h1>
        <h1 className='our' data-text="Our">Our</h1>
        <h1 className='mem' data-text="Members">Members</h1>
      </div>

      <div className='line'></div>


      <section className="technical">
        <section className="lead" style={{paddingBottom:"40px"}}>
            <motion.div initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1}}} className="card">
              <img src={rakibul}  alt="" />
              <h4>Rakibul Islam Mondal</h4>
              <p>CSE 2nd Year</p>
              <div className='contact-me'>
                <a href="https://www.instagram.com/sky.walk3r__/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100076122900924"><i className="fa-brands fa-facebook"></i></a>
              </div>
            </motion.div>
            <motion.div initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1}}} className="card">
              <img src={rijiya}  alt="" />
              <h4>Rijiya Sultana</h4>
              <p>ECE 2nd Year</p>
              <div className='contact-me'>
                <a href="https://www.instagram.com/rijiya_khan?igsh=MTlqY2ZwanlydWw4YQ=="><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100025542847051&mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a>
              </div>
            </motion.div>
            <motion.div initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1}}} className="card">
              <img src={sakil}  alt="" />
              <h4>Sakil Mondal</h4>
              <p>ECE 2nd Year</p>
              <div className='contact-me'>
                <a href="https://www.instagram.com/sky.walk3r__/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100076122900924"><i className="fa-brands fa-facebook"></i></a>
              </div>
            </motion.div>
            <motion.div initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1}}} className="card">
              <img src={sid}  alt="" />
              <h4>Siddhartha Bag</h4>
              <p>CSE 2nd Year</p>
              <div className='contact-me'>
                <a href="https://www.instagram.com/siddh_art_ha_21/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/siddhartha.bag.7946"><i className="fa-brands fa-facebook"></i></a>
              </div>
            </motion.div>
            <motion.div initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1}}} className="card">
              <img src={sajal}  alt="" />
              <h4>Sajal Sarkar</h4>
              <p>EE 2nd Year</p>
              <div className='contact-me'>
                <a href="https://www.instagram.com/_life_charlie/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100052244535902"><i className="fa-brands fa-facebook"></i></a>
              </div>
            </motion.div>
            
          </section>
          <section className="other-Member">
            {members.map(mem=>(
              <motion.div initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1}}} className="card" key={ mem.id}>
                <img src={ mem.img}  alt="" />
                <h4>{ mem.name}</h4>
                <p>{ mem.dept} 2nd Year</p>
                <div className='contact-me'>
                  <a href={ mem.insta }><i className="fa-brands fa-instagram"></i></a>
                  <a href={ mem.facebook }><i className="fa-brands fa-facebook"></i></a>
                </div>
              </motion.div>
            ))}
            
          </section>
      </section>


      {/* <section className='accounts'></section>
      <section className='food'></section>
      <section className='decoration'></section>
      <section className='cultural'></section>
      <section className="sponsor"></section>
      <section className="security"></section>
      <section className='content-social'></section> */}

     
    </div>
  )
}
