import { StyleSheet, View, Text, Pressable, FlatList} from 'react-native';
import { Link } from 'expo-router';
import Hedder from '../../components/normal/hedder';
import DishComponent from '../../components/dishes/dishComponent';
import DayDishComponent from '../../components/dishes/dayDishComponent';
import dishes from '../../assets/data/dish'
import React, { useState } from 'react';
import { getDayDish } from '../../lib/api/dayDish';
import { useQuery } from '@tanstack/react-query';


    export default function Offer () {
      
    return(
        
        <View>
            <Hedder />
            <View style={styles.container}>
            <DayDishComponent />
        <View style={styles.menu}>
            
             <FlatList 
                data={dishes}
                renderItem={({ item }) => (
                <Link href={`/dish/${item.id}`}>
                    <Pressable>
                        <DishComponent dish={item}/>
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
        alignItems: 'center',
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
