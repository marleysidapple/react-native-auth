import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import Button from './Button';


class Loginform extends Component {

	constructor(props){
		super(props);
	}


	render(){
		return(
			
			<View>
				<Card>
					<Text>Hello from Login</Text>
				</Card>

				<Card>
					<Button/>
				</Card>
			</View>

		);
	}

}

export default Loginform;