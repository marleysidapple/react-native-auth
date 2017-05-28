import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Card from './../common/Card';
import Button from './../common/Button';
import CardSection from './../common/CardSection';
import Input from './../common/Input';



class Loginform extends Component {

	constructor(props){
		super(props);
		this.state = { email: '', password: '' };
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

				
					<Button/>
				</Card>

			</View>

		);
	}

}



export default Loginform;