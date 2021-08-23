import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const HomeStack = () => {
  const nav = useNavigation();

  const openMenu = () => {
    nav.openDrawer();
  }

  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={Home}
        options={{
          headerTitle: () => <Header title='GameZone'/>,
          headerLeft: () => (
            <MaterialIcons name="menu" size={28} color='black' onPress={openMenu} />
          ),
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerBackground: () => (
            <Image source={ require('../assets/game_bg.png') } style={{ height: '100%' }} />
          )
        }}
      />
      <Stack.Screen name='ReviewDetailsScreen' component={ReviewDetails} options={{ title: 'Review Details' }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
