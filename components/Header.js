import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Header;