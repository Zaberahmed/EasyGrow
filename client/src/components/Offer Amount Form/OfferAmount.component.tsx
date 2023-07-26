import { FormControl, FormLabel, Input, Button, Center, Flex, Box } from '@chakra-ui/react';
import { FormEvent, useEffect, useState } from 'react';
import { makeAnOffer } from '../../Services/farmer';
import { profile } from '../../Services/user';

const initialUser: User = {
	_id: '',
	name: '',
	email: '',
	password: '',
	phoneNumber: '',
	address: '',
	role: '',
};
const OfferAmountComponent = ({ landId, landOwnerId }: { landId: string; landOwnerId: string }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [amount, setAmount] = useState<string>('');
	const [user, setUser] = useState<User>(initialUser);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);

		try {
			const result = await makeAnOffer(landId, landOwnerId, user._id!, amount);
			console.log(result);
			setIsLoading(false);
			console.log(Number(amount));
			setAmount('');
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const result = await profile();
				console.log(result);
				setUser(result);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProfile();
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<Flex
				position="sticky"
				bottom={0.5}
				boxShadow={'inset -1px 1px 2px grey'}
				bgColor={'gray.200'}
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
						mt={7}
						ml={4}
						mr={2}>
						Submit
					</Button>
				</FormControl>
			</Flex>
		</form>
	);
};

export default OfferAmountComponent;
