import React from "react";
import { View, Text } from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import FrequentScreen from './FrequentScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Frequent: {screen: FrequentScreen},
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
};