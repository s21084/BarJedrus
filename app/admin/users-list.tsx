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


export default function UsersList() {
  const { listUsers } = useUserApi();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };


  const {data, isLoading, error } = useQuery({
    queryKey:['users'],
    queryFn: listUsers
 });

console.log(data);
  return (
    <View style={styles.container}>
    <FlatList 
      data={data}
      style={{flexDirection: 'column'}}
      renderItem={({ item }) => (
        <View style={styles.line}>
        {item.personId &&<Text style={styles.textLine}>{item.person.name} {item.person.surname}</Text>}
        <Text style={{fontSize: 15}}>{item.email}</Text>
        <View style={{backgroundColor: "#E2E8CE", borderRadius: 5,  padding: 5, margin: 5}}>
        <Text>Uprawienia pracownika:</Text>
        <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>Uprawienia administratora:</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          </View>
        <View style={styles.buttonBack}>
            <Link href={'/'}>
                <Pressable>
                    <Text style={styles.buttonText}>Harmonogram</Text>
                </Pressable>
            </Link>
          </View>
          <View style={styles.buttonBack}>
                <Pressable>
                    <Text style={styles.buttonText}>Usuń</Text>
                </Pressable>
          </View>
          <View style={styles.buttonBack}>
                <Pressable>
                    <Text style={styles.buttonText}>Zapisz</Text>
                </Pressable>
          </View>
        </View>
      )}
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