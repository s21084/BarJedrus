import { StyleSheet, Text, View, Pressable} from 'react-native';
import { Link } from 'expo-router';

const userLogOn = true; /* TO PÓŹNIEJ BĘDZIE INACZEJ SPRAWDZANE */
const Hedder = () =>{
    return(
            <View style={styles.hedder}>
                    <Text style={styles.textHedder}>Bar Jędruś na Skarpie</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    hedder: {
        paddingHorizontal: 250,
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#CD8D7A',
        overflow: 'hidden',
        padding: 5,
    },
    textHedder: {
        fontSize: 25,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
});

export default Hedder;