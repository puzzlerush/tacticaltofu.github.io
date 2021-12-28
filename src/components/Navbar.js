import React from 'react';
import { Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
  return (
    <Box position="fixed" width="100%">
      <Box
        py={2}
        px={[0, 0, 10, 10]}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <ColorModeSwitcher />
      </Box>
    </Box>
  );
};

export default Navbar;
