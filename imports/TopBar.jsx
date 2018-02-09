import React from 'react'
var FontAwesome = require('react-fontawesome');



export default class TopBar extends React.Component {
	
 constructor(){
                super()
                this.state = {
					
				}
	 			
	 			this.timer = this.timer.bind(this)
        }

		
			componentDidMount() {
				
				/*ON MOUNT GET TIME AND DATE */
		
			     var date = new Date;
			
				 var year = date.getFullYear();
				 var month = date.getMonth();
				 months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
				 var d = date.getDate();
				 var day = date.getDay();
				 days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
				 var result = days[day] + " " + months[month] + " " + d + "th" + " " + year;
				 
			     this.setState({date: result});
				
				 var intervalId = setInterval(this.timer, 1000);
				
			 
			}
	
		timer(){
			
			/*DISPLAY TIME*/
			var dates =  new Date();
			
			  var h = dates.getHours();
						if(h<10)
						{
								h = "0"+h;
						}
			  var m = dates.getMinutes();
						if(m<10)
						{
								m = "0"+m;
						}
						var s = dates.getSeconds();
						if(s<10)
						{
								s = "0"+s;
						}
			
			     var day = dates.getDay();
				 days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
				 var passDate = days[day]
				 var d = dates.getDate();
			     var month = dates.getMonth();
				 months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
			     var mon = months[month]
			  this.setState({hours: h, minutes: m, seconds: s});
			
			/*PASS HOUR DAY AND MONTH BACK TO FORECAST*/
			  this.props.time(h, d, mon);
		}
	
		handleClick(){
			
			this.props.clicked()
			
		}
	
	
	 render(){
		 
		 const date = {
			color: "#0A4B6B",
			fontFamily: 'Oswald, sans-serif',
			 fontSize: "20px",
			 marginTop: "15px"
		 }
		 const time = {
			 color: "#0A4B6B",
			 fontFamily: 'Oswald, sans-serif',
			 fontSize: "20px",
			 marginTop: "15px"
		 }
		 const block = {
		
			 fontFamily: 'Oswald, sans-serif',
			 color: "#0A4B6B",
			 fontSize: "20px"
			 
		 }
		 
		  return ( 
					<div className="dates">
				  	   <div className="row">
						   <div className="col-md-4 col-sm-4 col-xs-4">
							  
							   <FontAwesome onClick={this.handleClick.bind(this)} className="marker" name="map-marker" size="3x"/>
							   <small style={block}>Location</small>
							   
						   </div>
						   <div className="col-md-4 col-sm-4 col-xs-4">
							   <p style={date}>{this.state.date}</p>
						   </div>
						   <div className="col-md-4 col-sm-4 col-xs-4">
							   <p style={time}>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</p>
						   </div>
				       </div>
						
						
						
					</div>
					
                )
        }
}
