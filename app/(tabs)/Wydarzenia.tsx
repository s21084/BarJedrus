import { StyleSheet, View, Text, Pressable, Button, FlatList, ActivityIndicator} from 'react-native';
import { Link } from 'expo-router';
import EventComponent from '../../components/events/eventComponent';
import Hedder from '../../components/normal/hedder';
import { useUserApi } from '../../lib/api/user';
//import events from '../../assets/data/event'
import { useEffect, useState } from 'react';
//import { listEvents } from '../../lib/api/events';
import { useQuery } from '@tanstack/react-query';
import { useEventApi } from '../../lib/api/events';
import { useAuth } from '../../context/AuthContext';

export default function Event () {
    //@ts-ignore
    const { getUserByEmail} = useUserApi();
    const { email } = useAuth();
    //@ts-ignore
   const { listEvents } = useEventApi();
   const [isAdmin, setIsAdmin] = useState('');
    const [isVerified, setIsVerified] = useState('');
  
    useEffect(() => {
        const fetchUser = async () => {
            //@ts-ignore
            const res = await getUserByEmail(email as string);
            console.log("res ", res)
            setIsAdmin(res.isAdmin)
            setIsVerified(res.isVerified)
        }
        fetchUser()
    }, [])

    console.log("Użytkownik: ", email, " czy jest zweryfikowany ", isVerified, " i czy jest adminem ", isAdmin)

   
    const {data, isLoading, error } = useQuery({
       queryKey:['events'],
       queryFn: listEvents
    });
    const [sortedData, setSortedData] = useState(data); 
    const [sortOption, setSortOption] = useState(null);

    
    if(isLoading){
        return <ActivityIndicator />;
    }

    if (error) {
        return <Text>{error.message}</Text>
      }

  
      const sortByDate = () => {
        // @ts-ignore
        const sorted = [...sortedData].sort((a, b) => new Date(a.date) - new Date(b.date));
        setSortedData(sorted);
        // @ts-ignore
        setSortOption('date');
      };
      const sortByName = () => {
        // @ts-ignore
        const sorted = [...sortedData].sort((a, b) => a.name.localeCompare(b.name));
        setSortedData(sorted);
        // @ts-ignore
        setSortOption('name');
      };
      const sortByNameDesc = () => {
        // @ts-ignore 
        const sorted = [...sortedData].sort((a, b) => b.name.localeCompare(a.name));
        setSortedData(sorted);
        // @ts-ignore
        setSortOption('price');
      };

      const sortByCreation = () => {
        setSortedData(data);
        // @ts-ignore
        setSortOption(null);
      };
    if(isVerified){
        return(
            <View style={{
                flex: 1}}>
            <Hedder />
            <View style={{
            alignItems: 'center', flex: 1}}>
                <Text style={{padding: 10, fontSize: 30}}>Wydarzenia</Text>
                <View style={styles.sortButtons}>
                    <Button title="Sortuj po dacie" color='#262626' onPress={sortByDate}  />
                    <Button title="Sortuj po nazwie (A-Z)" color='#262626' onPress={sortByName}  />
                    <Button title="Sortuj po nazwie (Z-A)" color='#262626' onPress={sortByNameDesc}  />
                    <Button title="Sortuj po kolejności utworzenia" color='#262626' onPress={sortByCreation} />
                   </View>
                <FlatList 
                //@ts-ignore
                    data={sortedData}
                    renderItem={({ item }) => (<EventComponent event={item}/>)}
                    horizontal={false}
                    numColumns={3}
                 />
            </View>
            </View>
        );
    }else{
        return(
            <View>
            <Text>Nie masz dostępu do tego widoku</Text>
        </View>
        )
    }
    
    
}

const styles = StyleSheet.create({
    container: {
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
    sortButtons: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: 10, 
      },
});