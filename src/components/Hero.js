import React, { useRef } from "react";
import { useHoverEffect } from "../Hooks/useHoverEffect";
import {useImageReveal,useHeadLineReveal} from "../Hooks/gsap"
const Hero = () => {
  const data = {
    img1: "https://images.pexels.com/photos/2905826/pexels-photo-2905826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/3473525/pexels-photo-3473525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  const heroImageRef = useRef(null);

  const heroHeadLine1Ref = useRef(null);
  const heroHeadLine2Ref = useRef(null);
const headlines=[heroHeadLine1Ref,heroHeadLine2Ref]
  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef,0.5)
  useHeadLineReveal(headlines,1.5)
  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left">
        <h1 ref={heroHeadLine1Ref}>Font-End</h1>
      </div>
      <div className="shutter shutter-right">
        <h1 ref={heroHeadLine2Ref}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
