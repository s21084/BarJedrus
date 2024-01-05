import { StyleSheet, Text, View, TextInput, Pressable  } from 'react-native';


export default function DayDishComponent(){
    
    return(
            <View style={{alignItems: 'center'}}>
                <View style={styles.logInWindow}>
                    <Text style={{padding: 10}}>Danie Dnia</Text>
                    <View style={styles.dishes}>
                        <View style={styles.dishType}>   
                            <Text>Zupa</Text>
                            <Text>Zupa</Text>
                            <Text>Zupa</Text>
                        </View>
                        <View style={styles.dishType}>
                            <Text>Drugie danie</Text>
                            <Text>Drugie danie</Text>
                            <Text>Drugie danie</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    logInWindow: {
        flex: 1,
        marginVertical: 5,
        alignItems: 'center',
        paddingHorizontal: 100,
        paddingVertical: 5,
        backgroundColor: '#ACBFA4',
        borderRadius: 5,
        overflow: 'hidden',
    },
    dishes: {
        flexDirection: 'row',
    },
    dishType: {
        padding: 25,
    },
});