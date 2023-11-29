import React from "react";
import {ImageBackground, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
const image = require("../assets/pozadina1.png");
import Tipka from "../components/Tipka";

const Menu = ({ navigation, route }) => {
  const idProfil = Number(route.params.id)
 
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container1}>
        <Tipka
          title="PROFIL"
          color="#825353"
          onPress={() => {
            navigation.navigate("Profil", { id: idProfil });
          }}
        ></Tipka>
        <Tipka
          title="POČETNA"
          color="#825353"
          onPress={() => {
            navigation.navigate("Pocetna",{ id: idProfil });
          }}
        ></Tipka>
        <Tipka
          title="JELA"
          color="#825353"
          onPress={() => {
            navigation.navigate("Jela");
          }}
        ></Tipka>
        <Tipka
          title="DODAJ JELO"
          color="#825353"
          onPress={() => {
            navigation.navigate("Add");
          }}
        ></Tipka>
        
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
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
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default Menu;
