import { Card, Heading, CardBody, Stack, StackDivider, Text, Box, Center, CardHeader } from '@chakra-ui/react';
import formatMoney from './../../utils/formatMoney';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Crop } from '../../Interfaces/Crops.interface';
import calculateRevenue from '../../utils/calculateRevenue';

const RecommendedCropComponent = ({ crop, size, amount }: { crop: Crop; size: number; amount: number }) => {
	const revenue = calculateRevenue(size, amount, crop.pricePerTon!, crop.tonPerAcre!);

	return (
		<CardBody>
			<Stack
				divider={<StackDivider />}
				spacing="2">
				<Box
					display={'flex'}
					flexDirection={'row'}
					justifyContent={'space-between'}
					alignContent={'center'}
					alignItems={'center'}>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
						<Heading
							size="s"
							textTransform="uppercase">
							{crop.name}
						</Heading>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
						<Heading
							size="xs"
							textTransform="uppercase">
							Price (TK/Ton)
						</Heading>
						<Text
							pt="2"
							fontSize="sm"
							display={'flex'}>
							{formatMoney(crop.pricePerTon!)} <TbCurrencyTaka size={17} />
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
							Yield (TK)
						</Heading>
						<Text
							pt="2"
							fontSize="sm"
							display={'flex'}>
							{formatMoney(revenue)} <TbCurrencyTaka size={17} />
						</Text>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
						<Heading
							size="xs"
							textTransform="uppercase">
							Production (Ton/Acre)
						</Heading>
						<Text
							pt="2"
							fontSize="sm">
							{crop.tonPerAcre}
						</Text>
					</div>
				</Box>
			</Stack>
		</CardBody>
	);
};

export default RecommendedCropComponent;
