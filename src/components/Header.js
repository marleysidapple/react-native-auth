import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<View style={styles.headerContainer}>
				<Text>{this.props.headerText}</Text>
			</View>
		);
	}
}

const styles = {
	headerContainer: {
		height: 64,
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center'
	}
}

export default Header;