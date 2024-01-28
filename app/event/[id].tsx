import { useSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { useEventApi } from "../../lib/api/events";
import { useEffect, useState } from 'react';

export default function EventScreen (){
    const { id } = useSearchParams();
    
    //@ts-ignore
    const { getEvent } = useEventApi();
    //@ts-ignore
    const { editEvent } = useEventApi();
    //@ts-ignore
    const { deleteEvent } = useEventApi();
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [decoration, setDecoration] = useState('');
    const [vegeCount, setVegeCount] = useState('');
    const [prePay, setPrePay] = useState('');
    const [notes, setNotes] = useState('');
    const [priceFull, setPriceFull] = useState('');
    const [meatCount, setMeatCount] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchEv = async () => {
            const res = await getEvent( id as string );
            console.log(res)
            setName(res.name);
            setDate(res.date);
            setDecoration(res.decoration);
            setVegeCount(res.vegeCount);
            setPrePay(res.prePay);
            setNotes(res.notes);
            setPriceFull(res.priceFull);
            setMeatCount(res.meatCount);
            
        }
        fetchEv()
    }, [])


    const { mutate, isError, error, status } = useMutation({

        mutationFn: editEvent
      
      });


      const onEventSave = async () => {
        let decorationBool = false;
        if(decoration == 'true'){
            decorationBool = true;
        }
        const prePayNum = Number(prePay)
        const vegeCountNum = Number(vegeCount)
        const dateFormat = new Date(date);
        const meatCountNum = Number(meatCount)
        const priceFullNum = Number(priceFull)
        //@ts-ignore
          mutate({ id: id as string, data: { name: name, date: date, decoration: decorationBool, vegeCount: vegeCountNum, meatCount: meatCountNum, prePay: prePayNum, priceFull: priceFullNum, notes: notes } });
          router.back();
      };
      const onEventDelete = async () => {
          const DeleteDish = async () => {
              await deleteEvent( id as string );
          }
          DeleteDish()
            router.back();
        };


    return (
        <View style={styles.container}>  
            <View style={styles.eventContainer}>
                <Text>Nazwa</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setName(newText)}
            defaultValue={name}
            placeholder="Nazwa"
            />
            <Text>Data</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setDate(newText)}
            defaultValue={date}
            placeholder="Data"
            />
            <Text>Czy przygotować dekoracje?</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setDecoration(newText)}
            defaultValue={decoration}
            placeholder="Czy przygotować dekoracje?"
            />
            <Text>Ilość osób mięsnych</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setMeatCount(newText)}
            defaultValue={meatCount}
            placeholder="Ilość osób mięsnych"
            /> 
            <Text>Ilość osób veg</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setVegeCount(newText)}
            defaultValue={vegeCount}
            placeholder="Ilość osób vege"
            /> 
            <Text>Przedwpłata</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setPrePay(newText)}
            defaultValue={prePay}
            placeholder="Przedwpłata"
            />
            <Text>Pełna cena</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setPriceFull(newText)}
            defaultValue={priceFull}
            placeholder="Pełna cena"
            />
            <Text>Notatki</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setNotes(newText)}
            defaultValue={notes}
            placeholder="Notatki"
            multiline
            />
            </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={onEventSave}>
                        <Text style={styles.buttonText}>Edytuj</Text>
                    </Pressable>
                    <Pressable  onPress={onEventDelete}>
                        <Text style={styles.buttonText}>Usuń</Text>
                    </Pressable>
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
    eventContainer: {
        backgroundColor: '#E2E8CE',
        padding: 50,
        margin: 5,
        borderRadius: 5,
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