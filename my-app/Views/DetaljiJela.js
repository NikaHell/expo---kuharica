import React from "react";
import {

  ImageBackground,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
const image = require("../assets/pozadina1.png");
import { JELO } from "../data/jelo"
import Tipka from "../components/Tipka";

const DetaljiJela = ({ navigation , route}) => {
    const idJelo = Number(route.params.id);
    const svaJela = useSelector(state => state.jela.jela)
    const jelo = svaJela.find((j) => j.id === idJelo)
    console.log(idJelo)
    console.log(jelo)
    
    const dispatch = useDispatch()
    return(
        <View style={styles.container}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.text_naslov}>NASLOV :</Text>
            <Text style={styles.text}>{jelo.naziv}</Text>
            <Text style={styles.text_naslov}>KATEGORIJA :</Text>

            <Text style={styles.text}>{jelo.kategorija}</Text>
            <Text style={styles.text_naslov}>SASTOJCI :</Text>

            <Text style={styles.text}>{jelo.sastojci}</Text>
            <Text style={styles.text_naslov}>RECEPT :</Text>

            <Text style={styles.text}>{jelo.opis}</Text>
            <View style={styles.container1}>
 
            <Tipka title="Uredi" color="#825353" onPress={() => navigation.navigate("Edit",{id: jelo.id})}></Tipka>
            
            <Tipka title="Briši" color="#825353" onPress={() => navigation.navigate("Delete",{id: jelo.id})}></Tipka>
            </View>
            </ImageBackground>

        </View>
    )
}

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
    fontSize: Platform.OS === 'ios' ? 29 : 16,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(160, 160, 160, 0.35)",
  },
  text_naslov: {
    color: "#EFF0EF",
    fontSize: Platform.OS === 'ios' ? 40 : 25,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    
  },
});

export default DetaljiJela;
