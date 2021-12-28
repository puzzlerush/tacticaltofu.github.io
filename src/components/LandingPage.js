import React from 'react';
import { VStack, Heading } from '@chakra-ui/react';
import SectionPage from './SectionPage';
import AnimatedProfile from './AnimatedProfile';

const LandingPage = () => {
  return (
    <SectionPage>
      <VStack spacing={8} justifySelf="center" alignSelf={'center'}>
        <Heading as="h1" size="2xl">
          Hey, I'm Kevin
        </Heading>
        <AnimatedProfile />
      </VStack>
    </SectionPage>
  );
};

export default LandingPage;
