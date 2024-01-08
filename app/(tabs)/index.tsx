import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Hedder from '../../components/normal/hedder';
import InfoComponent from '../../components/normal/infoComponent';
import infos from '../../assets/data/info'




export default function Main () {
  return (
    <View>
      <Hedder />
      <View style={styles.container}>
        
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
        <Text>TU BĘDZIE HARMONOGRAM DANEJ OSOBY NA TYDZIEŃ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
