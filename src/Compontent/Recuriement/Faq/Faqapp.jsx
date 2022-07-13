import React, { useState, useEffect, useRef } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { scroller } from 'react-scroll';
import FaqApp from './Faq';
function FaqAI() {
    const alanBtnInstance = useRef(null);
    const [index, setIndex] = useState(null);
    const [currentFaqId, setCurrentFaqId] = useState(null);
    useEffect(() => {
        if (!alanBtnInstance.current) {
          alanBtnInstance.current = alanBtn({
            key: 'b6d8f9ca0e8d979b98672b114d679e382e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: commandData => {
              if (commandData.command === 'gotoFaq') {
                scroller.scrollTo(`panel-header-${commandData.faqId}`, {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart',
                });
                setIndex(commandData.faqId - 1);
                setCurrentFaqId(commandData.faqId);
              } 
            },
          });
        }
      }, []);
  return (
    <FaqApp
    index={index}
    setIndex={setIndex}
    currentFaqId={currentFaqId}
    setCurrentFaqId={setCurrentFaqId}
    />
  )
}

export default FaqAI;