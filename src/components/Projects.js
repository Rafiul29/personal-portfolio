import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title:
      "React shopping -tech alpha Electroinc store web application",
    img1: "https://res.cloudinary.com/dgjjgijyu/image/upload/v1675860786/portfolio-project/tech-alpha-01_qtc6qh.png",
    img2: "https://res.cloudinary.com/dgjjgijyu/image/upload/v1675860785/portfolio-project/tech-alpha-02_engilf.png",
    describe:
      "This repository contains the code for a React e-commerce shopping cart application, implemented using Redux Toolkit and data fetching with Redux Thunk. The shopping cart uses local storage to save data and display items in the browser.",
    tools: ["React js", "Redux", "Redux Toolkit", "Redux Thunk", "Tailwind CSS"],
    liveLink: "https://rafiul-tech-alpha.netlify.app/",
    fontEndLink: "https://github.com/Rafiul29/tech-alpha.git",
  },
  {
    id: 2,
    title:
      "Cyberbullying-Cyber | Stand Up Against Cyberbullying.",
    img1: "https://res.cloudinary.com/dgjjgijyu/image/upload/v1675864972/portfolio-project/Cyberbulling-1_h9kqmx.png",
    img2: "https://res.cloudinary.com/dgjjgijyu/image/upload/v1675864971/portfolio-project/cyerBulling-2_seq9nc.png",
    describe:
      "This is a website about cyberbullying, providing information and resources on the topic. The website aims to raise awareness about cyberbullying, its effects, and ways to prevent and address it. The site includes educational content, tips for staying safe online, and resources for individuals and families affected by cyberbullying.",
    tools: ["React", "Tailwind CSS", "Gsap", ],
    liveLink: "https://rafiul-cyberbullying.netlify.app/",
    fontEndLink: "https://github.com/Rafiul29/cyberbullying.git",
   
  },
];
const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"MY Projects"}/>
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
