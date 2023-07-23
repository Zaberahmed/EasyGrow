import { Text } from '@chakra-ui/react';

const Heading = () => {
    return (
        <div>
            <Text
                as='b'
                mb={2}
                bgGradient='linear-gradient(to left,#8EAC50, #17594A)'
                bgClip='text'
                fontSize='5xl'
            >
                EasyGrow
            </Text>
        </div>
    );
};

export default Heading;
