import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs} from 'expo-router';
import { Pressable, useColorScheme , Text } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  



  return (
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
        <Tabs.Screen
        name="index"
        options={{
          title: 'Bar Jedruś',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text>Wyloguj</Text>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
        <Tabs.Screen
        name="Menu"
        options={{
          title: 'Oferta',
          tabBarIcon: ({ color }) => <TabBarIcon name="cutlery" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text>Wyloguj</Text>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      
      <Tabs.Screen
        name="Wydarzenia"
        options={{
          title: 'Wydarzenia',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text>Wyloguj</Text>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      
      <Tabs.Screen
        name="Ustawienia"
        options={{
          title: 'Ustawienia',
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text>Wyloguj</Text>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Abonament"
        options={{
          title: 'Abonamenty',
          tabBarIcon: ({ color }) => <TabBarIcon name="group" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text>Wyloguj</Text>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Wlasciciel"
        options={{
          title: 'Właściciel',
          tabBarIcon: ({ color }) => <TabBarIcon name="lock" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text>Wyloguj</Text>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      
      
      
    </Tabs>
    
  );
}
