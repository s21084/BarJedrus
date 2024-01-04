import { StyleSheet, Text, View  } from 'react-native';


export default function eventComponent({ event }){
    
    return(
            <View>
                <View style={styles.container}>  
                <Text>Wydarzenie: {event.name}</Text>
                <Text>Czy potrzebne dekoracje?: {event.decoration}</Text>
                <Text>Ilość osób wegetariańskich: {event.Vege}</Text>
                <Text>lość osób niewegetariańskich{event.Nonvege}</Text>
                <Text>Przedwpłata: {event.PrePay}zł</Text>
                <Text>Całość do zapłaty: {event.Payment}zł</Text>
                <Text>Notatki {event.Notes}</Text>
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
        alignItems: 'left',
        backgroundColor: '#47CE83',
        borderRadius: 5, 
        overflow: 'hidden',
    },
});