"use client";
import BlogItem from "@/app/components/Blog/BlogItem";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";


export default function Blog() {

    const t = useTranslations("blogSection");
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleScroll = () => {
          if (elementRef.current) {
            const top = elementRef.current?.getBoundingClientRect()?.top;
            const isVisible = top < window.innerHeight;
            setIsVisible(isVisible);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        // Cleanup function to remove event listener
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <section id="blog" className="section gray-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                        <h2 className={`${isVisible ? 'animate__animated animate__zoomIn' : ''}`} ref={elementRef}>{t('header')}</h2>
                            <p className="text-uppercase small">{t('subTitle')}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />

                    <div className="mt-7 w-full flex justify-center items-center">
                        <a className="btn btn-lg btn-round btn-primary mw-200"
                            href="#section-pricing">
                            {t('morePosts')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}