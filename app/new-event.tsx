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
const [name, setName] = useState('');
const [decoration, setDecoration] = useState('');
const [date, setDate] = useState('');
const [vegeCount, setVegeCount] = useState('');
const [meatCount, setMeatCount] = useState('');
const [prePay, setPrePay] = useState('');
const [notes, setNotes] = useState('');
const [priceFull, setPriceFull] = useState('');

  const { mutate, isError, error} = useMutation({
    mutationFn: createEvent,
  });

  const onEventPress = async () => {
    const decoBool = decoration as unknown as boolean;
    const vegeCountNum = parseInt(vegeCount);
    const meatCountNum = parseInt(meatCount);
    const prePayBool = prePay as unknown as boolean;
    const priceFullNum = parseInt(priceFull);
    const dateType = new Date(date);
    mutate({name: name, date: dateType, decoration: decoBool, vegeCount: vegeCountNum, meatCount: meatCountNum, prePay: prePayBool, priceFull: priceFullNum, notes: notes});
    console.log(isError);
    //router.back();

  };
  
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text>Z JAKIEGOŚ POWODU MI NIE CHCE WARTOŚCI NA BOOLEAN ZAMIENIC</Text>
      <View style={styles.container}>

        <View style={styles.inputContainer}>
        <TextInput
            style = {styles.input}
            value={name}
            onChangeText={newText => setName(newText)}
            placeholder="Nazwa wydarzenia"
          />
          <TextInput
          style = {styles.input}
            value={decoration}
            onChangeText={newText => setDecoration(newText)}
            placeholder="Dekoracje"
          />
          <TextInput
          style = {styles.input}
            value={date}
            onChangeText={newText => setDate(newText)}
            placeholder="dd-mm-rrrr"
            numberOfLines={5}
          />
          <TextInput
          style = {styles.input}
            value={vegeCount}
            onChangeText={newText => setVegeCount(newText)}
            placeholder="Osoby wegetariańskie (podaj liczbę)"
            numberOfLines={5}
          />
          <TextInput
          style = {styles.input}
            value={meatCount}
            onChangeText={newText => setMeatCount(newText)}
            placeholder="Łączna ilość osób (podaj liczbę)"
          />
          <TextInput
          style = {styles.input}
            value={prePay}
            onChangeText={newText => setPrePay(newText)}
            placeholder="Przedwpłata (true false)"
          />
          <TextInput
          style = {styles.input}
            value={priceFull}
            onChangeText={newText => setPriceFull(newText)}
            placeholder="Pełna cena (podaj tylko liczbę)"
          />
          <TextInput
          style = {styles.input}
            value={notes}
            onChangeText={newText => setNotes(newText)}
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