import { Link, useSearchParams } from "expo-router";
import { Text, View, StyleSheet, Pressable, TextInput} from 'react-native';
import { useEffect, useState } from 'react';
//import dishes from '../../assets/data/dish'
import { getDish } from '../../lib/api/dish';

export default function DishScreen (){
    const [name, setName] = useState('');
    const [priceForPiece, setPriceForPiece] = useState('');
    const [priceForWeight, setPriceForWeight] = useState('');
    const { id } = useSearchParams();

   // const dish = dishes.find((d) => d.id == id);

    useEffect(() => {
        const fetchDish = async () => {
            const res = await getDish( id as string );
            
            console.log("res", res)
            setName(res.name);
            setPriceForPiece(res.priceForPiece);
            setPriceForWeight(res.priceForWeight);
            console.log(res)
        }
        fetchDish()
    }, [])

    
    return (
        <View style={styles.logInWindow}>   
            <View style={styles.dishContainer}>
            <Text style={styles.hedders}>Danie:</Text>
            <Text>Nazwa dania:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setName(newText)}
            defaultValue={name}
            placeholder="Nazwa"
            />
            <Text>Cena za porcje</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setPriceForPiece(newText)}
            defaultValue={priceForPiece}
            placeholder="Cena za porcje"
            />
            <Text>Cena za wage</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setPriceForWeight(newText)}
            defaultValue={priceForWeight}
            placeholder="Cena za 100g"
            />
            <Text>Cena która nie dotyczy powinna zostać pusta</Text>
            </View>
            <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Edytuj</Text>
                    </Pressable>
                    <Link href="../" style={styles.button}>
                        <Text style={styles.buttonText}>Usuń</Text>
                    </Link>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logInWindow: {
        backgroundColor: '#ACBFA4',
        flex: 1,
        alignItems: 'center'
    },
    dishContainer: {
        backgroundColor: '#E2E8CE',
        padding: 50,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center'
    },
    input: {
        padding: 5,
        width: 200,
        borderColor: '#262626',
        margin: 5,
        backgroundColor: '#ACBFA4',
        borderRadius:5,
      },
    hedders: {
        fontSize:25,
        fontWeight: "bold"
    },
    value: {
        fontSize:20,
        fontStyle: "italic"
    },
    buttonText: {
        color: '#E2E8CE',
        fontWeight: '600',
        fontSize: 16,
      },
    button: {
        backgroundColor: '#262626',
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