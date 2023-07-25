import { Land } from '../../../Interfaces/Land.interface';
import LandDetailComponent from '../../../components/Land Details/landDetail.component';
import OfferAmountComponent from '../../../components/Offer Amount Form/OfferAmount.component';
import { useState, useEffect } from 'react';

const LandDetailswithOffersPage = () => {
	const [land, setLand] = useState<Land>();

	useEffect(() => {
		const fetchData = () => {
			try {
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<div className="land-detail-with-offers-page-container">
			<LandDetailComponent />
			<OfferAmountComponent />
		</div>
	);
};

export default LandDetailswithOffersPage;
