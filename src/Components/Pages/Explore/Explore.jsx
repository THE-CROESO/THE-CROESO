import React from 'react'
import "./explore.scss"

import Events from './Events/Events.jsx'
import GlimpsesOfPast from './GlimpsesOfPast/GlimpsesOfPast.jsx'
import Trailer from './Trailer/Trailer.jsx'


import Para from "./para/Parallax.jsx"



export default function Explore() {
  return (
    <div className='explore para'>
      <section className='croeso-parallax'>
        <Para type="" text="CROESO 2K24"/>
      </section>

      <section className='trailer'>
        <Trailer/>
      </section>

      <section className='para'>
        <Para type="events" text="UPCOMING EVENTS" />
      </section>

      <section className='event-section'>
        <Events />
      </section>

      <section className='para'>
        <Para type="events" text="GLIMPSES OF CROESO 5.0"/>
      </section>

      <section  className='croeso5'>
        <GlimpsesOfPast/>
      </section>

      {/* <section>
        <SocialMedia/>
      </section> */}
      
    </div>
  )
}
