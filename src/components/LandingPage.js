import React from 'react';
import { VStack, Stack, Box, Text, Heading } from '@chakra-ui/react';
import SectionPage from './SectionPage';
import ThemedLink from './ThemedLink';
import AnimatedBear from './AnimatedBear';
import background from '../assets/background.jpg';
import useScrollPosition from '../hooks/useScrollPosition';
import ScrollDownIcon from './ScrollDownIcon';

const LandingPage = () => {
  // const scrollPosition = useScrollPosition(0);
  return (
    <SectionPage
      id="about"
      backgroundImage={background}
      backgroundSize="cover"
      backgroundAttachment="fixed"
      style={{
        backgroundPositionX: 'center',
        // backgroundPositionY: `${scrollPosition * 0.5}px`,
      }}
    >
      <VStack
        spacing={8}
        justifySelf="center"
        alignSelf="center"
        width="100%"
        height="100%"
        backgroundColor="rgba(26,32,44, 0.8)"
        color="white"
        display="flex"
        justifyContent="center"
        pt={[12, 12, 0]}
        mt={[4, 0]}
      >
        <Heading as="h1" size="2xl">
          Hey, I'm Kevin
        </Heading>
        <Stack direction={['column', 'column', 'row']} spacing={8}>
          <AnimatedBear margin="auto" />
          <Box
            w={[300, 400, 400, 600]}
            fontSize={['md', 'lg', 'xl']}
            textAlign="justify"
          >
            <Text>
              I'm a 3rd year Computer Science student at the{' '}
              <ThemedLink
                href="https://uwaterloo.ca/"
                target="_blank"
                isExternal
              >
                University of Waterloo
              </ThemedLink>
              . Previously, I've done internships at{' '}
              <ThemedLink
                href="https://www.snapcommerce.com/"
                target="_blank"
                isExternal
              >
                Snapcommerce
              </ThemedLink>
              ,{' '}
              <ThemedLink
                href="https://www.cooperators.ca/"
                target="_blank"
                isExternal
              >
                The Co&#8209;operators
              </ThemedLink>
              , and{' '}
              <ThemedLink
                href="https://www.sap.com/canada/index.html"
                target="_blank"
                isExternal
              >
                SAP
              </ThemedLink>
              .
            </Text>
            <br />
            <Text>
              I'm looking for software engineering internship opportunities for
              the Summer 2022 term. Feel free to look at my{' '}
              <ThemedLink href="/resume.pdf" target="_blank">
                resume
              </ThemedLink>{' '}
              or contact me at{' '}
              <ThemedLink href="mailto:k24ding@uwaterloo.ca">
                k24ding@uwaterloo.ca
              </ThemedLink>
            </Text>
          </Box>
        </Stack>
        <ScrollDownIcon />
      </VStack>
    </SectionPage>
  );
};

export default LandingPage;
