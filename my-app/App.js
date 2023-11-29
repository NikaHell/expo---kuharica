import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert,SafeAreaView } from 'react-native';
import Pocetna from './Views/Pocetna';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Provider } from 'react-redux';
import Login from './Views/Login';
import Menu from './Views/Menu';
import Jela from './Views/Jela';
import Profil from './Views/Profil';
import DetaljiJela from './Views/DetaljiJela'
import EditJelo from './Views/EditJelo';
import DodajJelo from './Views/DodajJelo'
import { Store } from './store/store';
import DeleteJelo from './Views/DeleteJelo'
import Register from './Views/Registracija';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registracija" component={Register}/>
        <Stack.Screen name="Pocetna" component={Pocetna} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Jela" component={Jela} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Detalji" component={DetaljiJela} />
        <Stack.Screen name="Edit" component={EditJelo} />
        <Stack.Screen name="Add" component={DodajJelo}/>
        <Stack.Screen name="Delete" component={DeleteJelo}/>

      </Stack.Navigator>
    </NavigationContainer>
    
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
});
