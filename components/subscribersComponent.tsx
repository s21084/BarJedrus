import { StyleSheet, Text, View, TextInput, Pressable, ActivityIndicator  } from 'react-native';

import { SubscriberType } from '../types/index';
import { Link, useSearchParams } from 'expo-router';
import { useSubApi } from '../lib/api/subscribtion';
import { useQuery } from '@tanstack/react-query';
import { useUserApi } from '../lib/api/user';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';


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

     const { email } = useAuth();
const [isAdmin, setIsAdmin] = useState('');
const [isVerified, setIsVerified] = useState('');
const { getUserByEmail} = useUserApi();
useEffect(() => {
    const fetchUser = async () => {
        //@ts-ignore
        const res = await getUserByEmail(email as string);
        setIsAdmin(res.isAdmin)
        setIsVerified(res.isVerified)
    }
    fetchUser()
}, [])




     if(isLoading){
        return <ActivityIndicator />
    }
    if(error){
        return <Text>Abonamentowicze nie znalezieni</Text>
    }
    if(isAdmin){ return(
        <Link href={`/subscription/${sub.id}`}>
                <View style={styles.logInWindow}> 
                <Text>Nazwisko: {data.person.surname}</Text>  
                <Text>Lokalizacja: {data.onPlace && <Text>Wyjazdowo</Text>}{!data.onPlace && <Text>Na miejscu</Text>}</Text>
                </View>
        </Link>
        ); }else{
        return(
                <View style={styles.logInWindow}> 
                <Text>Nazwisko: {data.person.surname}</Text>  
                <Text>Lokalizacja: {data.onPlace && <Text>Wyjazdowo</Text>}{!data.onPlace && <Text>Na miejscu</Text>}</Text>
                </View>
        )
    }

    
}




const styles = StyleSheet.create({
    logInWindow: {
        flex: 1,
        width: 200,
        height: 100,
        paddingVertical: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        alignItems: 'center',
        backgroundColor: '#DBCC95',
        borderRadius: 5, 
        overflow: 'hidden',
    },
});


export default Subscribe;