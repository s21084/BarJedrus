import { StyleSheet, View, Text, Pressable, Button, FlatList, ActivityIndicator} from 'react-native';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Hedder from '../../components/normal/hedder';
import SubComponent from '../../components/subscribersComponent'
import { useSubApi } from '../../lib/api/subscribtion';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../context/AuthContext';
import { useUserApi } from '../../lib/api/user';





export default function SubscriptionsScreen() {
    //@ts-ignore
    const { listSubscriptions } = useSubApi();
    const { email } = useAuth();
    const [sortedData, setSortedData] = useState([]); 
    console.log("sortedData ", sortedData)
    const [sortOption, setSortOption] = useState(null);
    const [isAdmin, setIsAdmin] = useState('');
const [isVerified, setIsVerified] = useState('');
const { getUserByEmail} = useUserApi();
useEffect(() => {
    const fetchUser = async () => {
        //@ts-ignore
        const res = await getUserByEmail(email as string);
        setIsAdmin(res.isAdmin)
        setIsVerified(res.isVerified)
    }
    fetchUser()
}, [])
    const {data, isLoading, error } = useQuery({
        queryKey:['subscription'],
        queryFn: listSubscriptions
     });
     const fetchEvents = async () => {
        const subData = await listSubscriptions();
        setSortedData(subData);
    };
     useEffect(() => {
        fetchEvents();
    }, []);
  

    const toRefreshData = () => {
        fetchEvents();
      };
      
    useFocusEffect(
        React.useCallback(() => {
            // Tutaj możesz wywołać funkcje, które mają być uruchamiane, gdy ekran uzyskuje focus
            console.log('Ekran Event jest aktywny');
            // Możesz umieścić tutaj kod do pobierania lub aktualizacji danych
            toRefreshData();
        }, [])
    );
	





     const sortByName = () => {
        // @ts-ignore
        const sorted = [...sortedData].sort((a, b) => a.person.surname.localeCompare(b.person.surname));
        setSortedData(sorted);
        // @ts-ignore
        setSortOption('surname');
      };
      const sortByNameDesc = () => {
        // @ts-ignore 
        const sorted = [...sortedData].sort((a, b) => b.person.surname.localeCompare(a.person.surname));
        setSortedData(sorted);
        // @ts-ignore
        setSortOption('surnameDesc');
      };
      const sortByOnPlace = () => {
        // @ts-ignore 
        const sorted = [...sortedData].sort((a, b) => a.onPlace === b.onPlace ? 0 : a.onPlace ? -1 : 1);
        setSortedData(sorted);
        // @ts-ignore
        setSortOption('onplacesort');
    };
    const sortByOnPlaceDesc = () => {
        // @ts-ignore 
        const sorted = [...sortedData].sort((a, b) => b.onPlace === a.onPlace ? 0 : b.onPlace ? -1 : 1);
        setSortedData(sorted);
        // @ts-ignore
        setSortOption('onplacesort');
    };


    if(isVerified){
        return(
            <View style={{backgroundColor: '#EAECCC'}}>
            <Hedder />
            <View style={{ alignItems: 'center' }}>
            <Text style={{ padding: 10, fontSize: 30 }}>Abonamenty</Text>
            <View style={{alignItems: 'center', flex: 1}}>
            <Pressable onPress={toRefreshData} style={{padding: 5, backgroundColor: '#CD8D7A', borderRadius:5, margin: 5}}>
                        <Text>Odśwież dane</Text>
        </Pressable>
            <View style={styles.sortButtons}>
                
                <Pressable onPress={sortByName} style={styles.sortButton}>
                        <Text>Sortuj po nazwisku (A-Z)</Text>
                    </Pressable>
                    <Pressable onPress={sortByNameDesc} style={styles.sortButton}>
                        <Text>Sortuj po nazwisku (Z-A)</Text>
                    </Pressable>
                    <Pressable onPress={sortByOnPlace} style={styles.sortButton}>
                        <Text>Sortuj po lokalizacji posiłku (Na miejscu)</Text>
                    </Pressable>
                    <Pressable onPress={sortByOnPlaceDesc} style={styles.sortButton}>
                        <Text>Sortuj po lokalizacji posiłku (Na wynos/Wyjazdowo)</Text>
                    </Pressable>

            </View>
            
            <FlatList 
            //@ts-ignore
                data={sortedData}
                renderItem={({ item }) => (
                        <SubComponent sub={item}/>
            )}
            horizontal={false}
            numColumns={5}
             />
             </View>
            </View>
            </View>
        );
    }else{
        return(
            <View>
            <Text>Nie masz dostępu do tego widoku</Text>
        </View>
        );
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
