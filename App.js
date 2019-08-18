import React from "react";
import { View, Text } from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './navigation/HomeScreen';
import FrequentScreen from './navigation/FrequentScreen';
import LocationScreen from './navigation/LocationScreen';
import MappingScreen from './navigation/MappingScreen';
import VehiclesScreen from './navigation/VehiclesScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Frequent: {screen: FrequentScreen},
  Location: {screen: LocationScreen},
  Mapping: {screen: MappingScreen},
  Vehicles: {screen: VehiclesScreen},
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
};