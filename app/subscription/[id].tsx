import { useSearchParams, Link } from "expo-router";
import { Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import { useEffect, useState } from 'react';
import { getSubscription } from '../../lib/api/subscribtion';





export default function SubscriberScreen (){
    const { id } = useSearchParams();

    // const {data, isLoading, error} = useQuery({
    //     queryKey: ['subscription', id],
    //     queryFn: () => getSubscription(id as string)
    // })
    const [lastMonthPayed, setLastMonthPayed] = useState('');
    const [dishType, setDishType] = useState('');
    const [countOfDish, setCountOfDish] = useState('');
    const [onPlace, setOnPlace] = useState('');
    const [notes, setNotes] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    useEffect(() => {
        const fetchSub = async () => {
            const res = await getSubscription( id as string );
            
            setLastMonthPayed(res.lastMonthPayed);
            setDishType(res.dishType);
            setCountOfDish(res.countOfDish);
            setOnPlace(res.onPlace);
            setNotes(res.notes);
            setName(res.person.name);
            setSurname(res.person.surname);
            
        }
        fetchSub()
    }, [])
    
    // if(isLoading){
    //     return <ActivityIndicator />
    // }
    // if(error){
    //     return <Text>Wydarzenie nie znalezione</Text>
    // }



                console.log(event);
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
            <TextInput
            style = {styles.input}
            onChangeText={newText => setDishType(newText)}
            defaultValue={dishType}
            placeholder="Rodzaj obiadu"
            />
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
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Edytuj</Text>
                    </Pressable>
                    <Link href="../" style={styles.button}>
                        <Text style={styles.buttonText}>Usuń</Text>
                    </Link>
                </View>
                </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ACBFA4',
        flex: 1,
        alignItems: 'center'
    },
    input: {
        padding: 5,
        width: 500,
        borderColor: '#262626',
        margin: 5,
        backgroundColor: '#ACBFA4',
        borderRadius:5,
      },
    eventContainer: {
        backgroundColor: '#E2E8CE',
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
        color: '#E2E8CE',
        fontWeight: '600',
        fontSize: 16,
      },
    button: {
        backgroundColor: '#262626',
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