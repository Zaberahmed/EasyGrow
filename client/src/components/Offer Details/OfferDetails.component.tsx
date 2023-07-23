import { Box, Card, CardBody, CardHeader, Flex, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import { Offer } from '../../Interfaces/Offer.interface';
import { TbCurrencyTaka } from 'react-icons/tb';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { FaHourglassHalf } from 'react-icons/fa';

const OfferDetailsComponent = ({ amount, status }: Offer) => {
	const getStatusIcon = () => {
		switch (status) {
			case 'accepted':
				return <BsCheck2Circle size={20} />;
			case 'rejected':
				return <AiOutlineClose size={20} />;
			case 'pending':
				return <FaHourglassHalf size={20} />;
			default:
				return null;
		}
	};

	const getStatusButtonStyle = () => {
		switch (status) {
			case 'accepted':
				return { background: 'green', color: 'white', cursor: 'pointer' };
			case 'rejected':
				return { background: 'red', color: 'white', cursor: 'pointer' };
			case 'pending':
				return { background: 'orange', color: 'white', cursor: 'pointer' };
			default:
				return {};
		}
	};

	return (
		<div className="offer-container">
			<Card>
				<CardHeader>
					<Heading size="md">Offer Details</Heading>
				</CardHeader>

				<CardBody>
					<Stack
						divider={<StackDivider />}
						spacing="4">
						<Box>
							<Heading
								size="xs"
								textTransform="uppercase">
								Amount
							</Heading>
							<Flex
								alignItems="center"
								pt="2"
								fontSize="sm">
								<TbCurrencyTaka size={20} />
								<Text pl="2">{amount}</Text>
							</Flex>
						</Box>
						<Box>
							<Heading
								size="xs"
								textTransform="uppercase">
								Status
							</Heading>
							<Box
								as="div" // Use Box as a div-like element
								display="flex"
								p="1"
								borderRadius="md"
								fontWeight="bold"
								w="40%"
								{...getStatusButtonStyle()} // Apply the appropriate button style
							>
								{getStatusIcon()} {/* Render the appropriate icon based on the status */}
								<Text pl="2">{status}</Text>
							</Box>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</div>
	);
};

export default OfferDetailsComponent;
