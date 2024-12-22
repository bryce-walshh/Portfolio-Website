import logo from "../assets/kevinRushLogo.png"
import { Link } from 'react-router-dom';

import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
    <div className="space-x-4 items-center">
      
      <button className="cherry-bomb-one-regular text-2xl">About</button>
      <button className="cherry-bomb-one-regular text-2xl">Projects</button>
      <button className="cherry-bomb-one-regular text-2xl">Adventures</button>
      
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-3xl">
    <a href="http://www.linkedin.com/in/brycebwalsh" target="_blank"><FaLinkedin /></a>
    <a href="https://github.com/bryce-walshh" target="_blank"><FaGithub /></a>  
    </div>
  </nav>
  );
}

export default Navbar
