import { Box, Button, Card, CardBody, Center, Container, Divider, Flex, HStack, Heading, Highlight, Stack, StackDivider, Text, VStack } from '@chakra-ui/react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
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
  const routerParams = useParams();
  console.log(routerParams);
  const data = [
    {
      landSize: 3000,
      location: 'dhaka',
      duration: '2 month',
      amount: 6000

    }, {
      landSize: 9000,
      location: 'gazipur',
      duration: '2 month',
      amount: 4000
    }, {
      landSize: 3000,
      location: 'barishal',
      duration: '2 month',
      amount: 6000
    }
  ]
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
  ]
  return (
    <div>
      <Center mt={4}>
        <Heading>List Of Offers</Heading>
      </Center>
      {
        data.map((each) => <>
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
                <Card key={index} borderWidth='2px' borderColor='green.500' borderRadius='lg' m={4} >
                  <CardBody>
                    <Flex justifyContent='space-between'>
                      <Stack direction='column' spacing={2}>
                        <Text as='b'>Offered By <Text as='mark'>{each.name}</Text></Text>
                        <Text as='b'>Amount: {each.amount}</Text>
                      </Stack>
                      <VStack direction='row' spacing={2} justifyContent='flex-end'>
                        <Button colorScheme='teal' variant='outline'>
                          ACCEPT
                        </Button>
                        <Button colorScheme='teal' variant='outline'>
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
