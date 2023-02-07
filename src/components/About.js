import React, { useRef } from 'react'
import { useHoverEffect } from '../Hooks/useHoverEffect'
import SectionTitle from './SectionTitle'

import { useProjectLeftrightReveal } from '../Hooks/gsap'
const data={
  img1:"https://images.pexels.com/photos/8473286/pexels-photo-8473286.jpeg?auto=compress&cs=tinysrgb&w=1600",
  img2:"https://images.pexels.com/photos/12877898/pexels-photo-12877898.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt deserunt quod sapiente voluptate nam incidunt non minus quos, at quaerat totam. Consequuntur fugiat quis voluptates impedit alias. Tempora distinctio aut beatae quae natus itaque iure odio rerum illo quisquam! Quos, quasi et numquam aperiam facilis quo asperiores suscipit facere iure!</p>
          <p className='mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt deserunt quod sapiente voluptate nam incidunt non minus quos, at quaerat totam. Consequuntur fugiat quis voluptates impedit alias. Tempora distinctio aut beatae quae natus itaque iure odio rerum illo quisquam! Quos, quasi et numquam aperiam facilis quo asperiores suscipit facere iure! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, perferendis dolores. Quis, ipsum amet voluptatibus aliquid neque tempore qui assumenda!</p>
          <a
            href="https://www.google.com"
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