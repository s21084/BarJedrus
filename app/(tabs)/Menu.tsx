import React, {useState} from 'react';
import { StyleSheet, View, Pressable, FlatList, ActivityIndicator, Text } from 'react-native';
import { Link } from 'expo-router';
import Hedder from '../../components/normal/hedder';
import DishComponent from '../../components/dishes/dishComponent';
import DayDishComponent from '../../components/dishes/dayDishComponent';
import { useDishApi } from '../../lib/api/dish';
import { useQuery } from '@tanstack/react-query';

export default function Offer() {
// @ts-ignore
  const { listDish } = useDishApi();
 
  const {data, isLoading, error} = useQuery({
    queryKey:['dishes'],
    queryFn: listDish
 });
 
 const [sortedData, setSortedData] = useState(data); 
 const [sortOption, setSortOption] = useState(null);
  

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
  const sortByPrice = () => {
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
  
 if(isLoading){
  return <ActivityIndicator />
}
if (error || !data) {
  return <Text>Dania nie znalezione</Text>
}
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Pressable style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: 5}}>
          <DayDishComponent />
        </Pressable>
        <View style={styles.sortButtons}>
          <Pressable onPress={sortByName} style={styles.sortButton}>
            <Text>Sortuj po nazwie (A-Z)</Text>
          </Pressable>
          <Pressable onPress={sortByNameDesc} style={styles.sortButton}>
            <Text>Sortuj po nazwie (Z-A)</Text>
          </Pressable>
          <Pressable onPress={sortByCreation} style={styles.sortButton}>
            <Text>Sortuj po kolejności utworzenia</Text>
          </Pressable>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
          // @ts-ignore
            data={sortedData}
            renderItem={({ item }) => (
                  <DishComponent dish={item} />
            )}
            horizontal={false}
            numColumns={8}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    flex: 1,
    padding: 1,
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
  sortButtons: {
    padding: 5,
    flexDirection: 'row', 
    margin: 10, 
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
