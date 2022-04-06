import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import heroStyles from "./textHero.module.scss";
//import { gsap } from "gsap";


const TextHero = () => {
	
	const data = useStaticQuery(graphql`
		query {
			contentfulIntroduction {
					introductionText {
						content {
							content {
								value
							}
						}
				}
			}
		}
	`)

    return (
		<div data-sal="fade" data-sal-easing="ease-in" data-sal-delay="100" data-sal-duration="900">
			<div className={heroStyles.textHero}>
				<h3 className={heroStyles.header}>
					{data.contentfulIntroduction.introductionText.content.map((contents) => {
						return (contents.content.map((content) => {
							return (content.value)
						}))
					})}
				</h3>
		    </div>
		</div>
	)
}

export default TextHero;