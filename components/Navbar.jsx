import Link from "next/link";

export default function Navbar({ handleTheme }) {
  return (
    <div className="site-navbar">
      <div className="logo">Peter Fortier</div>
      <ul>
        <li>
          <button onClick={handleTheme}>Theme</button>
        </li>
        <li>
          <Link prefetch={false} href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link prefetch={false} href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link prefetch={false} href="/skills">
            <a>Skills</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}