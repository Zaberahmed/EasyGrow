import { Box, Button, Card, CardBody, Flex, FormControl, Heading, Input, Stack, StackDivider, Text } from '@chakra-ui/react';
import { Offer } from '../../Interfaces/Offer.interface';
import { TbCurrencyTaka } from 'react-icons/tb';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { FaHourglassHalf } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineCheck } from 'react-icons/ai';
import { useState } from 'react';
import { changeOffer } from '../../Services/farmer';

const OfferDetailsComponent = ({ amount, status, address, counter_offer, countered, _id }: Offer) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [input, setInput] = useState<string>('');

	const getStatusIcon = () => {
		switch (status) {
			case 'Accepted':
				return <BsCheck2Circle size={20} />;
			case 'Rejected':
				return <AiOutlineClose size={20} />;
			case 'Negotiating':
				return <FaHourglassHalf size={18} />;
			default:
				return null;
		}
	};

	const getStatusBoxStyle = () => {
		switch (status) {
			case 'Accepted':
				return { background: 'green.500', color: 'white', cursor: 'pointer' };
			case 'Rejected':
				return { background: 'red.500', color: 'white', cursor: 'pointer' };
			case 'Negotiating':
				return { background: 'orange.500', color: 'white', cursor: 'pointer' };
			default:
				return {};
		}
	};

	const handleClick = async () => {
		setEdit(!edit);
		if (input) {
			try {
				const changable = { amount: input };
				const result = await changeOffer(_id!, changable);
				console.log(result);

				setInput('');
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<Card
			boxShadow={'0 2px 4px grey'}
			mb={3}>
			<CardBody>
				<Stack
					divider={<StackDivider />}
					spacing="1">
					<Box
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'space-between'}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
							<Text
								size="xs"
								mb={2}>
								{address}
							</Text>
							<Box mt={3}>
								<Heading
									size="xs"
									textTransform="uppercase">
									Your Offer
								</Heading>
								<Flex
									alignItems="center"
									pt="2"
									fontSize="sm">
									{edit ? (
										<FormControl
											width="100px"
											mr={3}>
											<Input
												ml={2}
												borderColor={'gray.400'}
												type="text"
												value={input}
												onChange={(event) => setInput(event.target.value)}
												// placeholder=`${amount}`
											/>
										</FormControl>
									) : (
										<>
											<TbCurrencyTaka size={20} />
											<Text pr={2}>{amount}</Text>
										</>
									)}

									{status === 'Negotiating' && countered === true ? (
										<Button
											size="sm"
											onClick={() => handleClick()}>
											{edit ? (
												<>
													<AiOutlineCheck
														size={15}
														color="green"
													/>
												</>
											) : (
												<>
													<FiEdit3
														size={15}
														color="red"
													/>
												</>
											)}
										</Button>
									) : (
										''
									)}
								</Flex>
							</Box>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '30px' }}>
							<Box
								as="div"
								display="flex"
								p="1"
								borderRadius="md"
								fontWeight="bold"
								{...getStatusBoxStyle()}>
								<Text
									pr={1}
									pl={1}>
									{status}
								</Text>
								{getStatusIcon()}
							</Box>

							{countered ? (
								<>
									<Heading
										size="xs"
										textTransform="uppercase"
										mt={3}
										mb={3}>
										Counter Offer
									</Heading>
									<Flex>
										<TbCurrencyTaka size={20} />
										<Text pr={2}>{counter_offer}</Text>
									</Flex>
								</>
							) : (
								<></>
							)}
						</div>
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default OfferDetailsComponent;
