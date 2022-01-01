import React from 'react';
import {
  useColorModeValue,
  VStack,
  Stack,
  Heading,
  Text,
  Box,
  UnorderedList,
  ListItem,
  Spacer,
  GridItem,
} from '@chakra-ui/react';
import SectionPage from './SectionPage';
import ProjectCard from './ProjectCard';
import ThemedLink from './ThemedLink';
import deer from '../assets/deer_logo512.png';
import reddit from '../assets/reddit_logo512.png';

import AnimatedProfile from './AnimatedProfile';

import shadow from '../assets/shadow_walk_front.png';
import celes from '../assets/celes_walk_front.png';
import locke from '../assets/locke_walk_front.png';
import mog from '../assets/mog_walk_front.png';

import terra from '../assets/terra_walk_back.png';
import edgar from '../assets/edgar_walk_back.png';
import sabin from '../assets/sabin_walk_back.png';
import cyan from '../assets/cyan_walk_back.png';

const baseSprite = {
  numFrames: 4,
  width: 96,
  height: 144,
  scrollAmount: 100,
};

const sprites = {
  shadow: { ...baseSprite, image: shadow },
  celes: { ...baseSprite, image: celes },
  locke: { ...baseSprite, image: locke },
  mog: { ...baseSprite, height: 132, image: mog },

  terra: { ...baseSprite, width: 84, image: terra },
  edgar: { ...baseSprite, image: edgar },
  sabin: { ...baseSprite, image: sabin },
  cyan: { ...baseSprite, image: cyan },
};

const ProjectPage = () => {
  const bgColor = useColorModeValue('orange', 'tomato');
  const cardTitleColor = useColorModeValue('black', 'white');

  const { shadow, celes, locke, mog, terra, edgar, sabin, cyan } = sprites;
  return (
    <SectionPage bg={bgColor} id="projects" templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={3} justifySelf="center" alignSelf={'center'}>
        <VStack>
          <AnimatedProfile sprite={shadow} />
          <AnimatedProfile sprite={celes} />
          <AnimatedProfile sprite={locke} />
          <AnimatedProfile sprite={mog} />
        </VStack>
      </GridItem>
      <GridItem
        colSpan={6}
        justifySelf="center"
        alignSelf={'center'}
        my={[12, 10, 0]}
        pt={[6, 0]}
      >
        <VStack spacing={8}>
          <Heading as="h1" size="2xl">
            here's some of my projects
          </Heading>
          <Spacer />
          <Stack direction={['column', 'column', 'row']} spacing={10}>
            <ProjectCard
              frontImage={deer}
              backColor="#424242"
              backContents={
                <Box>
                  <Text fontSize="lg" fontWeight="bold">
                    MangaDex Web Reader
                  </Text>
                  <UnorderedList ml={6} textAlign="left">
                    <ListItem>
                      300+ daily active users from May to June 2021
                    </ListItem>
                    <ListItem>React/Redux + MaterialUI</ListItem>
                  </UnorderedList>
                </Box>
              }
              title={
                <ThemedLink
                  color={cardTitleColor}
                  href="https://mangastack.cf/"
                  target="_blank"
                  isExternal
                >
                  MangaStack
                </ThemedLink>
              }
              demoLink="https://mangastack.cf/"
              githubLink="https://github.com/tacticaltofu/mangastack"
            />
            <ProjectCard
              frontImage={reddit}
              backColor="black"
              backContents={
                <Box>
                  <Text fontSize="lg" fontWeight="bold">
                    Reddit Clone
                  </Text>
                  <UnorderedList ml={6} textAlign="left">
                    <ListItem>80+ stars on GitHub</ListItem>
                    <ListItem>
                      React/Redux + ChakraUI, Node.js, Express, PostgreSQL
                    </ListItem>
                  </UnorderedList>
                </Box>
              }
              title={
                <ThemedLink
                  color={cardTitleColor}
                  href="https://weddit.netlify.app/"
                  target="_blank"
                  isExternal
                >
                  Reddit Clone
                </ThemedLink>
              }
              demoLink="https://weddit.netlify.app/"
              githubLink="https://github.com/tacticaltofu/reddit-clone"
            />
          </Stack>
        </VStack>
      </GridItem>
      <GridItem colSpan={3} justifySelf="center" alignSelf={'center'}>
        <VStack>
          <AnimatedProfile sprite={terra} />
          <AnimatedProfile sprite={edgar} />
          <AnimatedProfile sprite={sabin} />
          <AnimatedProfile sprite={cyan} />
        </VStack>
      </GridItem>
    </SectionPage>
  );
};

export default ProjectPage;
