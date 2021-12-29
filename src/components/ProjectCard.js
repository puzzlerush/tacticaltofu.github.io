import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import FlipCard from './FlipCard';

const ProjectCard = ({ frontImage, backContents, title }) => {
  return (
    <Box textAlign="center">
      <FlipCard
        size={250}
        frontImage={frontImage}
        backgroundColor="#424242"
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box p={2}>{backContents}</Box>
      </FlipCard>
      <Heading m={3} as="h2" size="lg">
        {title}
      </Heading>
    </Box>
  );
};

export default ProjectCard;
