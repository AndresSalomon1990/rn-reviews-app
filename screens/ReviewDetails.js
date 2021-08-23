import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/Global';
import Card from '../components/Card';

const ReviewDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        <View style={styles.rating}>
          <Text>Review Rating: </Text>
          <View style={styles.ratingHearts}>
            {Array(item.rating)
              .fill()
              .map((item, index) => (
                <Image key={index} source={require('../assets/rating-1.png')} />
              ))
            }
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rating:{
    flexDirection:'row',
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
},
ratingHearts:{
    flexDirection: 'row'
}
});

export default ReviewDetails;