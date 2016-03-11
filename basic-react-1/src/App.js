import React from 'react';
import SendingList from './SendingList';
import DisplayItem from './DisplayItem';

let sendArray=[
				{id:"1",
				city:"Stockholm",
				country:"Sweden"},
				{id:"2",
				city:"Copenhagen",
				country:"Denmark"},
				{id:"3",
				city:"New Delhi",
				country:"India"}
				]
class App extends React.Component{
	render(){
		return(
			<div>
			
				<ul>

					{sendArray.map((item)=>{
						return <DisplayItem item={item} key={item.id}/>
						})}
					</ul>
					<SendingList/>

			</div>
			)
	}
}

React.render(<App/>,document.getElementById('app'));
