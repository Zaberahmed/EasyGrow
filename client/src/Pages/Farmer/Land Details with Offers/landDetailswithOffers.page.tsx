import { useNavigate, useParams } from 'react-router-dom';
import { Land } from '../../../Interfaces/Land.interface';
import LandDetailComponent from '../../../components/Land Details/landDetail.component';
import OfferAmountComponent from '../../../components/Offer Amount Form/OfferAmount.component';
import { useState, useEffect } from 'react';
import { getLandDetails } from '../../../Services/farmer';
import { Button, Card, CardHeader, Center, Heading } from '@chakra-ui/react';
import { Crop } from '../../../Interfaces/Crops.interface';
import RecommendedCropComponent from '../../../components/Recommended Crop/RecommendedCrop.component';
import TermsAndConditionsComponent from '../../../components/Terms & Conditions/TermsAndConditions.component';
import { FaArrowLeft } from 'react-icons/fa';

const LandDetailswithOffersPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

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

	return (
		<div>
			<Button
				onClick={() => navigate(-1)}
				variant="unstyled"
				position={'absolute'}
				top={4}
				left={2.5}>
				{' '}
				<FaArrowLeft size={20} />
			</Button>
			<Card
				boxShadow={' inset  .5px 2px grey'}
				mb={1}>
				<Center>
					<CardHeader>
						<Heading size="md">Land Details</Heading>
					</CardHeader>
				</Center>
				{land && <LandDetailComponent land={land} />}
			</Card>

			<Card
				boxShadow={' inset  .5px 2px grey'}
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
				boxShadow={' inset .5px 2px grey'}
				mb={1}>
				<Center>
					<CardHeader>
						<Heading
							size="xs"
							mb={2}
							textTransform="uppercase">
							Terms & Conditions
						</Heading>
					</CardHeader>
				</Center>
				<TermsAndConditionsComponent />
			</Card>

			{land && land._id && land.ownerId && (
				<OfferAmountComponent
					landId={land?._id}
					landOwnerId={land?.ownerId}
				/>
			)}
		</div>
	);
};

export default LandDetailswithOffersPage;
