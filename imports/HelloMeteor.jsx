import React from 'react'
import axios from 'axios'
import TopBar from './TopBar'
import WeatherCover from './weatherCover'
import Modal from './Modal'
import "./Weather.css"


export default class HelloMeteor extends React.Component {
	
 constructor(){
                super()
                this.state = {
					temp : '',
					forecast: [],
					city: '',
					description: '',
					clicked: false
				
					
				}
	 
	 			getWeather = this.getWeather.bind(this)
	 			getForecast = this.getForecast.bind(this)
	 			cityForecast = this.cityForecast.bind(this)
	 			handleClick = this.handleClick.bind(this)
	 			
        }

	
	componentDidMount() {
	  handleClick();
	  
    }
		
	 handleClick(e){
		 
		 /*GET LONGITUDE AND LATITUDE*/
			
		if(navigator.geolocation) {
			  navigator.geolocation.getCurrentPosition(function(position) {   var lat = "lat=" + position.coords.latitude;
			  var lon = "&lon=" + position.coords.longitude; 
		
				/*PASS LON AND LET TO GET WEATHER*/
			   getWeather(lat, lon);  
			 
		});    
    		} else {
					  alert("Geolocation is not supported by this browser")
					} 
				
        }
       
		
		getWeather(lat, lon){
			
			var APIKEY = "&APPID=16909a97489bed275d13dbdea4e01f59";
			
		    
		    let api = "https://api.openweathermap.org/data/2.5/weather?" + lat + lon + "&units=metric" + APIKEY;
		    
			
			axios.get(api)
			.then((response)=> {
				
			  //success case, use your data!
				console.log(response.data)
				this.setState({temp: response.data.main.temp,
							  city: response.data.name,
							  description: response.data.weather[0].description})
				
			})
			.catch((error)=> {
		
			  //error case, handle the error
			});
			
			getForecast(lat, lon);
			
		}
	
