import { StyleSheet, Text, View, TextInput, Pressable  } from 'react-native';
import { InfoType } from '../types/index';

type InfoProps = {
    info: InfoType;
  }
const InfoComponent = ({ info }: InfoProps) => {
    return(
        <View style={styles.informationBar}>
        <Text>Informacja o barze</Text>
        <Text>{info.openHour}</Text>
        <Text>{info.closeHour}</Text>
        <Text>{info.bonusInfo}</Text>
        </View>
        );
}

const styles = StyleSheet.create({
    informationBar: {
        flex: 1,
        paddingHorizontal: 15,
        maxWidth: 300,
        paddingVertical: 15,
        marginVertical: 5,
        marginHorizontal: 5,
        alignItems: 'center',
        backgroundColor: '#47CE83',
        borderRadius: 5, 
        overflow: 'hidden',
    },
});


export default InfoComponent;