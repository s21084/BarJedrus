import { useSearchParams } from "expo-router";
import { Text, View, StyleSheet} from 'react-native';
import dishes from '../../assets/data/dish'

export default function DishScreen (){
    const { id } = useSearchParams();

    const dish = dishes.find((d) => d.id == id);

    if(!dish){
        return <Text> Dania nie znaleziono </Text>
    }
    return (
        <View style={styles.logInWindow}>   
        
        <Text>DODAĆ GUZIK EDYTUJ I USUŃ DLA WŁAŚCICIELA</Text>
            {dish.name && <Text>{dish.name}</Text>}
            {dish.price && <Text>{dish.price} zł</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    logInWindow: {
        backgroundColor: '#ACBFA4',
        flex: 1,
        alignItems: 'center'
    },
});