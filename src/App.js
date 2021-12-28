import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Navbar />
        <LandingPage />
        <AboutPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
