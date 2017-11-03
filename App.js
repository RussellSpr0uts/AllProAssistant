import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = ({ navigation }) => (
    
        <View style={styles.container}>
          <Image style={styles.backgroundImage} source={require('./assets/allprobg.png')} />
        <View style={styles.topContainer} />
          <Image style={styles.logoImage} source={require('./assets/logo.png')} />
        <View style={styles.middleContainer} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loadButton} onPress={() => navigation.navigate('Details')}>
              <Text style={styles.buttonText}>Load User Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.newUserButton} onPress={() => navigation.navigate('Details')}>
              <Text style={styles.buttonText}>New User</Text>
            </TouchableOpacity>
          </View>
        <View style={styles.bottomContainer}>
        </View>
      </View>
)

const DetailsScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity style={styles.newUserButton} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Back to Home</Text>
    </TouchableOpacity>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
    headerMode: 'screen',
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      header: null,
    },
    headerMode: 'screen',
  },
});

export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topContainer: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
  },
  middleContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  bottomContainer: {
   flex: 1,
   height: 20,
   justifyContent: 'flex-end',
  },
  buttonContainer: {
    margin: 20,
  },
  loadButton: {
    width: 300,
    height: 45,
    backgroundColor: '#47d147',
    borderRadius: 5,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  newUserButton: {
    width: 300,
    height: 45,
    backgroundColor: '#008ae6',
    borderRadius: 5,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    fontSize: 15,
  },
  informativeText: {
    textAlign: 'center',
  },
  backgroundImage: {
    backgroundColor: '#ccc',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  logoImage: {
  }
})