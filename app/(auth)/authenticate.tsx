import {Text, View, TextInput, Pressable, StyleSheet, Alert} from 'react-native'
import React, { useState } from 'react'
import { useSearchParams } from 'expo-router';
import { authenticate } from '../../lib/api/auth';

const Authenticate = () => {
    const [code, setCode] = useState('');
    const { email } = useSearchParams();

    const onAuth = async () => {
        if(typeof email !== 'string'){
            return;
        }
        try{
            console.log(email, "and ", code )
            const res = await authenticate({email: email, emailToken: code})
        }catch(e){
            Alert.alert("ERROR", e.message)
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Wprowadź jednorazowe hasło które dostałeś na email</Text>
            <TextInput
            placeholder = "Jednorazowe hasło"
            value={code}
            onChangeText={setCode}
            style={styles.input}
            />

            <Pressable style={styles.button} onPress={onAuth}>
                <Text style={styles.buttonText}>Potwierdź</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      padding: 24,
    },
    label: {
      fontSize: 24,
      marginVertical: 5,
      color: 'black',
    },
    error: {
      marginVertical: 5,
      color: 'red',
    },
    input: {
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      padding: 10,
      fontSize: 20,
      marginVertical: 5,
      borderRadius: 10,
    },
    button: {
      backgroundColor: '#050A12',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginVertical: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

export default Authenticate;