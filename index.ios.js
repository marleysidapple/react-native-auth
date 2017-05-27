/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Header from './src/components/Header';
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
      </View>
    );
  }
}



AppRegistry.registerComponent('reactNativeAuth', () => reactNativeAuth);
