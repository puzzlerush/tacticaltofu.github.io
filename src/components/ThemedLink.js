import React from 'react';
import { Link, useColorModeValue } from '@chakra-ui/react';

const ThemedLink = props => {
  const color = useColorModeValue('blue.400', 'orange.300');
  return <Link {...props} color={color} />;
};

export default ThemedLink;
