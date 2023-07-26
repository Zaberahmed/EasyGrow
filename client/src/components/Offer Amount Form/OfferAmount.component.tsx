import { FormControl, FormLabel, Input, Button, Center, Flex, Box, Card } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import { makeAnOffer } from '../../Services/farmer';
// import { profile } from '../../Services/user';
import { useToast } from '@chakra-ui/react';
import { ObjectId } from 'mongodb';

const OfferAmountComponent = ({ landId, landOwnerId, userId, setOffer }: { landId: ObjectId; landOwnerId: ObjectId; userId: ObjectId; setOffer: Function }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [amount, setAmount] = useState<string>('');

	const toast = useToast();

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);

		try {
			const result = await makeAnOffer(landId, landOwnerId, userId, amount);
			console.log(result);
			setOffer(result);
			setIsLoading(false);
			toast({
				position: 'top',
				description: 'Successfully posted the offer!',
				status: 'success',
				duration: 2000,
				isClosable: true,
			});

			setAmount('');
		} catch (error) {
			console.log(error);
		}
	};

	// useEffect(() => {
	// 	const fetchProfile = async () => {
	// 		try {
	// 			const result = await profile();
	// 			console.log(result);
	// 			setUser(result);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	fetchProfile();
	// }, []);

	return (
		<Card m={1.5}>
			<form onSubmit={handleSubmit}>
				<Flex
					position="fixed"
					bottom={1}
					boxShadow={'outset 1px 1px 1px 1px grey'}
					bgColor={'gray.200'}
					justifyContent="center"
					alignItems="center"
					flexDirection="row"
					w="97vw">
					<FormControl isRequired>
						<FormLabel
							mt={1}
							mb={1}
							ml={2}
							fontWeight={'bold'}>
							Offer amount:
						</FormLabel>
						<Input
							ml={2}
							mb={2.5}
							w={'60vw'}
							borderColor={'gray.400'}
							placeholder="30,000"
							type="number"
							value={amount}
							min={0}
							onChange={(event) => setAmount(event.currentTarget.value)}
						/>
						<Button
							type="submit"
							isLoading={isLoading}
							loadingText="Submitting"
							colorScheme="teal"
							variant="solid"
							mb={1}
							ml={4}
							mr={2}>
							Submit
						</Button>
					</FormControl>
				</Flex>
			</form>
		</Card>
	);
};

export default OfferAmountComponent;
