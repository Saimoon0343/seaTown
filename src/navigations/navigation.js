import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screens';
import MybottomTabs from './bottomnavigation';
import {useSelector} from 'react-redux';
import GuiderBottomNavigation from './GuiderBottomNavigation';
import {  Image, StyleSheet, View,Text, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';//
import Animated, { interpolate, Value } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../screens/Home'
import About from '../screens/About'
import Settings from '../screens/Settings'


const Stack = createNativeStackNavigator();


const Drawer = createDrawerNavigator();//Bilal

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <DrawerItem
        label="Home"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="About"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('About')}
      />
      <DrawerItem
        label="Settings"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('Settings')}
      />
    </DrawerContentScrollView>
  );
};

  const  StackNavigatior=({style,navigation})=> {
  const {userData} = useSelector(state => state.userData);
  return (
    <Animated.View style={[styles.stack, style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          // animation: 'slide_from_left',
          headerShown: false,
          headerLeft:()=>(
            <TouchableOpacity onPress={navigation.openDrawer}>
              <Image
                resizeMode='contain'
                source={ require('../images/Menu.png')}
                style={styles.menu}
              />
            </TouchableOpacity>
          )
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
          <Stack.Screen name="LoginScreen" component={screens.LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={screens.SignUpScreen} />
          <Stack.Screen name="ForgetScreen" component={screens.ForgetScreen} />
          <Stack.Screen name="ResetPasswordScreen" component={screens.ResetPasswordScreen} />
          <Stack.Screen name="OtpScreen" component={screens.OtpScreen} />
          <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Settings" component={Settings} />
          
      </Stack.Navigator>
      </Animated.View>
    
  );
 }





 export default () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  console.log(1002,progress)
  const scale =Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });
  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <LinearGradient style={styles.container} colors={['#d303fc', '#0384fc']}>
      <Drawer.Navigator
        backBehavior="none"
        initialRouteName="Home"
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={styles.container}
        screenOptions={{
          headerShown:false,

        }}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={styles.scene}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="StackNavigatior">
          {(props) => <StackNavigatior {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03dffc',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  scene: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: 'transparent',
  },
  stack: {
    flex: 1,
    shadowColor: '#fffff',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
  menu: {
    width: 38,
    height: 12,
    // margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 20,
  },
});

