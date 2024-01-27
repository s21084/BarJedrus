import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import  AuthContextProvider from '../context/AuthContext'
import AdressApiContetProvider from '../lib/api/adress';
import EventApiContetProvider from '../lib/api/events';
import DishApiContetProvider from '../lib/api/dish';
import DayDishApiContetProvider from '../lib/api/dayDish';
import UserApiContextProvider from '../lib/api/user';
import PersonApiContentProvider from '../lib/api/person';
import SubApiContextProvider from '../lib/api/subscribtion';


const client = new QueryClient();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (

<>
<AuthContextProvider>
<UserApiContextProvider>
  <PersonApiContentProvider>
    <SubApiContextProvider>
  <EventApiContetProvider>
  <AdressApiContetProvider>
    <DayDishApiContetProvider>
  
    <DishApiContetProvider>
  <QueryClientProvider client={client}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="components" options={{ headerShown: false }} />
        <Stack.Screen name="/" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/authenticate" options={{ title: "Podaj hasło" }} />
        <Stack.Screen name="(auth)/signIn" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="dish/[id]" options={{ title: "Danie" }} />
        <Stack.Screen name="subscription/[id]" options={{ title: "Abonement" }} />
        <Stack.Screen name="event/[id]" options={{ title: "Wydarzenie" }} />
      </Stack>
  </QueryClientProvider>
  </DishApiContetProvider>
  </DayDishApiContetProvider>
  </AdressApiContetProvider>
  </EventApiContetProvider>
  </SubApiContextProvider>
  </PersonApiContentProvider>
  </UserApiContextProvider>  
</AuthContextProvider>
</>
  );
}
