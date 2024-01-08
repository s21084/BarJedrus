import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';



export default function NewTweet() {
  const [text, setText] = useState('');
  const router = useRouter();
  const [newEvents, setNewEvents] = useState({
      name: '',
      decoration: '',
      date: '',
      vegeCount: '',
      meatCount: '',
      prePay: '',
      priceFull: '',
      notes: '',
  });


  
 

  const onEventPress = async () => {
      setText('');
      router.back();
  };
  const handleChange = (field: keyof typeof newEvents, value: string) => {
    
    setNewEvents((prev) => ({ ...prev, [field]: value }));
  };
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 18 }}>
            Cancel
          </Link>
          <Pressable onPress={onEventPress} style={styles.button}>
            <Text style={styles.buttonText}>Zapisz</Text>
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
        <TextInput
            value={newEvents.name}
            onChangeText={(text) => handleChange('name', text)}
            placeholder="Nazwa wydarzenia"
          />
          <TextInput
            value={newEvents.decoration}
            onChangeText={(text) => handleChange('decoration', text)}
            placeholder="Dekoracje"
          />
          <TextInput
            value={newEvents.date}
            onChangeText={(text) => handleChange('date', text)}
            placeholder="Data"
            numberOfLines={5}
          />
          <TextInput
            value={newEvents.vegeCount}
            onChangeText={(text) => handleChange('vegeCount', text)}
            placeholder="Osoby wegetariańskie"
            numberOfLines={5}
          />
          <TextInput
            value={newEvents.meatCount}
            onChangeText={(text) => handleChange('meatCount', text)}
            placeholder="Łączna ilość osób"
          />
          <TextInput
            value={newEvents.prePay}
            onChangeText={(text) => handleChange('prePay', text)}
            placeholder="Przedwpłata"
          />
          <TextInput
            value={newEvents.priceFull}
            onChangeText={(text) => handleChange('priceFull', text)}
            placeholder="Pełna cena"
          />
          <TextInput
            value={newEvents.notes}
            onChangeText={(text) => handleChange('notes', text)}
            placeholder="Notatki"
            multiline
            numberOfLines={5}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1C9BF0',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
});