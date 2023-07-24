import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Text, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

const LandDetailComponent = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	return (
		<div className="land-details-container">
			<Card>
				<CardHeader>
					<Heading size="md">Land Details</Heading>
				</CardHeader>

				<CardBody>
					<Stack
						divider={<StackDivider />}
						spacing="4">
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
						<FormControl isRequired>
							<FormLabel>Contact details:</FormLabel>
							<Input
								type="tel"
								placeholder="01XXX-XXXXXX"
							/>
						</FormControl>
					</Stack>
				</CardBody>
			</Card>
		</div>
	);
};

export default LandDetailComponent;
