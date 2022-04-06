import React from "react";
import Layout from "../components/layout";
//import Textgallery from "../pages/textgallery";
//import Hero from "../pages/hero";
import Gallery from "../pages/gallery";
import Frontpage from "../pages/frontpage";
import Menu from "../pages/menu";
import Story from "../pages/story";
import TextHero from "../pages/textHero";
import "../styles/index.scss";
import Head from "../components/head";
//import Header from "../components/header";
//import { useStaticQuery } from "gatsby";

const IndexPage = () => {
  
  return (
    <Layout>
      <Head title="Home"/>
      <Frontpage />
      <TextHero />
      <Menu />
      <Gallery />
      <Story />
    </Layout>
  )
}

export default IndexPage;
