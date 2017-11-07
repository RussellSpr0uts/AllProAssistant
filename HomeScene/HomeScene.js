import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeSceneActions from './HomeSceneActions';
import styles from '../assets/css/styles.js'

class HomeScreen extends React.Component {

export const HomeScreen = props => (
  <View style={styles.container}>
    <Image style={styles.backgroundImage} source={require('../assets/allprobg.png')} />

    <View style={styles.topContainer}>
    </View>

    <View style={styles.middleContainer}>
      <Image style={styles.logoImage} source={require('../assets/logo.png')} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loadButton} onPress={() => props.navigation.navigate('NewUser')}>
          <Text style={styles.buttonText}>Load User Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.newUserButton} onPress={() => props.navigation.navigate('NewUser')}>
          <Text style={styles.buttonText}>New User</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.bottomContainer}>
    </View>

  </View>
)

// container part
function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...ProductActions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);