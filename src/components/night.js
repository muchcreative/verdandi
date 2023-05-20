import Head from 'next/head';
import Link from 'next/link';
import { EB_Garamond, Lora } from 'next/font/google'

import NightGlobals from '../styles/night/night_globals.js';
import nightStyles from '../styles/night/Night.module.css';
import scrollStyles from '../styles/night/Scroll.module.css';

// import LiveClock from './live_clock.js';
import ScrollLine from "../../public/svgs/scroll_line.svg";
import ScrollDraw from "../scripts/scroll_draw.js";
import ContactForm from "../components/contact_form";
import GitHubLogo from "../../public/svgs/github_logo.svg";

const nightGlobals = () => <NightGlobals />;
// const liveClock = () => <LiveClock />;
const scrollLine = () => <ScrollLine />;
const scrollDraw = () => <ScrollDraw />; 
const contactForm = () => <ContactForm />; 
const githubLogo = () => <GitHubLogo />;

const ebGaramond = EB_Garamond({
                    subsets: ['latin'], 
                    weight: ['400']
                  });
const lora = Lora({
              subsets: ['latin'], 
              weight: ['400']
            });

export default function Night() {
    return (
      <>
        <Head>
          <title>Verdandi | Night</title>
          <meta name="description" content="Personal website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicons/tree.jpg" />  
        </Head>
        <NightGlobals />
        <ScrollDraw />
        <section className={scrollStyles.scrollSection}>
          <div className={`${ebGaramond.className} ${scrollStyles.scrollText}`}>
            <h1>Night</h1>
            <p>6pm - 6am</p>
            {/* <LiveClock className={scrollStyles.clock} /> */}
          </div>
          <div className={scrollStyles.scrollLineContainer}>
            <ScrollLine id="scroll-line" className={scrollStyles.scrollLine} />
          </div>
        </section>
        <main className={ebGaramond.className}>
          <header className={nightStyles.hookContainer}>
            <h1 className={nightStyles.hookLine}>
              Because boring ideas<br></br>make boring&nbsp;<em className={nightStyles.underline}>products</em>
            </h1>
          </header>
          <div>
            {/* Moon SVG */}
            {/* Moutains SVG */}
          </div>
        </main>
        <section className={`${ebGaramond.className} ${nightStyles.about}`}>
          <h2>Who Am I?</h2>
        </section>
        <section className={`${ebGaramond.className} ${nightStyles.work}`}>
          <h2>Recent Work</h2>
        </section>
        <section className={`${ebGaramond.className} ${nightStyles.project}`}>
          <h2>Current Project</h2>
          <div className={nightStyles.flowDescription}>
            <h3>Flow - Electronnic Data Capture System</h3>
            <p>
              Built in Rust , Diesel, and PostgreSQL. Flow is expected to be the fastest and most secure EDC on the market. 
              Aimed for small to medium sized human clinical trials along with an aggressive pricing strategy and a user 
              experience focused design philosophy. Flow will completely change the way EDCs are used.
            </p>
          </div>
        </section>
        <section className={nightStyles.contact}>
          <h3 className={nightStyles.contactHeader}>
            Together,<br></br>let&#39;s build something different
          </h3>
          <ContactForm />
        </section>
        <footer>
          <div className={nightStyles.logos}>
            <Link href="https://www.linkedin.com/in/robby-lem-14ab97158/">
              in
            </Link>
            <Link href="https://github.com/muchcreative">
              <GitHubLogo className={nightStyles.githubLogo}/>
            </Link>
          </div>
        </footer>
      </>
    )
}

// Scroll Section Design Ideas:
// - Tell others to scroll here
// - Down arrows pointing down
// - Add clock to add suspicion instead of just an empty screen
// - Add night indicator for the website
// - Add overhang or some part of the SVG
// - Have to compensate for auto-scroll

// Font color might be little too white

// works at different zooms... there must a media query you can add to fix this that includes diff offsets.
// Try Lora Vs Times New Roman Complimenting font.