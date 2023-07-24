import { useState } from 'react';
import { Offer } from '../../../Interfaces/Offer.interface';
import OfferDetailsComponent from '../../../components/Offer Details/OfferDetails.component';
import formatMoney from '../../../utils/formatMoney';
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
		<div>
			{dummyOffers.map((offer) => (
				<OfferDetailsComponent
					amount={formatMoney(offer.amount)}
					status={offer.status}
				/>
			))}
		</div>
	);
};

export default MyOffersPage;
