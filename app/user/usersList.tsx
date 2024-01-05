import { useSearchParams } from "expo-router";
import { Text, View, StyleSheet} from 'react-native';
import events from '../../assets/data/event'

export default function UsersList (){
  
    return (
        <View style={styles.container}>  
                <Text>Wstawić tabele z użytkownikami (usuń guzik) oraz generowanie kodu i guzik nadania większych</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ACBFA4',
        flex: 1,
        alignItems: 'center'
    },
});