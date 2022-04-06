import React from "react";
import { graphql, useStaticQuery } from "gatsby";
//import Layout from "../components/layout";
import Head from "../components/head";
import menyStyles from "./textgallery.module.scss";

const MenyPage = () => {
	const data = useStaticQuery(graphql`
		query  {
		  contentfulGallery {
			  	text1
			  	text2
			  	text3
		  }
		}
	    
	`)
	
    return (
    	<div className={menyStyles.container}>
	    	<div id="meny" className={menyStyles.takeaway}>
		        <Head title="Meny"/>
		        <h2>Pizza</h2>
		        <p className={menyStyles.txt}>
	    			{data.contentfulGallery.text1}
	    		</p>
		    </div>
 			<div className={menyStyles.takeaway}>
 				<h2>Import</h2>
				<p className={menyStyles.txt}>
    				{data.contentfulGallery.text2}
    			</p>
	    	</div>
	    	<div className={menyStyles.takeaway}>
 				<h2>Catering</h2>
 				    <p className={menyStyles.txt}>
	    				{data.contentfulGallery.text3}
	    			</p>
	    	</div>
	    </div> 
    )
}

export default MenyPage;