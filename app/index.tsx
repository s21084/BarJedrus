import { Redirect } from "expo-router";
import { useControlTokenApi } from '../lib/api/control';
import { useEventApi } from '../lib/api/events';
import { useEffect, useState } from 'react';

export default function Index(){
    //const [ tokens, setTokens ] = useState([]);
    const { listToken } = useControlTokenApi();
    const { deleteToken } = useControlTokenApi();

    const { listEvents } = useEventApi();
    const { deleteEvent } = useEventApi();

    useEffect(() => {
        const fetchTokens = async () => {
            const tokensData = await listToken();
            const filteredTokens = tokensData.filter(token => (new Date(token.expiration) <= new Date()) || !token.valid);
            
            if(filteredTokens.length !=0){
                const deletionPromises = [];
    
            for (let index = 0; index < filteredTokens.length; index++) {
                console.log("id", filteredTokens[index].id, " index ", index)
                deletionPromises.push(deleteToken(filteredTokens[index].id as string));
            }
    
            await Promise.all(deletionPromises);
            }
            
    
        };
    
        fetchTokens();
        
    }, []);

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await listEvents();
            console.log("Event bez filtrowania: ", eventsData)
            //@ts-ignore
            const filteredEvents = eventsData.filter(event => new Date(event.date) <= new Date());
            console.log("Event: ", filteredEvents)
            if(filteredEvents.length !=0){
                const deletionPromises = [];
                for (let index = 0; index < filteredEvents.length; index++) {
                    console.log("id", filteredEvents[index].id, " index ", index)
                    deletionPromises.push(deleteEvent(filteredEvents[index].id as string));
                }
        
                await Promise.all(deletionPromises);
            }
        };
        fetchEvents();
    }, []);

      
    return (
    <Redirect href={"/(tabs)"}/>
    );
}