import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import { Button, HStack, Text, useColorMode } from '@chakra-ui/react'

const SwitchMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <HStack>
                <Button size='sm' onClick={toggleColorMode}>
                    {colorMode === 'light' ? <BsMoon color='black' /> : <BsSun color='orange' />}
                </Button>
            </HStack>
        </>
    );
};

export default SwitchMode;