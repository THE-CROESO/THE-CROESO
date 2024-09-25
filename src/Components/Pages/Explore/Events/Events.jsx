import React from 'react'
import "./events.scss"
import image1 from "./Inauguration-Ceremony.jpg"
import madhu from "./Madhu.jpeg"
import speech from "./speech.jpg"
import dj from "./dj.jpg"
import dance from "./dance.jpg"
import intro from "./intro.jpg"
import { motion } from 'framer-motion'



export default function Events() {
  return (
    <div className='events' id='all' >
      <div className="event-headline">
        <motion.h2 initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Events!!</motion.h2>
      </div>

      <div className="event12">

        <div id='event-card1'>
          <motion.img initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}  src={image1} width={"100px"} alt="" />
            <div className='event-content'>
                <motion.h3 initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Inauguration Ceremony</motion.h3>
                <motion.p initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>The grand inauguration of CROESO 2K24 will commence with the lighting of the lamp by esteemed dignitaries, including the chief guests, principal sir, and other faculty members. This auspicious ritual will set the tone for a memorable and successful event.</motion.p>
            </div>
        </div>

        <div id='event-card2'>
              <div className='event-content'>
                  <motion.h3 initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Speech</motion.h3>
                  <motion.p initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Speeches from the principal, registrar, and other guests will follow, highlighting the importance of the event and offering words of encouragement to the new students.</motion.p>
              </div>
              <motion.img initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}} src={speech} width={"100px"} alt="" />
        </div>

      </div>

      <div className="event12">

        <div id='event-card3'>
          <motion.img initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}} src={madhu} width={"100px"} alt="" />
            <div className='event-content'>
                <motion.h3 initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Informative Session and Icebreaker</motion.h3>
                <motion.p initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Join us for an informative session where our experienced seniors will be interacting with the freshers. Engage in interactive icebreaker activities to connect with your fellow students and build lasting friendships. This session is designed to help you transition smoothly into the college environment and make the most of your academic journey.</motion.p>
            </div>
        </div>

        <div id='event-card4'>
              <div className='event-content'>
                  <motion.h3 initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Vocabulary Session: </motion.h3>
                  <motion.p initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Test your vocabulary skills and learn new words in our interactive vocabulary session. Engage in exciting word games and quizzes to enhance your language proficiency. This session is designed to help you improve your communication skills and broaden your vocabulary.</motion.p>
              </div>
              <motion.img initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}} src={intro} width={"100px"} alt="" />
        </div>

      </div>

      <div className="event12">

        <div id='event-card5'>
          <motion.img initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}} src={dance} width={"100px"} alt="" />
            <div className='event-content'>
                <motion.h3 initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Cultural Program</motion.h3>
                <motion.p initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Get ready to be serenaded by the talented musicians of Melodies of CGEC and Best Dance, Drama By CGEC Students! Join us for a live streaming event featuring captivating song performances. Tune in and immerse yourself in the beautiful melodies brought to you by our passionate music club.</motion.p>
            </div>
        </div>

        <div id='event-card6'>
              <div className='event-content'>
                  <motion.h3 initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Surprise DJ Performance</motion.h3>
                  <motion.p initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Get ready to be blown away by a surprise DJ performance at CROESO 2K24! Join us for an electrifying night of music and dancing as a renowned DJ takes the stage to spin the latest hits and keep you grooving all night long.</motion.p>
              </div>
              <motion.img initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}} src={dj} width={"100px"} alt="" />
      </div>

</div>



    </div>
  )
}
