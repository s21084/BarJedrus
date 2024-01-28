import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  Switch
} from 'react-native';
import {useMutation  } from '@tanstack/react-query'
import { useEventApi } from '../../lib/api/events';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';





export default function NewEvent() {
  //@ts-ignore
  const { createEvent } = useEventApi();
  //const [text, setText] = useState('');
  const router = useRouter();
const [name, setName] = useState('');
const [decoration, setDecoration] = useState();
const [date, setDate] = useState(new Date());
const [vegeCount, setVegeCount] = useState('');
const [meatCount, setMeatCount] = useState('');
const [prePay, setPrePay] = useState('');
const [notes, setNotes] = useState('');
const [priceFull, setPriceFull] = useState('');



  const { mutate, isError, error} = useMutation({
    mutationFn: createEvent,
  });

  const onEventPress = async () => {
    console.log("decoration before ", decoration)
    if(decoration !== true){setDecoration(false)}
    console.log("decoration ", decoration)
    const vegeCountNum = Number(vegeCount);
    const meatCountNum = Number(meatCount);
    const prePayNum = Number(prePay);
    const priceFullNum = Number(priceFull); 
    const isoDateNotDate = date.toISOString()
    const isoDate = new Date(isoDateNotDate)
    const informationBar = 1;
     //@ts-ignore
    mutate({name: name, date: isoDate, decoration: decoration, vegeCount: vegeCountNum, meatCount: meatCountNum, prePay: prePayNum, priceFull: priceFullNum, notes: notes, informationBarId: informationBar});
    console.log(error);
    //router.back();

  };
  

 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white',  }}>
      <View style={styles.container}>

        <View style={styles.inputContainer}>
        <Text>Nazwa wydarzenia: </Text>
        <TextInput
            style = {styles.input}
            value={name}
            onChangeText={newText => setName(newText)}
            placeholder="Nazwa wydarzenia"
          />
          <Text>Czy bar ma przygotować dekoracje: </Text>
          <View style={{flexDirection: 'row', margin: 5}}>
          <Switch
            trackColor={{ true: '#81b0ff', false: '#767577'}}
            thumbColor={decoration ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
             //@ts-ignore
            onValueChange={newText => setDecoration(newText)}
             //@ts-ignore
            value={decoration}
            style={{margin: 5}}
          />
          <TextInput
            value={decoration ? 'tak': 'nie'}
             //@ts-ignore
            editable="false"
            placeholder="Dekoracje"
            style={{margin: 5}}
          />
          </View>
          <Text>Data i godzina: </Text>
          <DatePicker
            selected={date}
             //@ts-ignore
            onChange={date => setDate(date)}
            showTimeSelect
            timeIntervals={15}
            timeFormat="HH:mm"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
       
          <TextInput
          style = {styles.input}
            value={vegeCount}
            onChangeText={newText => setVegeCount(newText.replace(/[^0-9]/g, ''))}
            placeholder="Osoby wegetariańskie (podaj liczbę)"
            keyboardType="numeric"
          />
          <TextInput
          style = {styles.input}
            value={meatCount}
            onChangeText={newText => setMeatCount(newText.replace(/[^0-9]/g, ''))}
            placeholder="Łączna ilość osób (podaj liczbę)"
          />
          <TextInput
          style = {styles.input}
            value={prePay}
            onChangeText={newText => setPrePay(newText.replace(/[^0-9]/g, ''))}
            placeholder="Przedwpłata (true false)"
          />
          <TextInput
          style = {styles.input}
            value={priceFull}
            onChangeText={newText => setPriceFull(newText.replace(/[^0-9]/g, ''))}
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
    margin: 5
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
  customDatePicker: {
    /* Styles for the date picker input */
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#333',
  },
  customDatePickerWrapper: {
    /* Styles for the date picker wrapper */
    display: 'flex',
  },
  customCalendar: {
    /* Styles for the calendar popover */
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#333',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
  },
  
});