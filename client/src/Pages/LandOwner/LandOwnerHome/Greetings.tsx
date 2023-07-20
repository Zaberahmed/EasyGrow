import { Text } from '@chakra-ui/react'
import { useMemo, useState } from 'react';






const Greetings = () => {

    const [greeting, setGreeting] = useState('');

    useMemo(() => {
        const now = new Date();
        let hour = now.getHours();
        if (hour >= 7 && hour < 12) {
            setGreeting(' Morning');
        }
        else if (hour <= 12 && hour < 18) {
            setGreeting('AfterNoon');
        }
        else {
            setGreeting('Evening');
        }
    }, [])
    return (
        <>
            <Text>Good {greeting}</Text>


        </>
    );
};

export default Greetings;