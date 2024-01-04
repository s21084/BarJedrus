import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Hedder from '../../components/hedder';

export default function Main() {
  return (
    <View>
      <Hedder />
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
