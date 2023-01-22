import { HashRouter as Router,Routes, Route,Navigate  } from 'react-router-dom';

import Home from '../views/Home';
import Videos from '../views/Videos';
import Menu from '../views/Menu';
import Weather from '../views/Weather';

const App = (any: any) => {
	return (  
		<div className="app">
			<div className="container">
				<Router>
					<Menu />
						<Routes>
							{/* Home */}
							<Route path="/" element={<Home />} /> 
							<Route path="/video" element={<Videos />}></Route>

							<Route path="/weather" element={<Weather />}></Route>
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
