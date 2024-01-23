import { StyleSheet, Text, View, TextInput, Pressable  } from 'react-native';

import { ScheduleType } from '../types/index';
import { Link } from 'expo-router';
import { format } from 'date-fns';

type ScheduleProps = {
    schedule: ScheduleType;
}
const dayWeek: { [key: number]: string } = {
    1:'Poniedziałek',
    2: 'Wtorek',
    3: 'Środa',
    4: 'Czwartek',
    5: 'Piątek',
    6: 'Sobota',
    7: 'Niedziela',
}
const Schedule = ({ schedule }: ScheduleProps) => {
    const dateBefore = new Date(schedule.startHour)
    const formattedDateTime = format(dateBefore, 'MMMM dd, yyyy HH:mm:ss');
    //const date = formattedDateTime.toDateString();
    //console.log(dateBefore)
    return(
                <View style={styles.container}>   
                {schedule.weekDayNumber && <Text>{dayWeek[schedule.weekDayNumber]}</Text>}
                <Text>{ formattedDateTime }</Text>
                </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 150,
        height: 75,
        paddingVertical: 5,
        marginVertical: 2,
        marginHorizontal: 2,
        alignItems: 'center',
        backgroundColor: '#47CE83',
        borderRadius: 5, 
        overflow: 'hidden',
    },
});


export default Schedule;