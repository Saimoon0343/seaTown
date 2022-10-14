import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {HeaderComp} from '../../components/HeaderComp/HeaderComp';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderComp heading={'Home'} notification={true} search={true} />
      <ScrollView></ScrollView>
    </View>
  );
};

export default HomeScreen;
