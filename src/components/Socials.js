import { useRef } from "react";
import { useSocialReveal } from "../Hooks/gsap";
const data = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/rafiulislam.rafi.1234/",
  },
  {
    id: 2,
    title: "Twitter",
    url: "https://www.facebook.com/rafiulislam.rafi.1234/",
  },
  {
    id: 3,
    title: "Github",
    url: "https://www.facebook.com/rafiulislam.rafi.1234/",
  },
  {
    id: 4,
    title: "LinkedIn",
    url: "https://www.facebook.com/rafiulislam.rafi.1234/",
  },
];

const Socials = () => {

  const socialRef=useRef(null)
  useSocialReveal(socialRef,2)
  return (
    <div className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] -rotate-90  origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50" ref={socialRef}>
      {data.map((social) => (
        <a href={social.url} target="_blank"
        className="hover:text-cyan-400 duration-300" rel="noreferrer" key={social.id}>
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
