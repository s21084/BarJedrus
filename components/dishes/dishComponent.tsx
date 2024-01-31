import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DishType } from '../../types/index';
import { Link } from 'expo-router';


type DishProps = {
    dish: DishType;
}
const Dish = ({ dish }: DishProps) => {
    return (
        <View style={styles.content}>
            <Link href={`/dish/${dish.id}`} style={styles.button}>
                <View style={{flexDirection: 'column',}}>
                {dish.name && <Text>{dish.name}</Text>}
                {(dish.priceForPiece != 0) && <Text>{dish.priceForPiece} zł</Text>}
                {(dish.priceForWeight != 0) && <Text>{dish.priceForWeight} zł /100g</Text>}
                </View>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        margin: 2,
        backgroundColor: '#DBCC95',
        borderRadius: 5, 
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    button: {
        width: 120,
        height: 80,
        paddingVertical: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#DBCC95',
        borderRadius: 5, 
        overflow: 'hidden',
    },
});


export default Dish;