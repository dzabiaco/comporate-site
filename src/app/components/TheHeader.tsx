"use client";

import Link from "next/link";
import {useTranslations} from "next-intl";
import LocaleSwitcher from "@/app/components/LocaleSwitcher";

export default function TheHeader(){
    const t = useTranslations("Navigation");

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(255, 255, 255, 0.99)' }} data-navbar="fixed">
      <div className="container">
        <div className="navbar-left">
          <button className="navbar-toggler" type="button"><span className="navbar-toggler-icon"></span></button>
          <a className="navbar-brand" href="#">
            {/* <img className="logo-dark" src="./assets/img/logo-dark.png" alt="logo">
            <img className="logo-light" src="./assets/img/logo-light.png" alt="logo"> */}
            <h3>Comporate</h3>
          </a>
        </div>

        <section className="navbar-mobile">
          <nav className="nav nav-navbar ml-auto">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#section-features">Features</a>
            <a className="nav-link" href="#section-pricing">Pricing</a>
            <a className="nav-link" href="#section-faq">FAQ</a>
            <a className="nav-link" href="#footer">Contact</a>
            <a className="nav-link"><LocaleSwitcher/></a>
          </nav>
        </section>
      </div>
    </nav>
    );
}