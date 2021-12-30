import React from 'react';
import {
  useColorModeValue,
  VStack,
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
        />
      </VStack>
    </SectionPage>
  );
};

export default ProjectPage;
