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
import { Link, useSearchParams, useRouter } from "expo-router";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDayDishApi } from '../../lib/api/dayDish';


const editDayDishComponent: React.FC<{}> = () => {
    //@ts-ignore
    const { getDayDish } = useDayDishApi();
    //@ts-ignore
    const { editDayDish } = useDayDishApi();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const id  = "1";
    const [soup, setSoup] = useState('');
    const [secondDish, setSecondDish] = useState('');
    const [price, setPrice] = useState('');
    const router = useRouter();
    const queryClient = useQueryClient();
  
    useEffect(() => {
      const fetchDish = async () => {
          const res = await getDayDish( id as string );
          setSoup(res.soup);
          setSecondDish(res.secondDish);
          setPrice(res.price);
      }
      fetchDish()
  }, [])
    const { mutate, isError, error, status } = useMutation({

      mutationFn: editDayDish,
      onSuccess: (data) => {
        queryClient.invalidateQueries( {queryKey: ['dayDishes']});
        queryClient.setQueryData(['dayDishes'], (existingDayDishes: any)=>([data, ...existingDayDishes]))
    
      }
    
    });
    // Handler to save changes and close the popup
    const handleSave = () => {
      //@ts-ignore
      mutate({ id: id, data: { soup: soup, secondDish: secondDish, price:price } });
      console.log("Sprawdzam status: ", status)
      console.log(error)
        // Close the modal
        setIsOpenModal(false);
    };
  
    return (
      
        <View style={styles.container}>
        <Pressable onPress={() => setIsOpenModal(true)}>
          <View style={styles.buttonBack}>
            <Text>Edytuj danie dnia</Text>
            </View>
            </Pressable>
            <Modal visible={isOpenModal} transparent animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text>Edytuj informacje daniu dnia</Text>
            <TextInput
              style={styles.input}
              placeholder="Wprowadź zupy"
              value={soup}
              multiline
              numberOfLines={2}
              onChangeText={newText => setSoup(newText)}
            />
            <TextInput
              style={styles.input}
              placeholder="Wprowadź drugie dania"
              value={secondDish}
              multiline
              numberOfLines={2}
              onChangeText={newText => setSecondDish(newText)}
            />
              <TextInput
              style={styles.input}
              placeholder="Cena dania dnia"
              value={price}
              keyboardType="numeric"
              //@ts-ignore
              onChangeText={newNumber => setPrice(Number(newNumber.replace(/[^0-9]/g, '')))}
            />
  
            {/* Buttons */}
            
            <Pressable onPress={handleSave} style={styles.sortButton}>
              <Text>Zapisz</Text>
            </Pressable>
            <Pressable onPress={() => setIsOpenModal(false)} style={styles.sortButton}>
              <Text>Anuluj</Text>
            </Pressable>
            </View>
            </View>
            </Modal>
          </View>
              );
  };
  
  // Styles
  const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        borderWidth: 2,
        marginHorizontal: 5,
        borderRadius: 5, 
        overflow: 'hidden',
        width:100,
        height: 50,
        justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CD8D7A',
    },
    sortButton: {
      padding: 5,
      backgroundColor: '#DBCC95',
      borderRadius:5,
      margin: 5
    },
    buttonBack: {
        marginVertical: 5,
        marginHorizontal: 5,
        padding: 5,
        backgroundColor: '#DBCC95',
        borderRadius: 5, 
        overflow: 'hidden',
    },
    input: {
        borderWidth: 1,
        borderColor: '#DBCC95',
        backgroundColor: '#EAECCC',
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
  Pressable,
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

          <Pressable style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
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