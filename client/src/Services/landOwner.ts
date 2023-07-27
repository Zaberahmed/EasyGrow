import axios from 'axios';
import { Counter } from '../Interfaces/Offer.interface';
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
      withCredentials: true,
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

export const counterOffer = async (counter: any) => {
  try {
    return await axios({
      method: 'PUT',
      withCredentials: true,
      url: `${SERVER_URL}/counter-offer`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: counter,
    })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export const allLands = async () => {
  try {
    return await axios({
      method: 'GET',
      url: `${SERVER_URL}/allLand`,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      const lands = res.data;
      return lands;
    });
  } catch (error) {
    console.error(error);
  }
};
// export const allOfferBylandId = async (landId: string) => {
//   console.log(landId);
//   try {
//     const offer = await axios({
//       method: 'POST',
//       url: `${SERVER_URL}/allOffersForALand`,

//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       data: landId,
//     });
//     console.log(offer);
//     // .then((res) => {
//     //   console.log(res);
//     //   // return res.data;
//     // })
//     // .catch((error) => window.alert(`${error.response.data}`));
//   } catch (error) {
//     console.log(error);
//   }
// };
