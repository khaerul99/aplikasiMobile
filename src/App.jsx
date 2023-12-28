// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtonTab from './components/ButtonTab/buttonTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, Pulsa, SuccessNotif } from './pages';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

function Profil() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profil</Text>
    </View>
  );
}

function Transaksi() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Transaksi</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <ButtonTab {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
      }} />
      <Tab.Screen name="Transaksi" component={Transaksi} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          initialRouteName="MyTabs"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pulsa"
          component={Pulsa}
          options={{
            title: 'pulsa & paket data'
          }}
        />
        <Stack.Screen
          name="Success"
          component={SuccessNotif}
          options={{
            title: ''
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;