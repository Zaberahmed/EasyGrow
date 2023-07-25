import { FormControl, FormLabel, Input, Button, Center, Flex, Box } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

const OfferAmountComponent = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [amount, setAmount] = useState<string>('0');

	const handleSubmit = async () => {
		console.log('Yes!!');
	};
	return (
		<Flex
			position="sticky"
			bottom={0.5}
			boxShadow={'inset -1px 1px 2px grey'}
			bgColor={'gray.200'}
			justifyContent="center"
			alignItems="center"
			w="auto">
			<FormControl
				isRequired
				onSubmit={() => handleSubmit}>
				<FormLabel
					ml={2}
					mr={2}
					fontWeight={'bold'}>
					Offer amount:
				</FormLabel>
				<Input
					ml={2}
					borderColor={'gray.400'}
					placeholder="30,000"
					type="number"
					onChange={(event) => setAmount(event.currentTarget.value)}
				/>
				<Button
					type="submit"
					isLoading={isLoading}
					loadingText="Submitting"
					colorScheme="teal"
					variant="solid"
					mt={7}
					ml={4}
					mr={2}>
					Submit
				</Button>
			</FormControl>
		</Flex>
	);
};

export default OfferAmountComponent;
