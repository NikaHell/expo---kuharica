import React from "react";
import {  ImageBackground, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Tipka from "../components/Tipka";

const image = require("../assets/pozadina.png");

const Pocetna = ({ navigation, route }) => {
  const idProfil = Number(route.params.id);
  const sviKor = useSelector((state) => state.korisnici.korisnici);
  const korisnik = sviKor.find((j) => j.id === idProfil);
  console.log(idProfil)
  console.log(korisnik)
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container1}>
          
        <Text style={styles.text}>Dobro došli u kuharicu!</Text>
        <Text></Text>
         
        <Tipka
          style={{}}
          title="MENU"
          onPress={() => {
            navigation.navigate("Menu", { id: korisnik.id });
          }}
        ></Tipka>
        <Tipka
          style={styles.button}
          title="LOG OUT"
          onPress={() => {
            navigation.navigate("Login" );
          }}
        ></Tipka>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    top: 50,
  },
  container: {
    flex: 1,
    
  },
  container1: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
   },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: Platform.OS === 'ios' ? 85 : 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Pocetna;
