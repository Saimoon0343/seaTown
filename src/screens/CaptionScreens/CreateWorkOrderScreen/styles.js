import {StyleSheet} from 'react-native';
import {color} from '../../../components/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  detailsView: {
    width: wp('90'),
    height: hp('15'),
    backgroundColor: color.textPrimaryColor,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 20,
  },
  leftText: {color: 'white', fontSize: hp('1.7'), fontWeight: '500'},
  rightText: {
    color: color.yellowTxtColor,
    fontSize: hp('1.7'),
    fontWeight: '500',
  },
});
