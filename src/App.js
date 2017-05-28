import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './common/Header';
import Loginform from './components/Loginform';
import firebase from 'firebase';

class App extends Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
			firebase.initializeApp({
		    apiKey: "AIzaSyAMGRN2NLkQvMD8R2PkMJHJMkPEGFuXQsM",
		    authDomain: "auth-c7f05.firebaseapp.com",
		    databaseURL: "https://auth-c7f05.firebaseio.com",
		    projectId: "auth-c7f05",
		    storageBucket: "auth-c7f05.appspot.com",
		    messagingSenderId: "765165941349"
		});
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