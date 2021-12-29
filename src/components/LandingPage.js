import React from 'react';
import { VStack, HStack, Box, Text, Heading, Link } from '@chakra-ui/react';
import SectionPage from './SectionPage';
import AnimatedProfile from './AnimatedProfile';
import ThemedLink from './ThemedLink';

const LandingPage = () => {
  return (
    <SectionPage id="about">
      <VStack spacing={8} justifySelf="center" alignSelf={'center'}>
        <Heading as="h1" size="2xl">
          Hey, I'm Kevin
        </Heading>
        <HStack spacing={8}>
          <AnimatedProfile />
          <Box w={[200, 300, 400, 600]} fontSize={['md', 'lg', 'xl']}>
            <Text>
              I'm a 3A year Computer Science student at the{' '}
              <ThemedLink
                href="https://uwaterloo.ca/"
                target="_blank"
                isExternal
              >
                University of Waterloo
              </ThemedLink>
              .
            </Text>
          </Box>
        </HStack>
      </VStack>
    </SectionPage>
  );
};

export default LandingPage;
