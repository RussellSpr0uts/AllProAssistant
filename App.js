import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js'
import NewUserScreen from './screens/NewUserScreen.js'
import styles from './assets/css/styles.js'

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
    headerMode: 'screen',
  },
  NewUser: {
    screen: NewUserScreen,
    navigationOptions: {
      header: null,
    },
    headerMode: 'screen',
  },
});

export default RootNavigator;
