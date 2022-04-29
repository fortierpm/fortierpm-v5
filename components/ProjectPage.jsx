// import { useState, useEffect } from "react";
import Link from "next/link";


export default function ProjectPage({ project }) {
  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div id="ProjectPage">
      <div className="full-vw-wrapper">
        <div className="full-page-wrapper">
          <h1>{project.title}</h1>
          <h2>{project.subtitle}</h2>
          <div className="project-date">{project.date}</div>
          {project.collaborators && <div className="project-collaborators-container">
            {project.collaborators.map((collaborator, i) => {
              return (
                <div className="project-collaborator" key={i}>
                  <div className="project-collab-name">{collaborator.name}</div>
                  {collaborator.link && <div className="project-collab-link">Profile Link: <a href={collaborator.link}>{collaborator.link}</a></div>}
                </div>
              );
            })}
          </div>}
          <div className="project-image">
            <img src={`${process.env.PUBLIC_URL}/assets/project_thumbs/${project.thumbLg}`} alt="Project thumbnail" />
          </div>
          {project.hosting && <div className="project-hosting">Project hosting: <a href={project.hosting}>{project.hosting}</a></div>}
          <div className="project-source-code">Project source code: <a href={project.source}>{project.source}</a></div>
          <ul className="project-tags-list">
            {project.tags.map((tag, i) => {
              return (
                <li className="project-tag" key={i}><Link href={`/skills`}><a>{tag}</a></Link></li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}