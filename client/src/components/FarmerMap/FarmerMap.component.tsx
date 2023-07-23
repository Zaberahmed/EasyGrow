import { useEffect, useRef, useState } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export const FarmerMapcomponent = () => {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<Map | null>(null);
	const defaultMarkerPosition: [number, number] = [90.4125, 23.8103];
	const [lands, setLands] = useState([]);

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
		}

		return () => mapRef.current?.remove();
	}, []);

	useEffect(() => {
		if (mapContainerRef && mapRef) {
			const marker = new mapboxgl.Marker({ color: 'red', anchor: 'center' }).setLngLat([defaultMarkerPosition[0], defaultMarkerPosition[1]]).addTo(mapRef.current!);

			marker.getElement().addEventListener('mouseenter', () => {
				mapRef.current!.getCanvas().style.cursor = 'pointer';
				console.log('Entered!');
			});
			marker.getElement().addEventListener('mouseleave', () => {
				mapRef.current!.getCanvas().style.cursor = '';
				console.log('Exited!');
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
