import React, { useRef } from "react";
import { useBioReveal } from "../Hooks/gsap";
const Bio = () => {

  const boiRef=useRef(null)
  useBioReveal(boiRef,2)
  return (
    <div className="boi mt-20 container mx-auto overflow-hidden ">
      <p ref={boiRef}>
      Hi! I am a front-end developer specializing in building responsive and interactive web applications using React, Redux, Tailwind CSS, GSAP, and WebGL. My focus is on creating dynamic and engaging user experiences that drive user interaction and engagement.
      </p>
    </div>
  );
};

export default Bio;
