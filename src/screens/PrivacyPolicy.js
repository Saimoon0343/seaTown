import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const PrivacyPolicy = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.txt}>Privacy</Text>
    </View>
  );
};

export default PrivacyPolicy;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e303fc',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});
