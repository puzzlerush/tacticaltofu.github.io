import React from 'react';
import { Link, useColorModeValue } from '@chakra-ui/react';

const ThemedLink = props => {
  const color = useColorModeValue('blue.300', 'orange.300');
  return <Link color={color} {...props} />;
};

export default ThemedLink;
