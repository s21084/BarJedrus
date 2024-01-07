import { StyleSheet, View, Text, Pressable, FlatList, ActivityIndicator} from 'react-native';
import { Link } from 'expo-router';
import EventComponent from '../../components/events/eventComponent';
import Hedder from '../../components/normal/hedder';
//import events from '../../assets/data/event'
import { useEffect, useState } from 'react';
import { listEvents } from '../../lib/api/events';
import { useQuery } from '@tanstack/react-query';

export default function Event () {
    //Wersja działająca
    //const {data, isLoading, error } = useQuery({
     //   queryKey:['events'],
     //   queryFn: listEvents
    //});
    //Wersja działająca END

    //To nie działa
     const [events, setEvents] = useState([]);
    
     useEffect(() => {
         const fetchEvents = async () => {
             const res = await listEvents();
             setEvents(res);
         }
         fetchEvents();
     }, []);
     const data = events;
    //Do wersji działającej:
    // if(isLoading){
    //     return <ActivityIndicator />;
    // }

    // if(error) {
    //     return <Text>{error.message}</Text>
    // }
    //END

    return(
        <View>
        <Hedder />
        <View style={{
        alignItems: 'center'}}>
            <Text style={{padding: 10, fontSize: 30}}>Wydarzenia</Text>
            <FlatList 
                data={data}
                renderItem={({ item }) => (
                        <EventComponent event={item}/>
            )}
            horizontal={false}
            numColumns={3}
             />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 25,
        backgroundColor: '#E2E8CE',
    },
    buttonBack: {
        backgroundColor: '#262626',
        padding: 10,
        borderRadius: 5, 
    },
    buttonText: {
        color: '#E2E8CE',
        
    },
});