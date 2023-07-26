import { Heading, CardBody, Stack, StackDivider, Text, Box } from '@chakra-ui/react';
import { TbCurrencyTaka } from 'react-icons/tb';
import formatMoney from './../../utils/formatMoney';
import { Land } from '../../Interfaces/Land.interface';

const LandDetailComponent = ({ land }: { land: Land }) => {
	return (
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
							{land.size}
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
							{land.duration} months
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
							{formatMoney(land.price)} <TbCurrencyTaka size={17} />
						</Text>
					</div>
				</Box>
			</Stack>
		</CardBody>
	);
};

export default LandDetailComponent;
