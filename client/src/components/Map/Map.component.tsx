import './Map.style.css';
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as turf from '@turf/turf';

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g';

const MapComponent: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-79.4512, 43.6568],
      zoom: 13,
    });

    map.addControl(
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
    map.addControl(draw);

    map.on('draw.create', updateArea);
    map.on('draw.delete', updateArea);
    map.on('draw.update', updateArea);

    function updateArea(e: any) {
      const data = draw.getAll();
      console.log(data);

      const center = turf.center(data);

      new mapboxgl.Marker({ color: 'red', anchor: 'center' })
        .setLngLat([center.geometry.coordinates[0], center.geometry.coordinates[1]])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('Hello'))
        .addTo(map);

      const answer = document.getElementById('calculated-area');
      if (data.features.length > 0) {

        const area = turf.area(data);
        const rounded_area = Math.round(area * 100) / 100;
        if (answer)
          answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
      } else {
        if (answer) answer.innerHTML = '';
        if (e.type !== 'draw.delete') alert('Click the map to draw a polygon.');
      }
    }

    return () => map.remove();
  }, []);

  return (
    <div>
      <div
        ref={mapContainerRef}
        style={{ position: 'absolute', top: 0, bottom: 0, width: '100%', height: '80%' }}
      />
      <div className='calculation-box'>
        {/* <p>Click the map to draw a polygon.</p> */}
        <div id='calculated-area' />
      </div>
      <button className='map-btn'>Add land</button>
    </div>
  );
};

export default MapComponent;
