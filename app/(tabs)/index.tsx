import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Hedder from '../../components/hedder';
import NavMenu from '../../components/navMenu';

export default function TabOneScreen() {
  return (
    <View>
      <Hedder />
      <NavMenu />
      <View style={styles.container}>
          <Text>Strona Główna</Text>   
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
