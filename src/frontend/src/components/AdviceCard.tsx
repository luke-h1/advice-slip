/* eslint-disable import/no-duplicates */
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { Advice } from '../services/adviceService';

interface Props {
  advice: Advice;
}

const AdviceCard = ({ advice }: Props) => {
  return (
    <Center py={6}>
      <Box
        maxW="320px"
        w="full"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="2xl"
        rounded="lg"
        p={6}
        textAlign="center"
      >
        <Heading fontSize="2xl" fontFamily="body">
          {advice.title}
        </Heading>

        <Stack align="left" justify="left" mt={5} mb={5}>
          <Text fontSize="1xl" textAlign="left">
            {advice.content}
          </Text>
        </Stack>
        <Stack align="center" justify="center" direction="row" mt={6}>
          <Badge px={2} py={1} fontWeight="400">
            Created At
          </Badge>
          <Badge px={2} py={1} fontWeight="400">
            {format(parseISO(advice.createdAt), 'MMM dd, yyyy')}
          </Badge>
        </Stack>

        <Stack align="center" justify="center" direction="row" mt={6}>
          <Badge px={2} py={1} fontWeight="400">
            Updated At
          </Badge>
          <Badge px={2} py={1} fontWeight="400">
            {format(parseISO(advice.updatedAt), 'MMM dd, yyyy')}
          </Badge>
        </Stack>

        <Stack mt={8} direction="row" spacing={4}>
          <Button
            flex={1}
            fontSize="sm"
            rounded="full"
            _focus={{
              bg: 'gray.200',
            }}
          >
            Update
          </Button>
          <Button
            flex={1}
            fontSize="sm"
            rounded="full"
            bg="red.400"
            color="white"
            _hover={{
              bg: 'red.500',
            }}
            _focus={{
              bg: 'red.500',
            }}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};
export default AdviceCard;
