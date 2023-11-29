import React, { useState } from "react";
import {
  
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { putJelo } from "../store/actions/jela";
const image = require("../assets/pozadina1.png");
import { JELO } from "../data/jelo";
import Tipka from "../components/Tipka";

const EditJelo = ({ navigation, route }) => {
  const idJelo = Number(route.params.id);
  const svaJela = useSelector((state) => state.jela.jela);
  const jela = svaJela.find((j) => j.id === idJelo);
  console.log(jela)
  console.log(jela.id)
  console.log(idJelo)
  const dispatch = useDispatch();

  const [naziv, promjeniNaziv] = useState(jela.naziv);
  const [kategorija, promjeniKat] = useState(jela.kategorija);
  const [sastojci, promjeniSastojke] = useState(jela.sastojci);
  const [opis, promjeniOpis] = useState(jela.opis);

  const Uredi = () => {
    let novoJelo = {
      id:jela.id,
      naziv: naziv,
      kategorija: kategorija,
      sastojci: sastojci,
      opis: opis,
    };
    console.log(idJelo)
    dispatch(putJelo(novoJelo, jela.id));
    navigation.goBack()
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
        <Tipka title="OK" onPress={Uredi} ></Tipka>
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
    
    
    alignItems: 'center',
    justifyContent: 'center',
   },
  image: {
    flex: 1,
    justifyContent: "center",
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
