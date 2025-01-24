"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import classes from "./clients.module.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

export default function Clients() {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLHeadingElement>(null);
    const t = useTranslations("Clients");

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


    const logos = [
        'https://bulkit.cssninja.io/assets/img/logos/custom/gutwork.svg',
        'https://bulkit.cssninja.io/assets/img/logos/custom/phasekit.svg',
        'https://bulkit.cssninja.io/assets/img/logos/custom/grubspot.svg',
        'https://bulkit.cssninja.io/assets/img/logos/custom/taskbot.svg',
        'https://bulkit.cssninja.io/assets/img/logos/custom/systek.svg',
        'https://bulkit.cssninja.io/assets/img/logos/custom/infinite.svg',
        'https://bulkit.cssninja.io/assets/img/logos/custom/tribe.svg',
        'https://bulkit.cssninja.io/assets/img/logos/custom/powerball.svg',
    ];

    return (
        <section id="section-clients" className="section">
            <div className="container">
                <header className="section-header mb-0">
                    {/* <small>Feature</small> */}
                    <h2 className={`${isVisible ? 'animate__animated animate__zoomIn' : ''}`} ref={elementRef}>
                        {t('header')}
                    </h2>
                    <hr />
                </header>


                <div className={classes.swiper_container}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }
                    }
                    >
                        {logos.map((slide, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                <img
                                    src={slide}
                                    alt={`Slide ${index + 1}`}
                                    className={`${classes.swiper_slide_img} w-full h-auto object-cover`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>

    );
}