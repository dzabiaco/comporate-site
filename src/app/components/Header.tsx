"use client";

import Link from "next/link";
import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "@/src/app/components/LocaleSwitcher";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const localActive = useLocale();
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    function closeMobileMenu(e: React.MouseEvent, path: string) {
        setIsMenuOpen(false);
        handleClick(e, path);
        setIsMenuOpen(false);
    }
    const t = useTranslations("Navigation");

    const handleClick = (e: React.MouseEvent, path: string) => {
        e.preventDefault();
        switch (path) {
            case "/":
                router.push(`/${localActive}`, { scroll: true });
                // document.getElementById(`#${path}`)?.scrollIntoView({ behavior: "smooth" });
                break;
            case "section-features":
                router.push(`/${localActive}#${path}`, { scroll: true });
                document.getElementById(`#${path}`)?.scrollIntoView({ behavior: "smooth" });
                break;
            case "section-clients":
                router.push(`/${localActive}#${path}`, { scroll: true });
                document.getElementById(`#${path}`)?.scrollIntoView({ behavior: "smooth" });
                break;
            case "section-pricing":
                router.push(`/${localActive}#${path}`, { scroll: true });
                document.getElementById(`#${path}`)?.scrollIntoView({ behavior: "smooth" });
                break;
            case "section-faq":
                router.push(`/${localActive}#${path}`, { scroll: true });
                document.getElementById(`#${path}`)?.scrollIntoView({ behavior: "smooth" });
                break;
            case "blog":
                router.push(`/${localActive}#${path}`, { scroll: true });
                document.getElementById(`#${path}`)?.scrollIntoView({ behavior: "smooth" });
                break;
            case "contact":
                router.push(`/${localActive}#${path}`, { scroll: true });
                document.getElementById(`#${path}`)?.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                router.push(`/${localActive}#${path}`, { scroll: true });
                document.getElementById(`#${path}`)?.scrollIntoView({ behavior: "smooth" });
        }

    };

    return (
        <nav className="bg-gray-800 sticky top-0 z-50" style={{ background: "#fff" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="font-bold text-xl flex aling-center justify-center" style={{ color: "#323d47" }}>
                                <img src="/icons/favicon-32x32.png" alt="Logo" />
                                Comporate
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="text-lg text-gray-300 nav-link px-3 py-2 rounded-md text-sm font-medium">
                                {t('home')}
                            </Link>
                            <Link href="#section-features" onClick={(e) => handleClick(e, "section-features")} className="text-lg nav-link text-gray-300  px-3 py-2 rounded-md text-sm font-medium">
                                {t('features')}
                            </Link>
                            <Link href="#section-clients" onClick={(e) => handleClick(e, "section-clients")} className="text-lg nav-link text-gray-300  px-3 py-2 rounded-md text-sm font-medium">
                                {t('clients')}
                            </Link>
                            <Link href="#section-pricing" onClick={(e) => handleClick(e, "section-pricing")} className="text-lg nav-link text-gray-300  px-3 py-2 rounded-md text-sm font-medium">
                                {t('pricing')}
                            </Link>
                            <Link href="#section-faq" onClick={(e) => handleClick(e, "section-faq")} className="text-lg nav-link text-gray-300  px-3 py-2 rounded-md text-sm font-medium">
                                {t('faq')}
                            </Link>
                            <Link href="#blog" onClick={(e) => handleClick(e, "blog")} className="text-lg nav-link text-gray-300  px-3 py-2 rounded-md text-sm font-medium">
                                {t('blog')}
                            </Link>
                            <Link href="#contact" onClick={(e) => handleClick(e, "contact")} className="text-lg nav-link text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
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
                    <Link href="/" onClick={(e) => closeMobileMenu(e, "/")}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('home')}
                    </Link>
                    <Link href="#section-features" onClick={(e) => closeMobileMenu(e, "section-features")} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('features')}
                    </Link>
                    <Link href="#section-pricing" onClick={(e) => closeMobileMenu(e, "section-pricing")} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('pricing')}
                    </Link>
                    <Link href="#section-faq" onClick={(e) => closeMobileMenu(e, "section-faq")} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('faq')}
                    </Link>
                    <Link href="#blog" onClick={(e) => closeMobileMenu(e, "blog")} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('blog')}
                    </Link>
                    <Link href="#contact" onClick={(e) => closeMobileMenu(e, "contact")} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {t('contacts')}
                    </Link>
                    {/* Add more links as needed */}

                    <LocaleSwitcher />
                </div>
            </div>
        </nav>
    );
}
