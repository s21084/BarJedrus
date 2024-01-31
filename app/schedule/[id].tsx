//@ts-nocheck

import { useSearchParams, Link, useRouter } from "expo-router";
import { Text, View, FlatList, StyleSheet, TextInput, Pressable} from 'react-native';
import { useEffect, useState } from 'react';
import { useUserApi } from '../../lib/api/user';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from "../../context/AuthContext";
import { useScheduleApi } from '../../lib/api/schedule';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { resolvePreset } from "@babel/core";


function DayComponent({onChangeStart, selectedStart, onChangeEnd, selectedEnd, dayNumber}){
  const dayWeek: { [key: number]: string } = {
    1:'Poniedziałek',
    2: 'Wtorek',
    3: 'Środa',
    4: 'Czwartek',
    5: 'Piątek',
    6: 'Sobota',
    7: 'Niedziela',
}
return(
  <View style={{backgroundColor: 'white', margin: 2, padding: 5}}>

            <Text>{dayWeek[dayNumber]}</Text>
            <Text>Początek zmiany:</Text>
            <DatePicker
               // @ts-ignore
            selected={selectedStart}
              // @ts-ignore
            onChange={onChangeStart}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeFormat="HH:mm"
            dateFormat="HH:mm"
          />
          <Text>Koniec zmiany:</Text>
          <DatePicker
               // @ts-ignore
            selected={selectedEnd}
              // @ts-ignore
            onChange={onChangeEnd}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeFormat="HH:mm"
            dateFormat="HH:mm"
          />
          </View>
)
}

