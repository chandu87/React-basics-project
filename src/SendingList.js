import React from 'react';
import DisplayItem from './DisplayItem'

class SendingList extends React.Component{


	constructor(){
		super();
		this.state = {
			name:'',
			header:'',
			place:''
		}
	}

	updateState(casename){


		switch(casename){
		
		case 'name':
		this.setState({name:event.target.value});
		break;	

		case 'header':
		this.setState({header:event.target.value});
		break;

		case 'place':
		this.setState({place:event.target.value});
		break;
		}
		console.log(this.state)		

	}
	pushInfo(){
		console.log("Button cliked");
	}

	render(){
		return(
			<div>
			<input type="text" value={this.state.name} onChange={this.updateState.bind(this,'name')}/><br/>
			<input type="text" value={this.state.header} onChange={this.updateState.bind(this,'header')}/><br/>
			<input type="text" value={this.state.place} onChange={this.updateState.bind(this,'place')}/><br/>
			
			<select id="os" onChange={this.updateState} value={this.state.value}>
				<option value="Android">Andorid</option>
  				<option value="Apple">Apple</option>
 				<option value="Windows">Windows</option>
			</select><br/>
			
			<button type="button" onClick={this.pushInfo}>Push </button>

			</div>
			)

	}


}

export default SendingList;