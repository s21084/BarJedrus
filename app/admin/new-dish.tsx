
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
} from 'react-native';
import {  useMutation, useQueryClient } from '@tanstack/react-query';
import { useDishApi } from '../../lib/api/dish';

export default function NewDish() {
const [name, setName] = useState('');
const [priceForPiece, setPriceForPiece] = useState('');
const [priceForWeight, setPriceForWeight] = useState('');
const router = useRouter();
const queryClient = useQueryClient();
 //@ts-ignore
const { createDish } = useDishApi();

const { mutate, isError, error, status } = useMutation({
  
  mutationFn: createDish
  

});


  const onDishPress = async () => {
    const pricePieceNum = Number(priceForPiece);
    const priceWeightNum = Number(priceForWeight);
      mutate({ name: name, priceForPiece: pricePieceNum, priceForWeight: priceWeightNum})
      console.log("Sprawdzam status: ", status)
      console.log(error)
      router.back()
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EAECCC' }}>
      <View style={styles.container}>

        <View style={styles.inputContainer}>
        <TextInput
            style = {styles.input}
            value={name}
            placeholder="Nazwa nowego dania"
            onChangeText={newText => setName(newText)}
          />
          <TextInput
          style = {styles.input}
            value={priceForPiece}
            placeholder="Cena za porcję"
            onChangeText={newText => setPriceForPiece(newText.replace(/[^0-9]/g, ''))}
          />
          <TextInput
          style = {styles.input}
            value={priceForWeight}
            placeholder="Cena za wagę"
            onChangeText={newText => setPriceForWeight(newText.replace(/[^0-9]/g, ''))}
          />
          
        </View>
        <View style={styles.buttonContainer}>
        <Pressable onPress={onDishPress} style={styles.button}>
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
    backgroundColor: '#DBCC95',
    padding: 10,
    margin: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: '#CD8D7A',
    fontWeight: '600',
    fontSize: 16,
  },
  inputContainer: {
  },
  input: {
    padding: 5,
    width: 500,
    borderColor: '#DBCC95',
    margin: 5,
    backgroundColor: '#CD8D7A',
    borderRadius:5,
  },
});