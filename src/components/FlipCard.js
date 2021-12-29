import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

const FlipCard = ({ size = 300, frontImage, children, ...rest }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <Box
      width={size}
      height={size}
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <Box
        position="relative"
        width="100%"
        height="100%"
        textAlign="center"
        transition="transform 1s"
        transform={isFlipped ? 'rotateY(180deg)' : false}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Box
          className="flip-card-front"
          backgroundImage={frontImage}
          backgroundSize={`${size}px ${size}px`}
          style={{ cursor: 'pointer' }}
        />
        <Box className="flip-card-back" {...rest}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default FlipCard;
