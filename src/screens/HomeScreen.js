import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
          <Text style={styles.heading}>Welcome to Pet Social</Text>
          <Image source={require('../../assets/favicon.png')} style={styles.image}/>
          <Text style={styles.text}>Discover and connect with other pet lovers</Text>
      </View>
    );
  };

  
  const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    heading: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    text: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    image:{
      width: 200,
      height: 200,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    }
  };

export default HomeScreen