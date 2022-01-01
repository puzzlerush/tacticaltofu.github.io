import React from 'react';
import {
  Box,
  HStack,
  Link,
  useColorModeValue,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const navItems = ['about', 'projects', 'work'];

  return (
    <Box position="fixed" width="100%" backgroundColor={bgColor} zIndex={420}>
      <Box
        py={2}
        px={[0, 0, 10, 10]}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        fontSize="xl"
      >
        <HStack mr={3} spacing={5} display={['none', 'flex']}>
          {navItems.map(item => (
            <Link key={item} href={`#${item}`}>
              {item}
            </Link>
          ))}
          <ColorModeSwitcher />
        </HStack>
        <HStack mr={3} display={['flex', 'none']}>
          <ColorModeSwitcher />
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} />
            <MenuList>
              {navItems.map(item => (
                <Link
                  key={`${item}-menu`}
                  ml={2}
                  display="block"
                  href={`#${item}`}
                >
                  {item}
                </Link>
              ))}
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
