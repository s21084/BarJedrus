import { StyleSheet, Text, View, TextInput, Pressable  } from 'react-native';
import { Link } from 'expo-router';

export default function LoginComponent(){
    return(
            <View>
                <View style={styles.logInWindow}>   
                <Text style={styles.hedder}>Bar Jedruś</Text>
                <TextInput placeholder='Login' style={styles.putter}/>
                <Text> </Text>
                <TextInput placeholder='Haslo' secureTextEntry='true' style={styles.putter}/>
                <Text> </Text>
                <View>
                    <Link href={'/mainPage'}>
                    <Pressable  title='Zaloguj' style={styles.button}>
                    <Text style={styles.buttonText}>Zaloguj</Text>
                    </Pressable>
                    </Link>
                    <Text> </Text>
                    <Link href={'/mainPage'}>
                    <Pressable  title='Zapomniałeś hasła?' style={styles.button}>
                    <Text style={styles.buttonText}>Zapomniałeś hasła?</Text>
                    </Pressable>
                    </Link>
                    
                </View>
                </View>
                <Text> </Text>
                <View>
                    <Link href={'/offer'}>
                    <Pressable  title='Oferta' style={styles.button}>
                    <Text style={styles.buttonText}>Oferta</Text>
                    </Pressable>
                    </Link>
                    <Text> </Text>
                    <Pressable title='Oferty pracy' style={styles.button}>
                        <Text style={styles.buttonText}>Oferty pracy</Text>
                    </Pressable>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    logInWindow: {
        flex: 1,
        alignItems: 'center',
        padding: 100,
        backgroundColor: '#2274A5',
        borderRadius: 5,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: '#816C61',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5, 
        elevation: 3,
        width: '100%',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#E7DFC6',
    },
    hedder: {
        fontSize: 40,
        padding: 50,
        fontStyle: 'italic',
        color: '#131B23',
    },
    putter: {
        fontSize: 20,
        padding: 20,
        opacity: 0.9,
        backgroundColor: '#E7DFC6',
        borderRadius: 5,
        overflow: 'hidden',
        fontStyle: 'italic',
        
    },
});