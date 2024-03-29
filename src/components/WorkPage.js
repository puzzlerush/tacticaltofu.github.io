import React from 'react';
import { GridItem, VStack, Stack, Heading, Text } from '@chakra-ui/react';
import SectionPage from './SectionPage';
import ExperienceCard from './ExperienceCard';
import ThemedLink from './ThemedLink';

const WorkPage = () => {
  return (
    <SectionPage id="work" templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={[0, 1]} />
      <GridItem pl={[6, 0]} colSpan={[12, 10]} my={[12, 10, 0]} pt={[4, 0]}>
        <VStack
          spacing={7}
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Heading as="h1" size="2xl">
            my experience
          </Heading>
          <Text fontSize="lg">
            See my{' '}
            <ThemedLink href="/resume.pdf" target="_blank">
              resume
            </ThemedLink>{' '}
            for more details.
          </Text>
          <Stack direction={['column', 'column', 'column', 'row']}>
            <ExperienceCard
              title="Software Engineer"
              company="Snapcommerce"
              companyLink="https://www.snapcommerce.com/"
              dates="Sept 2021 - Dec 2021"
              content="Developed backend push notifications for a new fintech product"
              technologies={['Python', 'Flask', 'Snowflake']}
              color="red.400"
            />
            <ExperienceCard
              title="Full Stack Developer"
              company="The Co-operators"
              companyLink="https://www.cooperators.ca/"
              dates="Jan 2021 - Apr 2021"
              content="Redesigned an internal server migration and currency tracking web portal"
              technologies={['React/Redux', 'Node.js', 'Express']}
              color="teal.400"
            />
            <ExperienceCard
              title="Quality Engineering Automation Developer"
              company="SAP"
              companyLink="https://www.sap.com/canada/index.html"
              dates="May 2020 - Aug 2020"
              content="Developed automation tests for SAP HANA Cockpit and HRTT"
              technologies={['Python', 'Selenium']}
              color="blue.400"
            />
          </Stack>
        </VStack>
      </GridItem>
      <GridItem colSpan={[0, 1]} />
    </SectionPage>
  );
};

export default WorkPage;
