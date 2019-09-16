
import React, { Component } from 'react';

import { StyleSheet, View, Text, ImageBackground } from 'react-native';

const logo = require('./image/sgklogo.png');
export default class Screen3 extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.logo}
          source={logo}
        />   
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%', 
  },
  logo: {
    width: 220,
    height: 100,
  },
});