import { useEffect, useRef, useState } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapboxSearchBox } from '@mapbox/search-js-web';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useNavigate } from 'react-router-dom';
import { getLandsByLocation } from '../../Services/farmer';
import { Land } from '../../Interfaces/Land.interface';
import ReactDOM from 'react-dom';
import { ObjectId } from 'mongodb';

export const FarmerMapcomponent = () => {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<Map | null>(null);
	const defaultMarkerPosition: [number, number] = [90.4125, 23.8103];
	const [lands, setLands] = useState<Land[]>([]);
	const [popup, setPopup] = useState<mapboxgl.Popup | null>(null);
	const [searchResult, setSearchResult] = useState<[number, number]>(defaultMarkerPosition);
	const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

	const navigate = useNavigate();

	const Popup = ({ size, price, duration, id }: { size: number; price: number; duration: string; id: ObjectId }) => (
		<div className="popup">
			<h3 className="route-name">Land Details</h3>
			<div className="route-metric-row">
				<h4 className="row-title">Land size</h4>
				<div className="row-value">{size}</div>
			</div>
			<div className="route-metric-row">
				<h4 className="row-title">Lease amount</h4>
				<div className="row-value">{price}</div>
			</div>
			<div className="route-metric-row">
				<h4 className="row-title">Lease Duration</h4>
				<div className="row-value">{duration}</div>
			</div>
			<p className="route-city">Dhaka</p>
			<button onClick={() => navigate(`/farmer/land-details/${id}`)}>See Details</button>
		</div>
	);

	mapboxgl.accessToken = 'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g';

	const fetchLands = async () => {
		try {
			const results = await getLandsByLocation(searchResult[0], searchResult[1]);

			console.log(results);

			setLands(results);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (mapContainerRef.current) {
			mapRef.current = new mapboxgl.Map({
				container: mapContainerRef.current,
				style: 'mapbox://styles/mapbox/satellite-streets-v12?optimize=true',
				center: [90.30857818617242, 23.880958224097034],
				zoom: 16,
			});

			const search = new MapboxSearchBox();
			search.accessToken = mapboxgl.accessToken;
			search.theme = {
				variables: {
					fontFamily: 'Poppins, sans-serif',
					unit: '15px',
					padding: '0.5em',
					borderRadius: '10px',
					boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
				},
				cssText: '.Input:active { opacity: 0.5; }, ',
			};

			mapRef.current.addControl(search);

			search.addEventListener('retrieve', async (event) => {
				const featureCollection = event.detail;
				const longitude = featureCollection.features[0].geometry.coordinates[0];
				const latitude = featureCollection.features[0].geometry.coordinates[1];

				setSearchResult([longitude, latitude]);
			});
		}

		return () => mapRef.current?.remove();
	}, []);

	useEffect(() => {
		if (mapContainerRef.current && mapRef.current) {
			lands.forEach((land) => {
				const popup = new mapboxgl.Popup({
					closeButton: true,
					closeOnClick: true,
				});
				const marker = new mapboxgl.Marker({ color: 'red', anchor: 'center' }).setLngLat([land.location[0].longitude, land.location[0].latitude]).addTo(mapRef.current!);

				// const divElement = document.createElement('div');
				// const btnElement = document.createElement('div');
				// btnElement.innerHTML = `<button class="popup-button> See Details</button>`;
				// divElement.appendChild(btnElement);

				// btnElement.addEventListener('click', () => console.log('Yes!!!'));
				// marker.getElement().addEventListener('click', () => {
				// 	mapRef.current!.getCanvas().style.cursor = 'pointer';

				// 	popup
				// 		.setLngLat([land.location[0].longitude, land.location[0].latitude])
				// 		.setHTML(
				// 			`<div class="popup">

				//   <h3 class="route-name">Land Details</h3>
				//   <div class="route-metric-row">
				//     <h4 class="row-title">Land size</h4>
				//     <div class="row-value">${land.size}</div>
				//   </div>
				//   <div class="route-metric-row">
				//     <h4 class="row-title">Lease amount</h4>
				//     <div class="row-value">${land.price}</div>
				//   </div>
				//   <div class="route-metric-row">
				//     <h4 class="row-title">Lease duration</h4>
				//     <div class="row-value">${land.duration} m</div>
				//   </div>
				//   <p class="route-city">Dhaka</p>
				//   <button class="popup-button" onclick= handleClick(${land._id})>See Details</button>
				// </div>
				//     `
				// 		)
				// 		.addTo(mapRef.current!);

				const popupNode = document.createElement('div');
				if (land._id) {
					ReactDOM.render(
						<Popup
							size={land.size}
							price={land.price}
							duration={land.duration}
							id={land._id}
						/>,
						popupNode
					);
				}

				popUpRef.current.setLngLat([land.location[0].longitude, land.location[0].latitude]).setDOMContent(popupNode);

				marker.setPopup(popUpRef.current);

				// marker.getElement().addEventListener('mouseleave', () => {
				// 	mapRef.current!.getCanvas().style.cursor = '';

				// 	// popup.remove();
				// });
				// });
			});
		}
	}, [lands]);

	useEffect(() => {
		fetchLands();
	}, [searchResult]);

	return (
		<div
			style={{ width: '100vw', height: '100vh' }}
			ref={mapContainerRef}
		/>
	);
};
