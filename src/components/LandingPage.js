import React from 'react';
import { VStack, Heading } from '@chakra-ui/react';
import SectionPage from './SectionPage';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const LandingPage = () => {
  return (
    <SectionPage>
      <VStack spacing={8} justifySelf="center" alignSelf={'center'}>
        <Heading as="h1" size="2xl">
          Kevin Ding
        </Heading>
      </VStack>
    </SectionPage>
  );
};

export default LandingPage;
