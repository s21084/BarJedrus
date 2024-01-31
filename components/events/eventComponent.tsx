import { StyleSheet, Text, View  } from 'react-native';

import { Link } from 'expo-router';
import { EventType } from '../../types/index';
import { useAuth } from '../../context/AuthContext';
import { useUserApi } from '../../lib/api/user';
import { useEffect, useState } from 'react';



type EventProps = {
    event: EventType;
}

const Event = ({ event }: EventProps) =>{
    //@ts-ignore
    const { getUserByEmail} = useUserApi();
    const { email } = useAuth();
    const [isAdmin, setIsAdmin] = useState('');
    const [isVerified, setIsVerified] = useState('');
    
    useEffect(() => {
           const fetchUser = async () => {
            //@ts-ignore
               const res = await getUserByEmail(email as string);
               setIsAdmin(res.isAdmin)
               setIsVerified(res.isVerified)
           }
           fetchUser()
       }, [])
    const dateEvent = (event.date as unknown as string).slice(0,10);
    if(isAdmin){
        return(
            <Link href={`/event/${event.id}`}>
                    <View style={styles.container}>  
                    <Text style={{fontWeight: 'bold'}}>{dateEvent}</Text>
                    <Text>Wydarzenie: {event.name}</Text>
                    {event.decoration && <Text>Czy potrzebne dekoracje?: {event.decoration &&<Text>Kupić</Text>} {!event.decoration &&<Text>Brak</Text>}</Text>}
                    {event.vegeCount && <Text>Ilość osób wegetariańskich: {event.vegeCount}</Text>}
                    {event.meatCount && <Text>llość osób niewegetariańskich: {event.meatCount}</Text>}
                    </View>
            </Link>
            );
    }else{
        return(
                    <View style={styles.container}>  
                    <Text style={{fontWeight: 'bold'}}>{dateEvent}</Text>
                    <Text>Wydarzenie: {event.name}</Text>
                    {event.decoration && <Text>Czy potrzebne dekoracje?: {event.decoration &&<Text>Kupić</Text>} {!event.decoration &&<Text>Brak</Text>}</Text>}
                    {event.vegeCount && <Text>Ilość osób wegetariańskich: {event.vegeCount}</Text>}
                    {event.meatCount && <Text>llość osób niewegetariańskich: {event.meatCount}</Text>}
                    </View>
                
            );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 250,
        height: 200,
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#DBCC95',
        borderRadius: 5, 
        overflow: 'hidden',
    },
});

export default Event;