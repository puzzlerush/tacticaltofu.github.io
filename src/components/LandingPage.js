import React from 'react';
import { VStack, Stack, Box, Text, Heading } from '@chakra-ui/react';
import SectionPage from './SectionPage';
import ThemedLink from './ThemedLink';
import AnimatedBear from './AnimatedBear';
import background from '../assets/background.jpg';
import useScrollPosition from '../hooks/useScrollPosition';

const LandingPage = () => {
  const scrollPosition = useScrollPosition(0);
  return (
    <SectionPage
      id="about"
      backgroundImage={background}
      backgroundSize="cover"
      style={{ backgroundPositionY: `${scrollPosition * 0.5}px` }}
    >
      <VStack
        spacing={8}
        justifySelf="center"
        alignSelf={'center'}
        width="100%"
        height="100%"
        backgroundColor="rgba(26,32,44, 0.8)"
        color="white"
        display="flex"
        justifyContent="center"
      >
        <Heading as="h1" size="2xl">
          Hey, I'm Kevin
        </Heading>
        <Stack direction={['column', 'column', 'row']} spacing={8}>
          <AnimatedBear margin="auto" />
          <Box w={[300, 400, 400, 600]} fontSize={['md', 'lg', 'xl']}>
            <Text>
              I'm a 3rd year Computer Science student at the{' '}
              <ThemedLink
                href="https://uwaterloo.ca/"
                target="_blank"
                isExternal
              >
                University of Waterloo
              </ThemedLink>
              .
            </Text>
          </Box>
        </Stack>
      </VStack>
    </SectionPage>
  );
};

export default LandingPage;
