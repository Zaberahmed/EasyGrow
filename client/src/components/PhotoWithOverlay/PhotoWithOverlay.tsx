import Greetings from "../Greetings/Greetings";
import slider from './../../../assets/land-plot.jpg'
import { Box, HStack, Heading } from "@chakra-ui/react";


const PhotoWithOverlay = () => {
    const styles = {
        backgroundImage: `url(${slider})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '25px',

        height: '150px'
    };
    const overStyles = {
        fontSize: '1.1rem',
        color: 'white',

        borderRadius: '25px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '150px'

    };
    return (
        <Box style={styles} shadow={'xl'}>
            <Box style={overStyles} padding={4}>
                <HStack>
                    <Greetings />
                </HStack>
                <br />
                <Heading as='h3' size='lg'>
                    Find the land & <br />Connected with Farmers.
                </Heading>
            </Box>
        </Box>
    );
};

export default PhotoWithOverlay;