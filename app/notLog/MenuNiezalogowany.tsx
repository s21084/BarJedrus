import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { listDishNoLog, getDayDishNoLog, getInfoBarNoLog } from '../../lib/api/notLog';

export default function OfferNotLogged() {
  const [dishes, setDishes] = useState([]);
  const [dayDish, setDayDish] = useState([]);
  const [priceBar, setPriceBar] = useState([]);
  const [startHour, setStartHour] = useState(new Date());
  const [endHour, setEndHour] = useState(new Date());
  const [bonusNote, setBonusNote] = useState('');

  useEffect(() => {
    fetchDishes();
    fetchDayDishes();
    fetchInfo();
  }, []);
 
  
  const fetchDishes = async () => {
    try {
      const dishesData = await listDishNoLog();
      setDishes(dishesData); 
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };
  const fetchInfo = async () => {
    try {
      const infoData = await getInfoBarNoLog();
      console.log("info bar ", infoData)
      setStartHour(new Date(infoData.startHour));
      setEndHour(new Date(infoData.endHour));
      setBonusNote(infoData.bonusNote)
      
      
    } catch (error) {
      console.error('Error fetching info:', error);
    }
  };

  const fetchDayDishes = async () => {
    try {
      const dayDishTemp = await getDayDishNoLog();
      setDayDish(dayDishTemp); 
    } catch (error) {
      console.error('Error fetching day dishes:', error);
    }
  };
  function formatTime(time) {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  return (
    <View style={styles.container}>
      <View>
        <View style={{flexDirection: 'row'}}>
        <View style={styles.infoContainer}>
        <Text>Godziny pracy baru:</Text>
        <Text>Godzina otwarcia: {formatTime(startHour)} </Text>
        <Text>Godzina zamknięcia: {formatTime(endHour)} </Text>
        <Text>Dodatkowe informacje: {bonusNote} </Text>
        </View>
        <View style={styles.dayDishContainer}>
        <Text>Danie dnia ({dayDish.price}zł za zestaw zupa + drugie danie): </Text>
        <Text>Zupy: {dayDish.soup} </Text>
        <Text>Drugie danie: {dayDish.secondDish} </Text>
        </View>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <Text>Menu:</Text>
        <FlatList
          // @ts-ignore
            data={dishes}
            renderItem={({ item }) => (
            <View style={styles.dishContainer}>
                {item.name && <Text>{item.name}</Text>}
                {item.priceForPiece && <Text>{item.priceForPiece}zł</Text>}
                {item.priceForWeight && <Text>{item.priceForWeight}zł/100g</Text>}
            </View>
            )}
            horizontal={false}
            numColumns={8}
          />
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dishContainer:{
    margin: 5, 
    padding:10, 
    backgroundColor: '#ACBFA4'
  },
  dayDishContainer:{
    margin: 5, 
    padding:15, 
    backgroundColor: '#ACBFA4',
    justifyContent:'center'
  },
  infoContainer:{
    margin: 5, 
    padding:15, 
    backgroundColor: '#ACBFA4',
    justifyContent:'center'
  }
});
