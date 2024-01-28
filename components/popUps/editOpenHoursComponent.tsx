import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import { useInfoBarApi } from "../../lib/api/infoBar";
import { useMutation } from '@tanstack/react-query';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const editOpenHoursComponent: React.FC = () => {
    // State variables
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [newHours, setNewDishes] = useState({
      open: '',
      close: '',
    });
     //@ts-ignore
    const { getInfoBar } = useInfoBarApi();
     //@ts-ignore
    const { editInfoBar } = useInfoBarApi();
    const [startHour, setStartHour] = useState('');
    const [endHour, setEndHour] = useState('');
    const [bonusNote, setBonusNote] = useState('');
  
    useEffect(() => {
      const fetchInfo = async () => {
          const res = await getInfoBar("1");
          console.log("Informacje o barze: ", res);

          setStartHour(new Date(res.startHour));
          setEndHour(new Date(res.endHour));
          if(res.bonusNote == null){
            setBonusNote('');
          }else{
            setBonusNote(res.bonusNote);
          }
          
      }
      fetchInfo()
  }, [])

  const { mutate, isError, error, status } = useMutation({

    mutationFn: editInfoBar
  
  });

    // Function to handle the save button click
    const handleSave = () => {
      const startHourForm = new Date(startHour);
      const endHourForm = new Date(endHour);
      //@ts-ignore
        mutate({ startHour: startHourForm, endHour: endHourForm, bonusNote: bonusNote});
        console.log("status ", status)
      setIsOpenModal(false);
    };

    

    return (
        <View style={styles.container}>
          <Pressable onPress={() => setIsOpenModal(true)}>
            <View style={styles.buttonBack}>
            <Text>Edytuj informacje o godzinach pracy baru</Text>
            </View>
          </Pressable>
    
          <Modal visible={isOpenModal} transparent animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text>Edytuj informacje o godzinach pracy bary</Text>
    
                {/* Open Hour Input */}
                {/* <TextInput
              style={styles.input}
              placeholder="Godzina otwarcia"
              value={startHour}
              onChangeText={newText => setStartHour(newText)}
            /> */}
            <Text>Godzina otwarcia:</Text>
             <DatePicker
            selected={startHour}
            onChange={date => setStartHour(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeFormat="HH:mm"
            dateFormat="HH:mm"
          />
          <Text>Godzina zamknięcia:</Text>
          <DatePicker
            selected={endHour}
            onChange={date => setEndHour(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeFormat="HH:mm"
            dateFormat="HH:mm"
          />
            {/* <TextInput
              style={styles.input}
              placeholder="Godzina zamknięcia"
              value={endHour}
              onChangeText={newText => setEndHour(newText)}
            /> */}
            <TextInput
              style={styles.input}
              placeholder="Dodatkowe informacje"
              value={bonusNote}
              onChangeText={newText => setBonusNote(newText)}
            />
    
                {/* Save Button */}
                <Pressable onPress={handleSave} style={styles.sortButton}>
                  <Text>Zapisz</Text>
                </Pressable>
    
                {/* Cancel Button */}
                <Pressable onPress={() => setIsOpenModal(false)} style={styles.sortButton}>
                  <Text>Anuluj</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      );
    };
    

    const styles = StyleSheet.create({
        container: {
            padding: 25,
            marginVertical: 5,
            marginHorizontal: 5,
            backgroundColor: '#47CE83',
            borderRadius: 5, 
            overflow: 'hidden',
        },
        input: {
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginBottom: 10,
          width: '100%',
        },
        buttonBack: {
            padding: 25,
            marginVertical: 5,
            marginHorizontal: 5,
            backgroundColor: '#47CE83',
            borderRadius: 5, 
            overflow: 'hidden',
        },
        modalContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
          backgroundColor: 'white',
          padding: 150,
          borderRadius: 5,
          elevation: 5,
        },
        sortButton: {
          padding: 5,
          backgroundColor: '#ACBFA4',
          borderRadius:5,
          borderColor: 'black',
          borderWidth: 2,
          margin: 5
        },
      });
      
      export default editOpenHoursComponent;