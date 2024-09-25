import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";


const Parallax = ({type,text}) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
    >
      <motion.div style={{ y: yText,paddingTop: type === "events"? "20vh" : "50px" ,textShadow: "aqua 2px 3px 5px"}}
      initial={{scale:0.7}}
      whileInView={{scale:1,transition:{duration:1.5}}}
      >
        {/* CROESO 2K24 */}{text}
      </motion.div>
      <motion.div 
      className="mountains"
      style={{backgroundImage: `url(${
            type === "events" ? "./mountains.png" : "./partycolor.png"
          })`}}

      
      ></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
