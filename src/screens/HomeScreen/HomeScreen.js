import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {HeaderComp} from '../../components/HeaderComp/HeaderComp';
import {TextHeadingCom} from '../../components/TextHeadingCom/TextHeadingCom';
import {WeatherHomeComp} from '../../components/WeatherHomeComp/WeatherHomeComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HomeServicesComp} from '../../components/HomeServicesComp/HomeServicesComp';
import Foundation from 'react-native-vector-icons/Foundation';
import {color} from '../../components/color';
import {styles} from './styles';

const HomeScreen = ({navigation}) => {
  const [services, setServices] = useState([
    {
      id: 1,
      image: require('../../images/Towing.png'),
      text: 'Towing',
    },
    {
      id: 2,
      image: require('../../images/Passenger.png'),
      text: 'Passenger Transfer',
    },
    {
      id: 3,
      image: require('../../images/Fuel.png'),
      text: 'Refueling',
    },
    {
      id: 4,
      image: require('../../images/Customer.png'),
      text: 'Customer Services',
    },
    {
      id: 5,
      image: require('../../images/Permit.png'),
      text: 'Selling Permit',
    },
    {
      id: 6,
      image: require('../../images/Report.png'),
      text: 'Report Incidenet',
    },
    {
      id: 7,
      image: require('../../images/Electrician.png'),
      text: 'Electrical Services',
    },
    {
      id: 8,
      image: require('../../images/Mechanical.png'),
      text: 'Mechanical Services',
    },
    {
      id: 9,
      image: require('../../images/Road.png'),
      text: 'Road Insurance',
    },
  ]);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <View style={{flex: 1}}>
      <HeaderComp
        notificationPress={() => navigation.navigate('NotificationScreen')}
        heading={'Home'}
        notification={true}
        search={true}
      />
      <ScrollView contentContainerStyle={{paddingBottom: hp('2')}}>
        <WeatherHomeComp onPress={() => console.log(71)} />
        <TextHeadingCom
          heading="Services"
          style={{marginTop: hp('2'), marginLeft: hp('2')}}
        />
        <HomeServicesComp data={services} isloading={loading} />
        <TouchableOpacity style={styles.requestButton}>
          <Foundation
            name="page-edit"
            color={color.textPrimaryColor}
            size={hp('3')}
          />
          <Text
            style={{color: 'black', fontSize: hp('2'), marginLeft: wp('2')}}>
            Request a service
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
