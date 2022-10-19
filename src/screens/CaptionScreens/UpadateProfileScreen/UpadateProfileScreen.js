import React from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {CircleImage} from '../../../components/CircleImage/CircleImage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import {color} from '../../../components/color';

const UpadateProfileScreen = ({route, navigation}) => {
  return (
    <View>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={'Edit Profile'}
      />
      <View>
        <CircleImage
          image={require('../../../images/Rectangle4307.png')}
          styles={{
            width: Dimensions.get('window').width * 0.4,
            height: Dimensions.get('window').width * 0.4,
            alignSelf: 'center',
            marginTop: hp('2'),
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            right: wp('30'),
          }}>
          <Image
            source={require('../../../images/Camera.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <LoginInputComp
        style={{
          alignSelf: 'center',
          backgroundColor: color.inputColor,
          borderColor: 'black',
        }}
        firstIconColor={color.textPrimaryColor}
        firstIcon="person-outline"
      />
      <LoginInputComp firstIcon="call-outline" />
      <LoginInputComp firstIcon="ios-mail-outline" />
      <LoginInputComp firstIcon="location-outline" />
      <LoginInputComp firstIcon="briefcase-outline" />
      <LoginInputComp firstIcon="time-outline" />
    </View>
  );
};

export default UpadateProfileScreen;
