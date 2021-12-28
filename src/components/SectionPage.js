import React from 'react';
import { Grid } from '@chakra-ui/react';

const SectionPage = ({ children, ...rest }) => {
  return (
    <Grid minH="100vh" p={3} {...rest}>
      {children}
    </Grid>
  );
};

export default SectionPage;
