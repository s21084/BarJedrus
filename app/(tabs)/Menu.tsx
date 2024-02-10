import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View, Pressable, FlatList, ActivityIndicator, Text } from 'react-native';
import { useUserApi } from '../../lib/api/user';
import Hedder from '../../components/normal/hedder';
import DishComponent from '../../components/dishes/dishComponent';
import DayDishComponent from '../../components/dishes/dayDishComponent';
import { useDishApi } from '../../lib/api/dish';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../context/AuthContext';

export default function Offer() {
  const { listDish } = useDishApi();
  const { email } = useAuth();
  const [sortedData, setSortedData] = useState([]); 
  const [isAdmin, setIsAdmin] = useState('');
  const { getUserByEmail } = useUserApi();
  const [isVerified, setIsVerified] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserByEmail(email as string);
      setIsAdmin(res.isAdmin)
      setIsVerified(res.isVerified)
    }
    fetchUser()
  }, [])

  const { data, isLoading, error } = useQuery({
    queryKey:['dishes'],
    queryFn: listDish
  });

  const fetchEvents = async () => {
    const dishData = await listDish();
    setSortedData(dishData);
  };

  const toRefreshData = () => {
    fetchEvents();
  };

  useEffect(() => {
    const fetchEvents2 = async () => {
      const dishData = await listDish();
      setSortedData(dishData);
      toRefreshData();
    };
    fetchEvents2();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      console.log('Ekran Menu jest aktywny');
      toRefreshData();
    }, [])
  );

  const sortByName = () => {
    const sorted = [...sortedData].sort((a, b) => a.name.localeCompare(b.name));
    setSortedData(sorted);
  };

  const sortByNameDesc = () => {
    const sorted = [...sortedData].sort((a, b) => b.name.localeCompare(a.name));
    setSortedData(sorted);
  };
  
  if(isLoading){
    return <ActivityIndicator />
  }

  if (error || !data) {
    return <Text>Dania nie znalezione</Text>
  }

  if(isVerified){
    return (
      <View style={{ flex: 1 }}>
        <Hedder />
        <View style={styles.container}>
          <View style={styles.menu}>
            <Pressable style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: 5}}>
              <DayDishComponent />
            </Pressable>
            <Pressable onPress={toRefreshData} style={styles.sortButton}>
              <Text>Odśwież dane</Text>
            </Pressable>
            <View style={styles.sortButtons}>
              <Pressable onPress={sortByName} style={styles.sortButton}>
                <Text>Sortuj po nazwie (A-Z)</Text>
              </Pressable>
              <Pressable onPress={sortByNameDesc} style={styles.sortButton}>
                <Text>Sortuj po nazwie (Z-A)</Text>
              </Pressable>
            </View>
            <View style={{ flex: 1 }}>
              <FlatList
                data={sortedData}
                renderItem={({ item }) => (
                  <DishComponent dish={item} />
                )}
                horizontal={false}
                numColumns={6}
              />
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Nie masz dostępu do tego widoku</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#EAECCC',
    flex: 1,
  },
  menu: {
    flex: 1,
    padding: 1,
    alignItems: 'center',
  },
  sortButtons: {
    padding: 5,
    flexDirection: 'row', 
    margin: 10, 
  },
  sortButton: {
    padding: 5,
    backgroundColor: '#CD8D7A',
    borderRadius:5,
    margin: 5
  },
});
