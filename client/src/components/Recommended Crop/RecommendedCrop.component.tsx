import { Card, Heading, CardBody, Stack, StackDivider, Text, Box } from '@chakra-ui/react';

const RecommendedCropComponent = () => {
	return (
		<Card>
			<CardBody>
				<Stack
					divider={<StackDivider />}
					spacing="4">
					<Box>
						<Heading
							size="xs"
							textTransform="uppercase">
							Name:
						</Heading>
						<Text
							pt="2"
							fontSize="sm">
							{' '}
							Rice{' '}
						</Text>
					</Box>
					<Box>
						<Heading
							size="xs"
							textTransform="uppercase">
							Price
						</Heading>
						<Text
							pt="2"
							fontSize="sm">
							60,000 Taka
						</Text>
					</Box>
					<Box>
						<Heading
							size="xs"
							textTransform="uppercase">
							Yield
						</Heading>
						<Text
							pt="2"
							fontSize="sm">
							20,000 Taka
						</Text>
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default RecommendedCropComponent;
