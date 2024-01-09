import { Pressable, StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import Hedder from '../../components/normal/hedder';
import InfoComponent from '../../components/normal/infoComponent';
import infos from '../../assets/data/info'
import ScheduleComponent from '../../components/scheduleComponent'




export default function Main () {
  const dummyData = [
    {
        id:'1',
        startHour: new Date("2024-01-09T10:43:27.048Z"),
        endHour:  new Date("2024-01-09T10:43:27.048Z"),
        userId: 1,
        weekDayNumber: 1
    },
    {
      id:'2',
      startHour: new Date("2024-01-09T10:43:27.048Z"),
      endHour: new Date("2024-01-09T10:43:27.048Z"),
      userId: 1,
      weekDayNumber: 2
     },
    {
    id:'3',
    startHour: new Date("2024-01-09T10:43:27.048Z"),
    endHour: new Date("2024-01-09T10:43:27.048Z"),
    userId: 1,
    weekDayNumber: 3
    },
    {
   id:'4',
    startHour: new Date("2024-01-09T10:43:27.048Z"),
    endHour: new Date("2024-01-09T10:43:27.048Z"),
    userId: 1,
    weekDayNumber: 4
    },
    {
  id:'5',
  startHour: new Date("2024-01-09T10:43:27.048Z"),
  endHour: new Date("2024-01-09T10:43:27.048Z"),
  userId: 1,
  weekDayNumber: 5
},
{
  id:'6',
  startHour: new Date("2024-01-09T10:43:27.048Z"),
  endHour: new Date("2024-01-09T10:43:27.048Z"),
  userId: 1,
  weekDayNumber: 6
},
{
  id:'7',
  startHour: new Date("2024-01-09T10:43:27.048Z"),
  endHour: new Date("2024-01-09T10:43:27.048Z"),
  userId: 1,
  weekDayNumber: 7
},
    ];
  return (
    <View>
      <Hedder />
      <View style={styles.container}>
      <View style={{flexDirection: 'row',backgroundColor: '#47CE83', borderColor: 'black', borderWidth: 5}}>
      <InfoComponent info= {infos[0]}/>
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
                data={dummyData}
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
}

const styles = StyleSheet.create({
  container: {
        padding: 25,
        flex:1,
        backgroundColor: '#E2E8CE',
        alignItems: 'center'
  },
  containerSchedule: {
    padding: 25,
    backgroundColor: '#E2E8CE',
    alignItems: 'center'
},
  contenerWelcome: {
    padding: 15,
    borderRadius:5,
    backgroundColor: '#47CE83',
},
  

});
