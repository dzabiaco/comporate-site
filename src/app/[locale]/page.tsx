import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/app/components/Header";
import HomeSection from "@/app/components/HomeSection";
import {Fragment} from "react";
import {useTranslations} from "next-intl";
import TheHeader from "@/app/components/TheHeader";
import FeaturesSection from "@/app/components/FeaturesSection";
import Benefits from "@/app/components/Benefits";
import CTA from "@/app/components/CTA";
import Pricing from "@/app/components/Pricing";
import FAQ from "@/app/components/FAQ";
import Subscribe from "@/app/components/Subscribe";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
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
