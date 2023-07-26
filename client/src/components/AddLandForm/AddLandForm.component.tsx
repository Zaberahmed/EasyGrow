import React, { ChangeEvent, useEffect, useState } from 'react';
import { Center, Checkbox, CheckboxGroup, Container } from '@chakra-ui/react';
import {
    Progress,
    Box, Text,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { profile } from '../../Services/user';
import { addLandDetails } from '../../Services/landOwner';
import { Land } from '../../Interfaces/Land.interface';


const Form1 = ({ onForm1DataChange }: { onForm1DataChange: Function }) => {
    const [address, setAddress] = useState<any>({});
    const location = useLocation();
    const landInfo = location.state;
    const size = landInfo.area;
    const latitude = landInfo.location[0];
    const longitude = landInfo.location[1];
    const currentlocation = address?.features;



    const MAPBOX_ACCESS_TOKEN =
        'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g';

    useEffect(() => {
        const fetchLocation = async (latitude: number, longitude: number) => {
            fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
            )
                .then((res) => res.json())
                .then((data) => setAddress(data));
        };
        fetchLocation(longitude, latitude);
    }, []);
    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        const form1data = {
            name: name,
            size: size,
            location: currentlocation

        }
        onForm1DataChange(form1data);

    }


    return (
        <>
            <Heading w='100%' textAlign={'center'} fontWeight='normal' mb='2%'>
                Land Information
            </Heading>
            <Container>
                <FormControl>
                    <FormLabel htmlFor='land-name' fontWeight={'normal'}>
                        Land Name
                    </FormLabel>
                    <Input
                        type='text'
                        name='name'
                        onChange={handleChange}
                        placeholder='name'></Input>
                </FormControl>
                <br />
                <FormControl>
                    <FormLabel htmlFor='land-size' fontWeight={'normal'}>
                        Land Size
                    </FormLabel>
                    <Text style={{ pointerEvents: 'none' }} className='border-2 p-4 rounded-lg border-gray-100'>{`${landInfo.area} acre`}</Text>


                </FormControl>
                <br />
                <FormControl>
                    <FormLabel htmlFor='location' fontWeight={'normal'}>
                        Location
                    </FormLabel>
                    {
                        address.features && (

                            <Text style={{ pointerEvents: 'none' }} className='border-2 p-5 rounded-lg border-gray-100'>{address?.features[0].place_name}</Text>
                        )

                    }
                </FormControl>
            </Container>
        </>
    );
};

const initialState = {
    duration: '',
    price: ''
}

