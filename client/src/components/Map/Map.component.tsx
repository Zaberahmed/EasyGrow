import './Map.style.css';
import { useEffect, useRef, useState } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as turf from '@turf/turf';
import { VscAdd } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { CenterMarker } from '../../utils/CenterMarker';
import { HStack, Text } from '@chakra-ui/react';
import { IconContext } from 'react-icons';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g';

const MapComponent = () => {
	const [btn, setBtn] = useState<boolean>(false);
	const [centerLocation, setCenterLocation] = useState<Number[]>([]);
	const [area, setArea] = useState<Number>(0);
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<Map | null>(null);
	mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

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
				const geometry = data.features[0].geometry;
				let result;
				if (geometry.type === 'Polygon') {
					result = CenterMarker(geometry.coordinates);
					setCenterLocation(result);
				}
				console.log(result);
				const center = turf.center(data);
				// console.log(center);

				if (mapRef.current && result) {
					new mapboxgl.Marker({ color: 'red', anchor: 'center' })

						.setLngLat([result[0], result[1]])
						.setPopup(new mapboxgl.Popup({ offset: 25 }).setText('Hello'))
						.addTo(mapRef.current);
				}

				const answer = document.getElementById('calculated-area');

				if (data.features.length > 0) {
					const area = turf.area(data);
					const rounded_area = Number(((Math.round(area * 100) / 100) * 0.000247105381).toFixed(4));
					setArea(rounded_area);
					if (answer) {
						answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>acre</p>`;
						setBtn(true);
					}
				} else {
					if (answer) answer.innerHTML = '';
					if (e.type !== 'draw.delete') alert('Click on the map to draw a polygon.');
				}
			}
		}
		return () => mapRef.current?.remove();
	}, []);
	const navigate = useNavigate();
	const handleAddBtn = () => {
		navigate('/form', {
			state: {
				area: area,
				location: centerLocation,
			},
		});
	};

	return (
		<div>
			<div
				ref={mapContainerRef}
				style={{ position: 'absolute', top: 0, bottom: 0, width: '100%', height: '100%' }}
			/>
			<div className="calculation-box">
				<div id="calculated-area" />
			</div>
			{btn && (
				<button
					onClick={handleAddBtn}
					className="map-btn ">
					<HStack>
						<IconContext.Provider value={{ color: 'green', size: '30px' }}>
							<div>
								<VscAdd />
							</div>
						</IconContext.Provider>
						<Text>Add Land</Text>
					</HStack>
				</button>
			)}
		</div>
	);
};

export default MapComponent;
