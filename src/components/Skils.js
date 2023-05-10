import { useRef } from "react";

import SectionTitle from "./SectionTitle";

import {useSkillLineReveal,useSkillTextReveal} from "../Hooks/gsap"
const data = [
  { id: 1, skill: "HTML" },
  { id: 2, skill: "CSS" },
  { id: 3, skill: "Bootstrap" },
  { id: 4, skill: "Tailwind CSS" },
  { id: 5, skill: "JavaScript" },
  { id: 6, skill: "React.Js" },
  { id: 7, skill: "Redux.js" },
  { id: 8, skill: "Redux Toolkit" },
  { id: 9, skill: "Axios" },
  { id: 10, skill: "Gsap" },
  { id: 11, skill: "Firebase" },
  { id: 12, skill: "Next.Js" },
  { id: 13, skill: "Mongoose" },
  { id: 14, skill: "Prisma" },
  { id: 15, skill: "Express.Js"},
  { id: 16, skill: "Node.Js" },
  { id: 17, skill: "Git" },
  { id: 18, skill: "GitHub" },

];

const Skils = () => {
  const skillItemRef = useRef([]);
  const skillTextRef = useRef([]);

  const skillItem2Ref = useRef([]);
  const skillText2Ref = useRef([]);

  useSkillLineReveal(skillItemRef.current)
  useSkillLineReveal(skillItem2Ref.current)

  useSkillTextReveal(skillTextRef.current)
  useSkillTextReveal(skillText2Ref.current)
  return (
    <div className=" skills container   mx-auto mt-40" id="skills">
      <SectionTitle title={"Skills"} />
      <div className="skills-wrapper grid grid-cols-2 gap-10 mt-40">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.skill}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skills-right flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillText2Ref.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.skill}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skils;
