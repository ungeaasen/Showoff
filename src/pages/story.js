import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import storyStyles from "./story.module.scss";
import BackgroundImage from 'gatsby-background-image';

const Story = () => {
	const data = useStaticQuery(graphql`
		query  {
			contentfulStory {
				header
				introText
				image {
			      file {
			      	url
			      }
			        fluid(maxWidth: 700, quality: 70) {
			          ...GatsbyContentfulFluid_withWebp
			        }
			    }
					text {
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
		<div>
			<div className={storyStyles.container}>
				<div className={storyStyles.contentLeft}>
					<h2>{data.contentfulStory.header}</h2>
					<p>{data.contentfulStory.introText}</p>
				</div>
				<div className={storyStyles.contentRight}>
					<p>
						{data.contentfulStory.text.content.map((contents) => {
							return (contents.content.map((content) => {
								return (content.value)
							}))
						})}
					</p>
				</div>
					<BackgroundImage
			            Tag="section"
		                className={storyStyles.image}
		                fluid={data.contentfulStory.image.fluid}
		                backgroundColor={`#040e18`}
			        >
			        </BackgroundImage>
			</div>
		</div>
	)
}

export default Story;