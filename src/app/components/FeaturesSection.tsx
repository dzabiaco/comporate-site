"use client";

import Image from 'next/image';
import { useTranslations } from "next-intl";
import React, { useRef, useEffect, useState } from 'react';
import Feature from "./Feature";

export default function FeaturesSection() {
  const t = useTranslations("Features");

  // animate__animated animate__bounce
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
    <section id="section-features" className="section">
      <div className="container">
        <header className="section-header">
          {/* <small>Feature</small> */}
          <h2 className={`${isVisible ? 'animate__animated animate__zoomIn' : ''}`} ref={elementRef}>{t('header')}</h2>
          <hr />
        </header>

    
        <Feature imageFirst={true} featureHeader={t('dashboardHeader')}
          featureFirstParagraph={t('dashboardFirst')}
          featureSecondPararaf=''
          imagePath="/static/assets/img/benifits/dashboard.png"/>

        <hr className="my-8" />

        <Feature imageFirst={false} featureHeader={t('addNewsHeader')}
          featureFirstParagraph={t('addNewsText')}
          featureSecondPararaf=''
          imagePath="/static/assets/img/benifits/news.png"/>

        <hr className="my-8" />

        <Feature imageFirst={true} featureHeader={t('messagesHeader')}
          featureFirstParagraph={t('messageText')}
          featureSecondPararaf=''
          imagePath="/static/assets/img/benifits/chat.png"/>

        <hr className="my-8" />

        <Feature imageFirst={false} featureHeader={t('calendarHeader')}
          featureFirstParagraph={t('calendarText')}
          featureSecondPararaf=''
          imagePath="/static/assets/img/benifits/calendar.png"/>


        <hr className="my-8" />

        <Feature imageFirst={true} featureHeader={t('timesheetHeader')}
          featureFirstParagraph={t('timesheetText')}
          featureSecondPararaf=''
          imagePath="/static/assets/img/benifits/timesheets.png"/>

        <hr className="my-8" />

        <Feature imageFirst={false} featureHeader={t('assetsHeader')}
          featureFirstParagraph={t('assetsText')}
          featureSecondPararaf=''
          imagePath="/static/assets/img/benifits/assets.png"/>

        <hr className="my-8" />

        <Feature imageFirst={true} featureHeader={t('tasksHeader')}
          featureFirstParagraph={t('tasksText')}
          featureSecondPararaf=''
          imagePath="/static/assets/img/benifits/assets.png"/>

      </div>
    </section>
  );
}