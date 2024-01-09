import { StyleSheet, View, Text, Pressable, FlatList} from 'react-native';
import { Link } from 'expo-router';
import Hedder from '../../components/normal/hedder';
import EditOpenHoursComponent from '../../components/popUps/editOpenHoursComponent';


export default function Wlasciciel () {
    return(
        <View >
        <Hedder />
        <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
        <EditOpenHoursComponent />
        <View style={styles.buttonBack}>
            <Link href={'/new-event'}>
                <Pressable>
                    <Text style={styles.buttonText}>Nowe wydarzenie</Text>
                </Pressable>
            </Link>
        </View>
        <View style={styles.buttonBack}>
            <Link href={'/edit-schedule'}>
                <Pressable>
                    <Text style={styles.buttonText}>Edytuj harmonogram</Text>
                </Pressable>
            </Link>
        </View>
        </View>
      
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#47CE83',
        borderRadius: 5, 
        overflow: 'hidden',
    },
    buttonBack: {
        padding: 25,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#47CE83',
        borderRadius: 5, 
        overflow: 'hidden',
        justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
        padding: 10,
    },
});
