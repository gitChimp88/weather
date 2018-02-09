import React from 'react'
import  {Button}  from 'semantic-ui-react'

export default class ButtonTwo extends React.Component {
	
	render(){
		
		const style = {
			display: "inline-block",
			
		}
		
		const but = {
			width: "100px",
			height: "50px",
			fontSize: "15px"
		}
		return (
	
		<div style={style}>
            <Button style={but} basic color='green' content='Submit' />
		
        </div>
		
		)
	}
}