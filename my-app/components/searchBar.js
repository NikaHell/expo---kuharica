import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { filterJela } from "../store/actions/jela";


const SearchBar = (props) => {
  const[unos,SetUnos] = useState("")
  const dispatch =useDispatch()
  const fil = useSelector(state => state.jela.filterjela)
  const Filter = (novo) => {
    SetUnos(novo)
    //console.log("unos",novo)
    dispatch(filterJela(novo))
    
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      placeholder="Search"
      value={unos}
      onChangeText={Filter}
      >
        
      </TextInput>
    </View>
  );
};
export default SearchBar;


const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    marginLeft: Platform.OS === 'ios' ? 40 : 20,
    alignItems: "center",
    
    width: "90%",
    height:50,
   backgroundColor:"white",
   borderRadius:10,

  },
  
  input: {
    width:"90%",
    height:"100%",
    paddingLeft:8,
    fontSize:20,
  },
});