import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../../../components/color';
import {styles} from './styles';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {CircleImage} from '../../../components/CircleImage/CircleImage';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';
import StarRating from 'react-native-star-rating-widget';

const BookingDetailsScreen = ({route, navigation}) => {
  const item = route.params.item;
  const CoordenatesView = props => {
    return (
      <View style={{...styles.coordenatesView, ...props?.style}}>
        <Ionicons
          name="ios-locate-outline"
          color={color.textPrimaryColor}
          size={hp('2')}
        />
        <Text style={styles.leftText}>{props?.coordArea}</Text>
        <Text style={styles.rightText}>{props?.coordenates}</Text>
      </View>
    );
  };
  const InProgressView = () => {
    return (
      <View style={styles.progressView}>
        <CommonButtonComp
          viewStyle={{backgroundColor: color.lightBlueColor}}
          textStyle={{color: 'black'}}
          text={'Cancel'}
        />
        <CommonButtonComp text={'Start'} />
      </View>
    );
  };
  const ReviewView = () => {
    return (
      <View style={{width: wp('90'), alignSelf: 'center', marginTop: hp('6')}}>
        <TextHeadingCom
          heading="Reviews"
          style={{
            // marginLeft: hp('1'),
            fontWeight: '500',
          }}
        />
        <View style={styles.userView}>
          <CircleImage
            styles={{
              width: Dimensions.get('window').width * 0.12,
              height: Dimensions.get('window').width * 0.12,
            }}
            image={item?.innerImage}
          />
          <View>
            <TextHeadingCom
              heading="Jaylon Konsgraad"
              style={{
                marginLeft: hp('1'),
                fontWeight: '500',
              }}
            />
            <View style={{flexDirection: 'row'}}>
              <StarRating
                rating={3.5}
                maxStars={5}
                color={color.yellowTxtColor}
                starSize={wp('4.5')}
                enableSwiping={false}
                onChange={() => console.log(32)}
              />
              <Text style={{color: color.lightBlueColor, fontSize: hp('1.5')}}>
                2 week ago
              </Text>
            </View>
          </View>
        </View>
        <Text style={{...styles.messageText, color: 'black'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>
    );
  };
  const CompletedView = () => {
    return (
      <View>
        <ReviewView />
        <CommonButtonComp
          text="Create Work Order"
          viewStyle={{width: wp('90'), marginTop: hp('3')}}
        />
      </View>
    );
  };
  const CancellationView = () => {
    return (
      <View style={{width: wp('90'), alignSelf: 'center', marginTop: hp('2')}}>
        <TextHeadingCom
          heading="Cancellation Reason"
          style={{
            fontWeight: 'normal',
            fontSize: hp('1.8'),
          }}
        />
        <TextHeadingCom
          heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          style={{
            fontWeight: 'normal',
            marginTop: hp('1'),
            color: 'red',
            fontSize: hp('1.5'),
          }}
        />
      </View>
    );
  };
  const checkStatus = {
    Completed: CompletedView(),
    Pending: InProgressView(),
    Cancelled: CancellationView(),
  };
  const CheckStatus = status => {
    return checkStatus[status];
  };
  return (
    <View>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={'Services Request'}
      />
      <ScrollView contentContainerStyle={{paddingBottom: hp('20')}}>
        <Image
          source={item?.innerImage}
          resizeMode="contain"
          style={styles.banner}
        />
        <View style={styles.headingView}>
          <View style={{width: wp('65')}}>
            <Text style={styles.issueText}>Runing out of Gas from ship</Text>
            <View style={styles.dateTimeView}>
              <Ionicons
                name="location-outline"
                size={hp('2')}
                color={color.lightBlueColor}
              />
              <Text style={styles.dateTimeText}>7.5 mils</Text>
              <Ionicons
                name="calendar-outline"
                size={hp('2')}
                color={color.lightBlueColor}
              />
              <Text style={styles.dateTimeText}>21 feb 2022</Text>
              <Ionicons
                name="md-stopwatch-outline"
                size={hp('2')}
                color={color.lightBlueColor}
              />
              <Text style={styles.dateTimeText}>12 : 32 AM</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.priceButton}>
            <Text
              style={{color: 'white', fontWeight: 'bold', fontSize: hp('1.6')}}>
              AED 500
            </Text>
          </TouchableOpacity>
        </View>
        <CoordenatesView
          style={{marginTop: hp('6')}}
          coordArea={'North Coordinates'}
          coordenates={"30°00'0.00' N"}
        />
        <CoordenatesView
          coordArea={'East Coordinates'}
          coordenates={"125°00'0.00' E"}
        />
        <TextHeadingCom
          heading="Message"
          style={{
            marginTop: hp('6'),
            marginLeft: hp('2.5'),
            fontWeight: '600',
          }}
        />
        <Text style={styles.messageText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu praesent
          magna quisque quisque. Etiam eu quis mattis mus accumsan varius
          egestas hendrerit vitae.
        </Text>
        <TextHeadingCom
          heading="User Details"
          style={{
            marginTop: hp('6'),
            marginLeft: hp('2.5'),
            fontWeight: '600',
          }}
        />
        <View style={styles.userView}>
          <CircleImage
            styles={{
              width: Dimensions.get('window').width * 0.12,
              height: Dimensions.get('window').width * 0.12,
            }}
            image={item?.innerImage}
          />
          <TextHeadingCom
            heading="Jaylon Konsgraad"
            style={{
              marginLeft: hp('1'),
              fontWeight: '500',
            }}
          />
        </View>
        {CheckStatus(item.status)}
        {/* <CancellationView /> */}
      </ScrollView>
    </View>
  );
};

export default BookingDetailsScreen;
