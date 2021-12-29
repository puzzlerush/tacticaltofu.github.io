import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
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
