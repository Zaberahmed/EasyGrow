import axios from 'axios';
const SERVER_PORT = 4000;
const SERVER_ADDRESS = 'http://localhost';
const SERVER_URL = `${SERVER_ADDRESS}:${SERVER_PORT}`;

const token = localStorage.getItem('accessToken');

const GetLandDetails = async (LandId: Object) => {
	try {
		return await axios({
			method: 'POST',
			url: `${SERVER_URL}/getLand`,
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
			data: LandId,
		})
			.then((res) => res.data)
			.catch((error) => window.alert(`${error.response.data}`));
	} catch (error) {
		console.log('Error while getting land details:', error);
	}
};

export { GetLandDetails };
