import React from 'react'
import "./explore.scss"

import Events from './Events/Events.jsx'
import GlimpsesOfPast from './GlimpsesOfPast/GlimpsesOfPast.jsx'
import Parallax from './Parallax/Parallax.jsx'
import Trailer from './Trailer/Trailer.jsx'
import SocialMedia from './SocialMedia/SocialMedia.jsx'




export default function Explore() {
  return (
    <>
      <section>
        <Parallax/>
      </section>

      <section>
        <Trailer/>
      </section>

      <section>
        <Parallax/>
      </section>

      <section>
        <Events />
      </section>

      <section>
        <Parallax/>
      </section>

      <section>
        <GlimpsesOfPast/>
      </section>

      <section>
        <SocialMedia/>
      </section>
      
    </>
  )
}
