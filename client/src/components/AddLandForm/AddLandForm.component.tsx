import React, { useEffect, useState } from 'react';
import { Checkbox, CheckboxGroup, Container } from '@chakra-ui/react';
import {
    Progress,
    Box,
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
import { useLocation } from 'react-router-dom';

const Form1 = () => {
    const [address, setAddress] = useState<any>({});
    const location = useLocation();
    const landInfo = location.state;
    const latitude = landInfo.location[0];
    const longitude = landInfo.location[1];

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


    return (
        <>
            <Heading w='100%' textAlign={'center'} fontWeight='normal' mb='2%'>
                Land Information
            </Heading>
            <Container>
                <FormControl>
                    <FormLabel htmlFor='land-size' fontWeight={'normal'}>
                        Land Size
                    </FormLabel>

                    <Input
                        id='land-size'
                        value={`${landInfo.area} acre`}
                        style={{ pointerEvents: 'none' }}
                    />
                </FormControl>
                <br />
                <FormControl>
                    <FormLabel htmlFor='location' fontWeight={'normal'}>
                        Location
                    </FormLabel>
                    {
                        address.features && (
                            <Textarea
                                placeholder='location'
                                value={address?.features[0].place_name}
                                style={{ pointerEvents: 'none' }}
                            ></Textarea>
                        )

                    }
                </FormControl>
            </Container>
        </>
    );
};

const Form2 = () => {
    return (
        <>
            <Heading w='100%' textAlign={'center'} fontWeight='normal' mb='2%'>
                User Details
            </Heading>

            <Container>
                <FormControl>
                    <FormLabel htmlFor='lease-duration' fontWeight={'normal'}>
                        Lease Duration
                    </FormLabel>
                    <Input id='lease-duration' placeholder='lease-duration' />
                </FormControl>
                <br />
                <FormControl>
                    <FormLabel htmlFor='lease-amount' fontWeight={'normal'}>
                        Lease Amount
                    </FormLabel>
                    <Input id='lease-amount' placeholder='lease-amount' />
                </FormControl>
            </Container>
        </>
    );
};

const Form3 = () => {
    return (
        <>
            <Heading w='100%' textAlign={'center'} fontWeight='normal'>
                Social Handles
            </Heading>

            <Container>
                <FormControl>
                    <FormLabel htmlFor='conditions' fontWeight={'normal'}>
                        Conditions and Restrictions
                    </FormLabel>
                    <Checkbox defaultChecked={false}>Checkbox</Checkbox>
                    <br />
                    <Checkbox defaultChecked={false}>Checkbox</Checkbox>
                    <br />
                    <Checkbox defaultChecked={false}>Checkbox</Checkbox>
                    <br />
                </FormControl>
            </Container>
        </>
    );
};

export default function AddLandForm() {
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    return (
        <>
            <Box

                borderWidth='1px'
                rounded='lg'
                shadow='1px 1px 3px rgba(0,0,0,0.3)'
                maxWidth={800}
                p={6}

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
                {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
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
                                isDisabled={step === 3}
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
                            >
                                Next
                            </Button>
                        </Flex>
                        {step === 3 ? (
                            <Button
                                w='7rem'
                                colorScheme='red'
                                variant='solid'
                                onClick={() => {
                                    toast({
                                        title: 'Account created.',
                                        description: "We've created your account for you.",
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                    });
                                }}
                            >
                                Submit
                            </Button>
                        ) : null}
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    );
}
