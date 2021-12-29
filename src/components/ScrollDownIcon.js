import React from 'react';
import { keyframes } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const scrollDown = keyframes`
  from { opacity: 1; transform: translateY(-20px); }
  to { opacity: 0; transform: translateY(20px); }
`;

const ScrollDownIcon = () => {
  const animation = `${scrollDown} infinite 1.5s linear`;
  return <ChevronDownIcon w={12} h={12} color="white" animation={animation} />;
};

export default ScrollDownIcon;
