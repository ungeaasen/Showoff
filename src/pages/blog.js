import React, { useEffect, useRef} from "react";

import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import blogStyles from "./blog.module.scss";
import Head from "../components/head";
import { gsap } from "gsap";

const BlogPage = () => {
    const title= useRef(null);

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ){
                edges {
                    node {
                        title
                        publishedDate(fromNow:true)
                        slug
                    }
                }
            }
        }
    `)
/*
    useEffect( () => {

        //gsap.to("body", 0, {css: { visibility: "visible" }});

        console.log(title.current);
        const tl = gsap.timeline();

        tl.to(title.current, 1, {
            opacity: 1,
            delay: 0.3 
        } );
    })

*/

    return (
        <Layout>
            <div className={blogStyles.container}  ref={title}>
            <Head title="Blog"/>
                <ul className={blogStyles.posts} >
                    {data.allContentfulBlogPost.edges.map((article) => {
                        return (
                            <li className={blogStyles.post} key={article.node.title} >
                                <Link to={`/blog/${article.node.slug}`}>
                                    <h2>{article.node.title}</h2>
                                </Link> 
                                <p className={blogStyles.date}>{article.node.publishedDate}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default BlogPage;