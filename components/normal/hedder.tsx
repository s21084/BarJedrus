import { StyleSheet, Text, View, Pressable} from 'react-native';
import { Link } from 'expo-router';

const userLogOn = true; /* TO PÓŹNIEJ BĘDZIE INACZEJ SPRAWDZANE */
const Hedder = () =>{
    return(
            <View style={styles.hedder}>
                <View style={styles.hello}>
                <Link href={'/'}>
                    <Pressable>
                    <Text style={styles.textHedder}>Bar Jędruś na Skarpie</Text>
                    </Pressable>
                    </Link>
                </View>  
            </View>
        );
}

const styles = StyleSheet.create({
    hedder: {
        paddingHorizontal: 250,
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#2A7F50',
        overflow: 'hidden',
    },
    hello: {
        padding: 5,
    },
    logOut: {
        padding: 5,
        borderRadius: 5, 
        backgroundColor: '#E9F1F7',
    },
    textHedder: {
        fontSize: 25,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    buttonText: {
        fontSize: 25,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
});

export default Hedder;