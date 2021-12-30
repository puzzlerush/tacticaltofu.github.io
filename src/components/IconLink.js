import React, { useState } from 'react';
import { Link } from '@chakra-ui/react';

const IconLink = ({ Icon, href, size = '2em', color, hoverColor }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      target="_blank"
      isExternal
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={size} color={hovered ? hoverColor : color} />
    </Link>
  );
};

export default IconLink;
