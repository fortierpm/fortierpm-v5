import Link from "next/link";

export default function ProjectsPage() {
  const arr = [
    {id: 24},
    {id: 13},
    {id: 15},
    {id: 89}
  ];
  return (
    <div className="projects-page-container">
      <h1>Projects</h1>
      <div>
        {arr.map(arrItem => {
          return (
            <Link href={`/projects/${arrItem.id}`} key={arrItem.id}><a>{arrItem.id}</a></Link>
          );
        })}
      </div>
    </div>
  );
}