import fetch from 'node-fetch';

const getSoilData = async (longitude: number, latitude: number) => {
  const apiUrl = 'https://rest.isric.org/soilgrids/v2.0/properties/query';
  const lon = longitude;
  const lat = latitude;
  const property = 'phh2o';
  const depth = '0-5cm';
  const value = 'mean';

  const url = `${apiUrl}?lon=${lon}&lat=${lat}&property=${property}&depth=${depth}&value=${value}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const soilData = await response.json();

    return soilData.properties.layers[0].depths[0].values.mean / 10;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export { getSoilData };
