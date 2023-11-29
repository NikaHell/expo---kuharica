import React, { useEffect, useState }  from "react";
import {

  FlatList,
  ImageBackground,
  StyleSheet,
  
  View,
  Text
} from "react-native";
const image = require("../assets/pozadina1.png");
import { JELO } from "../data/jelo"
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/searchBar";
import Tipka from "../components/Tipka";
import { filterJela } from "../store/actions/jela";
 


const Jelatabla = ({ navigation }) => {
  
  const jelaPrikaz = useSelector(state => state.jela.jela)
  const jelaFilter = useSelector(state => state.jela.filterjela)
  const novo = jelaFilter===undefined? jelaPrikaz : jelaFilter

  console.log(jelaFilter)
  const Jela = ({ item }) => {
  
  

    return (
     
      <View style={styles.container}>
        
          
          <Text style={styles.text}>{item.naziv}</Text>
          <View style={styles.container1}>
          <Tipka title="Detaljno" color="#825353" onPress={() => navigation.navigate("Detalji",{id: item.id})}></Tipka>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
      <SearchBar ></SearchBar>
      
      <FlatList
        keyExtractor={(item) => item.id}
        data={novo}
        renderItem={Jela}
      ></FlatList>
    </ImageBackground>
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
    fontSize: Platform.OS === 'ios' ? 70 : 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(160, 160, 160, 0.65)",
  },
  input:{
    backgroundColor:"white",
    padding:10,
    borderRadius:10,
    borderWidth:1,
    fontSize:20,
    margin:15,
    
}
});

export default Jelatabla;
