import Head from 'next/head';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skillsdepth';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <main>
    <div>
      <Head>
        <title>Aden | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  </main>
  )
}
