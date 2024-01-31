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
    const [id, setId] = useState('');
    const [emails, setEmails] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSuname] = useState('');
    const [personId, setPersonId] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
    const [isVerified, setIsVerified] = useState('');
    const [street, setStreet] = useState('');
    const [homeNr, setHomeNr] = useState('');
    const [flatNr, setFlatNr] = useState('');
    const [city, setCity] = useState('');
    
    useEffect(() => {
        const fetchUser = async () => {
              // @ts-ignore
            const res = await getUserByEmail(email as string);
              // @ts-ignore
            setEmails(email)
            setId(res.id)
            
            if(res.personId != null){
                setPersonId(res.personId)
                setPhone(res.person.phone)
                setFirstName(res.person.name)
                setSuname(res.person.surname)
                setStreet(res.person.Street)
                setHomeNr(res.person.HomeNumber)
                setFlatNr(res.person.FlatNumber)
                setCity(res.person.City)
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
          if(personId == ''){
            const res = await createPerson({name: firstName, surname: surname, phone: phone, Street: street, HomeNumber: homeNr, FlatNumber: flatNr, City: city  });
            setPersonId(res.id as string)
          }else{
            const EditPerson = async () => {
                await editPerson({ id: personId, data: { name: firstName, surname: surname, phone: phone, Street: street, HomeNumber: homeNr, FlatNumber: flatNr, City: city  } });
            }
            EditPerson()
          }
            // @ts-ignore
          mutate({ id: id, data: { email: email, isAdmin: isAdminBool, isVerified: isVerifiedBool, personId: personId } });
      };
    
        return(
            <View>
            <Hedder />
            <View style={{ alignItems: 'center' }}>
            <Text style={{ padding: 10, fontSize: 20 }}>Ustawienia konta:</Text>
            <Text style={{ padding: 10, fontSize: 20 }}>Email: {email}</Text>
            <View style={{ flexDirection: 'row'}}>
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
            </View>
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
            <View style={{ flexDirection: 'row'}}>
            <View>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setStreet(newText)}
            defaultValue={street}
            placeholder="Nazwa ulicy"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setHomeNr(newText)}
            defaultValue={homeNr}
            placeholder="Numer domu"
            />
            </View>
            <View>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setFlatNr(newText)}
            defaultValue={flatNr}
            placeholder="Numer mieszkania"
            />
            <TextInput
            style = {styles.input}
            onChangeText={newText => setCity(newText)}
            defaultValue={city}
            placeholder="Miasto"
            />
            </View>
            </View>
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
        backgroundColor: '#EAECCC',
    },
    buttonContainer: {
        marginVertical: 10,
        alignItems: 'center'
      },
      button: {
        backgroundColor: '#DBCC95',
        padding: 10,
        margin: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
      },
    buttonBack: {
        backgroundColor: '#DBCC95',
        padding: 10,
        borderRadius: 5, 
    },
    buttonText: {
        color: '#EAECCC',
        
    },
    input: {
        padding: 5,
        width: 400,
        borderColor: '#DBCC95',
        margin: 5,
        backgroundColor: '#EAECCC',
        borderRadius:5,
      },
});