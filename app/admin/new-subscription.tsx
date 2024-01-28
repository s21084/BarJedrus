import { useSearchParams, Link, useRouter } from "expo-router";
import { Text, View, Switch, StyleSheet, SafeAreaView, TextInput, Pressable} from 'react-native';
import { useEffect, useState } from 'react';
import { useSubApi } from '../../lib/api/subscribtion';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from "../../context/AuthContext";
import { usePersonApi } from '../../lib/api/person';


export default function NewSub() {
  
  const { id } = useSearchParams();
    //@ts-ignore
    const { createSubscription } = useSubApi();
    //@ts-ignore
    const { createPerson } = usePersonApi();
    const [lastMonthPayed, setLastMonthPayed] = useState('');
    const [dishType, setDishType] = useState();
    const [countOfDish, setCountOfDish] = useState('');
    const [onPlace, setOnPlace] = useState();
    const [notes, setNotes] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [surname, setSurname] = useState('');
    const [personId, setPersonId] = useState('');
    const [Street, setStreet] = useState('');
    const [HomeNumber, setHomeNumber] = useState('');
    const [FlatNumber, setFlatNumber] = useState('');
    const [City, setCity] = useState('');
    const router = useRouter();
    const { authToken } = useAuth();


    const { mutate, isError, error, status } = useMutation({

      mutationFn: createSubscription
    
    });
 

  const onSubPress = async () => {
    const countOfDishNum = Number(countOfDish)
    if(onPlace !== true){setOnPlace(false)}
    if(dishType !== true){setDishType(false)}
          const res = await createPerson({name: name, surname: surname, phone: phone, Street: Street, HomeNumber:HomeNumber, FlatNumber: FlatNumber, City:City });
          
       const personId = res.id
       console.log("personId", personId)
       console.log("Adress ", Street)
           mutate({lastMonthPayed: lastMonthPayed, dishType: dishType, countOfDish: countOfDishNum, onPlace: onPlace, notes: notes, personId: personId });
        
        
         router.back();
  };
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>  
            <View style={styles.eventContainer}>
            <Text>Imię:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setName(newText)}
            defaultValue={name}
            placeholder="Imie"
            />
            <Text>Nazwisko:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setSurname(newText)}
            defaultValue={surname}
            placeholder="Nazwisko"
            />
            <Text>Telefon:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setPhone(newText)}
            defaultValue={phone}
            placeholder="Telefon"
            />
            <Text>Wykupiony miesiąc:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setLastMonthPayed(newText)}
            defaultValue={lastMonthPayed}
            placeholder="Ostatni miesiąc zapłacony"
            />
            <Text>Ilość wykupionych posiłków:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setCountOfDish(newText)}
            defaultValue={countOfDish}
            placeholder="Ilość posiłków wykupionych"
            />
            <Text>Rodzaj obiad (pełny lub połówka):</Text>
            <View style={{flexDirection: 'row', margin: 5}}>
            <Switch
            trackColor={{ true: '#81b0ff', false: '#767577'}}
            thumbColor={dishType ? '#f5dd4b' : '#f5dd4b'}
            ios_backgroundColor="#3e3e3e"
            // @ts-ignore
            onValueChange={newText => setDishType(newText)}
            // @ts-ignore
            value={dishType}
            style={{margin: 5}}
          />
          <TextInput
            value={dishType ? 'Połówka': 'Cały'}
            // @ts-ignore
            editable="false"
            placeholder="Dekoracje"
            style={{margin: 5}}
          />
          </View>
          <Text>Lokalizacja:</Text>
          <View style={{flexDirection: 'row', margin: 5}}>
            <Switch
            trackColor={{ true: '#81b0ff', false: '#767577'}}
            thumbColor={onPlace ? '#f5dd4b' : '#f5dd4b'}
            ios_backgroundColor="#3e3e3e"
            // @ts-ignore
            onValueChange={newText => setOnPlace(newText)}
            // @ts-ignore
            value={onPlace}
            style={{margin: 5}}
          />
          <TextInput
            value={onPlace ? 'Wyjazd': 'Na miejscu'}
            // @ts-ignore
            editable="false"
            placeholder="Dekoracje"
            style={{margin: 5}}
          />
          </View>
          {onPlace && 
          <>
          <Text>Ilość wykupionych posiłków:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setStreet(newText)}
            defaultValue={Street}
            placeholder="Nazwa ulicy"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setHomeNumber(newText)}
            defaultValue={HomeNumber}
            placeholder="Numer domu"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setFlatNumber(newText)}
            defaultValue={FlatNumber}
            placeholder="Nazwa ulicy"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setCity(newText)}
            defaultValue={City}
            placeholder="Nazwa ulicy"
            />
          </>}
            <Text>Notatki:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setNotes(newText)}
            defaultValue={notes}
            placeholder="Notatki"
            multiline
            />
            </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={onSubPress}>
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