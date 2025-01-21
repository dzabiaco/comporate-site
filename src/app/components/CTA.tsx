"use client";
import Image from 'next/image';
import { useTranslations } from "next-intl";
import React, { useRef, useEffect, useState } from 'react';


export default function CTA() {
    const t = useTranslations("callToActionSection");
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCtaBtn, setHoveredCtaBtn] = useState(false);
    const elementRef = useRef<HTMLHeadingElement>(null);

    const handleMouseEnter = () => {
        setHoveredCtaBtn(true);
      };
    
      const handleMouseLeave = () => {
        setHoveredCtaBtn(false);
      };

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
        <section className="section text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <p>
                            {/*<img src="./assets/img/vector/13.png" alt="..." />*/}
                            <Image src="/static/assets/img/vector/13.png" width={250} height={250} alt="..." />
                        </p>
                        <br />
                        <h3 className={`mb-6 ${isVisible ? 'animate__animated animate__bounceInLeft' : ''}`}>
                            <strong>{t('ctaHeader')}</strong>
                        </h3>
                        <p ref={elementRef} className={`lead text-muted ${isVisible ? 'animate__animated animate__bounceInRight' : ''}`}>
                            {t('ctaText')}
                        </p>
                        <br />
                        <a className={`btn btn-lg btn-round btn-primary px-7 ${hoveredCtaBtn ? 'animate__animated animate__pulse':''}`}
                         href="#"
                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}
                        >
                            {t('ctaBtn')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
