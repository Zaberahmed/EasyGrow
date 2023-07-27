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
import { allLands, allOffersForALand, counterOffer } from '../../../Services/landOwner';
import { Land } from '../../../Interfaces/Land.interface';
import { userById } from '../../../Services/user';
import React from 'react';
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
  amount: number;
  farmerId: string;
  landId: string;
  landOwnerId: string;
  status: string;
  _id: any;
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
      } catch (error) { }
    }
    fetchAllLands();
  }, []);






  const filteredData = allLand.filter((each) => each?._id === routerParams.id);
  const [showField, setShowField] = useState<boolean[]>(
    filteredData.map(() => false)
  );

  const [names, setNames] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const landId = filteredData && (await filteredData[0]._id);

        const offersBylandId = await allOffersForALand(landId);
        const farmerIdList: any = [];
        offersBylandId.map(async (everyOffer: any) =>
          farmerIdList.push(everyOffer.farmerId)
        );

        let farmerDetails = await Promise.all(
          farmerIdList.map((el: string) => userById(el))
        );

        let farmersName = [];

        for (let i = 0; i < farmerDetails.length; i++) {
          let name = farmerDetails[i][0].name;
          farmersName.push(name);
        }
        setNames(farmersName);

        setOffersById(offersBylandId);
      } catch (error) { }
    };
    fetchData();
  }, [allLand]);

  const handleCounterBtn = (_id: any) => {
    setShowField((prevShowField) => ({ ...prevShowField, [_id]: true }));
  };
  const handleKeyDown = async (event: any, id: any) => {
    if (event.key === 'Enter') {
      const value = event.target.value;
      const counter = {
        offerId: id,
        changable: {
          counter_offer: value
        }

      }
      const result = await counterOffer(counter)
      console.log(result)

    }
  };


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

      {filteredData.map((each, index) => (
        <div key={index}>
          <React.Fragment >
            <Card m={8} >
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
                        {each?.price} Tk.


                      </Text>
                    </HStack>
                  </Box>
                </Stack>
              </CardBody>

              <Container overflowY='auto' maxHeight='300px' css={scrollbarStyles}>
                {offersById.map((each, index) => (
                  <React.Fragment key={index}>
                    <Card
                      // key={index}
                      borderWidth='2px'
                      borderColor='green.500'
                      borderRadius='lg'
                      m={1}
                    >
                      <CardBody>
                        <Flex justifyContent='space-between'>
                          <Stack direction='column' spacing={2}>
                            <Text fontWeight='xs'>Offered By </Text>

                            <Text as='b'>{names[index]}</Text>
                            <Text as='b'>Amount: {each.amount}</Text>
                            <Text as='b'>Status:{each.status}</Text>
                          </Stack>
                          <VStack
                            direction='row'
                            spacing={2}
                            justifyContent='flex-end'
                          >
                            <Button w={'28vw'} colorScheme='teal' variant='outline'>
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
                                    maxWidth={'28vw'}
                                    type='number'
                                    autoFocus={true}
                                    htmlSize={2}
                                    onKeyDown={() => handleKeyDown(event, each._id)}
                                  />
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
                  </React.Fragment>
                ))}
              </Container>
            </Card>
          </React.Fragment>

          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default OffersForLand;
