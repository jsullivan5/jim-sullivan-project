import {
  BrowserRouter as Router,
  Switch,
  Route,
	Redirect
} from "react-router-dom";
import AppBar from '../AppBar/AppBar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardContent from '../CardContent/CardContent';
import guitars from '../../data/guitars';

import './App.css';

function App() {
  return (
		<Router basename={'/the-jim-sullivan-project/index.html'}>
    	<AppBar />
			<Hero />
			<main>
				<Switch>
					<Route exact path="/">
						<CardContent itemType="guitars" items={guitars} />
					</Route>
					<Route exact path="/amplifiers">
						<h1>Amplifiers</h1>
					</Route>
					<Route exact path="/misc">
						<h1>Misc</h1>
					</Route>
					<Route exact path="/about">
						<h1>About</h1>
					</Route>
					<Route exact path="/contact">
						<h1>Contact</h1>
					</Route>
				</Switch>
			</main>
			<Footer />
		</Router>
  );
}

export default App;
