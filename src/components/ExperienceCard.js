import React from 'react';
import { Box, Heading, Text, Stack, Divider } from '@chakra-ui/react';
import ThemedLink from './ThemedLink';

const ExperienceCard = ({
  title,
  company,
  companyLink,
  dates,
  content,
  technologies,
  color,
  size = 300,
}) => {
  return (
    <Box w={size} h={size} borderLeft="8px solid" borderColor={color} p={4}>
      <Stack direction="column" spacing={2}>
        <Heading as="h3" fontSize="1.5em" fontWeight={700}>
          {title}
        </Heading>
        <ThemedLink href={companyLink} target="_blank" isExternal>
          <Heading as="h4" size="md" fontWeight={500}>
            {company}
          </Heading>
        </ThemedLink>
        <Text fontSize="lg" fontWeight={500}>
          {dates}
        </Text>
        <Divider />
        <Text>{content}</Text>
        <Divider />
        <Text>
          <Text fontWeight={500}>Technologies: </Text>
          {technologies.join(', ')}
        </Text>
      </Stack>
    </Box>
  );
};

export default ExperienceCard;
