import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DishType } from '../../types/index';
import { Link } from 'expo-router';


type DishProps = {
    dish: DishType;
}
const Dish = ({ dish }: DishProps) => {
    return (
        <View >
            <Link href={`/dish/${dish.id}`} style={styles.logInWindow}>
                {dish.name && <Text>{dish.name}</Text>}
                {(dish.priceForPiece && dish.priceForPiece != 0) && <Text>{dish.priceForPiece} zł</Text>}
                {(dish.priceForWeight && dish.priceForWeight != 0) && <Text>{dish.priceForWeight} zł /100g</Text>}
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    logInWindow: {
        flex: 1,
        width: 120,
        height: 80,
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