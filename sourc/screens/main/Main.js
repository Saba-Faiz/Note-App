import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button, FlatList, AsyncStorage, TouchableOpacity } from 'react-native'
import { ADD_BUTTON_IMG } from '../../../res/drawables';
import ImageButton from '../../components/buttonImage'
import { ADD_NOTE_IMG } from "../../../res/drawables";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import App from '../../../api/fireBASE/index';



const Main = (props) => {
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(true)
    const { email } = props.route.params
    const db = getFirestore(App)


    useEffect(() => {
        loadData()

    })

    const loadData = () => {
        let keys = []
        const querySnapshot =getDocs(collection(db, email));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            keys.push(doc.data)
        });
        setData(keys)/// second commit

    }

    // const loadData = async () => {
    //     try {



    //         let Keys = await AsyncStorage.getAllKeys()

    //         const items = await AsyncStorage.multiGet(Keys)
    //         setData(items)
    //         setRefresh(false)
    //     } catch (e) {
    //         console.log(e)

    //     }
    // }

    const onRemoveItem = async (noteTtile) => {
        try {
            await AsyncStorage.removeItem(noteTtile)
        } catch (e) {
            console.log(e)
        }
    }
    return (

        <View style={styles.container}>

            <View>
                <FlatList

                    data={data}
                    renderItem={({ item }) => {
                        var noteTtile = item[0]
                        return (
                            <View style={styles.itemListStyle}>

                                <TouchableOpacity
                                    onPress={() => { props.navigation.replace('Card', { noteTtile: item, email }) }}
                                    style={{ flex: 1 }}>
                                    <Image source={ADD_NOTE_IMG} style={{ height: 60, width: 60, margin: 10 }} />

                                </TouchableOpacity>
                                <Text style={{ flex: 3, }}>{noteTtile}</Text>
                                <TouchableOpacity onPress={() => { onRemoveItem(noteTtile) }}>
                                    <Image source={require('../../../assets/delet.png')}
                                        style={{ height: 30, alignSelf: 'baseline' }} />

                                </TouchableOpacity>

                            </View>



                        )
                    }}
                    keyExtractor={(item) => item}></FlatList>
            </View>


            <ImageButton source={ADD_BUTTON_IMG}
                onPress={() => props.navigation.navigate('Card', { noteTtile: null, email })}
                style={styles.img}
            />




        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 1

    },
    img: {
        alignSelf: 'flex-end',
    },
    itemListStyle: {
        borderBottomWidth: 1,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default Main;