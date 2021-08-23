import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { globalStyles } from '../styles/Global';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../components/Card';
import ReviewForm from '../components/ReviewForm';

const Home = () => {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  const nav = useNavigation();

  const addReview = review => {
    review.key = Math.random().toString();
    setReviews(prevReviews => [review, ...prevReviews]);
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              onPress={() => setModalOpen(false)}
              style={[styles.modalToggle, styles.modalClose]}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        onPress={() => setModalOpen(true)}
        style={[styles.modalToggle, styles.modalOpen]}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => nav.navigate('ReviewDetailsScreen', { item: item })}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalOpen: {
    borderColor: '#333',
  },
  modalClose: {
    borderColor: '#f2f2f2',
    marginTop: 20,
    marginBottom: 0
  }
});

export default Home;
