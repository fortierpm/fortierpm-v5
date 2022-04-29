import ProjectPage from "../../../components/ProjectPage";

import data from "../../../constants/projects-art.json";

export const getStaticPaths = () => {
  const paths = data.map(project => {
    return { params: { project: project.route }, };
  });
  return { paths: paths, fallback: false };
}

export const getStaticProps = ({ params }) => {
  const project = data.find(proj => {
    return proj.route === params.project;
  });
  return { props: { project } };
}

export default function Project({ project }) {
  return (
    <ProjectPage project={project} />
  );
}
