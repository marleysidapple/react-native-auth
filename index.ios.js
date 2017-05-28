/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './src/App';
import {
  AppRegistry,
} from 'react-native';

export default class reactNativeAuth extends Component {
  render() {
    return (
      <App />
    );
  }
}



AppRegistry.registerComponent('reactNativeAuth', () => reactNativeAuth);
