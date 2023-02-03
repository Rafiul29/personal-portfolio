import { useRef } from "react";
import { useHoverEffect } from "../Hooks/useHoverEffect";

const Project = ({ project }) => {
  const useProjectImageRef = useRef(null);

  useHoverEffect(useProjectImageRef, project.img1, project.img2);
  return (
    <div className="project grid grid-cols-5">
      <div className="project-left col-span-3 flex flex-col gap-10">
        <span className="text-9xl text-white/20">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="uppercase text-5xl leading-relaxed text-cyan-400">
          {project.title}
        </h3>
        <p className="text-white/75">{project.describe}</p>
        <span className="text-cyan-400 flex gap-5 flex-wrap">
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </span>
        <div className="flex gap-10 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="uppcase py-8 px-14 border border-white/25 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Live Site
          </a>

          <a
            href={project.fontEndLink}
            target="_blank"
            rel="noreferrer"
            className="uppcase py-8 px-14 border border-white/25 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Font-End code 
          </a>

          {project.backEndLink && (
            <a
            href={project.backEndLink}
            target="_blank"
            rel="noreferrer"
            className="uppcase py-8 px-14 border border-white/25 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
           Back-End Code
          </a>
          )}
        </div>
      </div>
      <div
        className="project-right col-span-2 justify-self-end"
        ref={useProjectImageRef}
      ></div>
    </div>
  );
};

export default Project;
