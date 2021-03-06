import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppBar from '../AppBar/AppBar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardContent from '../CardContent/CardContent';
import About from '../About/About';
import guitars from '../../data/guitars';
import amps from '../../data/amps';
import misc from '../../data/misc';

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
						<CardContent itemType="amps" items={amps} />
					</Route>
					<Route exact path="/misc">
						<h1>Misc</h1>
						<CardContent itemType="misc" items={misc} />	
					</Route>
					<Route exact path="/about">
						<About />
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
