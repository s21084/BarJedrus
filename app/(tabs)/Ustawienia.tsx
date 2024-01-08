import { StyleSheet, View, Text, Pressable, FlatList, TextInput} from 'react-native';
import { Link } from 'expo-router';
import Hedder from '../../components/normal/hedder';
import {useState} from 'react';



const Settings = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSuname] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [flatNumber, setFlatNumber] = useState('');
        return(
            <View>
            <Hedder />
            <View style={{ alignItems: 'center' }}>
            <Text style={{ padding: 10, fontSize: 20 }}>Ustawienia konta:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setFirstName(newText)}
            defaultValue={firstName}
            placeholder="Imie"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setSuname(newText)}
            defaultValue={surname}
            placeholder="Nazwisko"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setEmail(newText)}
            defaultValue={email}
            placeholder="Twój mail"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setPhone(newText)}
            defaultValue={phone}
            placeholder="Twój nr telefonu"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setStreet(newText)}
            defaultValue={street}
            placeholder="Ulica"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setPhone(newText)}
            defaultValue={phone}
            placeholder="Numer domu"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setHouseNumber(newText)}
            defaultValue={houseNumber}
            placeholder="Numer mieszkania"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setFlatNumber(newText)}
            defaultValue={flatNumber}
            placeholder="Miasto"
            />
            </View>
                <View style={styles.buttonContainer}>
                    <Pressable  style={styles.button}>
                        <Text style={styles.buttonText}>Zapisz</Text>
                    </Pressable>
                </View>
            </View>
        );
    
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 25,
        backgroundColor: '#E2E8CE',
    },
    buttonContainer: {
        marginVertical: 10,
        alignItems: 'center'
      },
      button: {
        backgroundColor: '#262626',
        padding: 10,
        margin: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
      },
    buttonBack: {
        backgroundColor: '#262626',
        padding: 10,
        borderRadius: 5, 
    },
    buttonText: {
        color: '#E2E8CE',
        
    },
    input: {
        padding: 5,
        width: 500,
        borderColor: '#262626',
        margin: 5,
        backgroundColor: '#E2E8CE',
        borderRadius:5,
      },
});

export default Settings;