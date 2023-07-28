// Next.js
import Link from 'next/link';
import { useState, useEffect } from 'react';

// CSS
import navStyles from 'src/styles/night/Nav.module.css';

// SVGs
import X from 'public/night/x.svg'

// External Libs
import { clsx } from 'clsx';

const x = () => <X />;

export default function NavMenu() {
    const [open, openMenu] = useState(false);
    const [highlight, setHighLight] = useState(0);

    useEffect(() => {
        const invisible = document.querySelector('#invisible-bg')
        invisible.addEventListener('click', () => {
            openMenu(false);
        });
    }, [open])

    return (
      <>
        <button id='hamburger' name='nav-menu-btn' aria-label='nav-menu-btn'
          onClick={() => openMenu(!open)}
          className={clsx({
          [navStyles.hamburger] : true,
          [navStyles.hamburgerOpen] : open})}>
            <div className={navStyles.bar}></div>
        </button>
        <div
          className={clsx({
          [navStyles.menu] : true,
          [navStyles.menuOpen] : open})}>
            <div className={navStyles.vertical}></div>
            <button className={navStyles.crossBtn} onClick={() => openMenu(!open)}>
                <X className={navStyles.cross}/>
            </button> 
            <nav className={navStyles.nav}>
                <ol className={navStyles.linkList}>
                    <li className={clsx({
                        [navStyles.underline] : true,
                        [navStyles.highlighted] : highlight === 1 || highlight === 2})}>
                        <Link
                          onMouseOver={() => setHighLight(1)}
                          onMouseOut={() => setHighLight(0)}
                          onFocus={() => setHighLight(1)}
                          onFocusOut={() => setHighLight(0)}
                          className={navStyles.navLink}
                          onClick={() => openMenu(false)} 
                          href='#beginning'>
                            Beginning
                        </Link>
                    </li>
                    <li className={clsx({
                        [navStyles.underline] : true,
                        [navStyles.highlighted] : highlight === 2 || highlight === 3})}>
                        <Link
                          className={navStyles.navLink}
                          onMouseOver={() => setHighLight(2)}
                          onMouseOut={() => setHighLight(0)}
                          onFocus={() => setHighLight(2)}
                          onFocusOut={() => setHighLight(0)}
                          onClick={() => openMenu(false)}
                          href='#skills'>
                            Skills
                        </Link>
                    </li>
                    <li className={clsx({
                        [navStyles.underline] : true,
                        [navStyles.highlighted] : highlight === 3 || highlight === 4})}>
                        <Link
                          className={navStyles.navLink}
                          onMouseOver={() => setHighLight(3)}
                          onMouseOut={() => setHighLight(0)}
                          onFocus={() => setHighLight(3)}
                          onFocusOut={() => setHighLight(0)}
                          onClick={() => openMenu(false)}
                          href='#experience'>
                            Experience
                        </Link>
                    </li>                                       
                    <li className={clsx({
                        [navStyles.underline] : true,
                        [navStyles.highlighted] : highlight === 4 || highlight === 5})}>
                        <Link
                          className={navStyles.navLink}
                          onMouseOver={() => setHighLight(4)}
                          onMouseOut={() => setHighLight(0)}
                          onFocus={() => setHighLight(4)}
                          onFocusOut={() => setHighLight(0)}
                          onClick={() => openMenu(false)}
                          href='#more'>
                            More
                        </Link>
                    </li>
                    <li>
                        <Link
                          className={navStyles.navLink}
                          onMouseOver={() => setHighLight(5)}
                          onMouseOut={() => setHighLight(0)}
                          onFocus={() => setHighLight(5)}
                          onFocusOut={() => setHighLight(0)}
                          onClick={() => openMenu(false)}
                          href='#contact'>
                            Contact
                        </Link>
                    </li>                    
                </ol>
            </nav>
        </div>
        <div 
          id='invisible-bg' 
          className={clsx({
            [navStyles.invisibleBgClosed] : !open,
            [navStyles.invisibleBgOpen] : open})}>
        </div>
      </>
    )
  }