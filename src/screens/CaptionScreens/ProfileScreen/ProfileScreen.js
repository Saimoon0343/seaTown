import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {CircleImage} from '../../../components/CircleImage/CircleImage';
import {HeaderComp} from '../../../components/HeaderComp/HeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GuiderProfileScreen = ({navigation}) => {
  return (
    <View>
      <HeaderComp
        // notificationPress={() => navigation.navigate('NotificationScreen')}
        heading={'Profile'}
        edit={true}
      />
      <CircleImage
        image={require('../../../images/Rectangle4307.png')}
        styles={{
          width: Dimensions.get('window').width * 0.4,
          height: Dimensions.get('window').width * 0.4,
          alignSelf: 'center',
          marginTop: hp('2'),
        }}
      />
      <Text
        style={{
          backgroundColor: color.textPrimaryColor,
          color: color.yellowTxtColor,
          borderRadius: 5,
          marginTop: hp('2'),
          padding: 5,
          fontWeight: hp('2'),
          fontWeight: 'bold',
          width: wp('20'),
          textAlign: 'center',
          alignSelf: 'center',
          overflow: 'hidden',
        }}>
        Caption
      </Text>
      <TextHeadingCom
        heading="Brandon Westervelt"
        style={{marginTop: hp('2'), textAlign: 'center'}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: hp('2'),
          alignItems: 'center',
        }}>
        <Ionicons
          name="location-outline"
          size={hp('2')}
          color={color.lightBlueColor}
        />
        <Text style={styles.dateTimeText}>7.5 mils</Text>
      </View>
    </View>
  );
};

export default GuiderProfileScreen;
