import React, {useRef, useEffect} from "react";
//import { gsap } from "gsap";
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby";
import frontpageStyles from "./frontpage.module.scss";
import Logo from '../images/logo.svg'

const Frontpage = () => {
	/*const titleRef= useRef(null);
  const imageRef= useRef(null);*/
  const data = useStaticQuery(graphql`
    query {
      contentfulFrontPage {
        intro
        adress
          image {
            file {
               url
            }
              fluid(maxWidth: 750, quality: 75) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          logo {
            file {
              url
            }
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
      }
    }
  `)

	return (
		<div className={frontpageStyles.container}>
      <div className={frontpageStyles.content} >
        <div className={frontpageStyles.header} >
          <div className={frontpageStyles.link}>
            <Logo className={frontpageStyles.logo} data-sal="fade" data-sal-easing="ease-in" data-sal-delay="100" data-sal-duration="900"/>
            <p className={frontpageStyles.text} data-sal="fade" data-sal-easing="ease-in" data-sal-delay="450" data-sal-duration="1500">{data.contentfulFrontPage.intro}</p>
          </div>
        </div>
      </div>
      <BackgroundImage
        Tag="section"
        className={frontpageStyles.bgImage}
        fluid={data.contentfulFrontPage.image.fluid}
        backgroundColor={`#040e18`}
      >
      </BackgroundImage>
	  </div>
	)
}

export default Frontpage;