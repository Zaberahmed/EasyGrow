import { Box, Button, Card, CardBody, CardHeader, Flex, FormControl, Heading, Input, Stack, StackDivider, Text } from '@chakra-ui/react';
import { Offer } from '../../Interfaces/Offer.interface';
import { TbCurrencyTaka } from 'react-icons/tb';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { FaHourglassHalf } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineCheck } from 'react-icons/ai';
import { useState } from 'react';

const OfferDetailsComponent = ({ amount, status }: Offer) => {
	const [edit, setEdit] = useState<boolean>(false);
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

	return (
		<Card
			boxShadow={'0 2px 4px grey'}
			mb={3}>
			<CardBody mb={3}>
				<Stack
					divider={<StackDivider />}
					spacing="1">
					<Box
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'space-between'}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
							<Heading
								size="xs"
								textTransform="uppercase">
								Amount
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
										/>
									</FormControl>
								) : (
									<>
										<TbCurrencyTaka size={20} />
										<Text pr={2}>{amount}</Text>
									</>
								)}

								{status === 'Negotiating' ? (
									<Button
										size="sm"
										onClick={() => setEdit(!edit)}>
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
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
							<Heading
								size="xs"
								textTransform="uppercase"
								mb={2}>
								Status
							</Heading>
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
						</div>
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default OfferDetailsComponent;
