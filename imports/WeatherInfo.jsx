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
			marginRight: "25px",
			marginLeft: "25px",
			marginBottom: "20px",
			backgroundColor: "#165F82",
		    padding: "15px",
			borderRadius: "10px",
			color: "#74ADC8",
			fontFamily: 'Oswald, sans-serif'
			
		}
		  const white = {
			  color: "#74ADC8"
		  }
		  
		  const background = {
			  backgroundColor: "#165F82",
			  borderRadius: "10px",
			  color: "#74ADC8",
			  width: "90%",
			  margin: "0 auto",
			  padding: "40px",
			  fontFamily: 'Oswald, sans-serif',
			  fontSize: "25px"
		  }
		  
		 
		  
		  /*
		  
		  THIS WAS A WAY TO SHOW DAY RATHER THAN DATE, WORKED BUT NOT ON RESIZE
		  
		  var Monday = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		  var Tuesday = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
		  var Wednesday = ["Thursday", "Friday", "Saturday", "Sunday", "Monday"]
		  var Thursday = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday"]
		  var Friday = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"]
		  var Saturday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
		  var Sunday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
		  
		  if(day == "Monday") {
			  weekDays = Monday.map((val, i)=>{
				  return <div className="col-md-2" style={inline}><h1>{val}</h1></div>
			  })
		  } else if(day == "Tuesday"){
			  weekDays = Tuesday.map((val, i)=>{
				  return <div  className="col-md-2" style={inline}><h1>{val}</h1></div>
			  })
					
				}  else if(day == "Wednesday"){
					weekDays = Wednesday.map((val, i)=>{
				  return <div  className="col-md-2" style={inline}><h1>{val}</h1></div>
			  })
					
				}  else if(day == "Thursday"){
						weekDays = Thursday.map((val, i)=>{
				  return <div  className="col-md-2" style={inline}><h1>{val}</h1></div>
			  })
		    			
				}  else if(day == "Friday"){
					weekDays = Friday.map((val, i)=>{
				  return <div style={inline}><h1>{val}</h1></div>
			  })
					
				}  else if(day == "Saturday"){
					weekDays = Saturday.map((val, i)=>{
				  return <div  className="col-md-2" style={inline}><h1>{val}</h1></div>
			  })
					
				}  else if(day == "Sunday"){
					weekDays = Sunday.map((val, i)=>{
				  return <div  className="col-md-2" style={inline}><h1>{val}</h1></div>
			  })
					
				} */
		 
		
		
		    return ( 
					<div className="container-fluid">
					   <div style={background}>
						<h1>{this.props.city}</h1>
						<h3>{this.props.temp}°C</h3>
						<p>{this.props.description}</p>
						</div>
						<WeatherIcon description={this.props.description}/>
						<h1 id="underline">Forecast</h1>
						
						
						
						<div>
							
						{this.props.forecast.map((val, i)=>{
			 
			  return <div key={i} style={inline}><h1 style={white}>{val.day}/{val.month}</h1><p>{val.temp} °C</p><p>{val.description}</p><Icon description={val.description}/></div>
		  })}
						</div>
						
					</div>
					
                )
        }
}
