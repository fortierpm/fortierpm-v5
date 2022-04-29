export default function ProjectPage({ project }) {
  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <p>{project.subtitle}</p>
    </div>
  );
}