import React,{Component} from 'react';
//import '/../AutoCompleteText.css';

export default class Home extends Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="AutoCompleteText">
				<input onChange={this.onTextChanged} onKeyDown={this.OnEnterKey} type="text" />

			</div>
		);
	};
}