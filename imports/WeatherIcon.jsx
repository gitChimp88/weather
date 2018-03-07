import React from 'react'




export default class WeatherIcon extends React.Component {
	

	 render(){
		
		 /*DISPLAY ICON FOR CURRENT WEATHER*/
		 const pad = {
			 padding: "10px"
		 }
		 	var description = this.props.description;
		 	let image;
		 
		 	if(description == "clear sky"){
				image = <img height="200" width="200" src="/images/clearSky.png"></img>
			} else if(description == "few clouds"){
				image = <img height="200" width="200" src="/images/fewClouds.png"></img>
			}  else if(description == "scattered clouds"){
				image = <img height="200" width="200" src="/images/scatteredClouds.png"></img>
			}  else if(description == "broken clouds"){
				image = <img height="200" width="200" src="/images/brokenClouds.png"></img>
			}  else if(description == "shower rain" || description == "light rain" || description == "moderate rain" || description == "light intensity shower rain"){
				image = <img height="200" width="200" src="/images/showerRain.png"></img>
			}  else if(description == "rain"){
				image = <img height="200" width="200" src="/images/rain.png"></img>
			}  else if(description == "thunder storm"){
				image = <img height="200" width="200" src="/images/thunderStorm.png"></img>
			}  else if(description == "snow" || description == "light snow" || description == "light shower snow"){
				image = <img height="200" width="200" src="/images/snow.png"></img>
			}  else if(description == "mist" || description == "smoke"){
				image = <img height="200" width="200" src="/images/mist.png"></img>
			}  else if(description == "overcast clouds"){
				image = <img height="200" width="200" src="/images/scatteredClouds.png"></img>
			}  else if(description == "haze"){
				image = <img height="200" width="200" src="/images/haze.png"></img>
			} 
		 	
		 	
		 return ( 
					<div style={pad}>
						{image}
					</div>
					
                )
        }
}
