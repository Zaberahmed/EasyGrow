import { Text } from '@chakra-ui/react';
import { useMemo, useState } from 'react';

interface GreetingProps {
	name: string;
}
const Greetings = ({ name }: GreetingProps) => {
	const [greeting, setGreeting] = useState('');

	useMemo(() => {
		const now = new Date();
		let hour = now.getHours();
		if (hour >= 4 && hour < 10) {
			setGreeting(' Morning');
		} else if (hour >= 10 && hour < 14) {
			setGreeting('Noon');
		} else if (hour >= 14 && hour < 18) {
			setGreeting('Afternoon');
		} else {
			setGreeting('Evening');
		}
	}, []);
	return (
		<>
			<Text>
				Good {greeting}, {name}
			</Text>
		</>
	);
};

export default Greetings;
