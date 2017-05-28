import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Button extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<TouchableOpacity style={styles.buttonWrapper}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
		);
	}
}


const styles = {
	buttonWrapper : {
		//flex: 1,
		borderColor: '#007aff',
		borderWidth: 1,
		borderHeight: 0,
		borderRadius: 2,
		padding: 10,
		marginTop: 5,
		alignSelf: 'stretch',
	},

	buttonText: {
		alignSelf: 'center',
	}
}


export default Button;