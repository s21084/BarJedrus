import { StyleSheet, View, Text, Pressable, FlatList} from 'react-native';
import { Link } from 'expo-router';
import Hedder from '../../components/normal/hedder';
import EditOpenHoursComponent from '../../components/popUps/editOpenHoursComponent';
import EditDayDishComponent from '../../components/popUps/editDayDishComponent';
import NewEvent from '../new-event';

export default function Wlasciciel () {
    return(
        <View >
        <Hedder />
        <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
        <EditOpenHoursComponent />
        <EditDayDishComponent />
        <View style={styles.buttonBack}>
            <Link href={'/new-event'}>
                <Pressable>
                    <Text style={{padding: 10, fontSize: 30}}>Nowe wydarzenie</Text>
                </Pressable>
            </Link>
        </View>
        </View>
        <View style={styles.buttonBack}>
            <Link href={'/'}>
                <Pressable>
                    <Text style={{padding: 10, fontSize: 30}}>Harmonogram</Text>
                </Pressable>
            </Link>
        </View>
        
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E2E8CE',
    },
    buttonBack: {
        backgroundColor: '#47CE83',
        borderRadius: 5, 
        overflow: 'hidden',
    },
    buttonText: {
        color: '#E2E8CE',
        
    },
});
