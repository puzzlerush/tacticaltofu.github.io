import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import SectionPage from './SectionPage';

const ProjectPage = () => {
  const bgColor = useColorModeValue('orange', 'tomato');
  return <SectionPage bg={bgColor} id="projects"></SectionPage>;
};

export default ProjectPage;
