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
      <div className="flex flex-col md:flex-row items-center gap-8 p-8 border rounded-lg shadow-lg bg-white">
    {/* Text Section */}
    <div className={`md:w-1/3 text-center md:text-left ${imageFirst ? 'md:order-last' : ''}`}>
      <h4 className="flex items-center justify-center md:justify-center text-center text-3xl font-bold text-gray-900">
        {/* <FaInfoCircle className="mr-2 text-blue-500" /> */}
         {featureHeader}
      </h4>
      <p className="text-lg text-gray-600 mt-4">{featureFirstParagraph}</p>
      <p className="text-lg text-gray-600 mt-2">{featureSecondPararaf}</p>
    </div>

    {/* Image Section */}
    <div className="md:w-2/3 flex justify-center">
      <Image
        src={imagePath}
        width={800}
        height={500}
        alt="Feature Image"
        className="rounded-xl shadow-lg"
      />
    </div>
  </div>
    );
  }

export default Feature;