import React from 'react';
import { Box } from '@chakra-ui/react';
import useScrollPosition from '../hooks/useScrollPosition';

const AnimatedProfile = ({ sprite, ...rest }) => {
  const scrollPosition = useScrollPosition();

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
