import {Text, View, TextInput, Pressable, StyleSheet, Alert,} from 'react-native'
import { Link } from 'expo-router';
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { login } from '../../lib/api/auth';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const router = useRouter();
    

    const onSignIn = async () => {
        console.warn('Sign in', email);
        try{
            await login( {email} )
            router.push({pathname: '/authenticate', params: {email}})
        }catch (e) {
          // @ts-ignore
            Alert.alert('Error', e.message);
        }
        

        
    }

    const menuNotLog = async () => {
          router.push({pathname: '/notLog/MenuNiezalogowany'})  
  }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Zaloguj się lub utwórz konto :)</Text>
            <TextInput
            placeholder = "Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            />

            <Pressable style={styles.button} onPress={onSignIn}>
                <Text style={styles.buttonText}>Zaloguj</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={menuNotLog}>
                <Text style={styles.buttonText}>Menu</Text>
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
    buttonMenu: {
      backgroundColor: '#050A12',
      padding: 10,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    label: {
      fontSize: 24,
      marginVertical: 5,
      color: 'gray',
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
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SignIn;