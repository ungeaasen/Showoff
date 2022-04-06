import React, {useRef, useEffect, useState} from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import headerStyles from "./header.module.scss";
//import { gsap } from "gsap";

const Header = () => {
    const headerRef= useRef(null);
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    const data = useStaticQuery(graphql`
        query {
            contentfulFrontPage {
                image {
                    file {
                        url
                    }
                }
            }
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={headerStyles.container}>
            <header className={headerStyles.header} >
                <div className={headerStyles.content}
                    ref={headerRef}>
                 <div className={headerStyles.title}>
                    <div className={headerStyles.container}>
                        <h1>
                            <Link to="/">
                               {data.site.siteMetadata.title}
                            </Link>
                        </h1>
                    </div>
                </div>
                <div className={isActive ? headerStyles.fillerHide : headerStyles.filler}>
                <div className={headerStyles.container}></div>
                </div>
                <div className={isActive ? headerStyles.menuToggle : headerStyles.checked} onClick={handleToggle}>
                    <div className={headerStyles.container}>
                        <div className={headerStyles.menu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div> 
                    </div> 
                </div>  
                <nav className={isActive ? headerStyles.nav : headerStyles.navShow}>
                    <ul className={headerStyles.navList}>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="#hero">Takeaway</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="#meny">Catering</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="#menu">Menyen</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="#import">Import</Link></li>
                    </ul>
                </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;