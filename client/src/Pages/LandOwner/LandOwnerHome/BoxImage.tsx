import { HStack, VStack, Image, Heading, Skeleton, Box } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
    landList: string;
    addLand: string;
    landListDesc: string;
    addLandDesc: string;
}
const BoxImage: React.FC<Props> = (props: Props) => {
    const { landList, addLand, addLandDesc, landListDesc } = props;

    const [isLoaded, setIsLoaded] = useState(false);
    const imageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <HStack
            alignContent={'center'}
            justifyContent={'center'}
            spacing={7}
            my={5}>
            <VStack
                shadow={'0px 17px 43px -7px rgba(0,0,0,0.2)'}
                alignItems={'center'}
                p={5}
                borderRadius={20}

            >
                <Box height={'100px'} width={'100px'} >
                    {!isLoaded && (<Skeleton height={'100%'} width={'100%'} ></Skeleton>)}
                    <Image
                        src={addLand}
                        onLoad={imageLoad}
                        maxWidth={'100%'}
                        maxHeight={'100%'}
                        style={{ opacity: isLoaded ? 1 : 0 }}
                    />

                </Box>
                <Heading size={'md'} colorScheme='gray' color={'gray.600'}>
                    {addLandDesc}
                </Heading>
            </VStack>
            <VStack
                shadow={'0px 17px 43px -7px rgba(0,0,0,0.2)'}
                alignItems={'center'}
                p={5}
                borderRadius={20}

            >
                <Box height={'100px'} width={'100px'} >
                    {!isLoaded && <Skeleton height={'100%'} width={'100%'}></Skeleton>}
                    <Image
                        src={landList}
                        onLoad={imageLoad}
                        maxWidth={'100%'}
                        maxHeight={'100%'}
                        style={{ opacity: isLoaded ? 1 : 0 }}
                    />
                </Box>
                <Heading size={'md'} colorScheme='gray' color={'gray.600'}>
                    {landListDesc}
                </Heading>
            </VStack>
        </HStack>
    );
};

export default BoxImage;
