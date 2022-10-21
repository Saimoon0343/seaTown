import React, {useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import StarRating from 'react-native-star-rating-widget';
import {color} from '../../../components/color';
import {globalStyles} from '../../../config/globalStyles';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';

const ServicesDetailsScreen = ({route, navigation}) => {
  const [txt, setTxt] = useState();
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
            alignSelf: 'center',
            marginTop: hp('2'),
          }}
        />
        <View style={styles.topTextContainer}>
          <Text
            style={{...globalStyles.globalTextStyles4, marginLeft: wp('1')}}
          >
            {item.innerText}
          </Text>
          <View style={{flexDirection: 'row', marginTop: hp('0.5')}}>
            <StarRating
              rating={txt}
              maxStars={5}
              color={color.yellowTxtColor}
              starSize={wp('4.5')}
              starStyle={{width: wp('1')}}
              enableSwiping={false}
              onChange={txt => setTxt(txt)}
            />
            <Text
              style={{
                color: color.lightBlueColor,
                marginLeft: wp('3'),
                fontSize: hp('1.5'),
              }}
            >
              {txt}
            </Text>
          </View>
          <Text
            style={{
              ...globalStyles.globalTextStyles2,
              width: wp('83'),
              backgroundColor: 'red',
              marginLeft: wp('1'),
            }}
          >
            {item?.des}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.bottomBarView}>
        <View style={styles.bottomInerTxtView}>
          <Text style={{...globalStyles.globalTextStyles4, fontSize: hp('3')}}>
            AED 750
          </Text>
          <Text
            style={{
              ...globalStyles.globalTextStyles2,
              color: color.lightBlueColor,
              fontSize: hp('2'),
            }}
          >
            per hour
          </Text>
        </View>

        <CommonButtonComp />
      </View>
    </>
  );
};

export default ServicesDetailsScreen;
