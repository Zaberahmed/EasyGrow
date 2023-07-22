import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/Common/Signup/Signup.component';
import Login from './Pages/Common/Login/Login.component';
import MapComponent from './components/Map/Map.component';
import SplashScreen from './Pages/Common/SplashScreen/SplashScreen.component';
import AddLandForm from './components/AddLandForm/AddLandForm.component';
import Greetings from './Pages/LandOwner/LandOwnerHome/Greetings';
import CurrentLocation from './Pages/LandOwner/LandOwnerHome/CurrentLocation';
import Heading from './Pages/LandOwner/LandOwnerHome/Heading';

import PhotoWithOverlay from './Pages/LandOwner/LandOwnerHome/PhotoWithOverlay';
import BottomNavBar from './Pages/LandOwner/LandOwnerHome/BottomNavBar';
import MainPage from './Pages/LandOwner/LandOwnerHome/MainPage';
import BoxImage from './Pages/LandOwner/LandOwnerHome/BoxImage';

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
					path='/gre'
					element={<MainPage />}
				></Route>


			</Routes>
		</>
	);
}

export default App;
