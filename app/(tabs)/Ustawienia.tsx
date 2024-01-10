import { StyleSheet, View, Text, Pressable, TextInput} from 'react-native';
import Hedder from '../../components/normal/hedder';
import { useEffect, useState } from 'react';
import { getUser, editUser } from '../../lib/api/user';
import { editPerson } from '../../lib/api/person';
import { useMutation } from '@tanstack/react-query';

const onSavePress = () => {
//Tutaj muszę zapisać pewnie fetchem nowego użytkownika
console.log("Hello");
};

const Settings = () => {
    const STATIC_ID = "1";
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSuname] = useState('');
    const [personId, setPersonId] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
    const [isVerified, setIsVerified] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUser(STATIC_ID);;
            setEmail(res.email);
            setPhone(res.person.phone)
            setFirstName(res.person.name)
            setSuname(res.person.surname)
            setPersonId(res.personId)
            setIsAdmin(res.isAdmin)
            setIsVerified(res.isVerified)
        }
        fetchUser()
    }, [])
    

    const { mutate, isError, error, status } = useMutation({

        mutationFn: editUser
      
      });

      const onSave = async () => {
        const isAdminBool = isAdmin as unknown as boolean;
        const isVerifiedBool = isVerified as unknown as boolean;
          mutate({ id: STATIC_ID, data: { email: email, isAdmin: isAdminBool, isVerified: isVerifiedBool } });
          const EditPerson = async () => {
            await editPerson({ id: personId, data: { name: firstName, surname: surname, phone: phone } });
        }
        EditPerson()
          
          console.log("Sprawdzam status: ", status)
          console.log(error)
      };
    
        return(
            <View>
            <Hedder />
            <View style={{ alignItems: 'center' }}>
            <Text style={{ padding: 10, fontSize: 20 }}>Ustawienia konta:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setFirstName(newText)}
            defaultValue={firstName}
            placeholder="Imie"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setSuname(newText)}
            defaultValue={surname}
            placeholder="Nazwisko"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setEmail(newText)}
            defaultValue={email}
            placeholder="Twój mail"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setPhone(newText)}
            defaultValue={phone}
            placeholder="Twój nr telefonu"
            />
            
            </View>
                <View style={styles.buttonContainer}>
                    <Pressable  style={styles.button} onPress={onSave}>
                        <Text style={styles.buttonText}>Zapisz</Text>
                    </Pressable>
                </View>
                
                {status=="success" && <Text>Dane zmieniono</Text>}
                {status=="error" && <Text>Coś nie działa</Text>}
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
    buttonContainer: {
        marginVertical: 10,
        alignItems: 'center'
      },
      button: {
        backgroundColor: '#262626',
        padding: 10,
        margin: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
      },
    buttonBack: {
        backgroundColor: '#262626',
        padding: 10,
        borderRadius: 5, 
    },
    buttonText: {
        color: '#E2E8CE',
        
    },
    input: {
        padding: 5,
        width: 500,
        borderColor: '#262626',
        margin: 5,
        backgroundColor: '#E2E8CE',
        borderRadius:5,
      },
});

export default Settings;