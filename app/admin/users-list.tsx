import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Switch
} from 'react-native';
import { useUserApi } from '../../lib/api/user';
import { useQuery } from '@tanstack/react-query';
import UserComponent from '../../components/users/userComponent';


export default function UsersList() {
  const { listUsers } = useUserApi();
 


  const {data, isLoading, error } = useQuery({
    queryKey:['users'],
    queryFn: listUsers
 });

console.log(data);
  return (
    <View style={styles.container}>
      <Text>DODAĆ SORTOWANIE</Text>
    <FlatList 
    //@ts-ignore
      data={data}
      renderItem={({ item }) => (
        <UserComponent user={item}/>
      )}
      horizontal={false}
      numColumns={3}
    />
    


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column'
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  line: {
    flex:1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  buttonBack: {
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 2,
    backgroundColor: '#47CE83',
    borderRadius: 5, 
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
},
buttonText: {
  fontWeight: '400',
  fontSize: 15,
},
  textLine: {
    margin: 5,
    fontWeight: "bold"
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#262626',
    padding: 10,
    margin: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
 
  inputContainer: {
  },
  input: {
    padding: 5,
    width: 500,
    borderColor: '#262626',
    margin: 5,
    backgroundColor: '#E2E8CE',
    borderRadius:5,
  },
});