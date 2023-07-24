import { FormControl, FormLabel, Input, Button, Center, Flex, Box } from '@chakra-ui/react';
import { useState } from 'react';

const OfferAmountComponent = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	return (
		<Flex
			position="sticky"
			bottom={0.5}
			bgColor={'green.200'}
			justifyContent="center"
			alignItems="center"
			w="auto">
			<FormControl isRequired>
				<FormLabel
					ml={2}
					mr={2}
					fontWeight={'bold'}>
					Offer amount:
				</FormLabel>
				<Input
					ml={2}
					borderColor={'gray.400'}
					type="text"
					placeholder="30,000"
				/>
			</FormControl>

			<Button
				isLoading={isLoading}
				loadingText="Submitting"
				colorScheme="teal"
				variant="solid"
				mt={7}
				ml={4}
				mr={2}>
				Submit
			</Button>
		</Flex>
	);
};

export default OfferAmountComponent;
