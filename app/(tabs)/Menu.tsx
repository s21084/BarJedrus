import React from 'react';
import { StyleSheet, View, Pressable, FlatList } from 'react-native';
import { Link } from 'expo-router';
import Hedder from '../../components/normal/hedder';
import DishComponent from '../../components/dishes/dishComponent';
import DayDishComponent from '../../components/dishes/dayDishComponent';
import EditDayDishComponent from '../../components/popUps/editDayDishComponent';
import dishes from '../../assets/data/dish';

export default function Offer() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: 5}}>
        <Pressable>
          <DayDishComponent />
        </Pressable>
        <EditDayDishComponent />
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={dishes}
            renderItem={({ item }) => (
              <Link href={`/dish/${item.id}`}>
                <Pressable>
                  <DishComponent dish={item} />
                </Pressable>
              </Link>
            )}
            horizontal={false}
            numColumns={5}
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
});
