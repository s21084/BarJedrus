import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

const editOpenHoursComponent: React.FC = () => {
    // State variables
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [newHours, setNewDishes] = useState({
      open: '',
      close: '',
    });
  
    // Function to handle the save button click
    const handleSave = () => {
      // Handle save logic here
      // Close the modal
      setIsOpenModal(false);
    };

    const handleChange = (field: keyof typeof newHours, value: string) => {
      setNewDishes((prev) => ({ ...prev, [field]: value }));
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
                <TextInput
              style={styles.input}
              placeholder="Godzina otwarcia"
              value={newHours.open}
              onChangeText={(text) => handleChange('open', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Godzina zamknięcia"
              value={newHours.close}
              onChangeText={(text) => handleChange('close', text)}
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
      });
      
      export default editOpenHoursComponent;