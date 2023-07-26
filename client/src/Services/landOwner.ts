import axios from 'axios';
import { Land } from '../Interfaces/Land.interface';
const SERVER_PORT = 4000;
const SERVER_ADDRESS = 'http://localhost';
const SERVER_URL = `${SERVER_ADDRESS}:${SERVER_PORT}`;

const token = localStorage.getItem('accessToken');

export const addLandDetails = async (land: any) => {
  console.log(land);
  try {
    return await axios({
      method: 'POST',
      withCredentials: true,
      url: `${SERVER_URL}/addLand`,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      data: land,
    })
      .then((res) => res.data)
      .catch((error) => window.alert(`${error.response.data}`));
  } catch (error) {
    console.log('Error while getting land details:', error);
  }
};

export const removeLand = async (userId: string, landId: string) => {
  try {
    return await axios({
      method: 'DELETE',
      url: `${SERVER_URL}/removeLand`,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      data: { userId, landId },
    })
      .then((res) => res.data)
      .catch((error) => window.alert(`${error.response.data}`));
  } catch (error) {
    console.log('Error while getting land details:', error);
  }
};
export const landSearchByOwner = async (ownerId: string) => {
  try {
    return await axios({
      method: 'POST',
      url: `${SERVER_URL}/landSearchByOwner`,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      data: { ownerId },
    })
      .then((res) => res.data)
      .catch((error) => window.alert(`${error.response.data}`));
  } catch (error) {
    console.log('Error while getting land details:', error);
  }
};
export const allOffersForALand = async (landId: string) => {
  try {
    return await axios({
      method: 'POST',
      url: `${SERVER_URL}/allOffersForALand`,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      data: { landId },
    })
      .then((res) => res.data)
      .catch((error) => window.alert(`${error.response.data}`));
  } catch (error) {
    console.log('Error while getting land details:', error);
  }
};

export const acceptOffer = async (offerId: string, status: string) => {
  try {
    return await axios({
      method: 'POST',
      url: `${SERVER_URL}/acceptOffer`,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      data: { offerId, status },
    })
      .then((res) => res.data)
      .catch((error) => window.alert(`${error.response.data}`));
  } catch (error) {
    console.log('Error while getting land details:', error);
  }
};
export const rejectoffer = async (offerId: string, status: string) => {
  try {
    return await axios({
      method: 'POST',
      url: `${SERVER_URL}/rejectOffer`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: { offerId, status },
    })
      .then((res) => res.data)
      .catch((error) => window.alert(`${error.response.data}`));
  } catch (error) {
    console.log('Error while getting land details:', error);
  }
};

// export const addLand = async (land: Land) => {
//   const response = await fetch('http://localhost:4000/profile', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(land),
//   });

//   if (!response.ok) {
//     throw new Error('Failed to get profile');
//   }
// };
