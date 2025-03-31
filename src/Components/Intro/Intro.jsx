import React from 'react'
import './Intro.css';
import bg from '../../assets/image.jpg';
import {Link} from 'react-scroll';
import btn from '../../assets/hireme.png';
import cv from '../../assets/resume.jpg'
 const Intro = () => {
  return (
   <section id="intro">
    <div className="introcontent">
<span className="hello">Hello,</span>
<span className="introtext"> I'm <span className="introname">Varsha</span>
<br />Website Designer</span>
<p className="intropara">I am enthuistic coder and love developing websites</p>
<div className="btncontainer">
<Link><button className="btn"><img src={btn} />Hire Me
</button></Link>
<Link><button className="btn"><img src={cv}  className='po'/>See my Cv
</button></Link>
    </div></div>
    <img src={bg} className="bg" />

   </section>
  )
}
export default Intro;
