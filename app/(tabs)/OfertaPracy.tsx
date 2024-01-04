import { StyleSheet, View, Text, Pressable, FlatList} from 'react-native';
import { Link } from 'expo-router';
import Hedder from '../../components/hedder';
import DayDishComponent from '../../components/dayDishComponent';

const JobOffer = () => {

    return(
        
        <View>
            <Hedder />
            <View style={styles.container}>
            <Text style={{padding: 10, fontSize: 30}}>Menu</Text>
         <Link href={'/'}>
                <Pressable>
                    <DayDishComponent/>
                </Pressable>
            </Link>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    buttonMenu: {
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
    menu: {
        padding: 1,
        flexDirection: 'row',
        alignItems: 'center',
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

export default JobOffer;