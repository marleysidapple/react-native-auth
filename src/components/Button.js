import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Button extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={styles.buttonWrapper}>
				<Text>Login</Text>
			</View>
		);
	}
}


const styles = {
	buttonWrapper : {
		flex: 1,
		borderColor: 'blue',
		borderRadius: 2,
		backgroundColor: 'red'
	}
}


export default Button;