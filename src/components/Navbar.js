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
  Tooltip,
} from '@chakra-ui/react';
import IconLink from './IconLink';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const hoverColor = useColorModeValue('blue', 'orange');
  const navItems = ['about', 'projects', 'work'];

  const iconLinks = [
    { icon: FaFileAlt, href: '/resume.pdf', name: 'Resume' },
    { icon: FaGithub, href: 'https://github.com/tacticaltofu', name: 'GitHub' },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/ding-kevin/',
      name: 'LinkedIn',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:k24ding@uwaterloo.ca',
      name: 'Email',
    },
  ];

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
        <HStack mr={5} spacing={3}>
          {iconLinks.map(({ icon, href, name }) => (
            <Tooltip key={name} label={name}>
              <span>
                <IconLink
                  size="1.5em"
                  Icon={icon}
                  href={href}
                  hoverColor={hoverColor}
                />
              </span>
            </Tooltip>
          ))}
        </HStack>
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
