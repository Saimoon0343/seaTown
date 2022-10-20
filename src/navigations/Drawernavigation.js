import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Settings from '../screens/Settings';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {stackScreens} from './services';
import CustomDrawer from './CustomDrawer';
import Screen from './Screen';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const {interpolate, Extrapolate} = Animated;

let screenStyle = null;
const AnimateStackOnDrawerToggle = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../images/MechinacalServices.png')}
      resizeMode="cover">
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <View style={styles.transparentView}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerType="back"
            overlayColor="transparent"
            sceneContainerStyle={styles.sceneContainerStyle}
            drawerStyle={styles.drawerStyle}
            drawerContent={props => {
              const scale = Animated.interpolateNode(props.progress, {
                inputRange: [0, 1],
                outputRange: [1, 0.85],
                extrapolate: Extrapolate.CLAMP,
              });

              const borderRadius = Animated.interpolateNode(props.progress, {
                inputRange: [0, 1],
                outputRange: [0, 20],
                extrapolate: Extrapolate.CLAMP,
              });

              screenStyle = {
                transform: [
                  {
                    scaleY: scale,
                  },
                ],
                borderRadius,
              };

              return <CustomDrawer {...props} />;
            }}>
            {stackScreens.map(screen => {
              return (
                <Drawer.Screen key={screen.id} name={screen.name}>
                  {props => (
                    <Screen item={screen} {...props} style={{...screenStyle}} />
                  )}
                </Drawer.Screen>
              );
            })}
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },

  transparentView: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.75)',
  },

  drawerStyle: {
    backgroundColor: 'transparent',
    width: '55%',
  },

  sceneContainerStyle: {
    backgroundColor: 'transparent',
  },
});

export default AnimateStackOnDrawerToggle;
