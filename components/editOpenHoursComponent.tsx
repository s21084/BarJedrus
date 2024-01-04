import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const editOpenHoursComponent: React.FC = () => {
    // State variables
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [openHour, setOpenHour] = useState(new Date());
    const [closeHour, setCloseHour] = useState(new Date());
  
    // Function to handle the save button click
    const handleSave = () => {
      // Handle save logic here
      console.log('Open Hour:', openHour);
      console.log('Close Hour:', closeHour);
  
      // Close the modal
      setIsOpenModal(false);
    };
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setIsOpenModal(true)}>
            <View style={styles.buttonBack}>
            <Text>Edytuj informacje o godzinach pracy bary</Text>
            </View>
          </TouchableOpacity>
    
          <Modal visible={isOpenModal} transparent animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text>Edit Open/Close Hours</Text>
    
                {/* Open Hour Input */}
                <Text>Open Hour:</Text>
                <DateTimePicker
                  value={openHour}
                  mode="time"
                  display="default"
                  onChange={(event, selectedDate) => setOpenHour(selectedDate || openHour)}
                />
    
                {/* Close Hour Input */}
                <Text>Close Hour:</Text>
                <DateTimePicker
                  value={closeHour}
                  mode="time"
                  display="default"
                  onChange={(event, selectedDate) => setCloseHour(selectedDate || closeHour)}
                />
    
                {/* Save Button */}
                <Button title="Zapisz" onPress={handleSave} />
    
                {/* Cancel Button */}
                <Button title="Anuluj" onPress={() => setIsOpenModal(false)} />
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
      });
      
      export default editOpenHoursComponent;