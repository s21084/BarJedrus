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


export default function NewDish() {
  
  const router = useRouter();

const [name, setName] = useState('');
const [priceForPiece, setPriceForPiece] = useState('');
const [priceForWeight, setPriceForWeight] = useState('');





  
 

  const onEventPress = async () => {
    
      // setText('');
      // router.back();
  };
  const handleChange = () => {
    
  };
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>

        <View style={styles.inputContainer}>
        <TextInput
            style = {styles.input}
            value={name}
            placeholder="Nazwa nowego dania"
          />
          <TextInput
          style = {styles.input}
            value={priceForPiece}
            placeholder="Cena za porcję"
          />
          <TextInput
          style = {styles.input}
            value={priceForWeight}
            placeholder="Cena za wagę"
          />
          
        </View>
        <View style={styles.buttonContainer}>
        <Pressable onPress={onEventPress} style={styles.button}>
            <Text style={styles.buttonText}>Zapisz</Text>
          </Pressable>
          <Link href="../" style={styles.button}>
          <Text style={styles.buttonText}>Anuluj</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#262626',
    padding: 10,
    margin: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: '#E2E8CE',
    fontWeight: '600',
    fontSize: 16,
  },
  inputContainer: {
  },
  input: {
    padding: 5,
    width: 500,
    borderColor: '#262626',
    margin: 5,
    backgroundColor: '#E2E8CE',
    borderRadius:5,
  },
});