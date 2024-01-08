import { StyleSheet, Text, View, Pressable  } from 'react-native';

import { Link } from 'expo-router';
import events from '../../assets/data/event'
import { EventType } from '../../types/index';



type EventProps = {
    event: EventType;
}

const Event = ({ event }: EventProps) =>{
    return(
        <Link href={`/event/${event.id}`}>
            <Pressable>
                <View style={styles.container}>  
                <Text>Wydarzenie: {event.name}</Text>
                {event.decoration && <Text>Czy potrzebne dekoracje?: {event.decoration &&<Text>Kupić</Text>} {!event.decoration &&<Text>Brak</Text>}</Text>}
                {event.vegeCount && <Text>Ilość osób wegetariańskich: {event.vegeCount}</Text>}
                {event.meatCount && <Text>llość osób niewegetariańskich: {event.meatCount}</Text>}
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