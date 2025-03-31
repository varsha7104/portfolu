import React from 'react'
import './Works.css'
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';
 const Works = () => {
  return (
    <section id="works">
        <div className="workstitle">
            My Portfolio
        </div>
        <div className='workdescription'> I pay attention to smaller things. I love building website</div>
    <div className="worksimgs">
        <img src={portfolio1} className="worksimg" />
        <img src={portfolio2} className="worksimg" />
        <img src={portfolio3} className="worksimg" />
        <img src={portfolio4} className="worksimg" />
        <img src={portfolio5} className="worksimg" />
        <img src={portfolio6} className="worksimg" />
    </div><button className="worksbtn">See more</button>
    </section>
  )
}
export default Works;
