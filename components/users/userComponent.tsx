//@ts-nocheck
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserType } from '../../types/index';
import { Link } from 'expo-router';
import { usePersonApi } from '../../lib/api/person';
import {  useState } from 'react';

type UserProps = {
    user: UserType;
}
export default function UserComponent( {user}: UserProps){
    
const [personInfo, setPersonInfo] = useState('');
    const PersonGetting = async ( id  : number) => {
        const { getPerson } = usePersonApi();
            const res = await getPerson(id.toString());
            console.log("res person ", res)
            return(res.json())
        }
console.log(user.email)
    return (
        <View >
            <Link href={`/user/${user.id}`} style={styles.component}>
                <View style={styles.textContainer}> 
                <Text>Email: {user.email}</Text>
                <Text>Weryfikacja: {user.isVerified.toString()}</Text>
                <Text>Administrator: {user.isAdmin.toString()}</Text>
                </View>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        width: 300,
        height: 300,
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#DBCC95',
        borderRadius: 5, 
        overflow: 'hidden',
    },
    textContainer: {
        flexDirection: 'column',
    },
});

