import { StyleSheet, View, Text, Pressable, FlatList, ActivityIndicator} from 'react-native';
import { Link } from 'expo-router';
import Hedder from '../../components/normal/hedder';
import SubComponent from '../../components/subscribersComponent'
import { useSubApi } from '../../lib/api/subscribtion';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../context/AuthContext';

const userLogOn = true; /* TO PÓŹNIEJ BĘDZIE INACZEJ SPRAWDZANE */




export default function SubscriptionsScreen() {
    //@ts-ignore
    const { listSubscriptions } = useSubApi();
    const { email } = useAuth();

    const {data, isLoading, error } = useQuery({
        queryKey:['subscription'],
        queryFn: listSubscriptions
     });
    // console.log("test id ", data[0].id)
     if(isLoading){
         return <ActivityIndicator />;
     }
 
     if(error) {
         return <Text>{error.message}</Text>
     }

    if(userLogOn){
        return(
            <View>
            <Hedder />
            <View style={{ alignItems: 'center' }}>
            <Text style={{ padding: 10, fontSize: 30 }}>Subskrybenci</Text>
            <FlatList 
            //@ts-ignore
                data={data}
                renderItem={({ item }) => (
                        <SubComponent sub={item}/>
            )}
            horizontal={false}
            numColumns={4}
             />
            </View>
            </View>
        );
    }else{
        return(
            <View>
            <Hedder />
            <View style={{ alignItems: 'center' }}>
            <Text style={{ padding: 10, fontSize: 30 }}>WIDOK DLA ZALOGOWANYCH</Text>
            </View>
            </View>
        );
    }
    
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
