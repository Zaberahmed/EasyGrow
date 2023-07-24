import { useState } from 'react';
import { Offer } from '../../../Interfaces/Offer.interface';
import OfferDetailsComponent from '../../../components/Offer Details/OfferDetails.component';
import formatMoney from '../../../utils/formatMoney';
import { Center, Heading } from '@chakra-ui/react';
const initialOffer: Offer = {
	amount: '0',
	status: 'pending',
};

const dummyOffers: Offer[] = [
	{
		amount: '40000',
		status: 'pending',
	},
	{
		amount: '50000',
		status: 'accepted',
	},
	{
		amount: '30000',
		status: 'rejected',
	},
];

const MyOffersPage = () => {
	const [offer, setOffer] = useState<Offer>(initialOffer);
	return (
		<div className="all-offers-container">
			<Center>
				<Heading
					size="md"
					mt={5}>
					{' '}
					My Offers{' '}
				</Heading>
			</Center>
			{dummyOffers.map((offer, index) => (
				<OfferDetailsComponent
					key={index}
					amount={formatMoney(offer.amount)}
					status={offer.status}
				/>
			))}
		</div>
	);
};

export default MyOffersPage;
