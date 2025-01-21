"use client";
import { useTranslations } from "next-intl";
import React, { useRef, useEffect, useState } from 'react';

import FAQItem from "./FAQItem";


export default function FAQ() {
  const t = useTranslations("faqSection");
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
    // <section id="section-faq" className="section">
    //   <div className="container">
    //     <header className="section-header">
    //       <small>FAQ</small>
    //       <h2 className={`${isVisible ? 'animate__animated animate__zoomIn' : ''}`} ref={elementRef}>{t('header')}</h2>
    //       <hr />
    //       <p>{t('subtitle')}</p>
    //     </header>

    //     <div className="row gap-y">
    //       <div className="col-md-6 col-xl-4">
    //         {/* <div>
    //           <h5>{t('firstQuestionHeader')}</h5>
    //           <p>{t('firstQuestionAnswer')}</p>
    //         </div> */}
    //         <FAQItem question={t('firstQuestionHeader')} answer={t('firstQuestionAnswer')}/>
    //       </div>

    //       <div className="col-md-6 col-xl-4">
    //         <FAQItem question={t('secondQuestionHeader')} answer={t('firstQuestionAnswer')}/>
    //       </div>

    //       <div className="col-md-6 col-xl-4">
    //         <FAQItem question={t('thirdQuestionHeader')} answer={t('thirdQuestionAnswer')}/>
    //       </div>

    //       <div className="col-md-6 col-xl-4">
    //         <FAQItem question={t('fourthQuestionHeader')} answer={t('fourthQuestionAnswer')}/>
    //       </div>

    //       <div className="col-md-6 col-xl-4">
    //         <FAQItem question={t('fifthQuestionHeader')} answer={t('fifthQuestionAnswer')}/>
    //       </div>

    //       <div className="col-md-6 col-xl-4">
    //         <FAQItem question={t('sixthQuestionHeader')} answer={t('sixthQuestionAnswer')}/>
    //       </div>

    //       {/* <div className="col-md-6 col-xl-4">
    //         <h5>{t('secondQuestionHeader')}</h5>
    //         <p>{t('secondQuestionAnswer')}</p>
    //       </div>

    //       <div className="col-md-6 col-xl-4">
    //         <h5>{t('thirdQuestionHeader')}</h5>
    //         <p>{t('thirdQuestionAnswer')}</p>
    //       </div>

    //       <div className="col-md-6 col-xl-4">
    //         <h5>{t('fourthQuestionHeader')}</h5>
    //         <p>{t('fourthQuestionAnswer')}</p>
    //       </div>

    //       <div className="col-md-6 col-xl-4">
    //         <h5>{t('fifthQuestionHeader')}</h5>
    //         <p>{t('fifthQuestionAnswer')}</p>
    //       </div>

    //       <div className="col-md-6 col-xl-4">
    //         <h5>{t('sixthQuestionHeader')}</h5>
    //         <p>{t('sixthQuestionAnswer')}</p>
    //       </div> */}
    //     </div>

    //   </div>
    // </section>

    <section id="section-faq" className="section mb-7">
      <div className="container">
        <header className="section-header">
          <small>FAQ</small>
          <h2 className={`${isVisible ? 'animate__animated animate__zoomIn' : ''}`} ref={elementRef}>{t('header')}</h2>
          <hr />
          <p>Got a question? We've got answers. If you have some other questions, contact us using email.</p>
        </header>

        <div className="row gap-y">
          <div className="col-md-6 col-xl-4">
            <h5>Is this a secure site for purchases?</h5>
            <p>Absolutely! We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner which has the most stringent level of certification available in the payments industry.</p>
          </div>

          <div className="col-md-6 col-xl-4">
            <h5>Can I cancel my subscription?</h5>
            <p>You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month. You will continue to have access to your account until your current subscription expires.</p>
          </div>

          <div className="col-md-6 col-xl-4">
            <h5>How long are your contracts?</h5>
            <p>Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any time with no further obligation.</p>
          </div>

          <div className="col-md-6 col-xl-4">
            <h5>Can I update my card details?</h5>
            <p>Yes. Go to the billing section of your dashboard and update your payment information.</p>
          </div>

          <div className="col-md-6 col-xl-4">
            <h5>Can I request refund?</h5>
            <p>Unfortunately, not. We do not issue full or partial refunds for any reason.</p>
          </div>

          <div className="col-md-6 col-xl-4">
            <h5>Can I try your service for free?</h5>
            <p>Of course! We’re happy to offer a free plan to anyone who wants to try our service.</p>
          </div>
        </div>

      </div>
    </section>
  );
}