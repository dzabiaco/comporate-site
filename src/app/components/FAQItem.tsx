import React, { useState, useRef } from 'react';

interface FaqProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FaqProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-container">
            <button className="collapse-button" onClick={toggleCollapse}>
                {question}
            </button>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                {answer}
            </div>
        </div>
    );
};

export default FAQItem;