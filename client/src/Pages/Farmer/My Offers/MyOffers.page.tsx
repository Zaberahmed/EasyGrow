import { useEffect, useState } from 'react';
import { Offer } from '../../../Interfaces/Offer.interface';
import OfferDetailsComponent from '../../../components/Offer Details/OfferDetails.component';
import formatMoney from '../../../utils/formatMoney';
import { Center, Heading } from '@chakra-ui/react';
import BottomNavBar from '../../../components/BottomNavBar/BottomNavBar';
import { getOffers } from '../../../Services/farmer';
import { profile } from '../../../Services/user';
import { User } from '../../../Interfaces/User.interface';

const initialOffer: Offer[] = [
	{
		amount: '',
		status: '',
		counter_offer: '',
		address: '',
	},
];

const initialUser: User = {
	name: '',
	email: '',
	password: '',
	phoneNumber: '',
	address: '',
	role: '',
};

// const dummyOffers: Offer[] = [
// 	{
// 		amount: '14000',
// 		status: 'Negotiating',
// 		counter_offer: '1200',
// 		address: 'Savar, Dhaka',
// 		countered: true,
// 	},
// ];

const MyOffersPage = () => {
	const [offers, setOffers] = useState<Offer[]>(initialOffer);
	const [user, setUser] = useState<User>(initialUser);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchOffers = async () => {
			let results: Offer[];
			try {
				results = await getOffers(user._id!);
				console.log(results);
				const sortedResults = results.sort((a: Offer, b: Offer) => {
					return results.indexOf(b) - results.indexOf(a);
				});
				setOffers(sortedResults);
				if (offers) setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		fetchOffers();
	}, [user._id]);

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
	if (loading) {
		return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>Loding...</div>;
	}

	return (
		<div className="all-offers-container">
			<Center>
				<Heading
					size="md"
					mt={5}
					mb={5}>
					{' '}
					My Offers{' '}
				</Heading>
			</Center>

			{offers.length > 0 ? (
				offers.map((offer, index) => (
					<OfferDetailsComponent
						key={index}
						amount={formatMoney(offer.amount)}
						status={offer.status}
						address={offer.address}
						counter_offer={offer.counter_offer}
						countered={offer.countered}
						_id={offer._id}
					/>
				))
			) : (
				<Center>No offers yet</Center>
			)}

			<BottomNavBar
				leftSide="farmer"
				middle="farmer/map"
				rightSide="farmer/offer-details"
				userRole="farmer"></BottomNavBar>
			<div style={{ height: '18vh' }}></div>
		</div>
	);
};

export default MyOffersPage;
