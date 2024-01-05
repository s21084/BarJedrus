import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


const editDayDishComponent: React.FC<{}> = () => {
    // State to hold form data
    
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [newDishes, setNewDishes] = useState({
      soup: '',
      secondDish: '',
    });
  
  
    // Handler to save changes and close the popup
    const handleSave = () => {
    
        // Close the modal
        setIsOpenModal(false);
    };
    const handleChange = (field: keyof typeof newDishes, value: string) => {
        setNewDishes((prev) => ({ ...prev, [field]: value }));
      };
  
    return (
      
        <View style={styles.container}>
        <TouchableOpacity onPress={() => setIsOpenModal(true)}>
          <View style={styles.buttonBack}>
            <Text>Edytuj danie dnia</Text>
            </View>
            </TouchableOpacity>
            {/* Form */}
            <Modal visible={isOpenModal} transparent animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Nowa zupa"
              value={newDishes.soup}
              onChangeText={(text) => handleChange('soup', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Nowe drugie danie"
              value={newDishes.secondDish}
              onChangeText={(text) => handleChange('secondDish', text)}
            />
  
            {/* Buttons */}
            
            <Button title="Zapisz" onPress={handleSave} />
            
            <Button title="Anuluj" onPress={() => setIsOpenModal(false)} />
            </View>
            </View>
            </Modal>
          </View>
              );
  };
  
  // Styles
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
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
  
      export default editDayDishComponent;


      /*
      import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// Define the component
const ChangeDishesPopup: React.FC<{
  isVisible: boolean;
  onClose: () => void;
  onSave: (newDishes: { breakfast: string; lunch: string; dinner: string }) => void;
}> = ({ isVisible, onClose, onSave }) => {
  // State to hold form data
  const [newDishes, setNewDishes] = useState({
    breakfast: '',
    lunch: '',
    dinner: '',
  });

  // Handler to update form data
  const handleChange = (field: keyof typeof newDishes, value: string) => {
    setNewDishes((prev) => ({ ...prev, [field]: value }));
  };

  // Handler to save changes and close the popup
  const handleSave = () => {
    onSave(newDishes);
    onClose();
  };

  return (
    <Modal transparent={true} animationType="slide" visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.headerText}>Change Dishes of the Day</Text>

          <TextInput
            style={styles.input}
            placeholder="New Breakfast"
            value={newDishes.breakfast}
            onChangeText={(text) => handleChange('breakfast', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="New Lunch"
            value={newDishes.lunch}
            onChangeText={(text) => handleChange('lunch', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="New Dinner"
            value={newDishes.dinner}
            onChangeText={(text) => handleChange('dinner', text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// Styles
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ChangeDishesPopup;
      
      */