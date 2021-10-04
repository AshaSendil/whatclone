/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageDetails,
} from 'react-native';
import ToptabBar from './ToptabBar';

const WhatupScreen = ({ navigation }) => {
  return (
    <><>
          <View style={styles.homeScreenRoot}>
              <Text style={{fontSize:25,fontWeight:"bold",margin:10,color:"white"}}>WhatsApp</Text>
              <Text style={{left:310,bottom:35,fontSize:20,color:"white"}}>Q</Text>
              <Text style={{left:350,bottom:63,fontSize:20,color:"white"}}>:</Text>
              <ToptabBar/>
          </View>
      </></>
  );
};
const styles = StyleSheet.create({
  homeScreenRoot: {
    height: 145,
    backgroundColor:"#005836"
  },
});
export default WhatupScreen;
