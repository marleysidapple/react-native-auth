import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './../common/Card';
import Button from './../common/Button';
import CardSection from './../common/CardSection';



class Loginform extends Component {

	constructor(props){
		super(props);
	}


	render(){
		return(
			
			<View>
				<Card>
					
				<CardSection/>
				<CardSection/>

				
					<Button/>
				</Card>

			</View>

		);
	}

}

export default Loginform;