import { Text } from "@chakra-ui/react";
import { Avatar, Stack } from '@chakra-ui/react';

const Heading = () => {
    return (
        <div>
            <Text as='b'
                mb={2}
                bgGradient="linear-gradient(to left,#8EAC50, #17594A)"
                bgClip="text"
                fontSize="5xl"


            >EasyGrow</Text>
            {/* <Stack direction='row'>
                <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
                <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
                <Avatar src='https://bit.ly/broken-link' />
            </Stack> */}
        </div>
    );
};

export default Heading;