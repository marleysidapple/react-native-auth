import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Button extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<TouchableOpacity style={styles.buttonWrapper} onPress={this.props.onPressedAction}>
				<Text style={styles.buttonText}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}
}


const styles = {
	buttonWrapper : {
		//flex: 1,
		borderColor: '#007aff',
		borderWidth: 1,
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