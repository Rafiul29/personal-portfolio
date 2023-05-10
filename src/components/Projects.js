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
      "Proxima | Project Management App",
    img1: "https://res.cloudinary.com/dgjjgijyu/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/portfolio-project/proxima-1",
    img2: "https://res.cloudinary.com/dgjjgijyu/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/portfolio-project/proxima-2",
    describe:
      "Pormixa is an innovative project management app that helps users manage their projects with ease. With its powerful CRUD (Create, Read, Update, Delete) operations and intuitive interface, Pormixa allows users to create, update, and delete projects effortlessly. Pormixa uses JWT authentication, which allows only authorized users to access the app's features. ",
    tools: ["React","Express","Mongodb","Context-api","Tailwind CSS", ],
    liveLink: "https://rafiul-proxima.netlify.app/",
    fontEndLink: "https://github.com/Rafiul29/proxima-client.git",
    backEndLink: "https://github.com/Rafiul29/proxima-server.git",
   
  },

  {
    id: 3,
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
