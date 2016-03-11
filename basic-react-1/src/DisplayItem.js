import React from 'react';

class DisplayItem extends React.Component{

	render(){
	
		return(
			
				<li>


				{this.props.item.city} {this.props.item.country}
				</li>
				)
		
	}
}

export default DisplayItem;