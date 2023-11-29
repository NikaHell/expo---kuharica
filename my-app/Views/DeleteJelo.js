import React, { useState } from "react";
import {

  ImageBackground,
  StyleSheet,
  Text,
  View,
  Alert,
  
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteJelo } from "../store/actions/jela";
const image = require("../assets/pozadina1.png");
import { JELO } from "../data/jelo";
import Tipka from "../components/Tipka";

const EditJelo = ({ navigation, route }) => {
  const idJelo = Number(route.params.id);
  const svaJela = useSelector((state) => state.jela.jela);
  const jela = svaJela.find((j) => j.id === idJelo);

  const dispatch = useDispatch();
    const Brisi= ()=>{
        dispatch(deleteJelo(jela.id))
        Alert.alert("Uspješno izbrisano jelo.")
        navigation.navigate('Jela');
    }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}> Želite li izbrisati ovo jelo?</Text>
        <Text></Text>
        <View style={styles.container1}>
        <Tipka title="Briši" onPress={Brisi}></Tipka>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container1: {
    
    
    alignItems: 'center',
    justifyContent: 'center',
   },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 54,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(160, 160, 160, 0.65)",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 20,
    margin: 15,
  },
});

export default EditJelo;
