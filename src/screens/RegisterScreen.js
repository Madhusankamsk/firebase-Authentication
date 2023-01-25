import { View, Text,TouchableOpacity,TextInput,StyleSheet } from 'react-native'
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {auth,db} from '../../firebase'


const LoginScreen = () => {
    const navigation = useNavigation()
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[name,setName] = useState('')
    //const[passwordConf,setpasswordConf] = useState()

    const onSignUp = () => {
      if (name == "" || email == "" || password == "") {
        //setLabel("Please fill all the fields");
        console.log("Please fill all the fields")
      } else {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((result) => {
            //auth.currentUser.sendEmailVerification();
            db.collection("register")
              .doc(auth.currentUser.uid)
              .add({
                name: name,
                email: email,
                id: auth.currentUser.uid,
                profilePicUrl: null,
                username: "",
              })
              .then(() => {
                console.log("Document successfully written!");
              })
              .catch((error) => {
                console.log("Error writing document: ", error);
              });
          })
          .catch((error) => {
            //setLabel(error.message);
            console.log(error)
          });
      }
    };

  return (
    <View style = {styles.container}>
        <Text style={{fontWeight:'bold',fontSize:26}} >
            Register
        </Text>
        <View style={{marginTop:40}}>
            <TextInput
                style = {styles.textInput}
                placeholder = "Name"
                onChangeText={(name)=>setName(name)}
                autoCapitalize="none"
                autoCorrect={false}
             />
            <TextInput
                style = {styles.textInput}
                placeholder = "Email"
                onChangeText={(email)=>setEmail(email)}
                autoCapitalize="none"
                autoCorrect={false}
             />
            <TextInput
                style = {styles.textInput}
                placeholder = "Password"
                onChangeText={(password)=>setPassword(password) }
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
             />
            <TextInput
                style = {styles.textInput}
                placeholder = "Confirm Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
             />

        </View>
        <TouchableOpacity
            onPress={onSignUp}
            style = {styles.button}
        >
            <Text style={{fontWeight:'bold',fontSize:22}} >Sign Up</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
            onPress={()=>navigation.navigate("Register")}
            style = {{marginTop:20}}
        >
            <Text style={{fontWeight:'bold',fontSize:16}} >
                Don't have an account? Register Now
            </Text>
        </TouchableOpacity> */}
    </View>
  )
}
export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    },
    textInput:{
        paddingTop:20,
        paddingBottom:10,
        width:400,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor: '#000',
        marginBottom:10,
        textAlign: 'center',
    },
    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#026efd',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:50

    }

})