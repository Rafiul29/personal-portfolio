import React, { useRef } from "react";
import { useBioReveal } from "../Hooks/gsap";
const Bio = () => {

  const boiRef=useRef(null)
  useBioReveal(boiRef,2)
  return (
    <div className="boi mt-20 container mx-auto overflow-hidden ">
      <p ref={boiRef}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aperiam.
        Voluptas deserunt vero doloribus omnis ipsam, similique dicta eum
        assumenda dignissimos reprehenderit quis tenetur laboriosam pariatur
        temporibus odio! Provident recusandae qui quas cupiditate mollitia,
        beatae odio expedita cum dolorum architecto, vero quisquam, praesentium
        quis id laboriosam commodi! Ad, magnam exercitationem.
      </p>
    </div>
  );
};

export default Bio;
