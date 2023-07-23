import { useEffect, useRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export const FarmerMapcomponent = () => {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<Map | null>(null);

	mapboxgl.accessToken = 'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g';

	interface Land {
		type: 'Feature';
		properties: {
			description: string;
		};
		geometry: {
			type: 'Point';
			coordinates: [number, number];
		};
	}

	const lands: Land[] = [
		{
			type: 'Feature',
			properties: {
				description: 'Description of the place',
			},
			geometry: {
				type: 'Point',
				coordinates: [90.4125, 23.8103],
			},
		},
		{
			type: 'Feature',
			properties: {
				description: 'Another point for testing',
			},
			geometry: {
				type: 'Point',
				coordinates: [90.41345, 23.8104567],
			},
		},
	];

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

			mapRef.current.on('load', () => {
				// mapRef.current?.addSource('lands', {
				// 	type: 'geojson',
				// 	data: {
				// 		type: 'FeatureCollection',
				// 		features: lands,
				// 	},
				// });
				// mapRef.current?.addLayer({
				// 	id: 'lands',
				// 	type: 'circle',
				// 	source: 'lands',
				// 	paint: {
				// 		'circle-color': '#4264fb',
				// 		'circle-radius': 6,
				// 		'circle-stroke-width': 2,
				// 		'circle-stroke-color': '#ffffff',
				// 	},
				// });

				const marker = new mapboxgl.Marker({ color: 'red', anchor: 'center' }).setLngLat([90.412677, 23.8203]).addTo(mapRef.current!);

				marker.getElement().addEventListener('mouseenter', () => {
					console.log('Mouse has entered!');
				});
			});
			// const popup = new mapboxgl.Popup({
			// 	closeButton: false,
			// 	closeOnClick: false,
			// });

			// mapRef.current.on('mouseenter', 'lands', (event: any) => {
			// 	mapRef.current!.getCanvas().style.cursor = 'pointer';
			// 	const coordinates = event.features[0].geometry.coordinates.slice();
			// 	const description = event.features[0].properties.description;

			// 	while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
			// 		coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
			// 	}

			// 	popup.setLngLat(coordinates).setHTML(description).addTo(mapRef.current!);
			// });

			// mapRef.current.on('mouseleave', 'lands', () => {
			// 	mapRef.current!.getCanvas().style.cursor = '';
			// 	popup.remove();
			// });
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
