import { Link } from 'react-router-dom';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import { motion } from "framer-motion"
import { useState } from 'react';



const Navbar = () => {

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      
    <motion.div whileInView={{opacity:1, x:0 }} initial={{opacity:0, x:0}} transition={{duration:3.2}} viewport={{ once: true }} className="flex flex-row space-x-4 items-center group relative data-[hover]:text-white">
      <Link to="/" >
        <button className="caudex-bold text-4xl ">Home</button>
      </Link>
      <div>|</div>
      <Link to="/aboutme">
        <button className="caudex-bold text-4xl ">About Me</button>
      </Link>
      <div>|</div>
      <Link to="/projects">
        <button className="caudex-bold text-4xl data-[hover]:text-white">Projects</button>
      </Link>
      <div>|</div>
      <Link to="/Adventures">
        <button className="caudex-bold text-4xl data-[hover]:text-white">Adventures</button>
      </Link>
      
    </motion.div>
    <motion.div whileInView={{opacity:1, x:0 }} initial={{opacity:0, x:0}} transition={{duration:3.2}} viewport={{ once: true }} className="m-8 flex items-center justify-center gap-4 text-4xl">
    <a href="http://www.linkedin.com/in/brycebwalsh" target="_blank"><FaLinkedin /></a>
    <a href="https://github.com/bryce-walshh" target="_blank" ><FaGithub /></a>  
    </motion.div>
  </nav>
  );
}

export default Navbar
