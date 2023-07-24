import { Box, Button, Card, CardBody, Center, Container, Divider, Flex, HStack, Heading, Highlight, Stack, StackDivider, Text, VStack } from '@chakra-ui/react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'
const scrollbarStyles = `
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: linear-gradient(to bottom, #f2f2f2, #cccccc);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #4caf50, #45a049);
    border-radius: 6px;
  }
`;
const OffersForLand = () => {
  const navigate = useNavigate();
  const routerParams = useParams();

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
  const farmerData = [
    {
      name: 'ahmed',

      amount: 3000

    }, {
      name: 'radit',

      amount: 6000
    }, {
      name: 'erab',

      amount: 7000
    }
  ];
  const filteredData = data.filter((each) =>
    (each.id === Number(routerParams.id))
  );

  return (
    <div>
      <Flex align="center" justify="space-between" mt={4}>
        <Button onClick={() => navigate(-1)} variant="unstyled">
          <BiArrowBack style={{ paddingLeft: '1rem' }} size={40} />
        </Button>
        <Center flex={1}>
          <Heading>List Of Offers</Heading>
        </Center>
      </Flex>

      {
        filteredData.map((each) => <>
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
                  <HStack><Text pt='2' fontSize='sm'>
                    {each.amount}
                    <Text> <TbCurrencyTaka /></Text>
                  </Text>
                  </HStack>



                </Box>
              </Stack>


            </CardBody>

            <Container overflowY='auto' maxHeight='300px' css={scrollbarStyles}>


              {farmerData.map((each, index) => (
                <Card key={index} borderWidth='2px' borderColor='green.500' borderRadius='lg' m={1} >
                  <CardBody>
                    <Flex justifyContent='space-between' >
                      <Stack direction='column' spacing={2}>
                        <Text fontSize='xs'>Offered By </Text>
                        <Text as='b'>{each.name}</Text>
                        <Text as='b'>Amount: {each.amount}</Text>
                      </Stack>
                      <VStack direction='row' spacing={2} justifyContent='flex-end'>
                        <Button colorScheme='teal' variant='outline'>
                          ACCEPT
                        </Button>
                        <Button colorScheme='red' variant='outline'>
                          REJECT
                        </Button>
                      </VStack>
                    </Flex>
                  </CardBody>
                </Card>

              ))}
            </Container>










          </Card>
          <br />
          <br />
        </>)
      }
    </div>
  );
};

export default OffersForLand;
