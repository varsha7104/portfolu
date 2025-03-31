import React from 'react'
import './Skils.css'
import uidesign from '../../assets/ui-design.png';
import webdesign from '../../assets/website-design.png';
import appdesign from '../../assets/dsa.jpg';

const Skills = () => {
  return (
   <section id="skills"><span className='skilltitle'>What do I do
   </span>
<span className='skilldescription'>I am web developer with essential skills like html,css,js,react</span>
<div className="skillbars">
    <div className="skillbar">
        <img src={uidesign} className="skillbarimg" />
        <div className="skillbartext">
            <h1>
UI/UX Design
            </h1>
            <p>Ui/ux is interesting.</p>
        </div>
    </div>
    <div className="skillbar">
        <img src={webdesign} className="skillbarimg" />
        <div className="skillbartext">
            <h1>
Web Design
            </h1>
            <p>Web Design is interesting.</p>
        </div>
    </div>
    <div className="skillbar">
        <img src={appdesign} className="skillbarimg" />
        <div className="skillbartext">
            <h1>
Data Structure and Algorithms
            </h1>
            <p>I am proficient in implementing and utilizing data structures like arrays, linked lists, stacks, queues, and trees in C++ to solve complex problems with optimal performance and memory utilization.</p>
        </div>
    </div>
</div>
   </section>
  )
}
export default Skills;