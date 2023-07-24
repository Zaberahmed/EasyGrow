import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

const OfferAmountComponent = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	return (
		<div>
			<FormControl isRequired>
				<FormLabel>Offer amount:</FormLabel>
				<Input
					type="text"
					placeholder="30,000"
				/>
			</FormControl>
			<Button
				isLoading={isLoading}
				loadingText="Submitting"
				colorScheme="teal"
				variant="solid">
				Submit
			</Button>
		</div>
	);
};

export default OfferAmountComponent;