export default function UserScreen (){
    const { id } = useSearchParams();
    
    const informationBarId = 1
    const { getScheduleByUser } = useScheduleApi()
    const { editSchedule } = useScheduleApi()
    const { createSchedule } = useScheduleApi() //startHour:DateTime?, endHour:DateTime?, weekDayNumber:Int, userId:Int, informationBarId:Int


    const [startHour1, setStartHour1] = useState();
    const [endHour1, setEndHour1] = useState();
    const [schId1, setSchId1] = useState();

    const [startHour2, setStartHour2] = useState();
    const [endHour2, setEndHour2] = useState();
    const [schId2, setSchId2] = useState();

    const [startHour3, setStartHour3] = useState();
    const [endHour3, setEndHour3] = useState();
    const [schId3, setSchId3] = useState();
    
    const [startHour4, setStartHour4] = useState();
    const [endHour4, setEndHour4] = useState();
    const [schId4, setSchId4] = useState();

    const [startHour5, setStartHour5] = useState();
    const [endHour5, setEndHour5] = useState();
    const [schId5, setSchId5] = useState();

    const [startHour6, setStartHour6] = useState();
    const [endHour6, setEndHour6] = useState();
    const [schId6, setSchId6] = useState();

    const [startHour7, setStartHour7] = useState();
    const [endHour7, setEndHour7] = useState();
    const [schId7, setSchId7] = useState();




    const [schedule, setSchedule] = useState([]);

    const router = useRouter();
    const { authToken } = useAuth();


    useEffect(() => {
      const fetchUser = async () => {
        
           
          let res = await getScheduleByUser(id as string);
          console.log("res ", res.length)
          if(res.length == 0){
            for (let index = 1; index < 8; index++) {
              console.log("tu się wywala?")
              const idNum = Number(id)
              await createSchedule({weekDayNumber:index, userId:idNum, informationBarId: informationBarId});
            }
            res = await getScheduleByUser(id as string);
          }
          console.log("Po wszstkim res ", res)
           
          setStartHour1(new Date(res[0].startHour))
           
          setStartHour2(new Date(res[1].startHour))
           
          setStartHour3(new Date(res[2].startHour))
           
          setStartHour4(new Date(res[3].startHour))
           
          setStartHour5(new Date(res[4].startHour))
           
          setStartHour6(new Date(res[5].startHour))
           
          setStartHour7(new Date(res[6].startHour))
          
           
          setEndHour1(new Date(res[0].endHour))
           
          setEndHour2(new Date(res[1].endHour))
           
          setEndHour3(new Date(res[2].endHour))
           
          setEndHour4(new Date(res[3].endHour))
           
          setEndHour5(new Date(res[4].endHour))
           
          setEndHour6(new Date(res[5].endHour))
           
          setEndHour7(new Date(res[6].endHour))

          setSchId1(res[0].id)
          setSchId2(res[1].id)
          setSchId3(res[2].id)
          setSchId4(res[3].id)
          setSchId5(res[4].id)
          setSchId6(res[5].id)
          setSchId7(res[6].id)

          setSchedule(res);
      }
      fetchUser()
  }, [])







      const onSave = async () => {
        const idNum = Number(id)
        await editSchedule({ id: schId1, data: { 
          startHour: startHour1,
          endHour: endHour1,
          weekDayNumber: 1,
          userId: idNum,
          informationBarId : informationBarId 
          } });
          await editSchedule({ id: schId2, data: { 
            startHour: startHour2,
            endHour: endHour2,
            weekDayNumber: 2,
            userId: idNum,
            informationBarId : informationBarId 
           } });
           await editSchedule({ id: schId3, data: { 
            startHour: startHour3,
            endHour: endHour3,
            weekDayNumber: 3,
            userId: idNum,
            informationBarId : informationBarId 
           } });
           await editSchedule({ id: schId4, data: { 
            startHour: startHour4,
            endHour: endHour4,
            weekDayNumber: 4,
            userId: idNum,
            informationBarId : informationBarId 
           } });

           await editSchedule({ id: schId5, data: { 
            startHour: startHour5,
            endHour: endHour5,
            weekDayNumber: 5,
            userId: idNum,
            informationBarId : informationBarId 
           } });
           await editSchedule({ id: schId6, data: { 
            startHour: startHour6,
            endHour: endHour6,
            weekDayNumber: 6,
            userId: idNum,
            informationBarId : informationBarId 
           } });
           await editSchedule({ id: schId7, data: { 
            startHour: startHour7,
            endHour: endHour7,
            weekDayNumber: 7,
            userId: idNum,
            informationBarId : informationBarId 
           } });





        router.back();
      };






    

    return (
        <View style={styles.container}>  
        <Text>SCHEDULE:</Text>
            <View style={styles.eventContainer}>
            <View style={{flexDirection: 'row'}}>
            <DayComponent 
              onChangeStart={date => setStartHour1(date)}
              onChangeEnd={date => setEndHour1(date)}
              selectedStart={startHour1}
              selectedEnd={endHour1}
              dayNumber={1}
            />
            <DayComponent 
              onChangeStart={date => setStartHour2(date)}
              onChangeEnd={date => setEndHour2(date)}
              selectedStart={startHour2}
              selectedEnd={endHour2}
              dayNumber={2}
            />
            <DayComponent 
              onChangeStart={date => setStartHour3(date)}
              onChangeEnd={date => setEndHour3(date)}
              selectedStart={startHour3}
              selectedEnd={endHour3}
              dayNumber={3}
            />
            <DayComponent 
              onChangeStart={date => setStartHour4(date)}
              onChangeEnd={date => setEndHour4(date)}
              selectedStart={startHour4}
              selectedEnd={endHour4}
              dayNumber={4}
            />
            </View>
            <View style={{flexDirection: 'row'}}>
            <DayComponent 
              onChangeStart={date => setStartHour5(date)}
              onChangeEnd={date => setEndHour5(date)}
              selectedStart={startHour5}
              selectedEnd={endHour5}
              dayNumber={5}
            />
            <DayComponent 
              onChangeStart={date => setStartHour6(date)}
              onChangeEnd={date => setEndHour6(date)}
              selectedStart={startHour6}
              selectedEnd={endHour6}
              dayNumber={6}
            />
            <DayComponent 
              onChangeStart={date => setStartHour7(date)}
              onChangeEnd={date => setEndHour7(date)}
              selectedStart={startHour7}
              selectedEnd={endHour7}
              dayNumber={7}
            />
            </View>


            </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={onSave}>
                        <Text style={styles.buttonText}>Zapisz</Text>
                    </Pressable>
                    <Link href="../" style={styles.button}>
                    <Text style={styles.buttonText}>Anuluj</Text>
                    </Link>
                </View>
                </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ACBFA4',
        flex: 1,
        alignItems: 'center'
    },
    input: {
        padding: 5,
        width: 500,
        borderColor: '#DBCC95',
        margin: 5,
        backgroundColor: '#ACBFA4',
        borderRadius:5,
      },
    eventContainer: {
      flexDirection: 'column',
        backgroundColor: '#CD8D7A',
        padding: 50,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center'
    },
    hedders: {
        fontSize:15,
        fontWeight: "normal",
        padding: 3
    },
    value: {
        fontSize:20,
        fontStyle: "italic"
    },
    buttonText: {
        color: '#CD8D7A',
        fontWeight: '600',
        fontSize: 16,
      },
    button: {
        backgroundColor: '#DBCC95',
        padding: 10,
        margin: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
      },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
      },
});