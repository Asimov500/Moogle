import React,{Component} from 'react';
import AutoCompleteText from "./components/AutoCompleteText";
import './App.css';
import cowList from './data/cowList'

class App extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div>
                <div className='home'>
                    <div>
                        <img alt="Moogle" src="images/moogle.svg"/>
                    </div>
                    <div className="App-Component">
                        <AutoCompleteText  cowList={cowList} triggerParentUpdate={this.setLayout} />
                    </div>
                </div>
            </div>
        )
    };
}

export default App;