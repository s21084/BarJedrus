import { useSearchParams, Link, useRouter } from "expo-router";
import { Text, View, Switch, StyleSheet, TextInput, Pressable} from 'react-native';
import { useEffect, useState } from 'react';
import { useUserApi } from '../../lib/api/user';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from "../../context/AuthContext";
import { usePersonApi } from '../../lib/api/person';




export default function UserScreen (){
    const { id } = useSearchParams();
    //@ts-ignore
    const { getUser } = useUserApi();
     //@ts-ignore
    const { deleteUser } = useUserApi();
    //@ts-ignore
    const { editPerson } = usePersonApi();
     //@ts-ignore
    const { editUser } = useUserApi();
    const [isAdmin, setIsAdmin] = useState('');
    const [isVerified, setIsVerified] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [surname, setSurname] = useState('');
    const [personId, setPersonId] = useState('');
    const [email, setEmail] = useState('')

    const router = useRouter();
    const { authToken } = useAuth();

    const onSubDelete = async () => {
        const DeleteSub = async () => {
            await deleteUser( id as string );
        }
        DeleteSub()
          router.back();
      };

      const { mutate, isError, error, status } = useMutation({

        mutationFn: editUser
      
      });

      const onSave = async () => {
        // @ts-ignore
        const isAdminBool = isAdmin as unknown as boolean;
        const isVerifiedBool = isVerified as unknown as boolean;
          mutate({ id: id, data: {email: email, isAdmin: isAdminBool, isVerified: isVerifiedBool} });
          const EditPerson = async () => {
            await editPerson({ id: personId, data: { name: name, surname: surname, phone: phone } });
        }
        EditPerson()
        router.back();
      };






    useEffect(() => {
        const fetchSub = async () => {
            const res = await getUser( id as string );
            setPersonId(res.personId)
            setPhone(res.person.phone)
            setName(res.person.name);
            setEmail(res.email);
            setSurname(res.person.surname);
            setIsVerified(res.isVerified);
            setIsAdmin(res.isAdmin);
            
        }
        fetchSub()
    }, [])
    

    return (
        <View style={styles.container}>  
            <View style={styles.eventContainer}>
            <Text>Email:</Text>
            <TextInput
            editable="false"
            style = {styles.input}
            value={email}
            placeholder="Email"
            
            />
            <Text>Imię:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setName(newText)}
            defaultValue={name}
            placeholder="Imie"
            />
            <Text>Nazwisko:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setSurname(newText)}
            defaultValue={surname}
            placeholder="Nazwisko"
            />
            <Text>Telefon:</Text>
            <TextInput
            style = {styles.input}
            onChangeText={newText => setPhone(newText)}
            defaultValue={phone}
            placeholder="Telefon"
            />
            
            
            <Text>Czy jest administratorem:</Text>
            <View style={{flexDirection: 'row', margin: 5}}>
            <Switch
            trackColor={{ true: '#81b0ff', false: '#767577'}}
            thumbColor={isAdmin ? '#f5dd4b' : '#f5dd4b'}
            ios_backgroundColor="#3e3e3e"
            // @ts-ignore
            onValueChange={newText => setIsAdmin(newText)}
            // @ts-ignore
            value={isAdmin}
            style={{margin: 5}}
          />
          <TextInput
            value={isAdmin ? 'Tak': 'Nie'}
            // @ts-ignore
            editable="false"
            placeholder="Dekoracje"
            style={{margin: 5}}
          />
          </View>
          <Text>Czy jest zweryfikowany:</Text>
          <View style={{flexDirection: 'row', margin: 5}}>
            <Switch
            trackColor={{ true: '#81b0ff', false: '#767577'}}
            thumbColor={isVerified ? '#f5dd4b' : '#f5dd4b'}
            ios_backgroundColor="#3e3e3e"
            // @ts-ignore
            onValueChange={newText => setIsVerified(newText)}
            // @ts-ignore
            value={isVerified}
            style={{margin: 5}}
          />
          <TextInput
            value={isVerified ? 'Tak': 'Nie'}
            // @ts-ignore
            editable="false"
            placeholder="Dekoracje"
            style={{margin: 5}}
          />
          </View>
                    <Link href={`/schedule/${id}`} style={styles.button}>
                        <Text style={styles.buttonText}>Harmonogram</Text>
          </Link>
            </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={onSave}>
                        <Text style={styles.buttonText}>Zapisz</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={onSubDelete}>
                        <Text style={styles.buttonText}>Usuń</Text>
                    </Pressable>
                </View>
                </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ACBFA4',
        flex: 1,
        alignItems: 'center'
    },
    input: {
        padding: 5,
        width: 500,
        borderColor: '#262626',
        margin: 5,
        backgroundColor: '#ACBFA4',
        borderRadius:5,
      },
    eventContainer: {
        backgroundColor: '#E2E8CE',
        padding: 50,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center'
    },
    hedders: {
        fontSize:15,
        fontWeight: "normal",
        padding: 3
    },
    value: {
        fontSize:20,
        fontStyle: "italic"
    },
    buttonText: {
        color: '#E2E8CE',
        fontWeight: '600',
        fontSize: 16,
      },
    button: {
        backgroundColor: '#262626',
        padding: 10,
        margin: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
      },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
      },
});