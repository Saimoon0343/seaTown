import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  topTextContainer: {
    marginLeft: wp('8'),
    marginTop: hp('2'),
  },
  bottomBarView: {
    position: 'absolute',
    bottom: 0,
    height: hp('12'),
    width: wp('100'),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    flexDirection: 'row',

    elevation: 9,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomInerView: {},
  bottomInerTxtView: {
    marginLeft: wp('4'),
    // marginTop: hp('2'),
  },
});
