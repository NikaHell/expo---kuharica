import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Platform
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
const image = require("../assets/pozadina1.png");
import { KORISNIK } from "../data/korisnik"

const Profil = ({ navigation , route}) => {
    const idProfil = Number(route.params.id);
    const sviKor = useSelector(state => state.korisnici.korisnici)
    const korisnik = sviKor.find((j) => j.id === idProfil)
    console.log(idProfil)
    console.log(korisnik)
    
    const dispatch = useDispatch()
    return(
        <View style={styles.container}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.text_naslov}>IME :</Text>
            <Text style={styles.text}>{korisnik.ime}</Text>
            <Text style={styles.text_naslov}>USERNAME :</Text>

            <Text style={styles.text}>{korisnik.username}</Text>
            <Text style={styles.text_naslov}>Email :</Text>

            <Text style={styles.text}>{korisnik.email}</Text>
            
            <Text></Text>
            

            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: Platform.OS === 'ios' ? 45 : 18,
    lineHeight: Platform.OS === 'ios' ? 130 : 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(160, 160, 160, 0.35)",
  },
  text_naslov: {
    color: "#EFF0EF",
    fontSize: Platform.OS === 'ios' ? 50 : 28,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    
  },
});

export default Profil;
