import React from 'react'
import WeatherInfo from './WeatherInfo'



export default class WeatherCover extends React.Component {
	
	

      render(){
		  
		
		
		
		var desc = this.props.description
		var cover;
		  
		  
		  if(desc == "clear sky" || desc == "few clouds"){
			  cover = <div className="clear">
						<WeatherInfo 
							         temp = {this.props.temp} 
									 city = {this.props.city}
									 description = {this.props.description}
									 forecast= {this.props.forecast}
									 day = {this.props.day}
									clicked = {this.props.clicked}
							/>
			           </div>
		 } else if(desc == "scattered clouds" || desc == "broken clouds") {
			 cover = <div className="clouds">
						<WeatherInfo 
							         temp = {this.props.temp} 
									 city = {this.props.city}
									 description = {this.props.description}
									 forecast= {this.props.forecast}
									 day = {this.props.day}
							        clicked = {this.props.clicked}
							/>
			           </div>
		 } else if(desc == "shower rain" || desc == "moderate rain" || desc == "light rain" || desc == "drizzle rain"){
			 cover = <div className="rain">
						<WeatherInfo 
							         temp = {this.props.temp} 
									 city = {this.props.city}
									 description = {this.props.description}
									 forecast= {this.props.forecast}
									 day = {this.props.day}
									clicked = {this.props.clicked}
							/>
			           </div>
		 } else if(desc == "thunder storm"){
			 cover = <div className="thunder">
						<WeatherInfo 
							         temp = {this.props.temp} 
									 city = {this.props.city}
									 description = {this.props.description}
									 forecast= {this.props.forecast}
									 day = {this.props.day}
									clicked = {this.props.clicked}
							/>
			           </div>
		 } else if(desc == "snow" || desc == "light snow"){
			  cover = <div className="snow">
						<WeatherInfo 
							         temp = {this.props.temp} 
									 city = {this.props.city}
									 description = {this.props.description}
									 forecast= {this.props.forecast}
									 day = {this.props.day}
									clicked = {this.props.clicked}
							/>
			           </div>
		 } else if(desc == "mist" || desc == "smoke"){
			 cover = <div className="mist">
						<WeatherInfo 
							         temp = {this.props.temp} 
									 city = {this.props.city}
									 description = {this.props.description}
									 forecast= {this.props.forecast}
									 day = {this.props.day}
									clicked = {this.props.clicked}
							/>
			           </div>
		 } else if(desc == "haze") {
			 
			 cover = <div className="haze">
						<WeatherInfo 
							         temp = {this.props.temp} 
									 city = {this.props.city}
									 description = {this.props.description}
									 forecast= {this.props.forecast}
									 day = {this.props.day}
									clicked = {this.props.clicked}
							/>
			           </div>
			 
		 } else if(desc == "overcast clouds"){
			  cover = <div className="overCast">
						<WeatherInfo 
							         temp = {this.props.temp} 
									 city = {this.props.city}
									 description = {this.props.description}
									 forecast= {this.props.forecast}
									 day = {this.props.day}
									clicked = {this.props.clicked}
							/>
			           </div>
		 } else {
			 cover = <div className="haze">
						<WeatherInfo 
							         temp = {this.props.temp} 
									 city = {this.props.city}
									 description = {this.props.description}
									 forecast= {this.props.forecast}
									 day = {this.props.day}
									clicked = {this.props.clicked}
							/>
			           </div>
		 }
		
			
				return( <div>{cover}</div> )
			 
		
		
        }
}
