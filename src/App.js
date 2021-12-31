import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProjectPage from './components/ProjectPage';
import WorkPage from './components/WorkPage';
import './styles.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Navbar />
        <LandingPage />
        <ProjectPage />
        <WorkPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
