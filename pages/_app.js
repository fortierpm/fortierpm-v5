import { useState, useEffect } from 'react';
import Head from 'next/head'; // For Next head and metadata

import Fonts from "../components/Fonts";
import Navbar from '../components/Navbar';

import '../styles/globals.css';

// Fontawesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;



function MyApp({ Component, pageProps }) {

  // THEME ----------------------

  const [theme, setTheme] = useState(true);
  useEffect(() => {
    // Note that useEffect does not run for SSR
    setTheme(JSON.parse(localStorage.getItem("theme")) !== null  ? JSON.parse(localStorage.getItem("theme")) : true);
    const themeVal = (JSON.parse(localStorage.getItem("theme"))) ? "lightmode" : "darkmode";
    if (JSON.parse(localStorage.getItem("theme")) !== null) {
      document.body.classList.add(themeVal);
    } else {
      localStorage.setItem("theme", theme);
      document.body.classList.add("lightmode");
    }
  }, []);

  const handleTheme = (e) => {
    e.preventDefault();
    setTheme(!theme);
    if (!theme) {
      document.body.classList.replace("darkmode", "lightmode");
    } else {
      document.body.classList.replace("lightmode", "darkmode");
    }
    localStorage.setItem("theme", !theme);
  }

  return (
    <>
      <Head>
        <title>Peter Fortier</title>
        <meta name="description" content="Peter Fortier's personal portfolio website." />
        <link rel="icon" href="/favicon.ico" />
        <Fonts />
      </Head>

      <Navbar theme={theme} handleTheme={handleTheme} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
