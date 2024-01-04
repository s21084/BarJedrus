import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const editDayDishComponent: React.FC = () => {
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
            <Text>Edit Open/Close Hours</Text>
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
                <Button title="Save" onPress={handleSave} />
    
                {/* Cancel Button */}
                <Button title="Cancel" onPress={() => setIsOpenModal(false)} />
              </View>
            </View>
          </Modal>
        </View>
      );
    };
    

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        },
        modalContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
          backgroundColor: 'white',
          padding: 200,
          borderRadius: 10,
          elevation: 5,
        },
      });
      
      export default editDayDishComponent;