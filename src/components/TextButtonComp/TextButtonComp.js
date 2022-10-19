import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {color} from '../color';
const TextButtonComp = props => {
  return (
    <View style={styles.container}>
      <Entypo
        style={{marginRight: wp('2')}}
        name={props?.name}
        size={hp('2.5')}
      />
      <Text>{props?.text}</Text>
    </View>
  );
};

export default TextButtonComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp('80'),
    height: hp('6'),
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    marginTop: hp('2'),
    alignSelf: 'center',
    borderStyle: 'dotted',
    backgroundColor: color.inputColor,
  },
});
