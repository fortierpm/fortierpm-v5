// import Link from "next/link";

import ProjectCategory from "../../components/ProjectCategory";

import majorProjects from "../../constants/projects-major.json";
import minorProjects from "../../constants/projects-minor.json";
import graphicProjects from "../../constants/projects-graphic.json";
import artProjects from "../../constants/projects-art.json";


export default function ProjectsPage() {
  
  return (
    <div id="Projects">
      <div className="full-vw-wrapper">
        <div className="full-page-wrapper">
          <h1>My Projects</h1>
          <div className="project-categories-container">
            <ProjectCategory route={"major"} title={"Major"} data={majorProjects} />
            <ProjectCategory route={"minor"} title={"Minor"} data={minorProjects} />
            <ProjectCategory route={"graphic"} title={"Graphic"} data={graphicProjects} />
            <ProjectCategory route={"art"} title={"Art"} data={artProjects} />
          </div>
        </div>
      </div>
    </div>
  );
}
