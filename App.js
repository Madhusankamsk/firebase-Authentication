//import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/screens/LoginScreen'
import Register from './src/screens/RegisterScreen'
import HomeScreen from './src/screens/HomeScreen'
import Header from './src/components/Header'
import React,{ useEffect, useState } from 'react'
import {auth} from './firebase' 
import { NavigationContainer } from '@react-navigation/native'



const Stack = createNativeStackNavigator()

export default function App(){
  // const[init,setInit] = useState(true);
  // const[user,setUser] = useState();
  // const [loaded, setLoaded] = useState(false);

  const [login, setLogin] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setLogin(false);
        //console.log(user + " !user");
        //setLoaded(true);
      } else {
        //setLoaded(true);
        setLogin(true);
      }
    });
  }, []);

  // function onAuthStateChanged(user){
  //   setUser(user);
  //   if(init) setInit(false);
  // }

  // useEffect(()=>{
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
  //   return subscriber;
  // },[])
  
  // //console.log()
  // if(init) return null;

  if(!login){
      return(
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen 
        name='Login' 
        component={Login} 
        options={{
          headerTitle: ()=><Header name = "Petty Island"/>,
          headerStyle:{
            height:150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            backgroundColor:'red',
            elevation:25
          }  
        }}
      />      
      <Stack.Screen 
        name='Register' 
        component={Register} 
        options={{
          headerTitle: ()=><Header name = "Petty Island"/>,
          headerStyle:{
            height:150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            backgroundColor:'red',
            elevation:25
          }  
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>
      )
  }
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name='HomeScreen' 
        component={HomeScreen} 
        options={{
          headerTitle: ()=><Header name = "Dashboard"/>,
          headerStyle:{
            height:150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            backgroundColor:'red',
            elevation:25
          }  
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  )
}