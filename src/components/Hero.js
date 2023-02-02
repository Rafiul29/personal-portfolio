import React, { useRef } from 'react'
import { useHoverEffect } from '../Hooks/useHoverEffect'

const Hero = () => {

const data={
    img1:"https://images.pexels.com/photos/2905826/pexels-photo-2905826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2:"https://images.pexels.com/photos/3473525/pexels-photo-3473525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}

    const heroImageRef=useRef(null)
    useHoverEffect(heroImageRef,data.img1,data.img2)
  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
        <div className="hero-img" ref={heroImageRef}></div>
        <div className="shutter shutter-left">
            <h1 >Font-End</h1>
        </div>
        <div className="shutter shutter-right">
            <h1>Developer</h1>
        </div>
        <div className="circle-left"></div>
        <div className="circle-right"></div>
    </div>
  )
}

export default Hero