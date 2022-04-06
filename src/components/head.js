import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery } from "gatsby"

const Head = ( {title} ) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)
    
    return (
        <Helmet 
            title={` ${title} | ${data.site.siteMetadata.title}`} 
            htmlAttributes={{ lang: 'no', }}
        >
        <meta name="description" content={data.site.siteMetadata.description} />

        </Helmet>     
    )
}

export default Head;