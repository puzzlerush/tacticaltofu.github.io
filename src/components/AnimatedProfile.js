import React from 'react';
import { Box } from '@chakra-ui/react';
import useScrollPosition from '../hooks/useScrollPosition';

const AnimatedProfile = ({
  sprite: { width, height, image, scrollAmount, numFrames },
  ...rest
}) => {
  const scrollPosition = useScrollPosition();
  return (
    <Box
      width={width + 'px'}
      height={height + 'px'}
      backgroundImage={image}
      display="inline-block"
      style={{
        backgroundPositionX:
          width * (Math.floor(scrollPosition / scrollAmount) % numFrames),
      }}
      {...rest}
    />
  );
};

export default AnimatedProfile;
