import { StyleSheet, Text, View, TextInput, Pressable, ActivityIndicator  } from 'react-native';
import { useDayDishApi } from '../../lib/api/dayDish';
import { Link, useSearchParams, useRouter } from "expo-router";
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import EditDayDishComponent from '../popUps/editDayDishComponent'

export default function DayDishComponent(){
    
    const id  = "1";
    const [soup, setSoup] = useState('');
    const [secondDish, setSecondDish] = useState('');
    const router = useRouter();
    // @ts-ignore
    const { getDayDish } = useDayDishApi();
    // @ts-ignore
    const { editDayDish } = useDayDishApi();

    useEffect(() => {
        const fetchDish = async () => {
            const res = await getDayDish(id);
            setSoup(res.soup);
            setSecondDish(res.secondDish);
        }
        fetchDish()
    }, [])

    const { mutate, isError, error, status } = useMutation({

        mutationFn: editDayDish
      
      });


      const onDishSave = async () => {
        const newId = id as string;
        // @ts-ignore
          mutate({ id: id as string, data: { soup, secondDish } });
          console.log("Sprawdzam status: ", status)
          console.log(error)
          router.back();
      };
    
    return(
            <View style={{alignItems: 'center'}}>
                <View style={styles.logInWindow}>
                    <Text style={{padding: 5, fontWeight: 'bold', fontSize: 20}}>Danie Dnia</Text>
                    <View style={styles.dishes}>
                        <View style={styles.dishType}>  
                        <Text style={{padding: 5, fontWeight: 'bold', fontSize: 20}}>Zupy:</Text> 
                        {soup && <Text>{soup}</Text>}
                        </View>
                        <View style={styles.dishType}>
                        <Text style={{padding: 5, fontWeight: 'bold', fontSize: 20}}>Drugie Dania:</Text>
                        {secondDish && <Text>{secondDish}</Text>}
                        </View>
                        <EditDayDishComponent />
                    </View>
                    
                </View>
                
            </View>
        );
}

const styles = StyleSheet.create({
    logInWindow: {
        width:1000,
        alignItems: 'center',
        backgroundColor: '#ACBFA4',
        borderRadius: 5,
        overflow: 'hidden',
    },
    dishes: {
        flexDirection: 'row',
    },
    dishType: {
        backgroundColor: "white",
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        padding: 25,
    },
});