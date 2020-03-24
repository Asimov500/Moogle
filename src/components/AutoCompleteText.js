import React from 'react';
import './AutoCompleteText.css';

export default class AutoCompleteText extends React.Component{
	constructor(props){
		super(props);

		this.state={
			suggestions:[],
			text:'',
			filteredList:[]
		}
	}

	onTextChanged = (e) => {
		const value = e.target.value;
		let suggestions = [];
		if(value.length > 0){
		//	const regex = new RegExp(`^${value}`,'i');
			suggestions = this.props.cowList.sort().filter(h => h.name.toLowerCase().includes(value.toLowerCase()));
		}
		this.setState(() => ({ suggestions, text: value }));
	};

	OnEnterKey = (e) => {
		const value = e.target.value;
		let suggestions = [];
		if (e.key === 'Enter') {
			if(value.length > 0) {
				suggestions = this.props.cowList.sort().filter(h => h.name.toLowerCase().includes(value.toLowerCase()));
				this.setState(() => ({suggestions, text: value}));
				this.setState(() => ({
					text: value.name,
					suggestions: []
				}));
				this.props.triggerParentUpdate(suggestions,value.name);
			}
		}
	};

	suggestionSelected(value){
		this.setState(() => ({
			text: value.name,
			suggestions:[]
		}));
		let arrayConvert =[];
		arrayConvert.push(value);
		this.props.triggerParentUpdate(arrayConvert,value.name);
	}

	renderSuggstions () {
		const { suggestions } = this.state;
		if (suggestions.length === 0){
			return null;
		}
		return (
			<ul>
				{suggestions.map((item => <li onClick={() => this.suggestionSelected(item)}>{item.name}</li>))}
			</ul>
		);
	}

	render() {
		const { text } = this.state;
		return (
			<div className="AutoCompleteText">
				<input value={text} onChange={this.onTextChanged} onKeyDown={this.OnEnterKey} type="text" />
				<ul>
					{this.renderSuggstions()}
				</ul>
			</div>
		);
	};


}