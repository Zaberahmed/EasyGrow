import { useEffect, useRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export const FarmerMapcomponent = () => {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<Map | null>(null);
	const defaultMarkerPosition: [number, number] = [90.4125, 23.8103];
	mapboxgl.accessToken = 'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g';

	useEffect(() => {
		if (mapContainerRef.current) {
			mapRef.current = new mapboxgl.Map({
				container: mapContainerRef.current,
				style: 'mapbox://styles/mapbox/satellite-streets-v12?optimize=true',
				center: [90.4125, 23.8103],
				zoom: 14,
			});

			mapRef.current.addControl(
				new MapboxGeocoder({
					accessToken: mapboxgl.accessToken,
					mapboxgl: mapboxgl,
				})
			);

			if (mapRef.current) {
				new mapboxgl.Marker({ color: 'red', anchor: 'center' })
					.setLngLat([defaultMarkerPosition[0], defaultMarkerPosition[1]])
					.setPopup(new mapboxgl.Popup({ offset: 25, closeOnClick: true, closeButton: true }).setText('Home'))
					.addTo(mapRef.current);
			}
		}

		return () => mapRef.current?.remove();
	}, []);

	return (
		<div
			style={{ width: '100vw', height: '100vh' }}
			ref={mapContainerRef}
		/>
	);
};
