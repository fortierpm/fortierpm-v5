import ProjectPage from "../../../components/ProjectPage";

import data from "../../../constants/projects-major.json";

// collect array of all static paths
export const getStaticPaths = () => {
  // const res = await fetch("http://localhost:3000/public/constants/projects-major.json", {
  //   headers: {
  //     Accept: 'application/json, text/plain, */*', "User-Agent": '*', 'Content-Type': 'application/json',
  //   }
  // }); // Call "external" API to get projects
  // const data = await res.json();

  const paths = data.map(project => {
    return { params: { project: project.route }, };
  });

  return { paths: paths, fallback: false };
}

// pass appropriate props
export const getStaticProps = ({ params }) => {
  // const res = await fetch(`./constants/projects-major/${params.project}`);
  // const res = await fetch("http://localhost:3000/public/constants/projects-major.json", {
  //   headers: {
  //     Accept: 'application/json, text/plain, */*', 'User-Agent': '*', 'Content-type': 'application/json',
  //   }
  // }); // Call "external" API to get projects
  // const data = await res.json();
  const project = data.find(proj => { // needed `await` for async here
    return proj.route === params.project;
  });

  return { props: { project } };
}

// Rendered ouput
export default function Project({ project }) {
  // if (!project) {
  //   return <p>Loading...</p>
  // }

  return (
    <ProjectPage project={project} />
    // <div>
    //   <h1>{project.title}</h1>
    //   <p>{project.subtitle}</p>
    // </div>
  );
}