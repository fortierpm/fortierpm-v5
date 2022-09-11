// React/Next Imports
import { useState, useEffect } from 'react';
import Head from 'next/head'; // For Next head and metadata
import Link from 'next/link'; // For Next routing

// Style Imports
import styles from '../styles/Home.module.css';

// Component Imports
import Fonts from "../components/Fonts";

// Constant Imports
import majorProjects from "../constants/projects-major.json";
import minorProjects from "../constants/projects-major.json";
import graphicProjects from "../constants/projects-major.json";
import artProjects from "../constants/projects-major.json";
import skills from "../constants/skills.json";

// Fontawesome Icons
// https://fontawesome.com/v5/docs/web/use-with/react
// https://fontawesome.com/docs/web/use-with/react/use-with
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSun, faMoon, faPaperPlane, faUniversity, faSms } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faFacebook, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';

// Built constants; not working/depracated
// const featureProjects = [
//   majorProjects[0], majorProjects[1],
//   minorProjects[0], minorProjects[1],
//   graphicProjects[0], graphicProjects[1],
//   artProjects[0], artProjects[1]
// ];

export default function Home() {
  
  const [featureProjects, setFeatureProjects] = useState([]);
  const [activeFeatPos, setActiveFeatPos] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    setFeatureProjects([
      majorProjects[0], majorProjects[1],
      minorProjects[0], minorProjects[1],
      graphicProjects[0], graphicProjects[1],
      artProjects[0], artProjects[1]
    ]);
    setActiveFeatPos(0);
    setActiveFeature(majorProjects[0]);
  }, []);

  const changeFeature = (pos) => {
    if (pos > 0 && pos < 8) {
      setActiveFeature(featureProjects[pos]);
      setActiveFeatPos(pos);
    } else {
      throw "Error: Improper 'featured project' selector value.";
    }
  }
  

  return (
    <div id="Home">
      <div className="full-vw-wrapper">
        <div className="full-page-wrapper">
          {/* HERO */}
          <section className="home-hero">
            <h1 className="home-hero-title">Hi!<br />I&apos;m Peter</h1>
          </section>
          {/* PROJECTS */}
          <section className="home-section project-section">
            <h2 className="home-section-title">Featured Projects</h2>
            <div className="home-proj-featured">
              {featureProjects.length == 0 ? <div>Loading display</div> :
                <><div className="feat-display-area">
                  {/* featured project tile */}
                  <article className="feat-display-container">
                    <div className="feat-display-title">{activeFeature.title}</div>
                    <div className="feat-display-taglist">
                      {activeFeature.tags.map((tag, i) => {
                        <div key={i} className="feat-display-tag">{tag}</div>
                      })}
                    </div>
                  </article>
                </div>
                {/* featured project selector */}
                <div className="home-feat-selector">
                  {featureProjects.map((proj, i) => {
                    <div key={i} className={`feat-selector-item ${activeFeatPos == i && "feat-item-active"}`}>
                      <img src={proj.thumbSm} alt="" />
                      <div className="feat-selector-title">{proj.title}</div>
                    </div>
                  })}
                </div></>
              }
            </div>
          </section>
          {/* SKILLS */}
          <section className="home-section skills-section">
            <h2 className="home-section-title">Skills</h2>
          </section>
          {/* CONTACT */}
          <section id="Contact" className="home-section contact-section">
            <h2 className="home-section-title">Contact Information and Socials</h2>
          </section>
        </div>
      </div>
    </div>
  );
}
