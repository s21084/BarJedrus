import { StyleSheet, Text, View, TextInput, Pressable  } from 'react-native';

import { DishType } from '../../types/index';
import { Link } from 'expo-router';

type DishProps = {
    dish: DishType;
}
const Dish = ({ dish }: DishProps) => {
    return(
        <Link href={`/dish/${dish.id}`}>
            <Pressable>
                <View style={styles.logInWindow}>   
                {dish.name && <Text>{dish.name}</Text>}
                {dish.priceForPiece && <Text>{dish.priceForPiece} zł</Text>}
                {dish.priceForWeight && <Text>{dish.priceForWeight} zł /100g</Text>}
                </View>
            </Pressable>
        </Link>
        );
}

const styles = StyleSheet.create({
    logInWindow: {
        flex: 1,
        width: 200,
        height: 250,
        paddingVertical: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        alignItems: 'center',
        backgroundColor: '#47CE83',
        borderRadius: 5, 
        overflow: 'hidden',
    },
});


export default Dish;