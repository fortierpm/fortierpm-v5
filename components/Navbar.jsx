import Link from "next/link";

export default function Navbar({ handleTheme }) {
  return (
    <div className="site-navbar">
      <div className="logo">Peter Fortier</div>
      <ul className="site-nav-items">
        <li className="site-nav-item">
          <button onClick={handleTheme} className="theme-handler">Theme</button>
        </li>
        <li className="site-nav-item">
          <Link prefetch={false} href="/"><a className="site-nav-link">Home</a></Link>
        </li>
        <li className="site-nav-item">
          <Link prefetch={false} href="/projects"><a className="site-nav-link">Projects</a></Link>
        </li>
        <li className="site-nav-item">
          <Link prefetch={false} href="/skills"><a className="site-nav-link">Skills</a></Link>
        </li>
        <li className="site-nav-item">
          <Link prefetch={false} href="/#Contact"><a className="site-nav-link">Contact</a></Link>
        </li>
      </ul>
    </div>
  );
}