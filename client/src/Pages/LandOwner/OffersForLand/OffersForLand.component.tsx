import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Container,

  Flex,
  HStack,
  Heading,

  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { allLands, allOffersForALand } from '../../../Services/landOwner';
import { Land } from '../../../Interfaces/Land.interface';
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
interface OffersById {
  amount: number,
  farmerId: string,
  landId: string,
  landOwnerId: string,
  status: string,
  _id: any
}
const OffersForLand = () => {


  const navigate = useNavigate();
  const routerParams = useParams();

  const [allLand, setAllLand] = useState<Land[]>([]);
  const [offersById, setOffersById] = useState<OffersById[]>([]);
  useEffect(() => {
    async function fetchAllLands() {
      try {
        const allLandData = await allLands();
        setAllLand(allLandData);

      } catch (error) {

      }
    }
    fetchAllLands()

  }, [])


  // const data = [
  //   {
  //     id: 1,
  //     landSize: 3000,
  //     location: 'dhaka',
  //     duration: '2 month',
  //     amount: 6000,
  //   },
  //   {
  //     id: 2,
  //     landSize: 9000,
  //     location: 'gazipur',
  //     duration: '2 month',
  //     amount: 4000,
  //   },
  //   {
  //     id: 3,
  //     landSize: 3000,
  //     location: 'barishal',
  //     duration: '2 month',
  //     amount: 6000,
  //   },
  // ];
  const farmerData = [
    {
      id: 1,
      name: 'ahmed',

      amount: 3000,
    },
    {
      id: 2,
      name: 'radit',

      amount: 6000,
    },
    {
      id: 3,
      name: 'erab',

      amount: 7000,
    },
  ];
  const [showField, setShowField] = useState<boolean[]>(farmerData.map(() => false));
  const [updated, setUpdated] = useState('');
  const filteredData = allLand.filter(
    (each) => each?._id === (routerParams.id)
  );
  // console.log(filteredData);
  // const landId = filteredData[0]?._id;
  // console.log('outside', landId);
  // console.log(offersById);
  // var landId = filteredData && filteredData[0]._id;
  // var farmersForOneLand = offersById.filter(
  //   (each) => each.landId == landId);
  // console.log(farmersForOneLand);
  //for one land,,many farmers can have,so I need to map all this data to get farmer's details by searching id

  useEffect(() => {
    const fetchData = async () => {
      try {


        const landId = filteredData && await filteredData[0]._id;

        const offersBylandId = await allOffersForALand(landId)
        setOffersById(offersBylandId);

      } catch (error) {

      }
    }
    fetchData();

  }, [filteredData]);

  const handleCounterBtn = (_id: any) => {
    setShowField((prevShowField) => ({ ...prevShowField, [_id]: true }));
  };
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      setUpdated(event.target.value)
    }
  }
  // console.log(updated);

  return (
    <div>
      <Flex align='center' justify='space-between' mt={4}>
        <Button onClick={() => navigate(-1)} variant='unstyled'>
          <BiArrowBack style={{ paddingLeft: '1rem' }} size={40} />
        </Button>
        <Center flex={1}>
          <Heading>List Of Offers</Heading>
        </Center>
      </Flex>

      {filteredData.map((each) => (
        <>
          <Card key={each?._id} m={8}>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Land Size
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    {each?.size}
                  </Text>
                </Box>
                {/* <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Location
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    {each.location}
                  </Text>
                </Box> */}
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Lease Duration
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    {each?.duration}
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Lease Amount
                  </Heading>
                  <HStack>
                    <Text pt='2' fontSize='sm'>
                      {each?.price}
                      <Text>

                        <TbCurrencyTaka />
                      </Text>
                    </Text>
                  </HStack>
                </Box>
              </Stack>
            </CardBody>

            <Container overflowY='auto' maxHeight='300px' css={scrollbarStyles}>
              {offersById.map((each) => (
                <Card
                  key={each._id}
                  borderWidth='2px'
                  borderColor='green.500'
                  borderRadius='lg'
                  m={1}
                >
                  <CardBody>
                    <Flex justifyContent='space-between'>
                      <Stack direction='column' spacing={2}>
                        <Text fontWeight='xs'>Offered By </Text>
                        {/* <Text as='b'>{each.name}</Text> */}
                        <Text as='b'>Amount: {each.amount}</Text>
                      </Stack>
                      <VStack
                        direction='row'
                        spacing={2}
                        justifyContent='flex-end'
                      >
                        <Button
                          w={"28vw"}
                          colorScheme='teal' variant='outline'>
                          ACCEPT
                        </Button>
                        {showField[each._id] ? (
                          <Box>
                            <InputGroup>
                              <InputLeftElement

                                pointerEvents='none'
                                color='gray.300'
                                fontWeight='bold'
                                fontSize='2em'
                                children='৳'
                              />
                              <Input
                                min={0}
                                maxWidth={"28vw"}
                                type='number'
                                autoFocus={true}
                                htmlSize={2}
                                onKeyDown={handleKeyDown} />
                            </InputGroup>
                          </Box>
                        ) : (
                          <Button
                            w={'28vw'}
                            onClick={() => handleCounterBtn(each._id)}
                            colorScheme='red'
                            variant='outline'
                          >
                            COUNTER
                          </Button>
                        )}
                      </VStack>
                    </Flex>
                  </CardBody>
                </Card>
              ))}
            </Container>
          </Card>
          <br />
          <br />
        </>
      ))}
    </div>
  );
};

export default OffersForLand;
