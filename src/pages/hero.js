import React, {useRef, useEffect} from "react";

import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from 'gatsby-background-image';
import heroStyles from "./hero.module.scss";


const Hero = (props) => {

    return (
		<div>
		    <div className={heroStyles.imageHero} id="hero">
		    	<div className={heroStyles.container}>
		    		<div className={heroStyles.content}>
				    	<div className={heroStyles.textDiv}>
							<h3>{props.title}</h3>
							<div className={heroStyles.button}>
								<a href="tel:2234343434"><p>{props.ingress}</p></a>
							</div>
							<div className={heroStyles.button}>
								<a href="wold.com/caminito"><p>{props.linkTwo}</p></a>
							</div>
						</div>
					</div>
				</div>
				<BackgroundImage
					Tag="section"
			        className={heroStyles.bgImage}
			        fluid={props.image}
			        backgroundColor={`#040e18`}
				>
				</BackgroundImage>
			</div>
		</div>
	)
}

export default Hero;