import { useSearchParams, Link } from "expo-router";
import { Text, View, StyleSheet, ActivityIndicator, Pressable} from 'react-native';
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../lib/api/events";

export default function EventScreen (){
    const { id } = useSearchParams();

    const {data, isLoading, error} = useQuery({
        queryKey: ['event', id],
        queryFn: () => getEvent(id as string)
    })
    if(isLoading){
        return <ActivityIndicator />
    }
    if(error){
        return <Text>Wydarzenie nie znalezione</Text>
    }
    const event = data;
                console.log(event);
    return (
        <View style={styles.container}>  
            <View style={styles.eventContainer}>
                <Text style={styles.hedders}>Wydarzenie: {event.name}</Text>
                <Text style={styles.hedders}>Czy potrzebne dekoracje?: {event.decoration &&<Text>Kupić</Text>} {!event.decoration &&<Text>Brak</Text>}</Text>
                {event.vegeCount && <Text style={styles.hedders}>Ilość osób wegetariańskich: {event.vegeCount}</Text>}
                {event.meatCount && <Text style={styles.hedders}>llość osób niewegetariańskich: {event.meatCount}</Text>}
                {event.prePay && <Text style={styles.hedders}>Przedwpłata: {event.prePay}zł</Text>}
                {event.priceFull && <Text style={styles.hedders}>Całość do zapłaty: {event.priceFull}zł</Text>}
                {event.notes && <Text style={styles.hedders}>Notatki: {event.notes}</Text>}
            </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Edytuj</Text>
                    </Pressable>
                    <Link href="../" style={styles.button}>
                        <Text style={styles.buttonText}>Usuń</Text>
                    </Link>
                </View>
                </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ACBFA4',
        flex: 1,
        alignItems: 'center'
    },
    eventContainer: {
        backgroundColor: '#E2E8CE',
        padding: 50,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center'
    },
    hedders: {
        fontSize:15,
        fontWeight: "normal",
        padding: 3
    },
    value: {
        fontSize:20,
        fontStyle: "italic"
    },
    buttonText: {
        color: '#E2E8CE',
        fontWeight: '600',
        fontSize: 16,
      },
    button: {
        backgroundColor: '#262626',
        padding: 10,
        margin: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
      },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
      },
});