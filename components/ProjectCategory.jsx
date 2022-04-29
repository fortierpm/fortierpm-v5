import { useState } from "react";
import Link from "next/link";


export default function ProjectCategory({ route, title, data }) {
  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjects = () => {
    setShowProjects(!showProjects);
  }

  return (
    <section className="project-category">
      <h2 onClick={handleShowProjects} className="project-category-title">{title}</h2>
      <div className="project-catergory-display">
        {/* TODO: map at most 5 project slides for carousel */}
      </div>
      {showProjects && <ul className="project-catergory-list">{data.map((project, i) => {
        return (
          <li key={i}><Link href={`/projects/${route}/${project.route}`}><a>{project.title}</a></Link></li>
        );
      })}</ul>}
    </section>
  );
}
