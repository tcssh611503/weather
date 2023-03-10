import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../views/Home';
import WeekWeather from '../views/WeekWeather';
import Menu from '../components/Menu';

const App = () => {
	return (  
		<div className="app">
			<div className="container">
				<Router>
					<Menu />
						<Routes>
							{/* home page */}
							<Route path="/" element={<Home />} /> 
							<Route path="/WeekWeather" element={<WeekWeather />}></Route>

							{/* error page */}
							<Route path="/404" element={<div>404</div>} />
							<Route path="*" element={<Navigate to="/404"></Navigate>} ></Route>
						</Routes>
				</Router>
			</div>
		</div>
	);
};

export default App;
