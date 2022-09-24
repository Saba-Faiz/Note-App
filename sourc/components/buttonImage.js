import React from "react";
import { View,  StyleSheet, TouchableOpacity , Image} from 'react-native'


const BtnImg = (props) => {

    return (

        <View Style={styles.container}>

        



            <TouchableOpacity onPress={props.onPress}>
                <Image source={props.source} style={styles.img} ></Image>

            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
     
    },
img:{
height: 100,
width:100,
}

})

export default BtnImg;