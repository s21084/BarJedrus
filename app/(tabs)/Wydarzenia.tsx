import { StyleSheet, View, Text, Pressable, FlatList} from 'react-native';
import { Link } from 'expo-router';
import EventComponent from '../../components/eventComponent';
import Hedder from '../../components/hedder';
import events from '../../assets/data/event'

export default function Event () {
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
        


        <View style={{
        alignItems: 'center'}}>
            <Link href={'/'}>
                <Pressable style={styles.buttonBack}>
                    <Text style={styles.buttonText}>Powrót</Text>
                </Pressable>
            </Link>
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
