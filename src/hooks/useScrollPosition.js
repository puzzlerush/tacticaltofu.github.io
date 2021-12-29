import { useState, useEffect } from 'react';

const useScrollPosition = (initialPosition = 0) => {
  const [scrollPosition, setScrollPosition] = useState(initialPosition);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return scrollPosition;
};

export default useScrollPosition;
