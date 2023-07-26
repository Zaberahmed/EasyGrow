import { useParams } from 'react-router-dom';
import { Land } from '../../../Interfaces/Land.interface';
import LandDetailComponent from '../../../components/Land Details/landDetail.component';
import OfferAmountComponent from '../../../components/Offer Amount Form/OfferAmount.component';
import { useState, useEffect } from 'react';
import { getLandDetails } from '../../../Services/farmer';
import { Card, CardHeader, Center, Heading } from '@chakra-ui/react';
import { Crop } from '../../../Interfaces/Crops.interface';
import RecommendedCropComponent from '../../../components/Recommended Crop/RecommendedCrop.component';
import TermsAndConditionsComponent from '../../../components/Terms & Conditions/TermsAndConditions.component';
import { Offer } from '../../../Interfaces/Offer.interface';
import { profile } from '../../../Services/user';

const initialUser: User = {
	_id: '',
	name: '',
	email: '',
	password: '',
	phoneNumber: '',
	address: '',
	role: '',
};
const LandDetailswithOffersPage = () => {
	const { id } = useParams();
	const [offer, setOffer] = useState<Offer>();
	const [user, setUser] = useState<User>(initialUser);
	const [land, setLand] = useState<Land>();

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
				// const result = await getOffer(land?._id);
				// console.log(result);
				// setLand(result[0]);
			} catch (error) {
				console.log(error);
			}
		};
		fetchOneOffer();
	}, []);
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
				// boxShadow={' inset .5px 2px grey'}
				mb={1}>
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

			{land && land._id && land.ownerId && user._id && (
				<OfferAmountComponent
					landId={land?._id}
					landOwnerId={land?.ownerId}
					userId={user._id}
				/>
			)}
		</div>
	);
};

export default LandDetailswithOffersPage;
