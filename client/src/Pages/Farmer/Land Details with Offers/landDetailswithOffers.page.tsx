import { useParams } from 'react-router-dom';
import { Land } from '../../../Interfaces/Land.interface';
import LandDetailComponent from '../../../components/Land Details/landDetail.component';
import OfferAmountComponent from '../../../components/Offer Amount Form/OfferAmount.component';
import { useState, useEffect } from 'react';
import { getLandDetails } from '../../../Services/farmer';
import { profile } from '../../../Services/user';

const LandDetailswithOffersPage = () => {
	const { id } = useParams();

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
		<div className="land-detail-with-offers-page-container">
			{land && <LandDetailComponent land={land} />}

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
