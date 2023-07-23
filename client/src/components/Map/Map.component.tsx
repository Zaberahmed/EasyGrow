import './Map.style.css';
import { useEffect, useRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as turf from '@turf/turf';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g';

const MapComponent = () => {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<Map | null>(null);

	useEffect(() => {
		if (mapContainerRef.current) {
			mapRef.current = new mapboxgl.Map({
				container: mapContainerRef.current,
				style: 'mapbox://styles/mapbox/satellite-streets-v12?optimize=true',
				center: [-0.1084, 51.5549],
				zoom: 14,
			});

			mapRef.current.addControl(
				new MapboxGeocoder({
					accessToken: mapboxgl.accessToken,
					mapboxgl: mapboxgl,
				})
			);

			const draw = new MapboxDraw({
				displayControlsDefault: false,
				controls: {
					polygon: true,
					trash: true,
				},
				defaultMode: 'draw_polygon',
			});
			mapRef.current.addControl(draw);

			mapRef.current.on('draw.create', updateArea);
			mapRef.current.on('draw.delete', updateArea);
			mapRef.current.on('draw.update', updateArea);

			function updateArea(e: any) {
				const data = draw.getAll();
				console.log(data);

				const center = turf.center(data);

				if (mapRef.current) {
					new mapboxgl.Marker({ color: 'red', anchor: 'center' })
						.setLngLat([center.geometry.coordinates[0], center.geometry.coordinates[1]])
						.setPopup(new mapboxgl.Popup({ offset: 25 }).setText('Hello'))
						.addTo(mapRef.current);
				}

				const answer = document.getElementById('calculated-area');
				if (data.features.length > 0) {
					const area = turf.area(data);
					const rounded_area = Math.round(area * 100) / 100;
					if (answer) answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
				} else {
					if (answer) answer.innerHTML = '';
					if (e.type !== 'draw.delete') alert('Click on the map to draw a polygon.');
				}
			}
		}
		return () => mapRef.current?.remove();
	}, []);

	return (
		<div>
			<div
				ref={mapContainerRef}
				style={{ position: 'absolute', top: 0, bottom: 0, width: '100%', height: '80%' }}
			/>
			<div className="calculation-box">
				<div id="calculated-area" />
			</div>
			<button className="map-btn">Add land</button>
		</div>
	);
};

export default MapComponent;
