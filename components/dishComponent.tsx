import { StyleSheet, Text, View, TextInput, Pressable  } from 'react-native';

import { DishType } from '../types/index';

type DishProps = {
    dish: DishType;
}
const Dish = ({ dish }: DishProps) => {
    return(
            <View>
                <View style={styles.logInWindow}>   
                <Text>{dish.name}</Text>
                <Text>{dish.price} zł</Text>
                </View>
            </View>
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