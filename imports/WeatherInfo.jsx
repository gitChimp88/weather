import React from 'react'
import WeatherIcon from './WeatherIcon'
import Icon from './Icon'



export default class WeatherInfo extends React.Component {
	
	constructor(){
                super()
                this.state = {
					
					
					
				}
			
	       }

      render(){
		  
		  var forecast = this.props.forecast;
		  //var day = this.props.day;
		 
		 // var weekDays;
		  
		  const inline = {
			display: "inline-block",
			marginRight: "40px",
			marginLeft: "40px",
			marginBottom: "40px",
			backgroundColor: "#165F82",
		    padding: "5px",
			borderRadius: "10px",
			color: "#BCD9D9",
			fontFamily: 'Work Sans, sans-serif',
			  opacity: "0.9"
			
		}
		  const white = {
			  color: "#74ADC8"
		  }
		  
		  const background = {
			  backgroundColor: "#165F82",
			  borderRadius: "2px",
			  color: "#BCD9D9",
			  width: "100%",
			  margin: "0 auto",
			  padding: "60px",
			  fontFamily: 'Work Sans, sans-serif',
			  fontSize: "30px",
			  opacity: "0.8"
		}
		  
		   const background2 = {
			  backgroundColor: "#165F82",
			  borderRadius: "2px",
			  color: "#BCD9D9",
			  width: "100%",
			  margin: "0 auto",
			  padding: "60px",
			  fontFamily: 'Work Sans, sans-serif',
			  fontSize: "30px",
			  
		}
		 
		  
		
		var clicked = this.props.clicked
		
		if(clicked == true){
		    return ( 
					<div>
					    <div style={background2}>
						<h1 id="h1temp">{this.props.city}</h1>
						<h3>{this.props.temp}°C</h3>
						<p>{this.props.description}</p>
						</div>
						<WeatherIcon description={this.props.description}/>
						<h1 id="underline">Forecast</h1>
						
					<div>
						
						
			
							
						{this.props.forecast.map((val, i)=>{
			 
			  return <div key={i} style={inline}><div><h1 style={white}>{val.day}/{val.month}</h1><p>{val.temp} °C</p><p>{val.description}</p><Icon description={val.description}/></div></div>
		  })}
						</div>
						
					</div>
					
                )
		} else {
			
			 return ( 
					<div>
					    <div style={background}>
						<h1 id="h1temp">{this.props.city}</h1>
						<h3>{this.props.temp}°C</h3>
						<p>{this.props.description}</p>
						</div>
						<WeatherIcon description={this.props.description}/>
						<h1 id="underline">Forecast</h1>
						
					<div>
						
						
			
							
						{this.props.forecast.map((val, i)=>{
			 
			  return <div key={i} style={inline}><div><h1 style={white}>{val.day}/{val.month}</h1><p>{val.temp} °C</p><p>{val.description}</p><Icon description={val.description}/></div></div>
		  })}
						</div>
						
					</div>
					
                )
			
		}
     }
}
