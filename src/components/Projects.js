import Project from "./Project";

const data = [
  {
    id: 1,
    title:
      "A product title is something where you list your product",
    img1: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&w=1600",
    describe:
      "Keywords should be placed as exact match, starting with the most important term and following with the brand at the end. If the brand is in the domain, this is already going to be a known match for the query",
    tools: ["Node Js", "MongoDB", "JWT", "Firebase", "Tailwind CSS"],
    liveLink: "https://www.google.com",
    fontEndLink: "https://www.google.com",
    backEndLink: "https://www.google.com",
  },
  {
    id: 2,
    title:
      "Page titles should be descriptive and relevant to the content",
    img1: "https://images.pexels.com/photos/890065/pexels-photo-890065.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/3098683/pexels-photo-3098683.jpeg?auto=compress&cs=tinysrgb&w=1600",
    describe:
      "A website title identifies what the web page is about for both web users and search engines. On web browsers, the website title appears at the top of the tab or window, and in search results website titles display as bold hyperlinked texts.",
    tools: ["Node Js", "MongoDB", "JWT", "Firebase", "Tailwind CSS"],
    liveLink: "https://www.google.com",
    fontEndLink: "https://www.google.com",
   
  },
];
const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <div className="overflow-hidden">
        <h2 className="section-title">MY Projects</h2>
      </div>
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
