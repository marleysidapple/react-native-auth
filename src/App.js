import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './common/Header';
import Loginform from './components/Loginform';

class App extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
		 <View>
	        <Header headerText={'Authentication'}/>
	        <Loginform />
	      </View>
		);
	}

}

export default App;