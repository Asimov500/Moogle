import React,{Component} from 'react';
import '../App.css';
import logo from "../images/moogle.svg";
import AutoCompleteText from "../components/AutoCompleteText";
import cowList from "../data/cowList";
import {Link} from "react-router-dom";

const cowBase="../images/cows/";

export default class Search extends Component{
	constructor(props){
		super(props);
		this.state={
			search: atob(props.match.params.source),
			showLines: false,
			cowListFiltered:[
				{
					name:'',
					description:'',
					region:'',
					image:''
				}
			]
		};
	}

	componentDidMount() {
		let suggestions = [];
		if(this.state.search.length > 0) {
			suggestions = cowList.sort().filter(h => h.name.toLowerCase().includes(this.state.search.toLowerCase()));
			this.listItems(suggestions,this.state.search);
		}
	}

	listItems = (cowListFiltered,searchName) =>{
		this.setState({
			cowListFiltered: cowListFiltered
		});
		this.props.history.replace(`/search/`+btoa(searchName));
	};

	imgShow(im){
		return (
			<img alt='' src={cowBase+im}/>
		);
	}

	render() {
		return (
			<div>
				<div className="search">
					<div>
						<img src={logo} alt="Moogle" />
					</div>
					<div className="App-Component">
						<AutoCompleteText startValue={this.state.search}  cowList={cowList} triggerParentUpdate={this.listItems} />
					</div>
					<div className="aboutPadding">
						<Link className="aboutLink" to="/about">About Moogle</Link>
					</div>
				</div>
				<div className="App-Response">
					<ul>
						{this.state.cowListFiltered.map((item =>
							<li key={item.name}>
								<div>
									<h3>{item.name}</h3>
									{ item.image.length > 0 ? this.imgShow(item.image) : null }
									{ item.description.length > 0 ? <div dangerouslySetInnerHTML={{__html: item.description }} /> : <div>No Description Available</div> }<br/>
									<h5 className="tagFive">Country/Region of origin:</h5>{item.region}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	};
}