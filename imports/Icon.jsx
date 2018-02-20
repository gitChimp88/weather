import React from 'react'




export default class Icon extends React.Component {
	
	

      render(){
		  
		  /*DISPLAY ICON FOR FORECAST*/
		  
		  var description = this.props.description;
		  let image;
		
		
				if(description == "clear sky"){
				image = <img height="100" width="100" src="/images/clearSky.png"></img>
			} else if(description == "few clouds"){
				image = <img height="100" width="100" src="/images/fewClouds.png"></img>
			}  else if(description == "scattered clouds"){
				image = <img height="100" width="100" src="/images/scatteredClouds.png"></img>
			}  else if(description == "broken clouds"){
				image = <img height="100" width="100" src="/images/brokenClouds.png"></img>
			}  else if(description == "shower rain" || description == "light rain" || description == "moderate rain" || description == "light intensity shower rain"){
				image = <img height="100" width="100" src="/images/showerRain.png"></img>
			}  else if(description == "rain"){
				image = <img height="100" width="100" src="/images/rain.png"></img>
			}  else if(description == "thunder storm"){
				image = <img height="100" width="100" src="/images/thunderStorm.png"></img>
			}  else if(description == "snow" || description == "light snow" || description == "light shower snow"){
				image = <img height="100" width="100" src="/images/snow.png"></img>
			}  else if(description == "mist"){
				image = <img height="100" width="100" src="/images/mist.png"></img>
			}  else if(description == "overcast clouds"){
				image = <img height="100" width="100" src="/images/scatteredClouds.png"></img>
			}  else if(description == "haze"){
				image = <img height="100" width="100" src="/images/haze.png"></img>
			} 
		  
		  
                return ( 
					<div>
						{image}
					</div>
					
                )
        }
}
