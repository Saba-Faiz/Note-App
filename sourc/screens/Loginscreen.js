import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { setDoc,doc,collection,getFirestore} from 'firebase/firestore';
// import{App} from '../../api/fireBASE';
// import { USER_COLLECTION } from '../../res/strings';
// import { getAuth } from "firebase/auth";

function LogIn(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const db = getFirestore(App);
    
    useEffect(() => {

    }, [])


    const onLogInPressed = async () => {
        const auth = getAuth()
        if (email.includes('@') && password) {
            try {
               
                // await setDoc(collection(db,email),{
                   
                // })
                let res = await signInWithEmailAndPassword(auth, email, password)
                alert('signed in')
                props.navigation.navigate('Main', {email:email})
            }

            catch (e) {
                alert(e.message)
            }
        } else {
            alert('Please enter email and password')
        }
    }

    const onForgetPassword = async () => {
        const auth = getAuth();
        if (email.includes('@')) {
            try {
                await sendPasswordResetEmail(auth, email)
                alert('check your email to restore password')
            }
            catch (e) {

            }
        } else {
            alert('Enter your correct email to reset password')
        }


    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}> Add Note</Text>

            <Text  ></Text>

            <Image source={require('../../assets/bg.png')}
                style={{ height: 200, width: 200, alignItems: 'baseline' }} />




            <View style={styles.formView}>
                <TextInput placeholder='Enter your email' placeholderTextColor={'#A9A9A9'} style={styles.inputStyle}
                    onChangeText={(t) => setEmail(t)} value={email} />
                <TextInput placeholder='Enter your Pasword' placeholderTextColor={'#A9A9A9'} style={styles.inputStyle}
                    onChangeText={(t) => setPassword(t)} value={password} secureTextEntry={true}/>

                <View style={styles.forgetView}>
                    <Text style={{ ...styles.forgetText, flex: 1 }} onPress={() => onForgetPassword()}>Forget Password </Text>
                    <Text onPress={() => props.navigation.navigate('SignupScreen')} style={{ ...styles.forgetText, }}
                    >New User?SignUp!</Text>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={() => onLogInPressed()}>
                    <Text style={{color:'linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)'}}>Login</Text>
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
   
    appName: {
        height: 70,
        width: '70%'
    },
    formView: {
        width: '70%',
        alignItems: 'center',
        height: 300,
    },
    inputStyle: {
        borderBottomWidth: 1,
        marginTop: 20,
        height: 50,
        width: '100%'
    },
    forgetView: {
        flexDirection: 'row'
    },
    forgetText: {
        fontSize: 10,
        marginTop: 5,
        fontStyle: 'italic'
    },
    loginButton: {
        backgroundColor: 'white',
        height: '13%',
        width: '33%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    

})

export default LogIn