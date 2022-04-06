import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import footerStyles from "./footer.module.scss";
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    email
                    tlf
                }
            }
            contentfulFooter {
                facebook {
                  file {
                    url
                  }
                }
                instagram   {
                  file {
                    url
                  }
                }
            }
        }
    `)

    return (
        <footer>
            <div className={footerStyles.footer}>
                <div className={footerStyles.wrapper}>
                    <div className={footerStyles.content}>
                        <p className={footerStyles.header}>Kontakt:</p>
                        <a href="tel:{data.site.siteMetadata.tlf}">
                            <p>TLF: +4740075985</p>
                        </a>
                        <a href="mailto:{data.site.siteMetadata.email}">
                            <p>post@caminito.no</p>
                        </a>
                        <div className={footerStyles.icon}>
                            <a href="https://www.facebook.com/caminitotorshov">
                                <Facebook name="facebook link" />
                             </a>
                         </div>
                         <div className={footerStyles.icon}>
                             <a href="https://www.instagram.com/caminitotorshov">
                                <Instagram name="instagram link"/>
                             </a>
                         </div>
                    </div>
                    <div className={footerStyles.content}>
                        <p className={footerStyles.header}>Hvor er vi...</p>
                    </div>
                    <div className={footerStyles.content}>
                        <a href="#menu">
                            <p className={footerStyles.header}>Tilbake til menyen...</p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;