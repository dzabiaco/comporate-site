import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/src/app/components/Header";
import HomeSection from "@/src/app/components/HomeSection";
import {Fragment} from "react";
import TheHeader from "@/src/app/components/TheHeader";
import FeaturesSection from "@/src/app/components/FeaturesSection";
import Benefits from "@/src/app/components/Benefits";
import CTA from "@/src/app/components/CTA";
import Pricing from "@/src/app/components/Pricing";
import FAQ from "@/src/app/components/FAQ";
import Subscribe from "@/src/app/components/Subscribe";
import Contact from "@/src/app/components/Contact";
import Footer from "@/src/app/components/Footer";
import Blog from "../components/Blog/Blog";
import Clients from "../components/Clients";

export default function Home() {
  return (
      <Fragment>
        <Header/>
        <HomeSection/>
        <main className="main-content">
          <FeaturesSection/>
          <Clients/>
          {/* <Benefits/> */}
          <CTA/>
          <Pricing/>
          <FAQ/>
          <Subscribe/>
          <Blog/>
          <Contact/>
        </main>
        <Footer/>
      </Fragment>
  );
}
