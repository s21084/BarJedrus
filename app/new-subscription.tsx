import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';


export default function NewSub() {
  
  const router = useRouter();

const [lastMonthPayed, setLastMonthPayed] = useState('');
const [dishType, setDishType] = useState('');
const [countOfDish, setCountOfDish] = useState('');
const [onPlace, setOnPlace] = useState('');
const [notes, setNotes] = useState('');
const [personId, setPersonId] = useState('');





  
 

  const onEventPress = async () => {
    
      // setText('');
      // router.back();
  };
  const handleChange = () => {
    
  };
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>

        <View style={styles.inputContainer}>
        <TextInput
            style = {styles.input}
            value={lastMonthPayed}
            placeholder="Ostatni zapłacpny miesiąc"
          />
          <TextInput
          style = {styles.input}
            value={dishType}
            placeholder="Rodzaj obiadu [cały czy połówka]"
          />
          <TextInput
          style = {styles.input}
            value={countOfDish}
            placeholder="Ilość obiadów"
          />
          <TextInput
            style = {styles.input}
            value={onPlace}
            placeholder="Na miejscu"
          />
          <TextInput
          style = {styles.input}
            value={personId}
            placeholder="Id osoby (tu muszę i tak podmienić na osobę ale to zrobić jak w ustawieniach)"
          />
          <TextInput
          style = {styles.input}
            value={notes}
            placeholder="Notatki"
            multiline
          />
        </View>
        <View style={styles.buttonContainer}>
        <Pressable onPress={onEventPress} style={styles.button}>
            <Text style={styles.buttonText}>Zapisz</Text>
          </Pressable>
          <Link href="../" style={styles.button}>
          <Text style={styles.buttonText}>Anuluj</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#262626',
    padding: 10,
    margin: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: '#E2E8CE',
    fontWeight: '600',
    fontSize: 16,
  },
  inputContainer: {
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