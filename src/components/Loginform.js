import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';


class Loginform extends Component {

	constructor(props){
		super(props);
	}


	render(){
		return(
			<Card>
				<Text>Hello from Login</Text>
			</Card>

		);
	}

}

export default Loginform;