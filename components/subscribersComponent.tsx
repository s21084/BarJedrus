import { StyleSheet, Text, View, TextInput, Pressable, ActivityIndicator  } from 'react-native';

import { SubscriberType } from '../types/index';
import { Link, useSearchParams } from 'expo-router';
import { useSubApi } from '../lib/api/subscribtion';
import { useQuery } from '@tanstack/react-query';

type SubscriberProps = {
    sub: SubscriberType;
}


const Subscribe = ( { sub }: SubscriberProps ) => {
    console.log("id tutaj", sub.id)
//@ts-ignore
    const { getSubscription } = useSubApi();
    const {data, isLoading, error } = useQuery({
        queryKey:['subscription', sub],
        queryFn: () => getSubscription(sub.id as string)
     });

     console.log("data", data)

     if(isLoading){
        return <ActivityIndicator />
    }
    if(error){
        return <Text>Subskrybeci nie znalezieni</Text>
    }
    return(
        <Link href={`/subscription/${sub.id}`}>
                <View style={styles.logInWindow}> 
                <Text>Nazwisko: {data.person.surname}</Text>  
                <Text>Lokalizacja: {!data.onPlace && <Text>Wyjazdowo</Text>}{data.onPlace && <Text>Na miejscu</Text>}</Text>
                </View>
        </Link>
        );
}



const styles = StyleSheet.create({
    logInWindow: {
        flex: 1,
        width: 200,
        height: 250,
        paddingVertical: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        alignItems: 'center',
        backgroundColor: '#47CE83',
        borderRadius: 5, 
        overflow: 'hidden',
    },
});


export default Subscribe;