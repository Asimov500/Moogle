import React,{Component} from 'react';
import './App.css';
import Home from './pages/Home'
import Search from './pages/Search'
import About from './pages/About'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

class App extends Component{
	render(){
		return(
			<Router>
				<div>
					<Switch>
						<Route path="/" exact component={Home}/>
						<Route path="/search/:source" exact strict component={Search}/>
						<Route path="/about" component={About}/>
					</Switch>
				</div>
			</Router>
		)
	};
}
export default App;