import { StyleSheet, Text, View, TextInput, Pressable  } from 'react-native';
import { Link } from 'expo-router';

export default function Setting(){
    return(
            <View> 
                <Text style={styles.hedder}>Bar Jedruś</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    hedder: {
        fontSize: 40,
        padding: 50,
        fontStyle: 'italic',
        color: '#131B23',
    },
});