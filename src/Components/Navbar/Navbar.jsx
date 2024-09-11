import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to={""}>Explore</Link></li>
        <li><Link to={"/TheCroeso"}>The Croeso</Link></li>
        <li><Link to={"/Members"}>Members</Link></li>
        <li><Link to={"/LetsMeet"}>Let's Meet</Link></li>
        <li><Link to={"/Credits"}>Credits</Link></li>
      </ul>
    </div>
  )
}
