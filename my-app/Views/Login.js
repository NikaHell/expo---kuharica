import {useNavigation} from "@react-navigation/native";
import React, {useState} from "react";
import { View,Text,Alert,TextInput, StyleSheet,ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import Tipka from "../components/Tipka";
const image = require("../assets/717335.png");



const Login = () => {
    const navigation = useNavigation();
    const [mail, SetEmail] = useState("");
    const[pass,SetPass]=useState("");

    const svikor = useSelector((state) => state.korisnici.korisnici)
    console.log(svikor)
    const prijava = ( )=>{
        const kor = svikor.find((k) => k.email === mail & k.pass === pass)
        console.log(kor)
        if(kor){
            navigation.navigate("Pocetna",{id: kor.id})
        }else{
            Alert.alert("Error","Krivi podaci")
        }
    };
    const registra = ( ) => {
        navigation.navigate ("Registracija")
    }
    return(

        <View style={styles.container}>
                    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <View style={styles.container1}>
            <View style={styles.inputView}>
            <TextInput style={styles.TextInput} placeholder="Email" onChangeText={(text)=>SetEmail(text)} value={mail}></TextInput>
            </View>
            <View style={styles.inputView}>
            <TextInput style={styles.TextInput}  placeholder="Password" onChangeText={(text)=>SetPass(text)} value={pass} secureTextEntry></TextInput>
            </View>
            <View>

            <Tipka title="Prijava" onPress={prijava}/>
            <Text></Text>
            </View>
            <View>
                <Tipka title="Registracija" onPress={registra}/>
            </View></View>
            </ImageBackground> 
        </View>
    )
    
}
export default  Login;
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
      },
    container: {
        flex: 1,
        
       },
       container1: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
       },
    inputView: {
        backgroundColor: "#fff",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        
      },
      loginBtn:
 {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#FF1493",
 }

  });
  