import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './navigation/HomeScreen';
import FrequentScreen from './navigation/FrequentScreen';
import LocationScreen from './navigation/LocationScreen';
import MappingScreen from './navigation/MappingScreen';
import VehiclesScreen from './navigation/VehiclesScreen';
import AccountScreen from './navigation/AccountScreen';
import SettingScreen from './navigation/SettingScreen';

const ScreenNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Frequent: {screen: FrequentScreen},
  Location: {screen: LocationScreen},
  Mapping: {screen: MappingScreen},
  Vehicles: {screen: VehiclesScreen},
});

const SettingNavigator = createStackNavigator({
  Account: {screen: AccountScreen},
  Setting: {screen: SettingScreen},
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: ScreenNavigator,
    Settings: SettingNavigator,
  },
  {
    /* Other configuration remains unchanged */
  }
));