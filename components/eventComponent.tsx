import { StyleSheet, Text, View  } from 'react-native';
import events from '../assets/data/event'
import { EventType } from '../types/index';



type EventProps = {
    event: EventType;
}

const Event = ({ event }: EventProps) =>{
    return(
            <View>
                <View style={styles.container}>  
                <Text>Wydarzenie: {event.name}</Text>
                {event.decoration && <Text>Czy potrzebne dekoracje?: {event.decoration}</Text>}
                {event.vege && <Text>Ilość osób wegetariańskich: {event.vege}</Text>}
                {event.nonvege && <Text>llość osób niewegetariańskich: {event.nonvege}</Text>}
                {event.prePay && <Text>Przedwpłata: {event.prePay}zł</Text>}
                {event.payment && <Text>Całość do zapłaty: {event.payment}zł</Text>}
                {event.notes && <Text>Notatki: {event.notes}</Text>}
                </View>
            </View>
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