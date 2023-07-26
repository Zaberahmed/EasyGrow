import { Link } from 'react-router-dom';
import './SplashScreen.style.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function SplashScreen() {
	return (
		<div className="splash-container">
			<h1>
				Smart Farming and <span className="secondary-text"> Agriculture </span> App for <span className="accent-text"> Farmers. </span>
			</h1>

			<div className="animation-container">
				<Player
					autoplay
					loop
					src="https://assets5.lottiefiles.com/packages/lf20_CgexnTerux.json"
					style={{ height: '300px', width: '300px' }}>
					<Controls
						visible={false}
						buttons={['play', 'repeat', 'frame', 'debug']}
					/>
				</Player>
			</div>
			<div className="splash-button-container">
				<Link to="/signup">
					<button
						className="accent"
						type="button">
						Sign Up
					</button>
				</Link>
				<Link to="/login">
					<button
						className="accent"
						type="button">
						Log In
					</button>
				</Link>
			</div>
		</div>
	);
}

export default SplashScreen;
