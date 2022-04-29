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


export default function Home() {

  

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
            <h2 className="home-section-title">Projects</h2>
            <div className="home-projects-navigator">
              
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
