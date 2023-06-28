// Next.js
import { useState, useEffect } from 'react';

// CSS
import expStyles from 'src/styles/night/Experience.module.css';

//SVGs
import MMS from 'public/night/mms.svg'
import SideArrow from 'public/night/side_arrow.svg'
import Triangle from 'public/night/triangle.svg'

import ExpMotif0 from 'public/night/exp_motif_0.svg'
import ExpMotif1 from 'public/night/exp_motif_1.svg'
import ExpMotif2 from 'public/night/exp_motif_2.svg'

// External Libs
import { clsx } from 'clsx';

const mms = () => <MMS />;
const sideArrow = () => <SideArrow />;
const triangle = () => <Triangle />;

const expMotif0 = () => <ExpMotif0 />;
const expMotif1 = () => <ExpMotif1 />;
const expMotif2 = () => <ExpMotif2 />;

// Add observer to underline the hr on observation

export default function Experience() {
    const [desc, setDesc] = useState({curr: 0, prev: null});
    const [showAddOn, setShow] = useState(false);

    useEffect(() => {
        setShow(false);
    }, [desc]);

    const [seenTitle, setSeen] = useState(false);

    useEffect(() => {
      const expTitle = document.querySelector('#exp-title');

      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };

      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              setSeen(true);
          }
        })
      };

      let observer = new IntersectionObserver(callback, options);
      observer.observe(expTitle);
    }, [])

    return (
      <>
        <div id='exp-title' className={expStyles.titleContainer}>
          <h2>Experience</h2>
          <hr className={clsx({
            [expStyles.titleLine] : true,
            [expStyles.animateTitleLine] : seenTitle})}></hr>
        </div>
        <div className={expStyles.art}>
            <MMS className={expStyles.mms}/>
        </div>
        <div className={expStyles.dotContainer}>
            <button
              name='current-desc-indicator' 
              aria-label='current-desc-indicator'
              onClick={() => 
                setDesc({curr: 0, prev: desc.curr})}>
                <span className={clsx({
                  [expStyles.dot] : true,
                  [expStyles.selectedDot] : desc.curr === 0})}></span>
            </button>
            <button
              name='current-desc-indicator'
              aria-label='current-desc-indicator'
              onClick={() => setDesc({curr: 1, prev: desc.curr})}>
                <span className={clsx({
                  [expStyles.dot] : true,
                  [expStyles.selectedDot] : desc.curr === 1})}></span>
            </button>
            <button
              name='current-desc-indicator'
              aria-label='current-desc-indicator'
              onClick={() => setDesc({curr: 2, prev: desc.curr})}>
                <span className={clsx({
                  [expStyles.dot] : true,
                  [expStyles.selectedDot] : desc.curr === 2})}></span>
            </button>
        </div>
        <div className={expStyles.expContainer}>          
            <div className={expStyles.mainDescs}>
                <button
                  name='left-arrow-btn'
                  aria-label='left-arrow-btn'
                  onClick={() => {
                  const updated = desc.curr - 1;
                  updated === -1 ? setDesc({curr: 2, prev: desc.curr}) : setDesc({curr: updated, prev: desc.curr});
                  }}>
                    <SideArrow className={expStyles.leftArrow}/>
                </button>
                <div className={expStyles.allDesc}>
                    <div className={clsx({
                      [expStyles.flow] : true,
                      [expStyles.showDesc] : desc.curr === 0,
                      [expStyles.hideDesc] : desc.prev === 0})}>
                        <div className={expStyles.title}>
                            <h4>Flow DB</h4>
                            <p>Full-Stack Developer</p>
                        </div>
                        <div className={expStyles.desc}>
                            <p>
                              Flow is a cloud database for small to medium-sized human clinical trials. Flow aims to innovate from 
                              traditional EDCs (Electronic Data Capture Systems) through an aggressive subscription-based pricing 
                              structure and a modern approach to the user-client experience design philosophy.                      
                            </p>
                            <div className={clsx({
                                [expStyles.expandContainer] : true,
                                [expStyles.hideExpander] : showAddOn})}>
                              <button onClick={() => setShow(true)}>
                                <span className={expStyles.expander}>
                                    <p>What&#39;s our approach?</p>
                                    <Triangle className={expStyles.expandTriangle} />
                                </span>
                              </button>
                            </div>
                        </div>
                    </div>
                    <div id='pi' className={clsx({
                      [expStyles.pi] : true,
                      [expStyles.showDesc] : desc.curr === 1,
                      [expStyles.hideDesc] : desc.prev === 1})}>
                        <div className={expStyles.title}>
                            <h4>Portable Intelligence</h4>
                            <p>Lead Data Analyst</p>
                        </div>
                        <div className={expStyles.desc}>
                            <p>
                              Wanting to utilize machine learning to help stand out amongst competitors, I was brought in to consult 
                              on machine learning paths and complete early product data analysis. During my time there I was provided 
                              with a team of developers to consult with and speak on starting machine learning and data analysis within 
                              their company. The goal was that in 3 months we would have a product to showcase for Chicago&#39;s 
                              ProMat 2023.
                            </p>
                            <div className={clsx({
                                [expStyles.expandContainer] : true,
                                [expStyles.hideExpander] : showAddOn})}>
                                <button onClick={() => setShow(true)}>
                                    <span className={expStyles.expander}>
                                        <p>This was our solution.</p>
                                        <Triangle className={expStyles.expandTriangle} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id='dt' className={clsx({
                      [expStyles.dt] : true,              
                      [expStyles.showDesc] : desc.curr === 2,
                      [expStyles.hideDesc] : desc.prev === 2})}>
                        <div className={expStyles.title}>
                            <h4>Derivative Trader</h4>
                            <p>Lead Data Scientist</p>
                        </div>
                        <div className={expStyles.desc}>
                            <p>
                              Lead a team of 3 data scientists for a derivative market trader. Created a NoSQL database set up for over 15mm 
                              data points on a Google Cloud Bucket server. Utilized Neptune model tracking and tested over 20 different machine 
                              learning and statistical algorithms.                      
                            </p>
                            <div className={clsx({
                                [expStyles.expandContainer] : true,
                                [expStyles.hideExpander] : showAddOn})}>
                                <button onClick={() => setShow(true)}>
                                    <span className={expStyles.expander}>
                                        <p>These were our results.</p>
                                        <Triangle className={expStyles.expandTriangle} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                  name='right-arrow-btn'
                  aria-label='right-arrow-btn'
                  onClick={() => {
                  const updated = desc.curr + 1;
                  updated === 3 ? setDesc({curr: 0, prev: desc.curr}) : setDesc({curr: updated, prev: desc.curr});
                  }}>
                    <SideArrow className={expStyles.rightArrow}/>  
                </button>
            </div>
            <hr className={expStyles.horizontalBreak}></hr>
            <div className={expStyles.addOns}>
                <div className={clsx({
                  [expStyles.addOnContainer] : true,
                  [expStyles.showAddOnContainer] : desc.curr === 0 && showAddOn})}>
                    <div className={expStyles.addOnGrid}>
                        <p className={expStyles.addOnDesc}>
                          Flow will be built using Rust, Diesel, and PostgreSQL to boast a 5-10x SQL and navigational speed boost 
                          compared to other leading competitors and benchmarks. An example of Rust&#39;s natural speed comparison 
                          and GPU concurrency with other top software products is Polars with a 10x speed boost and SWC with a 20x 
                          speed boost over their leading competitors. With a modern UI and a well-designed database, Flow will 
                          completely change the way EDCs are used.
                        </p>
                        <ExpMotif0 className={expStyles.motif}/>
                        <div className={expStyles.collapseContainer}>
                            <button onClick={() => setShow(false)}>
                                <span className={expStyles.collapser}>
                                    <p>Collapse</p>
                                    <Triangle className={expStyles.collapseTriangle} />
                                </span>
                            </button>
                        </div>                 
                    </div>
                </div>
                <div className={clsx({
                  [expStyles.addOnContainer] : true,
                  [expStyles.showAddOnContainer] : desc.curr === 1 && showAddOn})}>
                    <div className={expStyles.addOnGrid}>
                      <p className={expStyles.addOnDesc}>
                        Early data was provided from their product launch for a warehouse monitoring system for Kumi Canada, 
                        a tier-1 automotive supplier. Created a full data processing pipeline and client-facing analysis 
                        dashboard. The dashboard enables managers to make key decisions on tasks and driver productivity 
                        during quarterly reports.
                      </p>             
                      <ExpMotif1 className={expStyles.motif}/>                     
                      <div className={expStyles.collapseContainer}>
                          <button onClick={() => setShow(false)}>
                              <span className={expStyles.collapser}>
                                  <p>Collapse</p>
                                  <Triangle className={expStyles.collapseTriangle} />
                              </span>
                          </button>
                      </div>
                    </div>
                </div>
                <div className={clsx({
                  [expStyles.addOnContainer] : true,
                  [expStyles.showAddOnContainer] : desc.curr === 2 && showAddOn})}>
                    <div className={expStyles.addOnGrid}>
                        <p className={expStyles.addOnDesc}>
                          The final model was an ensemble LGBM with an autoencoder to help filter out noise modeled after Makridakis 
                          Competition winners. Data leakage and survivorship bias was cleared out during the post-processing of the 
                          data and using time-series validation splits. The ending model had 0.8 AUC and was successful in clearing 
                          in-house developed backtesting software. However, I was skeptical about overfitting during certain time 
                          periods due to a lack of data among the SP500. This along with consistent unusually high-weight activations 
                          on the first and last-time timestamps, lead to the project being scrapped.
                        </p> 
                        <ExpMotif2 className={expStyles.motif}/>  
                        <div className={expStyles.collapseContainer}>
                            <button onClick={() => setShow(false)}>
                                <span className={expStyles.collapser}>
                                    <p>Collapse</p>
                                    <Triangle className={expStyles.collapseTriangle} />
                                </span>
                            </button>
                        </div>           
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}