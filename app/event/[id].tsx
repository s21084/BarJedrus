import { useSearchParams } from "expo-router";
import { Text, View, StyleSheet} from 'react-native';
import events from '../../assets/data/event'

export default function EventScreen (){
    const { id } = useSearchParams();

    const event = events.find((d) => d.id == id);

    if(!event){
        return <Text> Dania nie znaleziono </Text>
    }
    return (
        <View style={styles.container}>  
        <Text>DODAĆ GUZIK EDYTUJ I USUŃ DLA WŁAŚCICIELA</Text>
                <Text>Wydarzenie: {event.name}</Text>
                {event.decoration && <Text>Czy potrzebne dekoracje?: {event.decoration}</Text>}
                {event.vege && <Text>Ilość osób wegetariańskich: {event.vege}</Text>}
                {event.nonvege && <Text>llość osób niewegetariańskich: {event.nonvege}</Text>}
                {event.prePay && <Text>Przedwpłata: {event.prePay}zł</Text>}
                {event.payment && <Text>Całość do zapłaty: {event.payment}zł</Text>}
                {event.notes && <Text>Notatki: {event.notes}</Text>}
                </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ACBFA4',
        flex: 1,
        alignItems: 'center'
    },
});