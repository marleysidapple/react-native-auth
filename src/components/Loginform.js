import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './../common/Card';
import Button from './../common/Button';


class Loginform extends Component {

	constructor(props){
		super(props);
	}


	render(){
		return(
			
			<View>
				<Card>
					<Text>Hello from Login</Text>
					<Button/>
				</Card>

			</View>

		);
	}

}

export default Loginform;