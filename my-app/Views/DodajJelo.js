import React, { useState } from "react";
import {

  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { postJela } from "../store/actions/jela";
const image = require("../assets/pozadina1.png");
import { JELO } from "../data/jelo";
import Tipka from "../components/Tipka";

const DodajJelo = ({ navigation, route }) => {
  
    const svaJela = useSelector(state => state.jela.jela)
    const id=(svaJela.slice(-1)[0]).id;
  const dispatch = useDispatch();

  const [naziv, promjeniNaziv] = useState('');
  const [kategorija, promjeniKat] = useState('');
  const [sastojci, promjeniSastojke] = useState('');
  const [opis, promjeniOpis] = useState('');

  const StvoriJelo = () => {
    Alert.alert('Uspješno kreiran event!')
    let novoJelo = {
       id: id+1,
      naziv: naziv,
      kategorija: kategorija,
      sastojci: sastojci,
      opis: opis,
    };
    console.log(novoJelo)
    dispatch(postJela(novoJelo));
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Naziv: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(naziv) => {
            promjeniNaziv(naziv);
          }}
        ></TextInput>
        <Text style={styles.text}>Kategorija: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(kategorija) => {
            promjeniKat(kategorija);
          }}
        ></TextInput>
        <Text style={styles.text}>Sastojci: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(sastojci) => {
            promjeniSastojke(sastojci);
          }}
        ></TextInput>
        <Text style={styles.text}>Opis: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(opis) => {
            promjeniOpis(opis);
          }}
        ></TextInput>
        <Text></Text>
        <View style={styles.container1}>
        <Tipka title="OK" onPress={StvoriJelo}></Tipka>
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

export default DodajJelo;
