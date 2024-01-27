import { StyleSheet, View, Text, Pressable, Button, FlatList, ActivityIndicator} from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
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
     const [sortedData, setSortedData] = useState(data); 
     console.log("sortedData ", sortedData)
     const [sortOption, setSortOption] = useState(null);
     if(isLoading){
         return <ActivityIndicator />;
     }
 
     if(error) {
         return <Text>{error.message}</Text>
     }
     const sortByName = () => {
        setSortedData(data);
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
        setSortedData(data);
        // @ts-ignore 
        const sorted = [...sortedData].sort((a, b) => a.onPlace === b.onPlace ? 0 : a.onPlace ? -1 : 1);
        setSortedData(sorted);
        // @ts-ignore
        setSortOption('onplacesort');
    };
    const sortByOnPlaceDesc = () => {
        setSortedData(data);
        // @ts-ignore 
        const sorted = [...sortedData].sort((a, b) => b.onPlace === a.onPlace ? 0 : b.onPlace ? -1 : 1);
        setSortedData(sorted);
        // @ts-ignore
        setSortOption('onplacesort');
    };
    const sortByCreation = () => {
        setSortedData(data);
        // @ts-ignore
        setSortOption(null);
      };


    if(userLogOn){
        return(
            <View>
            <Hedder />
            <View style={{ alignItems: 'center' }}>
            <Text style={{ padding: 10, fontSize: 30 }}>Abonamenty</Text>
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
                    <Pressable onPress={sortByCreation} style={styles.sortButton}>
                        <Text>Sortuj po kolejności utworzenia</Text>
                    </Pressable>

            </View>
            <FlatList 
            //@ts-ignore
                data={sortedData}
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
    sortButtons: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: 10, 
      },
    buttonBack: {
        backgroundColor: '#262626',
        padding: 10,
        borderRadius: 5, 
    },
    buttonText: {
        color: '#E2E8CE',
        
    },
    sortButton: {
      padding: 5,
      backgroundColor: '#ACBFA4',
      borderRadius:5,
      borderColor: 'black',
      borderWidth: 2,
      margin: 5
    },
});
