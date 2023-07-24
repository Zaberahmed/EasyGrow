import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Text, Box, Center, Button, Flex } from '@chakra-ui/react';
import TermsAndConditionsComponent from '../Terms & Conditions/TermsAndConditions.component';
import { TbCurrencyTaka } from 'react-icons/tb';
import formatMoney from '../../utils/formatMoney';
import { FaArrowLeft } from 'react-icons/fa';
import RecommendedCropComponent from '../Recommended Crop/RecommendedCrop.component';
import { useNavigate } from 'react-router-dom';

const LandDetailComponent = () => {
	const navigate = useNavigate();
	return (
		<Card>
			<Button
				onClick={() => navigate(-1)}
				variant="unstyled"
				position={'absolute'}
				top={4}
				left={2.5}>
				{' '}
				<FaArrowLeft size={20} />
			</Button>
			<Center>
				<CardHeader>
					<Heading size="md">Land Details</Heading>
				</CardHeader>
			</Center>

			<CardBody>
				<Stack
					divider={<StackDivider />}
					spacing="2">
					<Box
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'space-between'}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
							<Heading
								size="xs"
								textTransform="uppercase">
								Size{' '}
							</Heading>
							<Text
								pt="2"
								fontSize={14}>
								1400
							</Text>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
							<Heading
								size="xs"
								textTransform="uppercase">
								Location{' '}
							</Heading>
							<Text
								pt="2"
								fontSize={14}>
								Savar, Dhaka
							</Text>
						</div>
					</Box>

					<Box
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'space-between'}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
							<Heading
								size="xs"
								textTransform="uppercase">
								Lease Duration{' '}
							</Heading>
							<Text
								pt="2"
								fontSize={14}>
								6 month
							</Text>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
							<Heading
								size="xs"
								textTransform="uppercase">
								Lease amount{' '}
							</Heading>
							<Text
								pt="2"
								fontSize={14}
								display={'flex'}>
								{formatMoney('40000')} <TbCurrencyTaka size={17} />
							</Text>
						</div>
					</Box>

					<Box>
						<Heading
							size="xs"
							mb={2}
							textTransform="uppercase">
							Recommended Crops
						</Heading>
						<RecommendedCropComponent />
					</Box>

					<Box>
						<Heading
							size="xs"
							mb={2}
							textTransform="uppercase">
							Terms & Conditions
						</Heading>
						<TermsAndConditionsComponent />
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default LandDetailComponent;
