import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
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

const Form1 = () => {


    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                User Registration
            </Heading>
            <Flex>


                <FormControl>
                    <FormLabel htmlFor="land-size" fontWeight={'normal'} >
                        Land Size
                    </FormLabel>
                    <Input id="land-size" placeholder="land-size" />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="location" fontWeight={'normal'}>
                        Location
                    </FormLabel>
                    <Input id="location" placeholder="location" />
                </FormControl>
            </Flex>




        </>
    );
};

const Form2 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                User Details
            </Heading>

            <FormControl>
                <FormLabel htmlFor="lease-duration" fontWeight={'normal'}>
                    Lease Duration
                </FormLabel>
                <Input id="lease-duration" placeholder="lease-duration" />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="lease-amount" fontWeight={'normal'}>
                    Lease Amount
                </FormLabel>
                <Input id="lease-amount" placeholder="lease-amount" />
            </FormControl>



        </>
    );
};

const Form3 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal">
                Social Handles
            </Heading>

            <FormControl>
                <FormLabel htmlFor="conditions" fontWeight={'normal'}>
                    Conditions and Restrictions
                </FormLabel>
                <Checkbox defaultChecked={false}>Checkbox</Checkbox>
                <Checkbox defaultChecked={false}>Checkbox</Checkbox>
                <Checkbox defaultChecked={false}>
                    Checkbox
                </Checkbox>

            </FormControl>

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
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form">
                <Progress
                    hasStripe
                    value={progress}
                    mb="5%"
                    mx="5%"
                    isAnimated></Progress>
                {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                        <Flex>
                            <Button
                                onClick={() => {
                                    setStep(step - 1);
                                    setProgress(progress - 33.33);
                                }}
                                isDisabled={step === 1}
                                colorScheme="teal"
                                variant="solid"
                                w="7rem"
                                mr="5%">
                                Back
                            </Button>
                            <Button
                                w="7rem"
                                isDisabled={step === 3}
                                onClick={() => {
                                    setStep(step + 1);
                                    if (step === 3) {
                                        setProgress(100);
                                    } else {
                                        setProgress(progress + 33.33);
                                    }
                                }}
                                colorScheme="teal"
                                variant="outline">
                                Next
                            </Button>
                        </Flex>
                        {step === 3 ? (
                            <Button
                                w="7rem"
                                colorScheme="red"
                                variant="solid"
                                onClick={() => {
                                    toast({
                                        title: 'Account created.',
                                        description: "We've created your account for you.",
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                    });
                                }}>
                                Submit
                            </Button>
                        ) : null}
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    );
}