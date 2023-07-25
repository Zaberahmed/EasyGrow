import { useState } from 'react';
import { Offer } from '../../../Interfaces/Offer.interface';
import OfferDetailsComponent from '../../../components/Offer Details/OfferDetails.component';
import formatMoney from '../../../utils/formatMoney';
import { Center, Heading } from '@chakra-ui/react';
import BottomNavBar from '../../../components/BottomNavBar/BottomNavBar';
const initialOffer: Offer = {
	amount: '0',
	status: 'Negotiating',
};

const dummyOffers: Offer[] = [
	{
		amount: '40000',
		status: 'Negotiating',
	},
	{
		amount: '50000',
		status: 'Accepted',
	},
	{
		amount: '30000',
		status: 'Rejected',
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

			<BottomNavBar
				leftSide="farmer"
				middle="farmer/map"
				rightSide="farmer/offer-details"
				userRole="farmer"></BottomNavBar>
		</div>
	);
};

export default MyOffersPage;
