import { useSearchParams, Link, useRouter } from "expo-router";
import { Text, View, Switch, StyleSheet, TextInput, Pressable} from 'react-native';
import { useEffect, useState } from 'react';
import { useSubApi } from '../../lib/api/subscribtion';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from "../../context/AuthContext";
import { usePersonApi } from '../../lib/api/person';




export default function SubscriberScreen (){
    const { id } = useSearchParams();
    //@ts-ignore
    const { getSubscription } = useSubApi();
    const { deleteSub } = useSubApi();
    //@ts-ignore
    const { editPerson } = usePersonApi();
    const { editSubscription } = useSubApi();
    const [lastMonthPayed, setLastMonthPayed] = useState('');
    const [dishType, setDishType] = useState('');
    const [countOfDish, setCountOfDish] = useState('');
    const [onPlace, setOnPlace] = useState('');
    const [notes, setNotes] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [surname, setSurname] = useState('');
    const [personId, setPersonId] = useState('');
    const [adressId, setAdressId] = useState('')

    const router = useRouter();
    const { authToken } = useAuth();

    const onSubDelete = async () => {
        const DeleteSub = async () => {
            await deleteSub( id as string );
        }
        DeleteSub()
          router.back();
      };

      const { mutate, isError, error, status } = useMutation({

        mutationFn: editSubscription
      
      });

      const onSave = async () => {
        // @ts-ignore
        const countOfDishNum = Number(countOfDish)
          mutate({ id: id, data: {lastMonthPayed: lastMonthPayed, dishType: dishType, countOfDish: countOfDishNum, onPlace: onPlace, notes: notes } });
          const EditPerson = async () => {
            await editPerson({ id: personId, data: { name: name, surname: surname, phone: phone } });
        }
        EditPerson()
        router.back();
      };






    useEffect(() => {
        const fetchSub = async () => {
            const res = await getSubscription( id as string );
            setPersonId(res.personId)
            setLastMonthPayed(res.lastMonthPayed);
            setDishType(res.dishType);
            setCountOfDish(res.countOfDish);
            setOnPlace(res.onPlace);
            setPhone(res.person.phone)
            setNotes(res.notes);
            setName(res.person.name);
            setSurname(res.person.surname);
            setAdressId(res.person.adressId)
            
        }
        fetchSub()
    }, [])
    

    return (
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
          {onPlace && <Text>Adress: {adressId}</Text>}
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
                    <Pressable style={styles.button} onPress={onSave}>
                        <Text style={styles.buttonText}>Zapisz</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={onSubDelete}>
                        <Text style={styles.buttonText}>Usuń</Text>
                    </Pressable>
                </View>
                </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EAECCC',
        flex: 1,
        alignItems: 'center'
    },
    input: {
        padding: 5,
        width: 500,
        borderColor: '#DBCC95',
        margin: 5,
        backgroundColor: '#EAECCC',
        borderRadius:5,
      },
    eventContainer: {
        backgroundColor: '#DBCC95',
        padding: 50,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center'
    },
    hedders: {
        fontSize:15,
        fontWeight: "normal",
        padding: 3
    },
    value: {
        fontSize:20,
        fontStyle: "italic"
    },
    buttonText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 16,
      },
    button: {
        backgroundColor: '#CD8D7A',
        padding: 10,
        margin: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
      },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
      },
});