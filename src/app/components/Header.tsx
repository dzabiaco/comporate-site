"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/app/components/LocaleSwitcher";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    function closeMobileMenu(){
        setIsMenuOpen(false);
    }
    const t = useTranslations("Navigation");

    return (
        <nav className="bg-gray-800 sticky top-0 z-50" style={{ background: "#fff" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="font-bold text-xl flex aling-center justify-center" style={{color:"#323d47"}}>
                                <img src="/icons/favicon-32x32.png" alt="" />
                                Comporate
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="text-gray-300 nav-link  px-3 py-2 rounded-md text-sm font-medium">
                                {t('home')}
                            </Link>
                            <Link href="#section-features" className="nav-link text-gray-300  px-3 py-2 rounded-md text-sm font-medium">
                                {t('features')}
                            </Link>
                            <Link href="#section-clients" className="nav-link text-gray-300  px-3 py-2 rounded-md text-sm font-medium">
                                {t('clients')}
                            </Link>
                            <Link href="#section-pricing" className="nav-link text-gray-300  px-3 py-2 rounded-md text-sm font-medium">
                                {t('pricing')}
                            </Link>
                            <Link href="#section-faq" className="nav-link text-gray-300  px-3 py-2 rounded-md text-sm font-medium">
                                {t('faq')}
                            </Link>
                            <Link href="#blog" className="nav-link text-gray-300  px-3 py-2 rounded-md text-sm font-medium">
                                {t('blog')}
                            </Link>
                            <Link href="#contact" className="nav-link text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                                {t('contacts')}
                            </Link>
                            <LocaleSwitcher />
                        </div>
                    </div>
                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMenu}
                            type="button"
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, toggle classes based on menu state */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-column">
                    <Link href="/" onClick={closeMobileMenu}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('home')}
                    </Link>
                    <Link href="#section-features" onClick={closeMobileMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('features')}
                    </Link>
                    <Link href="#section-pricing" onClick={closeMobileMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('pricing')}
                    </Link>
                    <Link href="#section-faq" onClick={closeMobileMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('faq')}
                    </Link>
                    {/*<Link href="#blog" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">*/}
                    {/*    {t('blog')}*/}
                    {/*</Link>*/}
                    <Link href="#contact" onClick={closeMobileMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('contacts')}
                    </Link>
                    {/* Add more links as needed */}
                </div>
            </div>
        </nav>
    );
}
