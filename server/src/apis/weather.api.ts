import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

const getWeatherData = async (longitude: number, latitude: number) => {
  const apiUrl = 'https://history.openweathermap.org/data/2.5/aggregated/month';
  const month = 8;
  const lat = longitude;
  const lon = latitude;
  const appid = process.env.API_ID;

  const url = `${apiUrl}?month=${month}&lat=${lat}&lon=${lon}&appid=${appid}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const weatherData = await response.json();

    const weather = {
      temparature: weatherData.result.temp.mean,
      humidity: weatherData.result.temp.mean,
      railfall: weatherData.result.precipitation.mean,
    };

    return weather;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export { getWeatherData };
