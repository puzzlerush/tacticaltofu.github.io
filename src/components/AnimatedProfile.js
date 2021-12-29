import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const AnimatedProfile = ({ sprite, ...rest }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
      width={sprite['width']}
      height={sprite['height']}
      backgroundImage={sprite['image']}
      display="inline-block"
      style={{
        backgroundPositionX:
          sprite['width'] *
          (Math.floor(scrollPosition / sprite['scrollAmount']) %
            sprite['numFrames']),
      }}
      {...rest}
    />
  );
};

export default AnimatedProfile;
