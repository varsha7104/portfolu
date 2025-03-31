import React, { useState } from 'react'
import './Navbar.css';
import logo from './../../assets/logo.png';
import {Link} from 'react-scroll';
import contactimg from './../../assets/contact.png';
import menu from '../../assets/menu.png'
const Navbar = () => {
  const [showmenu,setmenu]=useState(false);

  return (
   <div className="Navbar">
    <img src={logo} className='logo'/>
    <div className="desktopmenu">
    <Link
   activeClass="active" to="intro" spy={true} smooth={true } offset={-105} duration={500}className="desktop-menulistitem"
>Home</Link>
<Link
   activeClass="active" to="skills" spy={true} smooth={true } offset={-50} duration={500}className="desktop-menulistitem"
> About</Link>
<Link  activeClass="active" to="works" spy={true} smooth={true } offset={-105} duration={500} className="desktop-menulistitem">Portfolio</Link>
<Link   activeClass="active" to="contactpage" spy={true} smooth={true } offset={-105} duration={500} className="desktop-menulistitem">Projects</Link>
    </div>
    <button className="desktopmenubtn" onClick={() => { document.getElementById("contactpage").scrollIntoView({ behavior: "smooth" }); }}>
        <img src={contactimg} className="desktopmenuicon" />Contact Me
    </button>
    <img src={menu} className='movemenu' onClick={()=>setmenu(!showmenu)}/>
    <div className="navmenu" style={{ display: showmenu ? "flex" : "none" }}>
    <Link
   activeClass="active" to="intro" spy={true} smooth={true } offset={-105} duration={500}className="listitem" onClick={() => setmenu(false)}
>Home</Link>
<Link
   activeClass="active" to="skills" spy={true} smooth={true } offset={-50} duration={500}className="listitem" onClick={() => setmenu(false)}
> About</Link>
<Link  activeClass="active" to="works" spy={true} smooth={true } offset={-105} duration={500} className="listitem" onClick={() => setmenu(false)}>Portfolio</Link>
<Link   activeClass="active" to="contactpage" spy={true} smooth={true } offset={-105} duration={500} className="listitem" onClick={() => setmenu(false)}>Projects</Link>
<Link   activeClass="active" to="contactpage" spy={true} smooth={true } offset={-105} duration={500} className="listitem" onClick={() => setmenu(false)}>Contact</Link>
    </div>
   
   </div>
   
   
  )
}
 export default Navbar;
