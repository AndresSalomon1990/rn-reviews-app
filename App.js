import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutStack from './routes/AboutStack';
import HomeStack from './routes/HomeStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen name='Home' component={HomeStack} />
      <Drawer.Screen name='About' component={AboutStack} />
    </Drawer.Navigator>
  )
}

const App = () => {
  let [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading onError={console.warn} />;
  } else {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    )
  }
}

export default App;
