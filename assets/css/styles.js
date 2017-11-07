import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topContainer: {
    flex: 1,
    marginTop: 25,
    justifyContent: 'flex-start',
  },
  middleContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  bottomContainer: {
   flex: 1,
   height: 20,
   justifyContent: 'center',
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
  backButton: {
    width: 300,
    height: 45,
    backgroundColor: '#FF2222',
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
    marginBottom: 100,
  },
  item: {
    textAlign: 'left',
  }
})

export default styles;
