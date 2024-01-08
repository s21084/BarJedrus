import { Link, useSearchParams } from "expo-router";
import { Text, View, StyleSheet, Pressable} from 'react-native';
import dishes from '../../assets/data/dish'

export default function DishScreen (){
    const { id } = useSearchParams();

    const dish = dishes.find((d) => d.id == id);

    if(!dish){
        return <Text> Dania nie znaleziono </Text>
    }
    return (
        <View style={styles.logInWindow}>   
            <View style={styles.dishContainer}>
            <Text style={styles.hedders}>Danie:</Text>
            {dish.name && <Text style={styles.value}>{dish.name}</Text>}
            <Text style={styles.hedders}>Cena:</Text>
            {dish.price && <Text style={styles.value}>{dish.price} zł</Text>}
            </View>
            <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Edytuj</Text>
                    </Pressable>
                    <Link href="../" style={styles.button}>
                        <Text style={styles.buttonText}>Usuń</Text>
                    </Link>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logInWindow: {
        backgroundColor: '#ACBFA4',
        flex: 1,
        alignItems: 'center'
    },
    dishContainer: {
        backgroundColor: '#E2E8CE',
        padding: 50,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center'
    },
    hedders: {
        fontSize:25,
        fontWeight: "bold"
    },
    value: {
        fontSize:20,
        fontStyle: "italic"
    },
    buttonText: {
        color: '#E2E8CE',
        fontWeight: '600',
        fontSize: 16,
      },
    button: {
        backgroundColor: '#262626',
        padding: 10,
        margin: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
      },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
      },
});