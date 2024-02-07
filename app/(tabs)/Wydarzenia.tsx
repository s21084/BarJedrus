import { StyleSheet, View, Text, Pressable, Button, FlatList, ActivityIndicator} from 'react-native';
import EventComponent from '../../components/events/eventComponent';
import Hedder from '../../components/normal/hedder';
import { useUserApi } from '../../lib/api/user';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useEventApi } from '../../lib/api/events';
import { useAuth } from '../../context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';

export default function Event ({navigation}) {
    //@ts-ignore
    const { getUserByEmail} = useUserApi();
    const { email } = useAuth();
    //@ts-ignore
   const { listEvents } = useEventApi();
   const [isAdmin, setIsAdmin] = useState('');
    const [isVerified, setIsVerified] = useState('');
  
    const [sortedData, setSortedData] = useState([]); 
    const [sortOption, setSortOption] = useState(null);




    useEffect(() => {
        const fetchUser = async () => {
            //@ts-ignore
            const res = await getUserByEmail(email as string);
            setIsAdmin(res.isAdmin)
            setIsVerified(res.isVerified)
        }
        fetchUser()
    }, [])

    console.log("Użytkownik: ", email, " czy jest zweryfikowany ", isVerified, " i czy jest adminem ", isAdmin)

    const {data, isLoading, error} = useQuery({
        queryKey:['events'],
        queryFn: listEvents
     });
     const fetchEvents = async () => {
        const eventsData = await listEvents();
        //@ts-ignore
        const filteredEvents = eventsData.filter(event => new Date(event.date) >= new Date());
        setSortedData(filteredEvents);
    };
    useEffect(() => {
        fetchEvents();
    }, []);

 const toRefreshData = () => {
        fetchEvents();
      };
    useFocusEffect(
        React.useCallback(() => {
            console.log('Ekran Event jest aktywny');
            toRefreshData();
        }, [])
    );



   
  
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

      
    if(isLoading){
        return <ActivityIndicator />
      }
      if (error || !data) {
        return <Text>Dania nie znalezione</Text>
      }
    if(isVerified){
        return(
            <View style={{
                flex: 1, backgroundColor: '#EAECCC'}}>
            <Hedder />
            <View style={{
            alignItems: 'center', flex: 1}}>
                <Text style={{padding: 10, fontSize: 30}}>Wydarzenia</Text>
                <Pressable onPress={toRefreshData} style={styles.sortButton}>
                        <Text>Odśwież dane</Text>
                    </Pressable>
                <View style={styles.sortButtons}>
                    <Pressable onPress={sortByDate} style={styles.sortButton}>
                        <Text>Sortuj po dacie</Text>
                    </Pressable>
                    <Pressable onPress={sortByName} style={styles.sortButton}>
                        <Text>Sortuj po nazwie (A-Z)</Text>
                    </Pressable>
                    <Pressable onPress={sortByNameDesc} style={styles.sortButton}>
                        <Text>Sortuj po nazwie (Z-A)</Text>
                    </Pressable>
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
    
    sortButtons: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: 10, 
      },
      sortButton: {
        padding: 5,
        backgroundColor: '#DBCC95',
        borderRadius:5,
        borderColor: '#CD8D7A',
        borderWidth: 2,
        margin: 5
      },
});