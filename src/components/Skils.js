import SectionTitle from "./SectionTitle";

const data = [
  { id: 1, skill: "HTML" },
  { id: 2, skill: "CSS" },
  { id: 3, skill: "Bootstrap" },
  { id: 4, skill: "JavaScript" },
  { id: 5, skill: "React.Js" },
  { id: 6, skill: "Redux.js" },
  { id: 7, skill: "Redux Toolkit" },
  { id: 8, skill: "Axios" },
  { id: 9, skill: "Gsap" },
  { id: 10, skill: "Firebase" },
];

const Skils = () => {
  return (
    <div className=" skills container  mx-auto mt-40" id="skills">
      <SectionTitle title={"Skills"} />
      <div className="skills-wrapper grid grid-cols-2 gap-2 mt-40">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li key={skill.id} className="skill-item overflow-hidden">
                <div className="flex gap-10 items-baseline">
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
              <li key={skill.id} className="skill-item overflow-hidden">
                <div className="flex gap-10 items-baseline">
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
