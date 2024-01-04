import { StyleSheet, Text, View, Pressable} from 'react-native';
import { Link } from 'expo-router';


const Nav = () =>{
    return(
            <View style={styles.nav}>
                <View style={styles.navButton}>
                    <Link href={'/offer'} asChild>
                    <Pressable>
                    <Text>Oferta</Text>
                    </Pressable>
                    </Link>
                </View>
                <View style={styles.navButton}>
                    <Link href={'/event'} asChild>
                    <Pressable>
                    <Text>Wydarzenia</Text>
                    </Pressable>
                    </Link>
                </View>
                <View style={styles.navButton}>
                    <Link href={'/vacation'} asChild>
                    <Pressable>
                    <Text>Urlopy</Text>
                    </Pressable>
                    </Link>
                </View>
                <View style={styles.navButton}>
                    <Link href={'/subscription'} asChild>
                    <Pressable>
                    <Text>Abonamenty</Text>
                    </Pressable>
                    </Link>
                </View>
                <View style={styles.navButton}>
                    <Link href={'/settings'} asChild>
                    <Pressable>
                    <Text>Ustawienia</Text>
                    </Pressable>
                    </Link>
                </View>
                <View style={styles.navButton}>
                    <Link href={'/adminPage'} asChild>
                    <Pressable>
                    <Text >Właściciel</Text>
                    </Pressable>
                    </Link>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    nav: {
        paddingHorizontal: 250,
        flexDirection: 'row',
        paddingVertical: 20,
        backgroundColor: '#262626',
        overflow: 'hidden',
        alignItems: 'center',
    },
    navButton: {
        padding: 10,
        borderRadius: 5, 
        backgroundColor: '#ACBFA4',
        marginHorizontal: 5,
    },
    textHedder: {
        fontSize: 25,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        
    },
});

export default Nav;