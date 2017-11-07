import React, { Component } from 'react';
import { AppRegistry, Button, View, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/css/styles.js'

class NewUserScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
          const { navigate } = this.props.navigation;
          return(

            <View style={styles.container}>

              <View style={styles.topContainer}>
                <Text>Name</Text>
                <TextInput
                  style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, textAlign: 'center', alignSelf: 'stretch'}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
              </View>
              <Text style={{textAlign: 'left'}}>Ten Rep Max</Text>
              <FlatList
                data={[
                  {key: 'Squats'},
                  {key: 'Bench Press'},
                  {key: 'Bent-over Rows'},
                  {key: 'Overhead Press'},
                  {key: 'Standing Leg Deadlifts'},
                  {key: 'Curls'},
                  {key: 'Calf Raises'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
              />

              <View style={styles.middleContainer}>
              </View>

              <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigate('Home')}>
                  <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
              </View>

            </View>
          );
        }
}

export default NewUserScreen;
