import React from 'react'
import AutoComplete from './AutoComplete'




export default class Modal extends React.Component {
	

	
	
	 
	
	
	 render(){
		 
		 /*onclick display modal*/
		 
			  const backdropStyle = {
				  position: 'fixed',
				  top: 0,
				  bottom: 0,
				  left: 0,
				  right: 0,
				  backgroundColor: 'rgba(0,0,0,0.3)',
				  padding: 50
				};

				
				const modalStyle = {
				  backgroundColor: '#74ADC8',
				  borderRadius: 5,
				  maxWidth: 500,
				  minHeight: 200,
				  margin: '0 auto',
				  padding: 30,
				  color: "#0A4B6B"
				};
		
		
		      return ( 

					<div>
						 <div  style={backdropStyle}>
							  <div  style={modalStyle}>
								    <h3>Search a town or city of your choice</h3>
									 <AutoComplete searchCity = {this.props.searchCity}/>
							  </div>
						   </div>
						
					 </div>
					 
				)

		 }
	 
}


