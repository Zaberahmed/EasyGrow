import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ListOfLands = () => {
  const data = [
    {
      id: 1,
      landSize: 3000,
      location: 'dhaka',
      duration: '2 month',
      amount: 6000,
    },
    {
      id: 2,
      landSize: 9000,
      location: 'gazipur',
      duration: '2 month',
      amount: 4000,
    },
    {
      id: 3,
      landSize: 3000,
      location: 'barishal',
      duration: '2 month',
      amount: 6000,
    },
  ];

  return (
    <div>
      <Center mt={4}>
        <Heading>List Of Lands</Heading>
      </Center>
      {data.map((each) => (
        <>
          <Card m={8}>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Land Size
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    {each.landSize}
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Location
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    {each.location}
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Lease Duration
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    {each.duration}
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Lease Amount
                  </Heading>
                  <HStack>
                    <Text pt='2' fontSize='sm'>
                      {each.amount}
                      <Text>
                        {' '}
                        <TbCurrencyTaka />
                      </Text>
                    </Text>
                  </HStack>
                </Box>
              </Stack>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to={`/add/${each.id}`}>
                  <Button colorScheme='teal' variant='outline'>
                    VIEW OFFERS
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
          <br />
          <br />
        </>
      ))}
    </div>
  );
};

export default ListOfLands;
