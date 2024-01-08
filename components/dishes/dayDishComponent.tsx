import { StyleSheet, Text, View, TextInput, Pressable  } from 'react-native';
import { getDayDish } from '../../lib/api/dayDish';
import { useQuery } from '@tanstack/react-query';


export default function DayDishComponent(){
    
    // const { id } = 1 as any;

    // const {data, isLoading, error} = useQuery({
    //     queryKey: ['dayDish', id],
    //     queryFn: () => getDayDish(id as string)
    // })
    // const dayDish = data;
    // console.log(dayDish)

    return(
            <View style={{alignItems: 'center'}}>
                <View style={styles.logInWindow}>
                    <Text style={{padding: 5}}>Danie Dnia</Text>
                    <View style={styles.dishes}>
                        <View style={styles.dishType}>  
                        <Text>Zupy:</Text> 
                            <Text>Jeszcze nie działa nwm czemu</Text>
                        </View>
                        <View style={styles.dishType}>
                        <Text>Drugie Dania:</Text>
                            <Text>Czemu to nie działa</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    logInWindow: {
        flex: 1,
        marginVertical: 5,
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 5,
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