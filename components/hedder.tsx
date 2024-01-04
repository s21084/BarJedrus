import { StyleSheet, Text, View, Pressable} from 'react-native';
import { Link } from 'expo-router';


const Hedder = () =>{
    return(
            <View style={styles.hedder}>
                <View style={styles.hello}>
                <Link href={'/'}>
                    <Pressable  title='Home' style={styles.textHedder}>
                    <Text style={styles.textHedder}>Bar Jędruś na Skarpie</Text>
                    </Pressable>
                    </Link>
                </View>
                <View style={styles.logOut}>
                    <Link href={'../'}>
                    <Pressable  title='Wyloguj' style={styles.textHedder}>
                    <Text style={styles.buttonText}>Wyloguj</Text>
                    </Pressable>
                    </Link>
                </View>

                
            </View>
        );
}

const styles = StyleSheet.create({
    hedder: {
        paddingHorizontal: 250,
        flexDirection: 'row',
        paddingVertical: 20,
        backgroundColor: '#2A7F50',
        overflow: 'hidden',
        justifyContent: "space-between"
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