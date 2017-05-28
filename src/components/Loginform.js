import React, { Component } from 'react';
import { View, Text, TextInput, AlertIOS, Image } from 'react-native';
import Card from './../common/Card';
import firebase from 'firebase';
import Button from './../common/Button';
import CardSection from './../common/CardSection';
import Input from './../common/Input';
import Spinner from './../common/Spinner';




class Loginform extends Component {

	constructor(props){
		super(props);
		this.state = { email: '', password: '', loading: false};
	}

	submitForm(){
		this.setState({loading: true});
		const { email, password } = this.state; 

		firebase.auth().signInWithEmailAndPassword(email.trim(), password.trim()).then(this.onLoginSuccess.bind(this)).catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email.trim(), password.trim()).then(this.onLoginSuccess.bind(this)).catch(this.onLoginFail.bind(this));
		});
	}

	showEitherButtonOrSpinner(){
		if (this.state.loading){
			return <Spinner size={'small'}/>;
		}
		//else
		return (
			<Button onPressedAction = {this.submitForm.bind(this)} title={'Login'}/>
		);

	}

	onLoginSuccess(resp){
		this.setState({loading: false, email: '', password: ''});
	}

	onLoginFail(){
		AlertIOS.alert('Authentication error!!');
		this.setState({loading: false});
	}


	render(){
		return(
			
			<View>
				<Card>
					<CardSection>
						 <Input
						        onChangeText={(email) => this.setState({email})}
						        placeholder='something@mail.com'
						        value={this.state.email} />
					</CardSection>
					<CardSection>
						 	<Input
						        onChangeText={(password) => this.setState({password})}
						        placeholder='Password'
						        secureTextEntry={true}
						        value={this.state.password} />
					</CardSection>
					{this.showEitherButtonOrSpinner()}
				</Card>

			</View>

		);
	}

}



export default Loginform;