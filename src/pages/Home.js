import React,{Component} from 'react';
import logo from '../images/moogle.svg';
import AutoCompleteText from "../components/AutoCompleteText";
import cowList from '../data/cowList'
import '../App.css';
import {Redirect} from 'react-router-dom';

export default class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			changePage: false,
			searchName:''
		};
	}

	gotoSearch = (cowListFiltered,searchName) =>{
		this.setState({
			changePage:true,
			searchName:searchName
		});
	};

	render() {
		if(this.state.changePage){
			let encode =btoa(this.state.searchName);
			let search ="/search/"+encode;
			return (
				<Redirect push to={search} />
			 );
		}

		return (
			<div className="home">
				<div>
					<img src={logo} alt="Moogle" />
				</div>
				<div className="App-Component">
					<AutoCompleteText  cowList={cowList} triggerParentUpdate={this.gotoSearch} />
				</div>

			</div>
		);
	};
}