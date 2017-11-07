import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen.js'
import NewUserScreen from '../screens/NewUserScreen.js'
import styles from '../assets/css/styles.js'
import Routes from '../config/routes.js'

const RootNavigator = StackNavigator(Routes);

export default RootNavigator;
