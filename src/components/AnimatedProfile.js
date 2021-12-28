import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import mog from '../assets/mog.png';

const mogWidth = Math.floor(528 / 4);

const AnimatedProfile = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Box
      width="96px"
      height="132px"
      backgroundImage={mog}
      style={{
        backgroundPositionX: mogWidth * (Math.floor(scrollPosition / 100) % 4),
      }}
    />
  );
};

export default AnimatedProfile;
