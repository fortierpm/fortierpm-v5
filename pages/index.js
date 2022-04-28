// React/Next Imports
import { useState, useEffect } from 'react';
import Head from 'next/head'; // For Next head and metadata
import Link from 'next/link'; // For Next routing

// Style Imports
import styles from '../styles/Home.module.css';

// Component Imports
import Fonts from "../components/Fonts";

// Constant Imports
const projects = require("../constants/projects.json");
const skills = require("../constants/skills.json");

// Fontawesome Icons
// https://fontawesome.com/v5/docs/web/use-with/react
// https://fontawesome.com/docs/web/use-with/react/use-with
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSun, faMoon, faPaperPlane, faUniversity, faSms } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faFacebook, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';


export default function Home() {

  // // LIGHT/DARKMODE ----------------------

  // const [lightMode, setLightMode] = useState(true);
  // useEffect(() => {
  //   // Note that useEffect does not run for SSR
  //   setLightMode(JSON.parse(localStorage.getItem("theme")) !== null  ? JSON.parse(localStorage.getItem("theme")) : true);
  //   const theme = (JSON.parse(localStorage.getItem("theme"))) ? "lightmode" : "darkmode";
  //   if (JSON.parse(localStorage.getItem("theme")) !== null) {
  //     document.body.classList.add(theme);
  //   } else {
  //     localStorage.setItem("theme", lightMode);
  //     document.body.classList.add("lightmode");
  //   }
  // }, []);

  // const handleLightMode = (e) => {
  //   e.preventDefault();
  //   setLightMode(!lightMode);
  //   if (!lightMode) {
  //     document.body.classList.replace("darkmode", "lightmode");
  //   } else {
  //     document.body.classList.replace("lightmode", "darkmode");
  //   }
  //   localStorage.setItem("theme", !lightMode);
  // }


  return (
    <div className="Home">

      <div className="full-vw-wrapper">
        <div className="full-page-wrapper">
          {/*<button onClick={handleLightMode}>View mode</button>*/}
          <h1>The Home Page</h1>
        </div>
      </div>

    </div>
  );
}
