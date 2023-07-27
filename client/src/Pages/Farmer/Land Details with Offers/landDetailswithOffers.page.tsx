import { useParams } from 'react-router-dom';
import { Land } from '../../../Interfaces/Land.interface';
import LandDetailComponent from '../../../components/Land Details/landDetail.component';
import OfferAmountComponent from '../../../components/Offer Amount Form/OfferAmount.component';
import { useState, useEffect } from 'react';
import { getLandDetails, getOffer } from '../../../Services/farmer';
import { Card, CardHeader, Center, Heading } from '@chakra-ui/react';
import { Crop } from '../../../Interfaces/Crops.interface';
import RecommendedCropComponent from '../../../components/Recommended Crop/RecommendedCrop.component';
import TermsAndConditionsComponent from '../../../components/Terms & Conditions/TermsAndConditions.component';
import { Offer } from '../../../Interfaces/Offer.interface';
import { profile } from '../../../Services/user';
import { User } from '../../../Interfaces/User.interface';
import OfferDetailsComponent from '../../../components/Offer Details/OfferDetails.component';
import AlreadyPostedComponent from '../../../components/Already Posted Offer/AlreadyPosted.component';

const initialUser: User = {
	name: '',
	email: '',
	password: '',
	phoneNumber: '',
	address: '',
	role: '',
};

const initialOffer: Offer = {
	amount: '',
	status: '',
};
const initialLand: Land = {
	name: '',
	size: 0,
	location: [],
	duration: '',
	description: '',
	price: 0,
};
const LandDetailswithOffersPage = () => {
	const { id } = useParams();
	const [offer, setOffer] = useState<Offer>(initialOffer);
	const [hasPostedOffer, setHasPostedOffer] = useState<boolean>(false);
	const [user, setUser] = useState<User>(initialUser);
	const [land, setLand] = useState<Land>(initialLand);

	useEffect(() => {
		const fetchLandDetails = async () => {
			try {
				const result = await getLandDetails(id!);
				console.log(result);
				setLand(result[0]);
			} catch (error) {
				console.log(error);
			}
		};
		fetchLandDetails();
	}, [id]);

	useEffect(() => {
		const fetchOneOffer = async () => {
			try {
				const result = await getOffer(user._id!, land._id!);
				console.log(result);
				setOffer(result);
			} catch (error) {
				console.log(error);
			}
		};
		fetchOneOffer();
	}, [user._id, land._id]);
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
		<div>
			{land && <LandDetailComponent land={land} />}

			<Card
				m={1}
				// boxShadow={' inset  .5px 2px grey'}
				mb={1}>
				<Center>
					<CardHeader>
						<Heading
							size="sm"
							mb={2}
							textTransform="uppercase">
							Recommended Crops
						</Heading>
					</CardHeader>
				</Center>
				{land?.crops &&
					land.crops.map((crop: Crop, index: number) => (
						<RecommendedCropComponent
							key={index}
							crop={crop}
							size={land.size}
							amount={land.price}
						/>
					))}
			</Card>

			<Card
				boxShadow={'0 0 1px 2px grey'}
				mb={1}
				m={1.5}>
				<Center>
					<CardHeader>
						<Heading
							size="sm"
							mb={2}
							textTransform="uppercase">
							Terms & Conditions
						</Heading>
					</CardHeader>
				</Center>
				<TermsAndConditionsComponent />
			</Card>

			{/* {land && land._id && land.ownerId && user._id && !offer.amount && (
				<OfferAmountComponent
					landId={land?._id}
					landOwnerId={land?.ownerId}
					userId={user._id}
					setOffer={setOffer}
				/>
			)} */}

			{/* {offer.amount && (
				<OfferDetailsComponent
					amount={offer.amount}
					status={offer.status}
				/>
			)} */}
			<AlreadyPostedComponent amount="40,000" />

			<div style={{ height: '15vh' }}></div>
		</div>
	);
};

export default LandDetailswithOffersPage;
