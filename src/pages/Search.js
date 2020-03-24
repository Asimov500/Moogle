import React,{Component} from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
//import './AutoCompleteText.css';



export default class Search extends Component{
	constructor(props){
		super(props);
		console.log(props.match.params.source);

		this.state={
			search: atob(props.match.params.source)
		}

	}

	render() {
		return (
			<div>
				<h1>Search Page:  {this.state.search}</h1>
			</div>
		);
	};


}