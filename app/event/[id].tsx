//@ts-nocheck
import { useSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, TextInput, Switch, Pressable} from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { useEventApi } from "../../lib/api/events";
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
            setDate(new Date(res.date));
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
        const isoDateNotDate = date.toISOString()
        const isoDate = new Date(isoDateNotDate)
        const informationBar = 1;
        const meatCountNum = Number(meatCount)
        const priceFullNum = Number(priceFull)
        //@ts-ignore
          mutate({ id: id as string, data: {name: name, date: isoDate, decoration: decoration, vegeCount: vegeCountNum, meatCount: meatCountNum, prePay: prePayNum, priceFull: priceFullNum, notes: notes, informationBarId: informationBar} });
          router.back();
      };


      
      const onEventDelete = async () => {
          const DeleteEvent = async () => {
              await deleteEvent( id as string );
          }
          DeleteEvent()
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
            <Text>Data i godzina: </Text>
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
            showTimeSelect
            timeIntervals={15}
            timeFormat="HH:mm"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
            <Text>Czy przygotować dekoracje?</Text>
            <View style={{flexDirection: 'row', margin: 5}}>
          <Switch
            trackColor={{ true: '#81b0ff', false: '#767577'}}
            thumbColor={decoration ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            // @ts-ignore
            onValueChange={newText => setDecoration(newText)}
            // @ts-ignore
            value={decoration}
            style={{margin: 5}}
          />
          <TextInput
            value={decoration ? 'tak': 'nie'}
            // @ts-ignore
            editable="false"
            placeholder="Dekoracje"
            style={{margin: 5}}
          />
          </View>
            <Text>Ilość osób mięsnych</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setMeatCount(newText.replace(/[^0-9]/g, ''))}
            value={meatCount}
            placeholder="Ilość osób mięsnych"
            /> 
            <Text>Ilość osób veg</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setVegeCount(newText.replace(/[^0-9]/g, ''))}
            value={vegeCount}
            placeholder="Ilość osób vege"
            /> 
            <Text>Przedwpłata</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setPrePay(newText.replace(/[^0-9]/g, ''))}
            value={prePay}
            placeholder="Przedwpłata"
            />
            <Text>Pełna cena</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setPriceFull(newText.replace(/[^0-9]/g, ''))}
            value={priceFull}
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
                    <Pressable style={styles.button} onPress={onEventDelete}>
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
    eventContainer: {
        backgroundColor: '#DBCC95',
        padding: 50,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center'
    },
    input: {
        padding: 5,
        width: 500,
        borderColor: '#EAECCC',
        margin: 5,
        backgroundColor: '#ACBFA4',
        borderRadius:5,
      },
    value: {
        fontSize:20,
        fontStyle: "italic"
    },
    buttonText: {
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