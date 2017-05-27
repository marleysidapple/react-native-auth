/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Header from './src/components/Header';
import Loginform from './src/components/Loginform';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class reactNativeAuth extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Authentication'}/>
        <Loginform />
      </View>
    );
  }
}



AppRegistry.registerComponent('reactNativeAuth', () => reactNativeAuth);
