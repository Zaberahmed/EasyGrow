import { Card, Heading, CardBody, Stack, StackDivider, Text, Box } from '@chakra-ui/react';
import formatMoney from '../../utils/formatMoney';
import { TbCurrencyTaka } from 'react-icons/tb';

const RecommendedCropComponent = () => {
	return (
		<Card boxShadow={'0 1px 2px grey'}>
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
								Rice
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
								{formatMoney('40000')} <TbCurrencyTaka size={17} />
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
								{formatMoney('20000')} <TbCurrencyTaka size={17} />
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
								20,000
							</Text>
						</div>
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default RecommendedCropComponent;
