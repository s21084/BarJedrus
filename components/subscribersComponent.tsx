import { StyleSheet, Text, View, TextInput, Pressable  } from 'react-native';

import { SubscriberType } from '../types/index';
import { Link } from 'expo-router';

type SubscriberProps = {
    subscriber: SubscriberType;
}
const Dish = ({ subscriber }: SubscriberProps) => {
    return(
        <Link href={`/subscriber/${subscriber.id}`}>
            <Pressable>
                <View style={styles.logInWindow}>   
                {subscriber.id && <Text>{subscriber.id}</Text>}
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