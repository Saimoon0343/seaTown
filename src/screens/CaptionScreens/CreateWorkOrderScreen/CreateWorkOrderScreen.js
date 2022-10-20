import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';
import {styles} from './styles';

const CreateWorkOrderScreen = ({navigation}) => {
  const ReqiuredView = () => {
    return (
      <View>
        <Text style={{color: color.lightBlueColor, fontSize: hp('1.8')}}>
          Ditance *
        </Text>
        <TextInput />
      </View>
    );
  };
  return (
    <>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading="Create Work Order"
      />
      <View style={styles.detailsView}>
        <View
          style={{
            width: wp('40'),
            justifyContent: 'space-between',
          }}>
          <Text style={styles.leftText}>Booking ID</Text>
          <Text style={styles.leftText}>Date</Text>
          <Text style={styles.leftText}>Bill to</Text>
        </View>
        <View
          style={{
            width: wp('40'),
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Text style={styles.rightText}>#00068</Text>
          <Text style={styles.rightText}>13 Dec 2022</Text>
          <Text style={styles.rightText}>Alfonso Vaccaro</Text>
        </View>
      </View>
      {/* <ReqiuredView /> */}
    </>
  );
};

export default CreateWorkOrderScreen;
