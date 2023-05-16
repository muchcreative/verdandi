import Head from 'next/head';

import nightStyles from '../styles/night/Night.module.css';
import NightGlobals from '../components/night_globals.js';
const nightGlobals = () => <NightGlobals />;

import ScrollLine from "../../public/svgs/scroll_line.svg";
const scrollLine = () => <ScrollLine />;

import ScrollDraw from "../scripts/scroll_draw.js";
const scrollDraw = () => <ScrollDraw />; 

// Add scroll trigger css animation on headers
// or test it 

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
        <section className={nightStyles.scrollSection}>
          <div className={nightStyles.scrollLineContainer}>
            <ScrollLine id="scroll-line" className={nightStyles.scrollLine}/>
          </div>
        </section>
        <main>
          <header>
            <h1 className={nightStyles.hookLine1}>Because boring ideas</h1>
            <h1 className={nightStyles.hookLine2}>make boring&nbsp;
              <em className={nightStyles.products}>products</em>
            </h1>
          </header>
        </main>
      </>
    )
}

// add font-family
{/* 
- Need down arrows svg for the start to point down
- Again look to some night or dark websites for inspiration
- Some svg element
- Auto scroll
- Blow up and background change from white to night
- Night mode colors (dark themes or other colder colors)
- Resume breakdown
- Current projects
- You need a color scheme and fancy animations
- The night website has to be worth the wait
*/}