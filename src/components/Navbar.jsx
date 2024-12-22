import { Link } from 'react-router-dom';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      
    <div className="flex flex-row space-x-4 items-center group relative data-[hover]:text-white">
      <button className="caudex-bold text-4xl ">About Me</button>
      <div>|</div>
      <button className="caudex-bold text-4xl data-[hover]:text-white">Projects</button>
      <div>|</div>
      <button className="caudex-bold text-4xl data-[hover]:text-white">Adventures</button>
      
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-4xl">
    <a href="http://www.linkedin.com/in/brycebwalsh" target="_blank"><FaLinkedin /></a>
    <a href="https://github.com/bryce-walshh" target="_blank" ><FaGithub /></a>  
    </div>
  </nav>
  );
}

export default Navbar
