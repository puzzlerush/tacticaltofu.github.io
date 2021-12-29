import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProjectPage from './components/ProjectPage';
import './styles.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Navbar />
        <LandingPage />
        <ProjectPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
