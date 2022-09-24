import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image, AsyncStorage } from 'react-native';
import FireBase from '../../../api/fireBASE/index'
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setDoc, getFirestore, collection, addDoc} from 'firebase/firestore'

function SignUp(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const db = getFirestore(FireBase)
   
    useEffect(() => {
        onSignupPressed()
    }, [])

    const onSignupPressed = async() => {
        const auth = getAuth();
       
        try{
            await addDoc(collection(db,email),{})
            let res = await  createUserWithEmailAndPassword(auth, email, password)
            alert('account created')
            props.navigation.goBack()
        }
        catch(e){
            alert(e.message)
        }
    }

    const onAlreadyAccountPressed = () => {
        props.navigation.goBack()
    }


    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/bg.png')}
            style={{height:200,width:200}}/>

            <View style={styles.formView}>
                <TextInput placeholder='Enter your email' placeholderTextColor={'#A9A9A9'} style={styles.inputStyle}
                    onChangeText={(t) => setEmail(t)} value={email} />
                <TextInput placeholder='Enter your Pasword' placeholderTextColor={'#A9A9A9'} style={styles.inputStyle}
                    onChangeText={(t) => setPassword(t)} value={password} secureTextEntry={true} />

                <View style={styles.forgetView}>
                    <Text style={styles.forgetText} onPress={() => onAlreadyAccountPressed()}>Already Have Account?</Text>

                </View>

                <TouchableOpacity style={styles.signUpButton} onPress={() => onSignupPressed()}>
                    <Text style={{ color: '#ffffff' }}>Sign Up</Text>
                </TouchableOpacity>

            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 150,
        width: '45%'
    },
    appName: {
        height: 70,
        width: '70%'
    },
    formView: {
        width: '70%',
        alignItems: 'center',
        height: 300
    },
    inputStyle: {
        borderBottomWidth: 0.5,
        marginTop: 20,
        height: 50,
        width: '100%',

    },
    forgetView: {
        flexDirection: 'row'
    },
    forgetText: {
        fontSize: 10,
        marginTop: 5,
        fontStyle: 'italic'
    },
    signUpButton: {
        backgroundColor: '#454545',
        height: '13%',
        width: '33%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

})

export default SignUp
