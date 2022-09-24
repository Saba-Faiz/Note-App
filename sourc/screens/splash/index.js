
import { View, StyleSheet, Image,} from 'react-native';
import { BACKGROUND_COLOR } from "../../../res/drawables";

const Splash = (props) => {
    setTimeout(() => {
        props.navigation.replace('loginScreen')
    }, 3000)
   
        
        return (


        <View style={styles.container}>

            <Image style={styles.animate} source={require('../../../assets/bg.png')}>
            </Image>
           
            {/* <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
 /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#98AFC7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    animate: {
        height: '25%',
        width: '50%',
    },





})
export default Splash