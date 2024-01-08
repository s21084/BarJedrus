import { StyleSheet, View, Text, Pressable, FlatList, ActivityIndicator} from 'react-native';
import { Link } from 'expo-router';
import EventComponent from '../../components/events/eventComponent';
import Hedder from '../../components/normal/hedder';
//import events from '../../assets/data/event'
import { useEffect, useState } from 'react';
import { listEvents } from '../../lib/api/events';
import { useQuery } from '@tanstack/react-query';

export default function Event () {
   
    const {data, isLoading, error } = useQuery({
       queryKey:['events'],
       queryFn: listEvents
    });
  
    if(isLoading){
        return <ActivityIndicator />;
    }

    if(error) {
        return <Text>{error.message}</Text>
    }
    const sortedData = data.slice().sort((a: { date: number; }, b: { date: number; }) => a.date - b.date); //Spróować sortować
    return(
        <View style={{
            flex: 1}}>
        <Hedder />
        <View style={{
        alignItems: 'center', flex: 1}}>
            <Text style={{padding: 10, fontSize: 30}}>Wydarzenia</Text>
            <FlatList 
                data={sortedData}
                renderItem={({ item }) => (
                        <EventComponent event={item}/>
            )}
            horizontal={false}
            numColumns={3}
             />
        </View>
        </View>
    );
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
});