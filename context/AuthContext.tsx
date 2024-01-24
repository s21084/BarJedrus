import { useRouter, useSegments } from "expo-router";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({
    // Default values if not authenticated
    authToken: null,
    setAuthToken: async (token: string | null) => {},
    email: null,
    setEmail: async (email: string | null) => {},
    logout: async () => {},
  });

  

  const AuthContextProvider = ({children}: PropsWithChildren) => {
    const[authToken, setAuthToken] = useState<string | null>(null);
    const[email, setEmail] = useState<string | null>(null);
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        const loadTokenFromStorage = async () => {
          try {
            const storedToken = await AsyncStorage.getItem('authToken');
            const storedEmail = await AsyncStorage.getItem('email');
    
            setAuthToken(storedToken);
            setEmail(storedEmail);
          } catch (error) {
            console.error('Error loading token from AsyncStorage:', error);
          }
        };
    
        loadTokenFromStorage();
      }, []);
    
      // Update AsyncStorage when the token or email changes
      useEffect(() => {
        const saveTokenToStorage = async () => {
          try {
            await AsyncStorage.setItem('authToken', authToken || '');
            await AsyncStorage.setItem('email', email || '');
          } catch (error) {
            console.error('Error saving token to AsyncStorage:', error);
          }
        };
    
        saveTokenToStorage();
      }, [authToken, email]);
    
      // Logout function
      const logout = async () => {
        // Clear the authentication token and email from AsyncStorage
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('email');
    
        // Reset the state values
        setAuthToken(null);
        setEmail(null);
    
        // Navigate to the sign-in page or any other desired location
        router.replace('/signIn');
      };

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
        <AuthContext.Provider value={{ authToken, setAuthToken, email, setEmail }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
