import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/Global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from './FlatButton';

const ReviewSchema = yup.object().shape({
  title: yup.string()
    .required('Required!')
    .min(4, 'Try more characters!'),
  body: yup.string()
    .required('Required!')
    .min(8, 'Try more characters!'),
  rating: yup.string()
    .required('Required!')
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return (parseInt(val) < 6) && (parseInt(val) > 0);
    })
});

const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{
              formikProps.errors.title && formikProps.touched.title 
              ? formikProps.errors.title 
              : null}
            </Text>

            <TextInput
              multiline
              minHeight={60}
              style={globalStyles.input}
              placeholder='Review body'
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{
              formikProps.errors.body && formikProps.touched.body 
              ? formikProps.errors.body 
              : null}
            </Text>

            <TextInput
              keyboardType='numeric'
              maxLength={1}
              style={globalStyles.input}
              placeholder='Rating [1-5]'
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              onBlur={formikProps.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{
              formikProps.errors.rating && formikProps.touched.rating 
              ? formikProps.errors.rating 
              : null}
            </Text>

            <FlatButton text='Submit' onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
