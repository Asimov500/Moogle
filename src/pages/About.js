import React,{Component} from 'react';
import logo from "../images/moogle.svg";
import cattle from "../images/cattle.jpg";
import {Link} from 'react-router-dom';

export default class About extends Component{
	render() {
		return (
			<div>
			<div className="search">
				<div>
					<img src={logo} alt="Moogle" />
				</div>
			</div>
			<div className="App-Response">
				<ul>
					<li>
						<div>
							<h3>About</h3>
							<div>
								<div className="imfloat"><img  src={cattle} alt="Moogle" /></div>
								This is a small web app created to show the possibilities of react. In the app I have not used any SCSS (just standard CSS), or backend api, because I wanted to learn the basics of creating an app in react only, at this moment in time. Even though this is a small app, it shows that I have mastered the rudimentary fundamentals of react, routing and JSX.
								<br/><br/>
								At first I didn't like that fact that react was mixing html and javascript, as I have always learned that there should be a separation of concerns. React challenges the traditional models of thinking towards the separation of concern. After a while it felt quite refreshing to try a new way. I do understand as sometimes with angularJs you were alway trying to trace back the code from the html template, back to the controller, but this is not necessary with react.
								<br/><br/>
								This app is fully responsive and mobile compliant.
								<br/><br/><br/>
								<Link className="aboutLink" to="/">Back to search</Link>
							</div>
						</div>
						<div className="imDiv">
						</div>
					</li>
				</ul>
			</div>
			</div>
		);
	};
}