import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import DetailScreen from './navigation/DetailScreen';
import NowScreen from './navigation/NowScreen';
import ShareScreen from './navigation/ShareScreen';

import FindScreen from './navigation/FindScreen';
import ListScreen from './navigation/ListScreen';
import ConfirmScreen from './navigation/ConfirmScreen';
import ManageScreen from './navigation/ManageScreen';

import AccountScreen from './navigation/AccountScreen';
import SettingScreen from './navigation/SettingScreen';

import LocateHomeScreen from './navigation/LocateHomeScreen';
import FinderHomeScreen from './navigation/FinderHomeScreen';
import SettingHomeScreen from './navigation/SettingHomeScreen';

// const ScreenNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Frequent: {screen: FrequentScreen},
//   Location: {screen: LocationScreen},
//   Mapping: {screen: MappingScreen},
//   Vehicles: {screen: VehiclesScreen},
// });

// const SettingNavigator = createStackNavigator({
//   Account: {screen: AccountScreen},
//   Setting: {screen: SettingScreen},
// });

const LocationNavigator = createStackNavigator({
  LocateHome: {screen: LocateHomeScreen},
  Share: {screen: ShareScreen}, // first look -> make mainPage!
  Now: {screen: NowScreen},
  Detail: {screen: DetailScreen},
});

const FinderNavigator = createStackNavigator({
  FinderHome: {screen: FinderHomeScreen},
  Find: {screen: FindScreen},
  List: {screen: ListScreen},
  Confirm: {screen: ConfirmScreen},
  Manage: {screen: ManageScreen},
});

const SettingNavigator = createStackNavigator({
  SettingHome: {screen: SettingHomeScreen},
  Account: {screen: AccountScreen},
  Setting: {screen: SettingScreen},
});

export default createAppContainer(createBottomTabNavigator(
  {
    Locate: LocationNavigator,
    Finder: FinderNavigator,
    Setting: SettingNavigator,
  },
  {
    /* Other configuration remains unchanged */
  }
));