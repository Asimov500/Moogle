import React,{Component} from 'react';
import logo from "../images/moogle.svg";
import brad from "../images/brad.jpg";
import AutoCompleteText from "../components/AutoCompleteText";
import cowList from "../data/cowList";
//import './AutoCompleteText.css';



const imgStyle = {
	//width:700
};

export default class About extends Component{
	/*constructor(props){
		super(props);
	}*/
	render() {
		return (
			<div>
			<div className="search">
				<div>
					<img src={logo} alt="Moogle" />
				</div>
				<div className="App-Component">
					hello
				</div>
			</div>
			<div className="App-Response">
				<ul>
					<li>
						<div className="bodText">
							<h3>About</h3>
							<div>
								<div className="imfloat"><img  src={brad} alt="Moogle" /></div>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

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