const Form2 = ({ onLeaseDataChange }: { onLeaseDataChange: Function }) => {
    const [lease, setLease] = useState(initialState);
    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLease((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    useEffect(() => {

        onLeaseDataChange(lease);
    }, [lease, onLeaseDataChange]);

    return (
        <>
            <Heading w='100%' textAlign={'center'} fontWeight='normal' mb='2%'>
                Lease Details
            </Heading>

            <Container>
                <FormControl>
                    <FormLabel htmlFor='lease-duration' fontWeight={'normal'}>
                        Lease Duration
                    </FormLabel>
                    <Input
                        id='lease-duration'
                        name='duration'
                        onChange={handleChange}
                        value={lease.duration}
                        placeholder='lease-duration' />
                </FormControl>
                <br />
                <FormControl>
                    <FormLabel htmlFor='lease-amount' fontWeight={'normal'}>
                        Lease Amount
                    </FormLabel>
                    <Input
                        name='price'
                        value={lease.price}
                        onChange={handleChange}
                        id='lease-amount' placeholder='lease-amount' />
                </FormControl>
            </Container>
        </>
    );
};

const Form3 = () => {

    return (
        <>
            <Heading w='100%' textAlign={'center'} fontWeight='normal'>
                Others
            </Heading>

            <Container>
                <FormControl>
                    <FormLabel htmlFor='conditions'>
                        Conditions and Restrictions
                    </FormLabel>
                    <Checkbox fontWeight='normal' defaultChecked={false}>May require liability insurance for activities on the land</Checkbox>
                    <br />
                    <Checkbox fontWeight='normal' defaultChecked={false}>Specifies the allowed purposes like agriculture,commercial</Checkbox>
                    <br />
                    <Checkbox fontWeight='normal' defaultChecked={false}>Mandates adherence to all relevant laws and regulations</Checkbox>
                    <br />
                </FormControl>
            </Container>
        </>
    );
};

export default function AddLandForm() {
    const navigate = useNavigate();
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    const [leaseData, setLeaseData] = useState(null);
    const [landData, setLandData] = useState(null);
    const [ownerId, setOwnerId] = useState(null);
    const handleLeaseDataChange = (data: React.SetStateAction<null>) => {
        setLeaseData(data);
    };
    const handleLandDataChange = (data: React.SetStateAction<null>) => {
        setLandData(data)
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const profileData = await profile();
                setOwnerId(profileData._id);
            } catch (error) {

                console.error('Error fetching profile data:', error);
            }
        };


        fetchData();
    }, []);

    const name = landData?.name;
    const size = landData?.size;

    // const place = landData?.location[0].center;
    const longitude = Number(landData?.location[0].center[0]);
    const latitude = Number(landData?.location[0].center[1]);
    const duration = leaseData?.duration;
    const price = leaseData?.price;
    const description = 'hello';


    const addLand = {
        name: name,
        size: size,
        description: description,
        ownerId: ownerId,
        location: [{ longitude, latitude }],
        duration: duration,
        price: price




    }

    // console.log(addLand);
    const handleSubmit = async () => {
        // console.log('hello');
        const data = await addLandDetails(addLand);
        console.log(data);

    }



    return (
        <>
            <Center h='100vh' >
                <Box

                    borderWidth='1px'
                    rounded='lg'
                    shadow='1px 1px 3px rgba(0,0,0,0.3)'
                    minWidth={"90vw"}
                    maxWidth={"90vw"}
                    p={8}

                    m='10px auto'
                    as='form'
                >
                    <Progress
                        hasStripe
                        value={progress}
                        mb='5%'
                        mx='5%'
                        isAnimated
                    ></Progress>
                    {step === 1 ? <Form1 onForm1DataChange={handleLandDataChange} /> : step === 2 ? <Form2 onLeaseDataChange={handleLeaseDataChange} /> : <Form3 />}
                    <ButtonGroup mt='5%' w='100%'>
                        <Flex w='100%' justifyContent='space-between'>
                            <Flex>
                                <Button
                                    onClick={() => {
                                        setStep(step - 1);
                                        setProgress(progress - 33.33);
                                    }}
                                    isDisabled={step === 1}
                                    colorScheme='teal'
                                    variant='solid'
                                    w='7rem'
                                    mr='5%'
                                >
                                    Back
                                </Button>
                                <Button
                                    w='7rem'

                                    onClick={() => {
                                        setStep(step + 1);
                                        if (step === 3) {
                                            setProgress(100);
                                        } else {
                                            setProgress(progress + 33.33);
                                        }
                                    }}
                                    colorScheme='teal'
                                    variant='outline'
                                    style={{ display: step == 3 ? 'none' : 'block' }}
                                >
                                    Next
                                </Button>
                            </Flex>
                            {step === 3 ? (
                                <Button
                                    w='7rem'
                                    colorScheme='red'
                                    variant='solid'
                                    // onClick={() => {
                                    //     toast({
                                    //         title: 'Account created.',
                                    //         description: "We've created your account for you.",
                                    //         status: 'success',
                                    //         duration: 3000,
                                    //         isClosable: true,
                                    //     });
                                    // }}
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            ) : null}
                        </Flex>
                    </ButtonGroup>
                </Box>
            </Center >
        </>
    );
}


