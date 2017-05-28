import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './common/Header';
import Spinner from './common/Spinner';
import Button from './common/Button';
import Loginform from './components/Loginform';

import firebase from 'firebase';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			loggedIn: null
		}
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

		firebase.auth().onAuthStateChanged((user) => {
			if (user){
				this.setState({loggedIn: true});
			} else {
				this.setState({ loggedIn: false});
			}
		});


	}

	showEitherLoginFormOrLogout(){
		switch(this.state.loggedIn){
			case true:
				return (
				<Button title={'Logout'} onPressedAction={() => firebase.auth().signOut()}>
				</Button>
			);
			case false:
				return <Loginform />;
			default:
				return <Spinner size={'large'}/>;
		}
		

	}

	render(){
		return(
		 <View>
	        <Header headerText={'Authentication'}/>
	        {this.showEitherLoginFormOrLogout()}
	      </View>
		);
	}

}

export default App;