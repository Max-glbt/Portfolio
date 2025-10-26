'use client';

import { useEffect, useState } from 'react';

export default function SocialLinks() {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Si le footer est visible à l'écran, passer en position absolute
        if (footerRect.top <= windowHeight) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`${isSticky ? 'fixed' : 'absolute'} bottom-8 right-8 transition-all`}
      style={!isSticky ? { bottom: 'calc(100% - 2rem)' } : {}}
    >
      <div className="flex space-x-4">
        <a 
          href="https://github.com/Max-glbt" 
          className="text-blue-400 hover:text-blue-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a 
          href="https://www.linkedin.com/in/maxence-guilbot-00450b250" 
          className="text-blue-400 hover:text-blue-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </div>
    </div>
  );
}
