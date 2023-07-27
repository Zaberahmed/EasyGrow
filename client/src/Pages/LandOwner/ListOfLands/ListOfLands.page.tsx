import {
  Box,
  Button,
  Card,
  CardBody,
  Center,

  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { Land } from '../../../Interfaces/Land.interface';
import OffersForLand from '../OffersForLand/OffersForLand.component';
import { useEffect, useState } from 'react';
import { allLands } from '../../../Services/landOwner';

const ListOfLands = () => {
  // const location = useLocation();
  // const landData = location.state;
  // console.log(landData);
  // const { name, size, ownerId, description, price,duration } = landData.data;


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
  const [allLand, setAllLand] = useState([]);

  useEffect(() => {
    async function fetchAllLands() {
      try {
        const allLandData = await allLands();
        setAllLand(allLandData.reverse());

      } catch (error) {

      }
    }
    fetchAllLands()

  }, [])



  return (
    <div>
      <Center mt={4}>
        <Heading>List Of Lands</Heading>
      </Center>
      {allLand.map((each: Land) => (

        <Card key={each._id} m={8}>
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

              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Lease Duration
                </Heading>
                <Text pt='2' fontSize='sm'>
                  {each?.duration} months
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Lease Amount
                </Heading>
                <HStack>
                  <Text pt='2' fontSize='sm'>
                    {each?.price}Tk

                  </Text>
                </HStack>
              </Box>
            </Stack>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to={`/add/${each?._id}`}>
                <Button

                  colorScheme='teal' variant='outline'>
                  VIEW OFFERS
                </Button>

              </Link>
            </div>
          </CardBody>

        </Card>


      ))}
    </div>
  );
};

export default ListOfLands;
