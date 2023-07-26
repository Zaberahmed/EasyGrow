import { Box, Button, Card, Flex, Text } from '@chakra-ui/react';
import './AlreadyPosted.style.css';
import { useNavigate } from 'react-router-dom';
import formatMoney from '../../utils/formatMoney';

const AlreadyPostedComponent = ({ amount }: { amount: string }) => {
	const navigate = useNavigate();

	return (
		// <Card>
		<Box
			p={4}
			borderRadius="md"
			boxShadow="md"
			bg="#FAC898"
			width="100vw"
			position="fixed">
			<Text fontSize="xl">You already posted an offer of {formatMoney(amount)} Taka for this land</Text>
			<Flex
				justify="flex-end"
				mt={4}>
				<Button
					colorScheme="blue"
					onClick={() => navigate('farmer/offer-details')}>
					See Offer Details
				</Button>
			</Flex>
		</Box>
		// </Card>
	);
};

export default AlreadyPostedComponent;
