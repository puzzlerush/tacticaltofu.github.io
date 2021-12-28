import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import SectionPage from './SectionPage';

const AboutPage = () => {
  const bgColor = useColorModeValue('orange', 'tomato');
  return <SectionPage bg={bgColor}></SectionPage>;
};

export default AboutPage;
