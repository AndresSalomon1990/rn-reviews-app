import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const AboutStack = () => {
  const nav = useNavigation();

  const openMenu = () => {
    nav.openDrawer();
  }
  
  return (
    <Stack.Navigator 
      initialRouteName='About'
      screenOptions={{
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen
        name='AboutScreen'
        component={About}
        options={{
          headerTitle: () => <Header title='About GameZone'/>,
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
    </Stack.Navigator>
  );
};

export default AboutStack;
