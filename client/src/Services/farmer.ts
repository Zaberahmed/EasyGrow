import axios from 'axios';
const SERVER_PORT = 4000;
const SERVER_ADDRESS = 'http://localhost';
const SERVER_URL = `${SERVER_ADDRESS}:${SERVER_PORT}`;

const token = localStorage.getItem('accessToken');

const getLandDetails = async (_id: string) => {
	try {
		return await axios({
			method: 'POST',
			url: `${SERVER_URL}/getLand`,
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
			data: { _id },
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
			url: `${SERVER_URL}/landSearchByLocation`,
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
			data: { longitude, latitude },
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

const makeAnOffer = async (landId: string, landOwnerId: string, farmerId: string, amount: number) => {
	try {
		return await axios({
			method: 'POST',
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

export { getLandDetails, getAllLands, getLandsByLocation, getLandByCrop, makeAnOffer, changeOffer, deleteOffer };
