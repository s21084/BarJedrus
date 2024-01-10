import { StyleSheet, Text, View, TextInput, Pressable, ActivityIndicator  } from 'react-native';
import { getDayDish } from '../../lib/api/dayDish';
import { useQuery } from '@tanstack/react-query';


export default function DayDishComponent(){
    
    const id  = "1";

    const {data, isLoading, error} = useQuery({
        queryKey: ['dayDish', id],
        queryFn: () => getDayDish(id as string)
    })
    //console.log("dday dish ", data)

    if(isLoading){
        return <ActivityIndicator />
    }
    if(error){
        return <Text>Wydarzenie nie znalezione</Text>
    }
    
    return(
            <View style={{alignItems: 'center'}}>
                <View style={styles.logInWindow}>
                    <Text style={{padding: 5}}>Danie Dnia</Text>
                    <View style={styles.dishes}>
                        <View style={styles.dishType}>  
                        <Text>Zupy:</Text> 
                        {data.soup && <Text>{data.soup}</Text>}
                        </View>
                        <View style={styles.dishType}>
                        <Text>Drugie Dania:</Text>
                        {data.secondDish && <Text>{data.secondDish}</Text>}
                        </View>
                    </View>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    logInWindow: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ACBFA4',
        borderRadius: 5,
        overflow: 'hidden',
    },
    dishes: {
        flexDirection: 'row',
    },
    dishType: {
        padding: 25,
    },
});