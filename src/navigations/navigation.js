import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screens/UserScreens/index';
import UserBottomnavigation from './UserBottomnavigation';
import {useSelector} from 'react-redux';
import CaptionBottomNavigation from './CaptionBottomNavigation';
import {captionScreens} from '../screens/CaptionScreens/index';
const Stack = createNativeStackNavigator();

export default function StackNavigatior() {
  const {userData} = useSelector(state => state.userData);
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_left',
          headerShown: false,
        }}>
        {/* {userData?.data?.user_role == 0 ? (
          <>
            <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
            <Stack.Screen
              name="DeleteAccountScreen"
              component={screens.DeleteAccountScreen}
            />
          </>
        ) : userData?.data?.user_role == 1 ? (
          <Stack.Screen
            name="GuiderBottomNavigation"
            component={GuiderBottomNavigation}
          />
        ) : ( */}
        <>
          <Stack.Screen name="LoginScreen" component={screens.LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={screens.SignUpScreen} />
          <Stack.Screen name="ForgetScreen" component={screens.ForgetScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={screens.ResetPasswordScreen}
          />
          <Stack.Screen name="OtpScreen" component={screens.OtpScreen} />
          <Stack.Screen
            name="ServicesDetailsScreen"
            component={screens.ServicesDetailsScreen}
          />
          <Stack.Screen
            name="UserBottomnavigation"
            component={UserBottomnavigation}
          />
          <Stack.Screen
            name="CaptionBottomNavigation"
            component={CaptionBottomNavigation}
          />
          <Stack.Screen
            name="NotificationScreen"
            component={screens.NotificationScreen}
          />
          <Stack.Screen
            name="BookingDetailsScreen"
            component={captionScreens.BookingDetailsScreen}
          />
          <Stack.Screen
            name="UpadateProfileScreen"
            component={captionScreens.UpadateProfileScreen}
          />
        </>
        {/* )} */}
        {/* <Stack.Screen
          name="CurrencyMethodScreen"
          component={screens.CurrencyMethodScreen}
        />
        <Stack.Screen
          name="searchBarScreen"
          component={screens.SearchBarScreen}
        />
        <Stack.Screen name="PackageScreen" component={screens.PackageScreen} />
        <Stack.Screen
          name="PackageDetailScreen"
          component={screens.PackageDetailScreen}
        />
        <Stack.Screen name="ProfileScreen" component={screens.ProfileScreen} />
        <Stack.Screen
          name="ThankYouScreen"
          component={screens.ThankYouScreen}
        />
        <Stack.Screen name="ReviewScreen" component={screens.ReviewScreen} />
        <Stack.Screen
          name="WriteReviewScreen"
          component={screens.WriteReviewScreen}
        />
        <Stack.Screen name="StripeScreen" component={screens.StripeScreen} />
        <Stack.Screen
          name="OrderDetailsScreen"
          component={screens.OrderDetailsScreen}
        />
        <Stack.Screen name="MapViewScreen" component={screens.MapViewScreen} />
        <Stack.Screen
          name="GuiderPackageDetailScreen"
          component={screens.GuiderPackageDetailScreen}
        />
        <Stack.Screen
          name="GuiderMapViewScreen"
          component={screens.GuiderMapViewScreen}
        />
        <Stack.Screen
          name="EtherumPaynemtScreen"
          component={screens.EtherumPaynemtScreen}
        />
        <Stack.Screen
          name="PendingPackageScreen"
          component={screens.PendingPackageScreen}
        /> */}
      </Stack.Navigator>
    </>
  );
}