		getForecast(lat, lon) {
			
			var APIKEY = "&APPID=16909a97489bed275d13dbdea4e01f59";
			let api = "https://api.openweathermap.org/data/2.5/forecast?" + lat + lon + "&units=metric" + APIKEY;
			
			axios.get(api)
			
			.then((response)=>{
				
				console.log(response.data)
				/*STORE TIME SO WE CAN SEPERATE DAYS OF THE WEEK FOR FORECAST*/	
				var time = this.state.time;
				var arr = [];
				var currentDay = this.state.day;
				var currentMonth = this.state.month;
				
				
			/*CHECK TIME SO WE CAN CALCULATE WHICH INDEX IN FORECAST IS TOMORROW AND SO ON*/	  
			if(time < 3){
				
				  /*PUSH THE DATA TO ARRAY AND THEN SET THE STATE SO WE CAN REFERENCE LATER WHEN LISTING*/
					arr.push({temp: response.data.list[10].main.temp,
							 description: response.data.list[10].weather[0].description,
							 day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[18].main.temp,
							  description: response.data.list[18].weather[0].description,
							 day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[26].main.temp,
							  description: response.data.list[26].weather[0].description,
							 day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[33].main.temp,
							  description: response.data.list[33].weather[0].description,
							 day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[36].main.temp,
							  description: response.data.list[36].weather[0].description,
							 day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
					
				   
				   } else if(time < 6 && time >= 3){
					   arr.push({temp: response.data.list[9].main.temp,
								 description: response.data.list[9].weather[0].description,
								day: currentDay + 1, month: currentMonth})
					   arr.push({temp: response.data.list[17].main.temp,
								 description: response.data.list[17].weather[0].description,
								day: currentDay + 2, month: currentMonth})
					   arr.push({temp: response.data.list[25].main.temp,
								 description: response.data.list[25].weather[0].description,
								day: currentDay + 3, month: currentMonth})
					   arr.push({temp: response.data.list[33].main.temp,
								 description: response.data.list[33].weather[0].description,
								day: currentDay + 4, month: currentMonth})
					   arr.push({temp: response.data.list[36].main.temp,
								 description: response.data.list[36].weather[0].description,
								day: currentDay + 5, month: currentMonth})
					   this.setState({forecast: arr})
					   
				}  else if(time < 9 && time >= 6){
					arr.push({temp: response.data.list[9].main.temp,
							  description: response.data.list[9].weather[0].description,
							 day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[17].main.temp,
							  description: response.data.list[17].weather[0].description,
							 day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[25].main.temp,
							  description: response.data.list[25].weather[0].description,
							 day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[33].main.temp,
							  description: response.data.list[33].weather[0].description,
							 day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[36].main.temp,
							  description: response.data.list[36].weather[0].description,
							 day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
					
				}  else if(time < 12 && time >= 9){
					arr.push({temp: response.data.list[8].main.temp,
							  description: response.data.list[8].weather[0].description,
							  day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[16].main.temp,
							  description: response.data.list[16].weather[0].description,
							  day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[24].main.temp,
							  description: response.data.list[24].weather[0].description,
							  day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[32].main.temp,
							  description: response.data.list[32].weather[0].description,
							  day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[36].main.temp,
							  description: response.data.list[36].weather[0].description,
							  day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
					
				}  else if(time < 15 && time >= 12){
					arr.push({temp: response.data.list[8].main.temp,
							 description: response.data.list[8].weather[0].description,
							 day: currentDay + 1, month: currentMonth,
							 min: response.data.list[4].main.temp_min,
							 max: response.data.list[9].main.temp_max})
					arr.push({temp: response.data.list[16].main.temp,
							 description: response.data.list[16].weather[0].description,
							 day: currentDay + 2, month: currentMonth,
							 min: response.data.list[8].main.temp_min,
							 max: response.data.list[17].main.temp_max})
					arr.push({temp: response.data.list[24].main.temp,
							 description: response.data.list[24].weather[0].description,
							 day: currentDay + 3, month: currentMonth,
							 min: response.data.list[16].main.temp_min,
							 max: response.data.list[25].main.temp_max})
					arr.push({temp: response.data.list[32].main.temp,
							 description: response.data.list[32].weather[0].description,
							 day: currentDay + 4, month: currentMonth,
							 min: response.data.list[16].main.temp_min,
							 max: response.data.list[33].main.temp_max})
					arr.push({temp: response.data.list[36].main.temp,
							 description: response.data.list[36].weather[0].description,
							 day: currentDay + 5, month: currentMonth,
							 min: response.data.list[18].main.temp_min,
							 max: response.data.list[36].main.temp_max})
					this.setState({forecast: arr})
					console.log(this.state.forecast)
					
				}  else if(time < 18 && time >= 15){
					arr.push({temp: response.data.list[8].main.temp,
							  description: response.data.list[8].weather[0].description,
							 day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[16].main.temp,
							  description: response.data.list[16].weather[0].description,
							 day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[24].main.temp,
							  description: response.data.list[24].weather[0].description,
							 day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[32].main.temp,
							  description: response.data.list[32].weather[0].description,
							 day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[36].main.temp,
							  description: response.data.list[36].weather[0].description,
							 day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
					
				}  else if(time < 21 && time >= 18){
					arr.push({temp: response.data.list[6].main.temp,
							  description: response.data.list[6].weather[0].description,
							 day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[14].main.temp,
							  description: response.data.list[14].weather[0].description,
							 day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[22].main.temp,
							  description: response.data.list[22].weather[0].description,
							 day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[30].main.temp,
							  description: response.data.list[30].weather[0].description,
							 day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[36].main.temp,
							  description: response.data.list[36].weather[0].description,
							 day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
				
				
					
				   } else if (time < 24 && time >= 21) {
					arr.push({temp: response.data.list[0].main.temp,
							  description: response.data.list[0].weather[0].description,
							 day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[8].main.temp,
							  description: response.data.list[8].weather[0].description,
							 day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[16].main.temp,
							  description: response.data.list[16].weather[0].description,
							 day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[24].main.temp,
							  description: response.data.list[24].weather[0].description,
							 day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[32].main.temp,
							  description: response.data.list[32].weather[0].description,
							 day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
				}	
				
				
			});
			
		}
	
		clicked(){
			/*SETTING CLICKED STATE FOR LOCATION BUTTON*/
			var clicked = this.state.clicked;
			this.setState({clicked: !clicked})
		}
	
		searchCity(city){
			
			/*GETTING THE WEATHER FOR CITY ENTERED INTO MODAL SEARCH*/
			let town = city;
		    var APIKEY = "&APPID=16909a97489bed275d13dbdea4e01f59";
			var api = "https://api.openweathermap.org/data/2.5/weather?q=" + town + "&units=metric" + APIKEY;
			
			axios.get(api)
			.then((response)=> {
				
			  //success case, use your data!
			  //console.log(response.data)
			  this.setState({temp: response.data.main.temp,
							 city: response.data.name,
							 description: response.data.weather[0].description})
				
			
			});
		
		    
			cityForecast(city)
		}
	
		cityForecast(city) {
			
			/*GETTING FORECAST FOR CITY ENTERED INTO MODAL SEARCH*/
			let town = city;
			var APIKEY = "&APPID=16909a97489bed275d13dbdea4e01f59";
		    var api = "https://api.openweathermap.org/data/2.5/forecast?q=" + town + "&units=metric" + APIKEY;
			
			axios.get(api)
			.then((response)=> {
				
			  //success case, use your data!
			  //console.log(response.data)
			    var time = this.state.time;
				var arr = [];
				var currentDay = this.state.day;
				var currentMonth = this.state.month;
				  
			if(time < 3){
					arr.push({temp: response.data.list[10].main.temp,
							 description: response.data.list[10].weather[0].description,
							 day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[18].main.temp,
							  description: response.data.list[18].weather[0].description,
							 day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[26].main.temp,
							  description: response.data.list[20].weather[0].description,
							  day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[33].main.temp,
							  description: response.data.list[33].weather[0].description,
							  day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[36].main.temp,
							  description: response.data.list[36].weather[0].description,
							 day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
					
				   
				   } else if(time < 6 && time >= 3){
					   arr.push({temp: response.data.list[9].main.temp,
								 description: response.data.list[9].weather[0].description,
								 day: currentDay + 1, month: currentMonth})
					   arr.push({temp: response.data.list[17].main.temp,
								 description: response.data.list[17].weather[0].description,
								 day: currentDay + 2, month: currentMonth})
					   arr.push({temp: response.data.list[25].main.temp,
								 description: response.data.list[25].weather[0].description,
								 day: currentDay + 3, month: currentMonth})
					   arr.push({temp: response.data.list[33].main.temp,
								 description: response.data.list[33].weather[0].description,
								 day: currentDay + 4, month: currentMonth})
					   arr.push({temp: response.data.list[36].main.temp,
								 description: response.data.list[36].weather[0].description,
								 day: currentDay + 5, month: currentMonth})
					   this.setState({forecast: arr})
					   
				}  else if(time < 9 && time >= 6){
					arr.push({temp: response.data.list[9].main.temp,
							  description: response.data.list[9].weather[0].description,
							  day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[17].main.temp,
							  description: response.data.list[17].weather[0].description,
							  day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[25].main.temp,
							  description: response.data.list[25].weather[0].description,
							  day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[33].main.temp,
							  description: response.data.list[33].weather[0].description,
							  day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[36].main.temp,
							  description: response.data.list[36].weather[0].description,
							  day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
					
				}  else if(time < 12 && time >= 9){
					arr.push({temp: response.data.list[8].main.temp,
							  description: response.data.list[8].weather[0].description,
							  day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[16].main.temp,
							  description: response.data.list[16].weather[0].description,
							  day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[24].main.temp,
							  description: response.data.list[24].weather[0].description,
							  day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[32].main.temp,
							  description: response.data.list[32].weather[0].description,
							 day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[36].main.temp,
							  description: response.data.list[36].weather[0].description,
							  day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
					
				}  else if(time < 15 && time >= 12){
					arr.push({temp: response.data.list[8].main.temp,
							 description: response.data.list[8].weather[0].description,
							 day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[16].main.temp,
							 description: response.data.list[16].weather[0].description,
							 day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[24].main.temp,
							 description: response.data.list[24].weather[0].description,
							 day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[32].main.temp,
							 description: response.data.list[32].weather[0].description,
							 day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[36].main.temp,
							 description: response.data.list[36].weather[0].description,
							 day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
				
					
				}  else if(time < 18 && time >= 15){
					arr.push({temp: response.data.list[7].main.temp,
							  description: response.data.list[7].weather[0].description,
							 day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[15].main.temp,
							  description: response.data.list[15].weather[0].description,
							 day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[23].main.temp,
							  description: response.data.list[23].weather[0].description,
							 day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[31].main.temp,
							  description: response.data.list[31].weather[0].description,
							 day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[36].main.temp,
							  description: response.data.list[36].weather[0].description,
							 day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
					
				}  else if(time < 21 && time >= 18){
					arr.push({temp: response.data.list[6].main.temp,
							  description: response.data.list[6].weather[0].description,
							 day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[14].main.temp,
							  description: response.data.list[14].weather[0].description,
							 day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[22].main.temp,
							  description: response.data.list[22].weather[0].description,
							 day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[30].main.temp,
							  description: response.data.list[30].weather[0].description,
							 day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[36].main.temp,
							  description: response.data.list[36].weather[0].description,
							 day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
				
				
					
				   } else if (time < 24 && time >= 21) {
					arr.push({temp: response.data.list[0].main.temp,
							  description: response.data.list[0].weather[0].description,
							 day: currentDay + 1, month: currentMonth})
					arr.push({temp: response.data.list[8].main.temp,
							  description: response.data.list[8].weather[0].description,
							 day: currentDay + 2, month: currentMonth})
					arr.push({temp: response.data.list[16].main.temp,
							  description: response.data.list[16].weather[0].description,
							 day: currentDay + 3, month: currentMonth})
					arr.push({temp: response.data.list[24].main.temp,
							  description: response.data.list[24].weather[0].description,
							 day: currentDay + 4, month: currentMonth})
					arr.push({temp: response.data.list[36].main.temp,
							  description: response.data.list[36].weather[0].description,
							 day: currentDay + 5, month: currentMonth})
					this.setState({forecast: arr})
				}	
				
				
			});
			 
			var clicked = this.state.clicked;
			this.setState({clicked: !clicked})
		}
	
		getCurrentTime(h, d, mon){
			
			/*SETTING STATE FOR HOUR DAY AND MONTH AS WE NEED TO USE THESE IN THE FORECAST
			THESE SETTINGS COME FROM TOPBAR COMPONENT*/
			this.setState({time: h});
			this.setState({day: d});
			this.setState({month: mon})
			
		
		}
	
	  render(){
			
			
				/*IF SEARCH BUTTON IS CLICKED RENDER MODAL FOR SEARCH CITY*/
				if(this.state.clicked == true) {
					return (
					<div className="but">
						<Modal searchCity = {this.searchCity.bind(this)}/>
						<TopBar clicked = {this.clicked.bind(this)} 
								time = {this.getCurrentTime.bind(this)} />
						
						<WeatherCover temp = {this.state.temp} 
									 city = {this.state.city}
									 description = {this.state.description}
									 forecast= {this.state.forecast}
									 day = {this.state.day}
									 clicked = {this.state.clicked}/>
						
					</div>
					)
					
				} else {
			
			
				return ( 
					<div className="but">
						
						<TopBar clicked = {this.clicked.bind(this)} 
								time = {this.getCurrentTime.bind(this)}/>
						
						<WeatherCover temp = {this.state.temp} 
									 city = {this.state.city}
									 description = {this.state.description}
									 forecast= {this.state.forecast}
									 day = {this.state.day}/>
						
						
					</div>
					
		          )
			}
      }
}


		
	
	