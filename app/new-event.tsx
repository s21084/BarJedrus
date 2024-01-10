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
import {useMutation, useQueryClient  } from '@tanstack/react-query'
import { createEvent } from '../lib/api/events';


export default function NewTweet() {
  const [text, setText] = useState('');
  const router = useRouter();
  const [newSchedule, setNewSchedule] = useState({
    name: '',
    decoration: '',
    date: '',
    vegeCount: '',
    meatCount: '',
    prePay: '',
    priceFull: '',
    notes: '',
});



  const { mutate, isError, error} = useMutation({
    mutationFn: createEvent,
  });




  
 

  const onEventPress = async () => {
    console.log(newSchedule);
    mutate({content: newSchedule})
      // setText('');
      // router.back();
  };
  const handleChange = (field: keyof typeof newSchedule, value: string) => {
    
    setNewSchedule((prev) => ({ ...prev, [field]: value }));
  };
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>

        <View style={styles.inputContainer}>
        <TextInput
            style = {styles.input}
            value={newSchedule.name}
            onChangeText={(text) => handleChange('name', text)}
            placeholder="Nazwa wydarzenia"
          />
          <TextInput
          style = {styles.input}
            value={newSchedule.decoration}
            onChangeText={(text) => handleChange('decoration', text)}
            placeholder="Dekoracje"
          />
          <TextInput
          style = {styles.input}
            value={newSchedule.date}
            onChangeText={(text) => handleChange('date', text)}
            placeholder="dd-mm-rrrr"
            numberOfLines={5}
          />
          <TextInput
          style = {styles.input}
            value={newSchedule.vegeCount}
            onChangeText={(text) => handleChange('vegeCount', text)}
            placeholder="Osoby wegetariańskie (podaj liczbę)"
            numberOfLines={5}
          />
          <TextInput
          style = {styles.input}
            value={newSchedule.meatCount}
            onChangeText={(text) => handleChange('meatCount', text)}
            placeholder="Łączna ilość osób (podaj liczbę)"
          />
          <TextInput
          style = {styles.input}
            value={newSchedule.prePay}
            onChangeText={(text) => handleChange('prePay', text)}
            placeholder="Przedwpłata (podaj tylko liczbę)"
          />
          <TextInput
          style = {styles.input}
            value={newSchedule.priceFull}
            onChangeText={(text) => handleChange('priceFull', text)}
            placeholder="Pełna cena (podaj tylko liczbę)"
          />
          <TextInput
          style = {styles.input}
            value={newSchedule.notes}
            onChangeText={(text) => handleChange('notes', text)}
            placeholder="Notatki"
            multiline
            numberOfLines={5}
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