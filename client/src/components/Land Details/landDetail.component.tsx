import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Text, Box, Input, Flex } from '@chakra-ui/react';

const LandDetailComponent = () => {
	return (
		<Flex
			flexDirection={'row'}
			flexWrap={'wrap'}>
			<Card>
				<CardHeader>
					<Heading size="md">Land Details</Heading>
				</CardHeader>

				<CardBody>
					<Stack
						divider={<StackDivider />}
						spacing="2">
						<Box>
							<Heading
								size="xs"
								textTransform="uppercase">
								Size
							</Heading>
							<Text
								pt="2"
								fontSize="sm">
								1400
							</Text>
						</Box>
						<Box>
							<Heading
								size="xs"
								textTransform="uppercase">
								Lease Duration
							</Heading>
							<Text
								pt="2"
								fontSize="sm">
								6 month
							</Text>
						</Box>
						<Box>
							<Heading
								size="xs"
								textTransform="uppercase">
								Location
							</Heading>
							<Text
								pt="2"
								fontSize="sm">
								Savar, Dhaka
							</Text>
						</Box>
						<Box>
							<Heading
								size="xs"
								textTransform="uppercase">
								Terms & Conditions
							</Heading>
							<Text
								pt="2"
								fontSize="sm"></Text>
							<Text
								pt="2"
								fontSize="sm">
								Agreed area of the land should be used for agricultural purpose only
							</Text>
							<Text
								pt="2"
								fontSize="sm">
								Subleasing to another party is strictly proihibited
							</Text>
							<Text
								pt="2"
								fontSize="sm">
								Lessee needs to be insured and have full responsibility of the agreed amount of land.
							</Text>
						</Box>
						<Box>
							<Heading
								size="xs"
								textTransform="uppercase">
								Lease amount
							</Heading>
							<Text
								pt="2"
								fontSize="sm">
								40,000
							</Text>
						</Box>

						<Box>
							<Heading
								size="xs"
								textTransform="uppercase">
								Recommended Crops
							</Heading>
							<Text
								pt="2"
								fontSize="sm">
								Rice, Maize, Potato
							</Text>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</Flex>
	);
};

export default LandDetailComponent;
