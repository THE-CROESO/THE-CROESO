import React from 'react'
import "./trailer.scss"
import trailer from "./main2_1.mp4"
export default function Trailer() {
  return (
    <div className='trailer'>
      <h1>Ye To Bass Trailer Hain!!</h1>
      <video src={trailer} autoPlay controls></video>
    </div>
  )
}
