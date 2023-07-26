import axios from 'axios';
const SERVER_PORT = 4000;
const SERVER_ADDRESS = 'http://localhost';
const SERVER_URL = `${SERVER_ADDRESS}:${SERVER_PORT}`;

const token = localStorage.getItem('accessToken');

const getLandDetails = async (landId: string) => {
	try {
		return await axios({
			method: 'POST',
			withCredentials: true,
			url: `${SERVER_URL}/getLand`,
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
			data: { landId },
		})
			.then((res) => res.data)
			.catch((error) => window.alert(`${error.response.data}`));
	} catch (error) {
		console.log('Error message:', error);
	}
};

const getAllLands = async () => {
	try {
		return await axios({
			method: 'GET',
			url: `${SERVER_URL}/getAllLands`,
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.data)
			.catch((error) => window.alert(`${error.response.data}`));
	} catch (error) {
		console.log('Error message:', error);
	}
};

const getLandsByLocation = async (longitude: number, latitude: number) => {
	try {
		return await axios({
			method: 'POST',
			withCredentials: true,
			url: `${SERVER_URL}/landSearchByLocation`,
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
			data: JSON.stringify({ longitude, latitude }),
		})
			.then((res) => res.data)
			.catch((error) => window.alert(`${error.response.data}`));
	} catch (error) {
		console.log('Error message:', error);
	}
};

const getLandByCrop = async () => {
	try {
		return await axios({
			method: 'GET',
			url: `${SERVER_URL}/landSearchByCrops`,
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.data)
			.catch((error) => window.alert(`${error.response.data}`));
	} catch (error) {
		console.log('Error message:', error);
	}
};

const makeAnOffer = async (landId: string, landOwnerId: string, farmerId: string, newamount: string) => {
	try {
		const amount = Number(newamount);
		return await axios({
			method: 'POST',
			withCredentials: true,
			url: `${SERVER_URL}/makeAnOffer`,
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
			data: {
				landId,
				landOwnerId,
				farmerId,
				amount,
			},
		})
			.then((res) => res.data)
			.catch((error) => window.alert(`${error.response.data}`));
	} catch (error) {
		console.log('Error message:', error);
	}
};

const changeOffer = async (offerId: string, status: string, amount: number) => {
	try {
		return await axios({
			method: 'POST',
			url: `${SERVER_URL}/changeOffer`,
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
			data: {
				offerId,
				status,
				amount,
			},
		})
			.then((res) => res.data)
			.catch((error) => window.alert(`${error.response.data}`));
	} catch (error) {
		console.log('Error message:', error);
	}
};

const deleteOffer = async (landId: string, offerId: string) => {
	try {
		return await axios({
			method: 'DELETE',
			url: `${SERVER_URL}/deleteOffer`,
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
			data: {
				landId,
				offerId,
			},
		})
			.then((res) => res.data)
			.catch((error) => window.alert(`${error.response.data}`));
	} catch (error) {
		console.log('Error message:', error);
	}
};
const getOffers = async (farmerId: string) => {
	try {
		return await axios({
			method: 'POST',
			url: `${SERVER_URL}/getOffers`,
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
			data: {
				farmerId: '64bbb393c7f2aab37546c5e9',
			},
		})
			.then((res) => res.data)
			.catch((error) => window.alert(`${error.response.data}`));
	} catch (error) {
		console.log('Error message:', error);
	}
};

export { getLandDetails, getAllLands, getLandsByLocation, getLandByCrop, makeAnOffer, changeOffer, deleteOffer, getOffers };
