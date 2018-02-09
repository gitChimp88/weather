import React from 'react'
import axios from 'axios'
import Buttons from './Button'
import ButtonTwo from './ButtonTwo'




export default class AutoComplete extends React.Component {
		
	constructor(){
                super()
                this.state = {
					
					auto: '',
					predictions: []
					
				}
			
	       }
	
	
	handleSubmit(e){
		     e.preventDefault();
			 var city = this.refs.city.value
			 this.props.searchCity(city);
			
		 }
	
	
	 handleChange(e){
		 
		 /*ON INPUT CHANGE MAKE API CALL FOR PREDICTION*/
		 var city = e.target.value;  
		 var APIKEY = "&key=AIzaSyCrtp3aezCuLRcG09FHNq-meaISVOoLDnU";
		 var api = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + city + APIKEY;
		 
		 
			axios.get(api)
			.then((response)=> {
				console.log(response.data)
			    

					if(city != '') {
					var arr = [];
					response.data.predictions.map((val, i)=>{
						
						arr.push(val.description)
						
						this.setState({predictions: arr})
					})
					 
				}
				
			})
			.catch((error)=> {
		
			  //error case, handle the error
			});	
		 }
	
	handleClick(e){
		/*CLICK ON PREDICTION APPEARS IN SEARCH BAR*/
	    var value = e.target.innerText;
		this.refs.city.value = value;
	}
	
	
	
	
	 render(){
		 
		 const style = {
			 listStyle: "none",
			 cursor: "pointer",
			 textAlign: "left"
		 }
		 
		 const ul = {
			 padding: "0"
		 }
		 
		 var predictions = this.state.predictions;
		 var listItems = predictions.map((item, i)=>{
			 return <li key={i} style={style} className="liszt" onClick={this.handleClick.bind(this)}>{item}</li>
		 })
		 
			 
	        return ( 

				
					<div>
					
					 <form onSubmit={this.handleSubmit.bind(this)}>
							<input className="input" ref="city" onChange={this.handleChange.bind(this)} placeholder="Search City"></input>	
						    <p>{this.state.auto}</p>
						    
						    {this.state.predictions.length != 0 ?  <ul style={ul}>{listItems}</ul> : <div></div>}
						  
						 
							  <Buttons/>
						 	  <ButtonTwo/>
						   
					
					 </form>
						
				   </div>
					 
				)

		 }
	 
}



