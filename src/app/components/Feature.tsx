import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';

interface FeatureProps {
    imageFirst: boolean;
    featureHeader: string;
    featureFirstParagraph: string;
    featureSecondPararaf: string;
    imagePath: string;
  }

 const Feature: React.FC<FeatureProps> = ({
    imageFirst,
    featureHeader,
    featureFirstParagraph,
    featureSecondPararaf,
    imagePath
  }) => {
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
        <div className="row gap-y align-items-center" ref={elementRef}>
          <div className={`col-md-4 ml-auto`}>
            <h4>{featureHeader}</h4>
            <p>{featureFirstParagraph}</p>
            <p>{featureSecondPararaf}</p>
          </div>

          <div className={`${imageFirst ? 'col-md-8 order-md-first' : 'col-md-8'}`} style={{ width: "100%", height: "100%" }}>
            {/* <Image src="/static/assets/img/vector/10.png" width={400} height={300} alt="..." /> */}
            <Image src={imagePath} width={1000} height={1000} alt="..." />
          </div>
        </div>
    );
  }

export default Feature;