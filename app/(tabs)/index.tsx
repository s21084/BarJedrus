import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Hedder from '../../components/hedder';
import InfoComponent from '../../components/infoComponent';
import infos from '../../assets/data/info'
import EditDayDishComponent from '../../components/editDayDishComponent';
import { Link } from 'expo-router';




export default function Main () {
  return (
    <View>
      <Hedder />
      <View style={styles.container}>
          <Text>Strona Główna</Text>   
          <Text>Może jakieś informacje o tym jak obsługiwać/ informacje "o dniu następnym"</Text>  
      <InfoComponent info= {infos[0]}/>
      
      
      <View>  
                    <EditDayDishComponent />
        </View>

      
      
      

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems: 'center',
        padding: 25,
        backgroundColor: '#E2E8CE',
  },
  

});
