import React from 'react';
import { Box, Heading, VStack, HStack } from '@chakra-ui/react';
import { FaLink, FaGithub } from 'react-icons/fa';
import FlipCard from './FlipCard';
import IconLink from './IconLink';

const ProjectCard = ({
  frontImage,
  backContents,
  title,
  demoLink,
  githubLink,
  iconHoverColor = '#CC8100',
}) => {
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
        <VStack p={2} height="100%" justifyContent="space-around">
          {backContents}
          <HStack spacing={8}>
            <IconLink
              Icon={FaLink}
              href={demoLink}
              hoverColor={iconHoverColor}
            />
            <IconLink
              Icon={FaGithub}
              href={githubLink}
              hoverColor={iconHoverColor}
            />
          </HStack>
        </VStack>
      </FlipCard>
      <Heading m={3} as="h2" size="lg">
        {title}
      </Heading>
    </Box>
  );
};

export default ProjectCard;
