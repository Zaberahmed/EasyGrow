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

import FarmerHomePage from './Pages/Farmer/Farmer Home/FarmerHome.page';
import LandDetailswithOffersPage from './Pages/Farmer/Land Details with Offers/landDetailswithOffers.page';
import OfferDetailsComponent from './components/Offer Details/OfferDetails.component';
import MyOffersPage from './Pages/Farmer/My Offers/MyOffers.page';
import ViewMapPage from './Pages/Farmer/View Map/ViewMap.page';

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
					path="/home"
					element={<MainPage />}></Route>
				<Route
					path="/form"
					element={<AddLandForm />}
				/>
				<Route
					path='/list'
					element={<ListOfLands />}
				></Route>
				<Route path='/add/:id'
					element={<OffersForLand></OffersForLand>}
				></Route>







				<Route
					path="farmer"
					element={<FarmerHomePage />}></Route>
				<Route
					path="farmer/map"
					element={<ViewMapPage />}></Route>
				<Route
					path="farmer/land-details"
					element={<LandDetailswithOffersPage />}></Route>
				<Route
					path="farmer/offer-details"
					element={<MyOffersPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
