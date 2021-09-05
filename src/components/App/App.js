import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppBar from '../AppBar/AppBar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import Test from '../test';

import './App.css';

function App() {
  return (
		<Router>
    	<AppBar />
			<Hero />
			<Test />
			{/* <main>
				<Switch>
					<Route exact path="/">
						<h1>About</h1>
					</Route>
					<Route exact path="/guitars">
						<h1>Guitars</h1>
					</Route>
					<Route exact path="/amplifiers">
						<h1>Amplifiers</h1>
					</Route>
					<Route exact path="/misc">
						<h1>Misc</h1>
					</Route>
					<Route exact path="/contact">
						<h1>Contact</h1>
					</Route>
				</Switch>
			</main> */}
			<Footer />
		</Router>
  );
}

export default App;
