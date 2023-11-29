import * as React from 'react';
import { Platform,View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Tipka = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{
 ...stil.ekran,
 ...Platform.select({
 ios: stil.tipkaIOS,
 android: stil.tipka,
 }),
 }}>
        <Text style={stil.naslov}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#825353",
    margin:7,
    borderWidth: 1,
    width: 350,
    height: 45,
    borderRadius: 10,
    opacity: 0.99,
    elevation: 3
  },
  tipkaIOS: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#825353",
    fontSize:60,
    borderWidth: 1,
    width: 650,
    height: 85,
    borderRadius: 10,
    opacity: 0.99,
    elevation: 3,
    margin: 15,
  },
  naslov:{
    color:"white",
    fontSize: Platform.OS === 'ios' ? 50 : 18
  }
});

export default Tipka;
