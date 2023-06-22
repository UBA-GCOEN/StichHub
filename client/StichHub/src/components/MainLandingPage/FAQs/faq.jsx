import React, { useState } from "react";
// import  doubts from "./doubts.webp";
import doubts from "./faqIcon.webp";
import './faq.css'

const AccordionItem = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleAccordion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`accordion-item ${expanded ? 'expanded' : ''}`}>
            <button
                onClick={toggleAccordion}
                aria-expanded={expanded ? 'true' : 'false'}
            >
                <span className="accordion-title">{title}</span>
                <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
                <p>{content}</p>
            </div>
        </div>
    );
};

const faq = () => {

    return (
        <div id="faqs" className="h-[100%] relative mt-10 lg:mt-0 p-10 lg:p-20 lg:ml-20 lg:mr-20">
            {/* add Heading */}
            <div className="faq-heading">Frequently Asked Questions</div>
            <div className="relative z-[5] flex justify-evenly">
                {/* left-Side */}
                <div id="leftside" className="lg:block hidden mb-[20px] bottom-[20p]">
                    <img src={doubts}  />
                    <p className="text-left text-xl w-[500px]"></p>
                </div>

                {/* Right-Side */}
                <div id="rightSide" className="">
                    {/* Title */}
                    <div className="accordion">
                        <AccordionItem
                            title="Q : How does StitchHub benefit tailors?"
                            content="A: StitchHub increases your reach to customers beyond your locality, helping you grow your income and build a loyal customer base."
                        />
                        <AccordionItem
                            title=" Q : What problem does StitchHub solve for customers?"
                            content=" A: StitchHub eliminates the hassle of finding a good tailor and reduces the need for multiple store visits by offering a convenient tailoring experience."
                        />
                        <AccordionItem
                            title=" Q : How does the 3D Configurator feature work?"
                            content=" A: With the 3D Configurator, you can make changes to your design and simultaneously see how it looks on a 3D model of yourself, ensuring you get the perfect look."
                        />
                        <AccordionItem
                            title=" Q : What is the role of AR Tech in StitchHub?"
                            content=" A: StitchHub's AR Tech enables you to see how your ordered piece will look before it's created, giving you a preview of the final product."
                        />
                    </div>
                </div>
            </div>

            {/* BG-Gradients */}
            <div className="absolute circleGradient-blue w-[670px] h-[570px] bottom-[-40px] left-[-200px] z-0 blur-xl"></div>
            <div className="absolute circleGradient-peach w-[370px] h-[370px] top-[40px] left-[700px] z-0 blur-xl"></div>
        </div>
    );
};

export default faq;
