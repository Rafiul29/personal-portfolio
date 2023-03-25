import React, { useRef } from 'react'
import { useHoverEffect } from '../Hooks/useHoverEffect'
import SectionTitle from './SectionTitle'

import { useProjectLeftrightReveal } from '../Hooks/gsap'
const data={
  img1:"https://res.cloudinary.com/dgjjgijyu/image/upload/v1675865685/portfolio-project/about-1_jbpixu.jpg",
  img2:"https://res.cloudinary.com/dgjjgijyu/image/upload/v1675865996/portfolio-project/about-2_zbmidh.jpg"
}
const About = () => {
  const aboutLeftRef=useRef(null)
  const aboutRightRef=useRef(null)

  const aboutRefs=[aboutLeftRef,aboutRightRef]
  useHoverEffect(aboutLeftRef,data.img1,data.img2)

  useProjectLeftrightReveal(aboutRefs)

  return (
    <div className='about-section container mx-auto mt-40' id="about">
      <SectionTitle title={"About"} />
      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right " ref={aboutRightRef}>
          <p>I am a front-end developer focusing on React and Redux, with a strong emphasis on Tailwind CSS. This portfolio website showcases my skills and projects as a web developer, and provides a platform for potential clients and employers to learn more about me and my work.</p>
          <p className='mt-10'>Whether you are looking for a new web developer for your team or just interested in my work, this portfolio website provides a comprehensive look at my skills and experience. If you have any questions or would like to learn more about my work, please feel free to reach out via the contact form on the website.</p>
          <a
            href="https://docs.google.com/document/d/1MQeo-_haxjE8SVT3h3A4pONv9t4qOdlcBIUjWQd0a4U/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppcase py-8 px-14 border border-white/25 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default About