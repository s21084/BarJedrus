import { StyleSheet, View, Text, Pressable, FlatList} from 'react-native';
import { Link } from 'expo-router';
import Hedder from '../../components/normal/hedder';
import EditOpenHoursComponent from '../../components/popUps/editOpenHoursComponent';
import { useUserApi } from '../../lib/api/user';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';



export default function Wlasciciel () {
    const { email } = useAuth();
    const [isAdmin, setIsAdmin] = useState('');
    const [isVerified, setIsVerified] = useState('');
    //@ts-ignore
    const { getUserByEmail} = useUserApi();
    useEffect(() => {
        const fetchUser = async () => {
            //@ts-ignore
            const res = await getUserByEmail(email as string);
            setIsAdmin(res.isAdmin)
            setIsVerified(res.isVerified)
        }
        fetchUser()
    }, [])
    if(isAdmin){  return(
        <View >
        <Hedder />
        <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
        <EditOpenHoursComponent />
        <View style={styles.buttonBack}>
            <Link href={'/admin/new-event'}>
                    <Text style={styles.buttonText}>Nowe wydarzenie</Text>
            </Link>
        </View>
        <View style={styles.buttonBack}>
            <Link href={'/admin/new-dish'}>
                    <Text style={styles.buttonText}>Dodaj danie</Text>
            </Link>
        </View>
        <View style={styles.buttonBack}>
            <Link href={'/admin/users-list'}>
                    <Text style={styles.buttonText}>Lista pracowników</Text>
            </Link>
        </View>
        <View style={styles.buttonBack}>
            <Link href={'/admin/new-subscription'}>
                    <Text style={styles.buttonText}>Nowy abonamentowicz</Text>
            </Link>
        </View>
        </View>
      
        </View>
        </View>
    );}else{
        return(
            <View>
            <Text>Nie masz dostępu do tego widoku</Text>
        </View>
        )
    }


   
}

const styles = StyleSheet.create({
    buttonBack: {
        padding: 25,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#DBCC95',
        borderRadius: 5, 
        overflow: 'hidden',
        justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
        padding: 10,
    },
});
