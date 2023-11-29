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
import { postKorisnik } from "../store/actions/korisnik";
const image = require("../assets/pozadina1.png");
import { KORISNIK } from "../data/korisnik";
import Tipka from "../components/Tipka";

const Register = ({ navigation }) => {
  
    const sviKor = useSelector((state) => state.korisnici.korisnici)
    const id=(sviKor.slice(-1)[0]).id;
  const dispatch = useDispatch();

  const [ime, postaviIme] = useState('');
  const [username, postaviUser] = useState('');
  const [email, postaviEmail] = useState('');
  const [pass, postaviPass] = useState('');

  const StvoriProfil = () => {
    Alert.alert('Uspješno kreiran profil!')
    let novi = {
       id: id+1,
       ime: ime,
      username: username,
      email: email,
      pass: pass,
    };
    console.log(novi)
    dispatch(postKorisnik(novi));
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Ime: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(ime) => {
            postaviIme(ime);
          }}
        ></TextInput>
        <Text style={styles.text}>Username: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(username) => {
            postaviUser(username);
          }}
        ></TextInput>
        <Text style={styles.text}>Email: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => {
            postaviEmail(email);
          }}
        ></TextInput>
        <Text style={styles.text}>Lozinka: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(pass) => {
            postaviPass(pass);
          }}
        ></TextInput>
          <View style={styles.container1}>
        
        <Tipka title="OK" onPress={StvoriProfil}></Tipka>
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
    
    justifyContent: "center",
    alignItems:"center"
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

export default Register;
