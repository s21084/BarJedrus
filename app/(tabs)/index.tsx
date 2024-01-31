
import { Pressable, StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import Hedder from '../../components/normal/hedder';
import ScheduleComponent from '../../components/scheduleComponent';
import { useAuth } from '../../context/AuthContext';
import { useInfoBarApi } from "../../lib/api/infoBar";
import React, { useState, useEffect } from 'react';

import { useScheduleApi } from '../../lib/api/schedule';
import { useUserApi } from '../../lib/api/user';

export default function Main () {
  const { email } = useAuth();
  const [startHour, setStartHour] = useState(new Date());
  const [isAdmin, setIsAdmin] = useState('');
    const [isVerified, setIsVerified] = useState('');
  const [endHour, setEndHour] = useState(new Date());
  const [data, setData] = useState([]);
    const [bonusNote, setBonusNote] = useState('');
    const { getInfoBar } = useInfoBarApi();
    const { getUserByEmail } = useUserApi();
  const { getScheduleByUser } = useScheduleApi()
  useEffect(() => {
    const fetchUser = async () => {
        //@ts-ignore
        const res = await getUserByEmail(email as string);
        console.log("res ", res)
        setIsAdmin(res.isAdmin)
        setIsVerified(res.isVerified)
    }
    fetchUser()
}, [])
  useEffect(() => {
    const fetchInfo = async () => {
      
        const res = await getInfoBar("1");
        setStartHour(new Date(res.startHour));
        setEndHour(new Date(res.endHour));
        if(res.bonusNote == null){
          setBonusNote('');
        }else{
          setBonusNote(res.bonusNote);
        }
        
    }
    fetchInfo()
}, [])
useEffect(() => {
  const fetchUser = async () => {
    const resUser = await getUserByEmail(email as string);
    const resUsere = await getScheduleByUser(resUser.id as string);
    setData(resUsere)
  }
  fetchUser()
}, [])


  

    

 //@ts-ignore
 function formatTime(time) {
  return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
if(isVerified){
   return (
    <View>
      <Hedder />
      <View style={styles.container}>
      <View style={{flexDirection: 'row',backgroundColor: '#DBCC95', borderColor: 'black', borderWidth: 5}}>
      <View style={styles.informationBar}>
        <Text>Informacja o barze</Text>
        <Text>Bar otwarty w godzinach {formatTime(startHour)} - {formatTime(endHour)}</Text>
        <Text>{bonusNote}</Text>
        </View>
          <View style={styles.contenerWelcome}>
          <Text>Witaj w panelu pracownika. </Text>  
          <Text>Znajduje siętu 5 paneli które mogą cię zainteresować (i jeden dodatkowy dla właściciela).</Text>  
          <Text>1. Bar Jędruś - strona na kórej znajdujesz się obecnie</Text>
          <Text>2. Oferta - tu znajduje się menu oraz dzisiejsze danie dnia</Text>
          <Text>z informacjami dotyczącymi jutszejszego dnia</Text>
          <Text>3. Wydarzenia - najbliższe wydarzenia oraz parę szczegółów które pomogą Tobie</Text>
          <Text>i współpracownikom przygotować się do pracy</Text>
          <Text>4. Ustawienia - ustawienia użytkownika, możesz tam zmienić mail, nr telefonu i inne</Text>
          <Text>5. Abonament - lista osób zapisanych na obiady z abonamentem (pomoże ci to w obsłudze klientów)</Text>
          </View>
          </View>
          <View style={styles.containerSchedule}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Harmonogram</Text>
        <FlatList 
                data={data}
                renderItem={({ item }) => (
                        <ScheduleComponent schedule={item}/>
            )}
            horizontal={false}
            numColumns={7}
             />
          </View>
      </View>
    </View>
  );
  }else{
    return (
<View>
  <Text>Nie masz dostępu do tego widoku</Text>
</View>
)
 }
 
}

const styles = StyleSheet.create({
  container: {
        padding: 25,
        flex:1,
        backgroundColor: '#EAECCC',
        alignItems: 'center'
  },
  containerSchedule: {
    padding: 25,
    backgroundColor: '#EAECCC',
    alignItems: 'center'
},
  contenerWelcome: {
    padding: 15,
    borderRadius:5,
    backgroundColor: '#DBCC95',
},
informationBar: {
  flex: 1,
  paddingHorizontal: 15,
  maxWidth: 300,
  paddingVertical: 15,
  marginVertical: 5,
  marginHorizontal: 5,
  alignItems: 'center',
  backgroundColor: '#DBCC95',
  borderRadius: 5, 
  overflow: 'hidden',
},
  

});
