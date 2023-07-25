import { useEffect, useRef, useState } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useNavigate } from 'react-router-dom';

export const FarmerMapcomponent = () => {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<Map | null>(null);
	const defaultMarkerPosition: [number, number] = [90.4125, 23.8103];
	const [lands, setLands] = useState([]);
	const [popup, setPopup] = useState<mapboxgl.Popup | null>(null);
	const navigate = useNavigate();
	const dummyLand = {
		size: 1500,
		lease: 40000,
		duration: 6,
		address: 'Dhaka',
	};

	mapboxgl.accessToken = 'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g';

	useEffect(() => {
		if (mapContainerRef.current) {
			mapRef.current = new mapboxgl.Map({
				container: mapContainerRef.current,
				style: 'mapbox://styles/mapbox/satellite-streets-v12?optimize=true',
				center: [90.4125, 23.8103],
				zoom: 14,
			});
		}

		return () => mapRef.current?.remove();
	}, []);

	useEffect(() => {
		if (mapContainerRef.current && mapRef.current) {
			const popup = new mapboxgl.Popup({
				closeButton: true,
				closeOnClick: true,
			});
			const marker = new mapboxgl.Marker({ color: 'red', anchor: 'center' }).setLngLat(defaultMarkerPosition).addTo(mapRef.current!);
			// const btnElement = document.createElement('div');
			// btnElement.addEventListener('click', () => navigate('/farmer/land-details'));
			marker.getElement().addEventListener('mouseenter', () => {
				mapRef.current!.getCanvas().style.cursor = 'pointer';

				popup
					.setLngLat(defaultMarkerPosition)
					.setHTML(
						`<div class="popup">

				  <h3 class="route-name">Land Details</h3>
				  <div class="route-metric-row">
				    <h4 class="row-title">Land size</h4>
				    <div class="row-value">${dummyLand.size}</div>
				  </div>
				  <div class="route-metric-row">
				    <h4 class="row-title">Lease amount</h4>
				    <div class="row-value">${dummyLand.lease}</div>
				  </div>
				  <div class="route-metric-row">
				    <h4 class="row-title">Lease duration</h4>
				    <div class="row-value">${dummyLand.duration} month</div>
				  </div>
				  <p class="route-city">${dummyLand.address}</p>
				  <button class="popup-button" onclick= handleClick()>See Details</button>
				</div>
				    `
					)
					.addTo(mapRef.current!);

				// popup.setLngLat(defaultMarkerPosition).setDOMContent(btnElement).addTo(mapRef.current!);
			});
			marker.getElement().addEventListener('mouseleave', () => {
				mapRef.current!.getCanvas().style.cursor = '';

				// popup.remove();
			});
		}
	}, [lands]);

	return (
		<div
			style={{ width: '100vw', height: '100vh' }}
			ref={mapContainerRef}
		/>
	);
};
