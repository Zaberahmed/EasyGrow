import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/Common/Signup/Signup.component';
import Login from './Pages/Common/Login/Login.component';
import MapComponent from './components/Map/Map.component';
import SplashScreen from './Pages/Common/SplashScreen/SplashScreen.component';
import AddLandForm from './components/AddLandForm/AddLandForm.component';
import Greetings from './Pages/LandOwner/LandOwnerHome/Greetings';
import CurrentLocation from './Pages/LandOwner/LandOwnerHome/CurrentLocation';

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
					element={<CurrentLocation />}
				></Route>


			</Routes>
		</>
	);
}

export default App;
