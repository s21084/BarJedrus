import { useRouter, useSegments } from "expo-router";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

const AuthContextProvider = ({children}: PropsWithChildren) => {
    const[authToken, setAuthToken] = useState<string | null>(null);
    const segments = useSegments();
    const router = useRouter();
    console.log(segments);

    console.log("authToken: ", authToken)

    useEffect(() => {
        const isAuthGroup = segments[0] === '(auth)'

        if(!authToken && !isAuthGroup){
            router.replace('/signIn');
        } 
        if( authToken && isAuthGroup){
            router.replace('/');
        }
    }, [segments, authToken])

    return(
        <AuthContext.Provider value={{ authToken, setAuthToken }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
