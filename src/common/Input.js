import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';


class Input extends Component {

	constructor(props){
		super(props);
		this.state = { text: '' };
	}


	render(){
		return(
			<TextInput style={styles.textInputStyle} 
			placeholder={this.props.placeholder} 
			value = {this.props.value}
			autoCorrect = {false}
			autoCapitalize={'none'}
			secureTextEntry={this.props.secureTextEntry}
			onChangeText = {this.props.onChangeText} />
		);
	}
}


const styles = {
	textInputStyle: {
		flex: 1,
		height: 25,
		borderWidth: 0,
		borderColor: 'gray',
		alignSelf: 'stretch',
		fontSize: 14
	}
}

export default Input;