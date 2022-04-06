import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import galleryStyles from "./gallery.module.scss";
import BackgroundImage from 'gatsby-background-image';

const Gallery = () => {
	const data = useStaticQuery(graphql`
		query  {
		  contentfulGallery {
		  	text1
		    images {
		      file {
		        url
		      }
		      	fluid(maxWidth: 300, quality: 70) {
		          ...GatsbyContentfulFluid_withWebp
		        }
		    }
		  }
		}
	`)

	return (
		<div className={galleryStyles.container} id="contact" 
				data-sal="fade" data-sal-easing="ease-in" data-sal-delay="400" data-sal-duration="900">
			<div className={galleryStyles.wrapper}>
	            {data.contentfulGallery.images.map((image) => {
	                return (
	                	<BackgroundImage
				            Tag="section"
			                className={galleryStyles.image}
			                fluid={image.fluid}
			                backgroundColor={`#040e18`}
				        >
				        </BackgroundImage>
	                )
	            })}
            </div>
        </div>
	)
}

export default Gallery