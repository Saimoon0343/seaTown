import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ServicesDetailsScreen = ({route, navigation}) => {
  const item = route.params.item;
  console.log(5465465, item);
  return (
    <>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={item?.text}
      />
      <ScrollView>
        <Image
          source={item?.innerImage}
          resizeMode="contain"
          style={{
            //   width: wp('90'),
            //   height: hp('20'),
            //   backgroundColor: 'red',
            alignSelf: 'center',
            marginTop: hp('2'),
            //   borderRadius: 10,
          }}
        />
        <Text>fdasdfdsa</Text>
      </ScrollView>
    </>
  );
};

export default ServicesDetailsScreen;
