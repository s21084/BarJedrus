import { StyleSheet, View, Text, Pressable, FlatList} from 'react-native';
import { Link } from 'expo-router';
import EventComponent from '../../components/events/eventComponent';
import Hedder from '../../components/normal/hedder';
//import events from '../../assets/data/event'
import { useEffect, useState } from 'react';

export default function Event () {

    //Start API
    const[events, setEvents] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            //http://localhost:3000/event
            const url = 'http://localhost:3000/event';
            const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo1MH0.C2EfdD9n4HXyMG0DPsDaobNgLN521vzu9mwvN2FP4RA';
            const res = await fetch(url, {
                mode:'no-cors',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-type': 'application/json',
                  },
            });
            const data = await res.json();
            console.log(data);
            if (res.status !== 200 ){
                console.log("Error fetching API")
            }
            
            setEvents (data);
        }

        fetchEvents();
    });
    //END API

    return(
        <View>
        <Hedder />
        <View style={{
        alignItems: 'center'}}>
            <Text style={{padding: 10, fontSize: 30}}>Wydarzenia</Text>
        <FlatList 
                data={events.slice(0, 6)}
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
