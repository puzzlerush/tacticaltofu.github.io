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
} from '@chakra-ui/react';
import SectionPage from './SectionPage';
import ProjectCard from './ProjectCard';
import ThemedLink from './ThemedLink';
import deer from '../assets/deer_logo512.png';
import reddit from '../assets/reddit_logo512.png';

const ProjectPage = () => {
  const bgColor = useColorModeValue('orange', 'tomato');
  const cardTitleColor = useColorModeValue('black', 'white');
  return (
    <SectionPage bg={bgColor} id="projects">
      <VStack spacing={8} justifySelf="center" alignSelf={'center'}>
        <Heading ml={[4, 0, 0, 0]} as="h1" size="2xl">
          here's some of my projects
        </Heading>
        <Spacer />
        <Stack direction={['column', 'column', 'row']} spacing={10}>
          <ProjectCard
            frontImage={deer}
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
          />
        </Stack>
      </VStack>
    </SectionPage>
  );
};

export default ProjectPage;
