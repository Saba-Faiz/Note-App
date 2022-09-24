import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React,{useEffect, useState} from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity, AsyncStorage} from "react-native";
import { ADD_BUTTON_IMG, BACKGROUND_COLOR, WHITE_COLOR } from "../../res/drawables";
import Imagebutton from '../components/buttonImage';
import { getFirestore, collection, addDoc, setDoc, doc, docRef } from "firebase/firestore";
import App from '../../api/fireBASE/index';
import { getAuth } from "firebase/auth";

const Card = (props) => {
    let{noteTtile}=props.route.params
    const db = getFirestore(App);
    const auth=getAuth()
    const {email}=props.route.params
    console.log(email)
    // console.log(auth,tokenresponse,email)

    useEffect(()=>{
        loadItem()
    },[])
    const loadItem =async()=>{
        if(noteTtile){
            let description = await AsyncStorage.getItem(noteTtile)
            setTitle(noteTtile)
            setDescription(description)

        }

    }

    const[title, setTitle] = useState('')
    const [description, setDescription] = useState('')

   


    const onPressed = async()=>{
        if(title !=''&& description!=''){
          try{
            const docRef = await setDoc(doc(db, email, title),{
                title:title,
                description:description
            })
            props.navigation.replace('Main')
            // const docRef = await setDoc(db(db,email,title),{
            //     title:title,
            //     description: description
            // })
            // await setDoc(doc(db, "Notes", title), {
            //     description
            // }); 
            // let value = await AsyncStorage.getItem(title)
            // if(value && !noteTtile){
            //     alert('data already exist')
            // }else{
            //   await AsyncStorage.setItem(title, description)
              
            //   props.navigation.navigate('Main')
            //   alert('Data Saved')

            // }

          }catch (e){
                console.log(e)
          }
        }else{
            alert('Add some data')
        }
    }


    return (

        <View style={styles.container}>

            <View style={{ ...styles.cardStyle, height: '8%', justifyContent: 'center', paddingLeft: 10 }}>
                <TextInput placeholder='Enter Title name there'
                value={title}
                onChangeText={(t)=>setTitle(t)}></TextInput>
            </View>


            <View style={{ ...styles.cardStyle, height: '80%', padding: 10 }}>
                <TextInput placeholder="Enter Discription there......" multiline={true}
                value={description}
                onChangeText={(t)=>setDescription(t)}></TextInput>
            </View>

        <TouchableOpacity style={styles.textbutn} onPress={()=>onPressed()}>
            <Text style={styles.textbutn}>{noteTtile? "Update Data":'Save'}</Text>
        </TouchableOpacity>


        </View>




    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: WHITE_COLOR,
    },
    nameinput: {


        alignItems: 'center',
    },

    cardStyle: {
        borderRadius: 10,
        margin: 10,

        shadowColor: 'black',
        borderColor: 'black',
        borderWidth: 1

    },
    textbutn:{
        margin:10,
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor: 'lightblue',
        borderRadius: 5,
        

    }
    
   
})
export default Card;