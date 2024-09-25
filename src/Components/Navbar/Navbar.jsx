import React from 'react'
import "./navbar.scss"
import logo from  "/src/assets/img/LOGO.png"
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'


const Style = {
  InactiveColor : "#00e8ff",
  ActiveColor : "#fefea8 ",
}

export default function Navbar() {
  return (
    <div className='Navbar'>

      <div className="logo">
        <Link to={""}>
          <motion.img initial={{scale:0.5}} whileInView={{scale:1,rotate:360,transition:{duration:1.5}}} className='logo-img' src={logo} width="30px" alt="Logo" />
          <motion.span whileTap={{scale:0.9}} whileHover={{scale:1.1}} initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}  className='logo-name'>CROESO 2<span className='k'>K</span>24</motion.span>
        </Link>
      </div>

      <div className="nav-items">

        <div className="nav">
            <NavLink to={""} style={({isActive})=>({
              color : isActive ? Style.ActiveColor : Style.InactiveColor,
              // textShadow : isActive?"rgba(255,255,255,0.9) 0px 0px 12px":"",
            })} >
            <motion.svg initial={{scale:0.5}} whileInView={{scale:1,rotate:360,transition:{duration:1.5}}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m260-260 300-140 140-300-300 140-140 300Zm220-180q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></motion.svg>              
            <motion.span whileTap={{scale:0.9}} whileHover={{scale:1.1}} initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Explore</motion.span>
            </NavLink>
          </div>

        <div className="nav">
          <NavLink to={"/TheCroeso"} style={({isActive})=>({
            color : isActive ? Style.ActiveColor : Style.InactiveColor
          })} >
            <motion.svg initial={{scale:0.5}} whileInView={{scale:1,rotate:360,transition:{duration:1.5}}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-40v-80h800v80H80Zm80-120v-240q-33-54-51-114.5T91-638q0-61 15.5-120T143-874q8-21 26-33.5t40-12.5q31 0 53 21t18 50l-11 91q-6 48 8.5 91t43.5 75.5q29 32.5 70 52t89 19.5q60 0 120.5 12.5T706-472q45 23 69.5 58.5T800-326v166H160Zm80-80h480v-86q0-24-12-42.5T674-398q-41-20-95-31t-99-11q-66 0-122.5-27t-96-72.5Q222-585 202-644.5T190-768q-10 30-14.5 64t-4.5 66q0 58 20.5 111.5T240-422v182Zm240-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-720q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720q0 33 23.5 56.5T480-640ZM320-160v-37q0-67 46.5-115T480-360h160v80H480q-34 0-57 24.5T400-197v37h-80Zm160-80Zm0-480Z"/></motion.svg>
            <motion.span whileTap={{scale:0.9}} whileHover={{scale:1.1}} initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>The Croeso</motion.span>
          </NavLink>
        </div>

        <div className="nav">
          <NavLink to={"/Members"} style={({isActive})=>({
              color : isActive ? Style.ActiveColor : Style.InactiveColor
            })} >
              <motion.svg initial={{scale:0.5}} whileInView={{scale:1,rotate:360,transition:{duration:1.5}}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></motion.svg>              
              <motion.span whileTap={{scale:0.9}} whileHover={{scale:1.1}} initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Members</motion.span>
          </NavLink>
        </div>

        <div className="nav">
          <NavLink to={"/LetsMeet"} style={({isActive})=>({
                color : isActive ? Style.ActiveColor : Style.InactiveColor
              })} >
                <motion.svg initial={{scale:0.5}} whileInView={{scale:1,rotate:360,transition:{duration:1.5}}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z"/></motion.svg>
                <motion.span whileTap={{scale:0.9}} whileHover={{scale:1.1}} initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Let's Meet</motion.span>
          </NavLink>
        </div>

        <div className="nav">
          <NavLink to={"/Credits"} style={({isActive})=>({
                color : isActive ? Style.ActiveColor : Style.InactiveColor
              })} >
              <motion.svg initial={{scale:0.5}} whileInView={{scale:1,rotate:360,transition:{duration:1.5}}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l185-185 185 185-100 100-85-85-85 85ZM225-295 40-480l185-185 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 185 185-185 185ZM480-40 295-225l100-100 85 85 85-85 100 100L480-40Z"/></motion.svg>               
              <motion.span whileTap={{scale:0.9}} whileHover={{scale:1.1}} initial={{scale:0.5}} whileInView={{scale:1,transition:{duration:1.5}}}>Credits</motion.span>
          </NavLink>
        </div>


      </div>

    </div>
  )
}
