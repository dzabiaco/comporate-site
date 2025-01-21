"use client";

import { useTranslations } from "next-intl";
import React, { useRef, useEffect, useState } from 'react';

export default function Pricing(){
  const t = useTranslations("pricingSection");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFirstPrice, setHoveredFirstPrice] = useState(false);
  const [hoveredSecondPrice, setHoveredSecondPrice] = useState(false);
  const [hoveredThirdPrice, setHoveredThirdPrice] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);

  const handleMouseEnter = (price:string) => {
    switch(price){
      case "first":
        setHoveredFirstPrice(true);
        break;
      case "second":
        setHoveredSecondPrice(true);
        break;
      case "third":
        setHoveredThirdPrice(true);
        break;
    }
    
  };

  const handleMouseLeave = (price:string) => {
    switch(price){
      case "first":
        setHoveredFirstPrice(false);
        break;
      case "second":
        setHoveredSecondPrice(false);
        break;
      case "third":
        setHoveredThirdPrice(false);
        break;
    }
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
        <section id="section-pricing" className="section bg-gray">
      <div className="container">
        <header className="section-header">
          <h3 className={`${isVisible ? 'animate__animated animate__zoomIn' : ''}`} ref={elementRef}>{t('header')}</h3>
          <hr />
          <p className="lead">{t('subHeader')}</p>
        </header>

        <div className="row gap-y text-center">

          <div className="col-md-4">
            <div className={`pricing-1 ${hoveredFirstPrice ? 'animate__animated animate__pulse':''}`} 
              onMouseEnter={() => handleMouseEnter("first")}
              onMouseLeave={() => handleMouseLeave("first")}>
              <p className="plan-name">{t('priceCardTypeOne')}</p>
              <br />
              <h2 className="price">{t('priceCardPriceOne')}</h2>
              <p className="small text-lighter">{t('priceCardLengthOne')}</p>

              <div className="text-muted">
                <small>{t('priceCardFirstOptinoOne')}</small><br />
                <small>{t('priceCardSecondOptinoOne')}</small><br />
                <small>{t('priceCardThirdOptinoOne')}</small><br />
              </div>

              <br />
              <p className="text-center py-3">
                <a className="btn btn-outline-primary" href="#">{t('priceCardButton')}</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={`pricing-1 popular ${hoveredSecondPrice ? 'animate__animated animate__pulse':''}`} 
              onMouseEnter={() => handleMouseEnter("second")} 
              onMouseLeave={() => handleMouseLeave("second")}>
              <p className="plan-name">{t('priceCardTypeTwo')}</p>
              <br />
              <h2 className="price" style={{ color: 'rgb(37 99 235)' }}>
                <div className="price-unit">$</div>
                <span data-bind-radio="pricing" data-monthly="6.67" data-yearly="75">{t('priceCardPriceTwo')}</span>
              </h2>
              <p className="small text-lighter">
              {t('priceCardPriceTwoPerUser')}/
                <span data-bind-radio="pricing" data-monthly="month" data-yearly="year">
                  {t('priceCardPriceTwoPerUserMonth')}
                </span>
              </p>

              <div className="text-muted">
                <small>{t('priceCardFirstOptinoTwo')}</small><br />
                <small>{t('priceCardSecondOptinoTwo')}</small><br />
                <small>{t('priceCardThirdOptinoTwo')}</small><br />
              </div>

              <br />
              <p className="text-center py-3">
                <a className="btn btn-primary" href="#" data-bind-href="pricing" data-monthly="#monthly" data-yearly="#yearly">
                {t('priceCardButton')}
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={`pricing-1 ${hoveredThirdPrice ? 'animate__animated animate__pulse':''}`}
              onMouseEnter={() => handleMouseEnter("third")} 
              onMouseLeave={() => handleMouseLeave("third")}
            >
              <p className="plan-name">{t('priceCardTypeThree')}</p>
              <br />
              <h2 className="price">
                <span className="price-unit">$</span>
                <span data-bind-radio="pricing" data-monthly="12.5" data-yearly="120">
                  {t('priceCardPriceThree')}
                  </span>
              </h2>
              <p className="small text-lighter">
              {t('priceCardPriceTwoPerUser')}/
                <span data-bind-radio="pricing" data-monthly="month" data-yearly="year">
                {t('priceCardPriceTwoPerUserMonth')}
                  </span>
              </p>

              <div className="text-muted">
                <small>{t('priceCardFirstOptinoThree')}</small><br />
                <small>{t('priceCardSecondOptinoThree')}</small><br />
                <small>{t('priceCardThirdOptinoThree')}</small><br />
              </div>

              <br />
              <p className="text-center py-3">
                <a className="btn btn-outline-primary" href="#" data-bind-href="pricing" data-monthly="#monthly" data-yearly="#yearly">
                {t('priceCardButton')}
                  </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    );
}