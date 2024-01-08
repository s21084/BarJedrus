import { useSearchParams, Link } from "expo-router";
import { Text, View, StyleSheet, ActivityIndicator, Pressable} from 'react-native';
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../lib/api/events";

export default function SubscriberScreen (){
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
                <Text style={styles.hedders}>Informacje o osobie z abonamentem</Text>
                <Text style={styles.hedders}>{id}</Text>
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