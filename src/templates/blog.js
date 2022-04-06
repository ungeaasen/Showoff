import React, {useEffect, useRef} from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/layout";
import Head from "../components/head";
import blogPostStyles from "./blog.module.scss";
import BlogPost from "../pages/blog.js";
import gsap from "gsap";

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug} ) {
            title
            publishedDate(formatString:"MMMM, Do, YYYY")
            body {
                json
            }
        }
    }
`


const Blog = (props) => {
    const article= useRef(null);

    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const src = node.data.target.fields.file['en-US'].url

                if (!alt) return null
                if (!src) return null
              
                return <img src={src}/>
            }
        }
    }

    useEffect( () => {
        const tl = gsap.timeline();

        tl.to(article.current, 1, {
            x: 700 
        } );
    }, [] )

    return (
        <Layout>
        <BlogPost />
            <div className={blogPostStyles.container} ref={article}>
                 <Head title={props.data.contentfulBlogPost.title}/>
                <div className={blogPostStyles.content}>
                  <h1>{props.data.contentfulBlogPost.title}</h1>
                    {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}

                </div>
            </div>        
        </Layout>
        
    )
}

export default Blog;

