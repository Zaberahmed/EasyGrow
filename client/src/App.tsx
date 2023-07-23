import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import './App.css';
import SignUp from './Pages/Common/Signup/Signup.component';
import Login from './Pages/Common/Login/Login.component';
import MapComponent from './components/Map/Map.component';
import SplashScreen from './Pages/Common/SplashScreen/SplashScreen.component';
import AddLandForm from './components/AddLandForm/AddLandForm.component';
import Greetings from './components/Greetings/Greetings';
import CurrentLocation from './components/CurrentLocation/CurrentLocation';
import Heading from './components/Heading/Heading';

import PhotoWithOverlay from './components/PhotoWithOverlay/PhotoWithOverlay';
import BottomNavBar from './components/BottomNavBar/BottomNavBar';
import MainPage from './Pages/LandOwner/LandOwnerHome/MainPage';
import BoxImage from './components/BoxImage/BoxImage';
import OffersForLand from './Pages/LandOwner/OffersForLand/OffersForLand.component';
import ListOfLands from './Pages/LandOwner/ListOfLands/ListOfLands.page';

import FarmerHomePage from './Pages/Farmer/FarmerHome/FarmerHome.page';
import LandDetailswithOffersPage from './Pages/Farmer/landDetailswithOffers/landDetailswithOffers.page';
import OfferDetailsComponent from './components/Offer Details/OfferDetails.component';
import MyOffersPage from './Pages/Farmer/Myoffers/MyOffers.page';

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<SplashScreen />}></Route>
				<Route
					path="/signup"
					element={<SignUp />}></Route>
				<Route
					path="/login"
					element={<Login />}></Route>
				<Route
					path="/map"
					element={<MapComponent />}></Route>
				<Route
					path="/form"
					element={<AddLandForm />}
				/>
				<Route
					path="/gre"
					element={<MainPage />}></Route>
				//Farmer page routes
				<Route
					path="farmer"
					element={<FarmerHomePage />}></Route>
				<Route
					path="land-details"
					element={<LandDetailswithOffersPage />}></Route>
				<Route
					path="offer-details"
					element={<MyOffersPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
