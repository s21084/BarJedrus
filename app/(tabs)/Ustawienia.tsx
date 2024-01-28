import { StyleSheet, View, Text, Pressable, TextInput} from 'react-native';
import Hedder from '../../components/normal/hedder';
import { useEffect, useState } from 'react';
import { useUserApi } from '../../lib/api/user';
import { usePersonApi } from '../../lib/api/person';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../../context/AuthContext';


//const { getUser } = useUserApi();
// @ts-ignore






//const res = await getUserByEmail(email as string);
export default function Settings  () {
    //@ts-ignore
    const { getUserByEmail, editUser, getUser } = useUserApi();
    //@ts-ignore
    const { editPerson } = usePersonApi();
    //@ts-ignore
    const { createPerson } = usePersonApi();
    //@ts-ignore
    const { email } = useAuth();
    console.log("Tuż po wejściu do ustawień: ", email);
    const [id, setId] = useState('');
    const [emails, setEmails] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSuname] = useState('');
    const [personId, setPersonId] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
    const [isVerified, setIsVerified] = useState('');
    
    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUserByEmail(email as string);
            console.log("res ", res)
            setEmails(email)
            setId(res.id)
            
            if(res.personId != null){
                setPersonId(res.personId)
                setPhone(res.person.phone)
                setFirstName(res.person.name)
                setSuname(res.person.surname)
            }
            
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
        // @ts-ignore
         
          
          
          if(personId == ''){
            const res = await createPerson({name: firstName, surname: surname, phone: phone });
            console.log("Res nid ",res.id)
            setPersonId(res.id as string)
            console.log("Personid ",personId)
          }else{
            const EditPerson = async () => {
                await editPerson({ id: personId, data: { name: firstName, surname: surname, phone: phone } });
            }
            EditPerson()
          }
          mutate({ id: id, data: { email: email, isAdmin: isAdminBool, isVerified: isVerifiedBool, personId: personId } });
          console.log("Sprawdzam status: ", status)
          console.log(error)
      };
    
        return(
            <View>
            <Hedder />
            <View style={{ alignItems: 'center' }}>
            <Text style={{ padding: 10, fontSize: 20 }}>Ustawienia konta:</Text>
            <Text style={{ padding: 10, fontSize: 20 }}>Email: {email}</Text>
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
            {/* <TextInput
            style = {styles.input}
            onChangeText={newText => setEmails(newText)}
            defaultValue={emails}
            placeholder="Twój mail"
            /> */}
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