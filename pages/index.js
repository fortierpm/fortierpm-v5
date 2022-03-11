import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <div className={styles.container}>

      <Head>
        <title>Peter Fortier</title>
        <meta name="description" content="Peter Fortier's personal portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Hello</div>
        <img src="https://i.imgur.com/m4dbXdi.png" alt="This shouldn't show" />
      </main>

    </div>
  )
}
