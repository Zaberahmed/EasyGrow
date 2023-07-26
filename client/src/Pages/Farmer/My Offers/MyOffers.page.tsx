import { useEffect, useState } from 'react';
import { Offer } from '../../../Interfaces/Offer.interface';
import OfferDetailsComponent from '../../../components/Offer Details/OfferDetails.component';
import formatMoney from '../../../utils/formatMoney';
import { Center, Heading } from '@chakra-ui/react';
import BottomNavBar from '../../../components/BottomNavBar/BottomNavBar';
import { getOffers } from '../../../Services/farmer';
import { profile } from '../../../Services/user';
// import User from '../../../Interfaces/User.interface';

const initialOffer: Offer[] = [
	{
		amount: '',
		status: '',
	},
];

const initialUser: User = {
	_id: '',
	name: '',
	email: '',
	password: '',
	phoneNumber: '',
	address: '',
	role: '',
};

const MyOffersPage = () => {
	const [offers, setOffers] = useState<Offer[]>(initialOffer);
	const [user, setUser] = useState<User>(initialUser);

	useEffect(() => {
		const fetchOffers = async () => {
			try {
				const results = await getOffers(user._id!);
				console.log(results);
				setOffers(results);
			} catch (error) {
				console.log(error);
			}
		};
		fetchOffers();
	}, [user._id!]);
	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const result = await profile();
				console.log(result);
				setUser(result);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProfile();
	}, []);

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
			{offers.map((offer, index) => (
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
