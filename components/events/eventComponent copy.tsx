import { StyleSheet, Text, View, Pressable  } from 'react-native';

import { Link, useSearchParams } from 'expo-router';
//import events from '../../assets/data/event'
import { EventType } from '../../types/index';
import { useQuery } from '@tanstack/react-query';
import { getEvent } from '../../lib/api/events';



type EventProps = {
    event: EventType;
}

const Event = ({ event }: EventProps) =>{
    const {id} = useSearchParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ['event', id],
        queryFn: () => getEvent(id as string),
      });
    return(
        <Link href={`/event/${event.id}`}>
            <Pressable>
                <View style={styles.container}>  
                <Text>ID: {event.id}</Text>
                <Text>Wydarzenie: {event.name}</Text>
                {event.decoration && <Text>Czy potrzebne dekoracje?: {event.decoration}</Text>}
                {event.vege && <Text>Ilość osób wegetariańskich: {event.vege}</Text>}
                {event.nonvege && <Text>llość osób niewegetariańskich: {event.nonvege}</Text>}
                {event.prePay && <Text>Przedwpłata: {event.prePay}zł</Text>}
                {event.payment && <Text>Całość do zapłaty: {event.payment}zł</Text>}
                {event.notes && <Text>Notatki: {event.notes}</Text>}
                </View>
            </Pressable>
        </Link>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        height: 250,
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#47CE83',
        borderRadius: 5, 
        overflow: 'hidden',
    },
});

export default Event;