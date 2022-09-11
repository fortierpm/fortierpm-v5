import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// import logoSymbol from "../assets/project_thumbs/placeholder-image.png";

export default function Navbar({ theme, handleTheme }) {
  return (
    <div className="site-navbar">
      <div className="full-logo">
        <div className="logo-symbol">
          <img src={`${process.env.PUBLIC_URL}/assets/brand/peterfortier-logo.png`} alt="" />
        </div>
        <div className="logo-title">Peter Fortier</div>
      </div>
      <ul className="site-nav-items">
        <li className="site-nav-item">
          <button onClick={handleTheme} className="theme-handler">
            <div className="theme-icon-container">
              <FontAwesomeIcon className="theme-icon" icon={!theme ? faMoon : faSun} size="2x" />
            </div>
          </button>
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