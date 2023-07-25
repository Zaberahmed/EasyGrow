import Greetings from '../Greetings/Greetings';
import slider from './../../assets/land-plot.jpg';
import { Box, HStack, Heading } from '@chakra-ui/react';
import { useState } from 'react';

const PhotoWithOverlay = () => {
	const [name, setName] = useState<string>('Zaber');
	const [oppositeRole, setOppositeRole] = useState<string>('land owners');
	const styles = {
		backgroundImage: `url(${slider})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		borderRadius: '25px',

		height: '170px',
	};
	const overStyles = {
		fontSize: '1.1rem',
		color: 'white',

		borderRadius: '25px',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		height: '170px',
	};
	return (
		<Box
			style={styles}
			shadow={'xl'}>
			<Box
				style={overStyles}
				padding={4}>
				<HStack>
					<Greetings name={name} />
				</HStack>
				<br />
				<Heading
					as="h3"
					size="lg">
					Find the land & get <br />
					connected with {oppositeRole}
				</Heading>
			</Box>
		</Box>
	);
};

export default PhotoWithOverlay;
